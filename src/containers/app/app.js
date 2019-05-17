import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "mobx-react";
// Possibly replace HashRouter later on with some sort of isomorphic solution.
import { HashRouter as Router, Route } from "react-router-dom";
import SlideView from "../pages/slide-view/SlideView";
import { GlobalStyles, Wrapper } from "./app.styles";
import Store from "../config/store";

import routes from "../config/routes";

const App = () => (
    <Router>
        <Provider store={Store}>
            <Wrapper>
                <Route exact path="/" component={SlideView} />
                {routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    );
                })}
                <GlobalStyles />
            </Wrapper>
        </Provider>
    </Router>
);

export default hot(App);
