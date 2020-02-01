import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { customTheme } from "./theme";
import Header from "./layout/Header";
import Home from "./pages/homepage/Home.component";
import Contact from "./pages/contactpage/Contact.component";
import Shop from "./pages/shop/Shop.component";
import Authentication from "./pages/authentication";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Header currentUser={this.state.currentUser} />
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
            <Route path="/signup">
              <Authentication />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
