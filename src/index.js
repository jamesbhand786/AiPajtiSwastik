import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import PricingPage from "layouts/pricing";
import { Router } from "react-router-dom/cjs/react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      {/* <ThemeEditorProvider> */}
      <HashRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Redirect from="/" to="/admin" />
        </Switch>
      </HashRouter>
      {/* <Router>
			<Switch>
				<Route path="/" exact component={AdminLayout} />
				<Route path="/admin" component={AuthLayout} />
				<Route path="/pricing-plan" component={PricingPage} />
			</Switch>
		</Router> */}
      {/* </ThemeEditorProvider> */}
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);