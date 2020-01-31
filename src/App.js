import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import { customTheme } from "./theme";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/homepage/Home.component";
import Contact from "./pages/contactpage/Contact.component";
import Shop from "./pages/shop/Shop.component";
import Authentication from "./pages/authentication";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
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
          <Route path="/signup">
            <Authentication />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
