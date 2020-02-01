import React, { Suspense, lazy } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { customTheme } from "./theme";
import Loading from "./components/loading";
const Header = lazy(() => import("./layout/Header"));
const Home = lazy(() => import("./pages/homepage/Home.component"));
const Contact = lazy(() => import("./pages/contactpage/Contact.component"));
const Shop = lazy(() => import("./pages/shop/Shop.component"));
const Authentication = lazy(() => import("./pages/authentication"));

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser({ userAuth }, () => {
        console.log("Signed In", new Date());
      });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Suspense fallback={<Loading />}>
          <Header />
          <div className="container" style={{ marginTop: "2em" }}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route
                exact
                path="/signup"
                render={() =>
                  currentUser && currentUser.userAuth !== null ? (
                    <Redirect to="/"></Redirect>
                  ) : (
                    <Authentication />
                  )
                }
              ></Route>
            </Switch>
          </div>
        </Suspense>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
