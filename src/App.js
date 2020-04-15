import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
        </Router>
    );
}

export default App;
