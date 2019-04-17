import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <h1>This is the app base!</h1>
        </div>
    </Router>
);

export default hot(App);
