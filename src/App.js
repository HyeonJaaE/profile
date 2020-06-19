import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Skill from "./Components/Skill";

function App() {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/skill" component={Skill} />
            </Router>
        </div>
    );
}

export default App;
