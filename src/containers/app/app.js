import React from "react";
import { hot } from "react-hot-loader/root";
import { decorate, observable, configure } from "mobx";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles, Wrapper } from "./app.styles";
import Store from "../config/store";
import "normalize.css";

import routes from "../config/routes";

configure({ enforceActions: "observed" });

const newStore = decorate(new Store(), {
    toolbar: observable
});

const App = () => (
    <Router>
        <Provider store={newStore}>
            <Wrapper>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                <GlobalStyles />
            </Wrapper>
        </Provider>
    </Router>
);

export default hot(App);
