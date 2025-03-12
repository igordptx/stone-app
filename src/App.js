import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import StoneDetail from "./stone_detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stone/:id" element={<StoneDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;















/// import React from "react";
/// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/// import Home from "./home";
/// import StoneDetail from "./stone_detail";

/// function App() {
  /// return (
    /// <Router>
      /// <Switch>
        /// <Route path="/stone/:id" component={StoneDetail} />
        /// <Route path="/" component={Home} />
      /// </Switch>
    /// </Router>
  /// );
/// }

/// export default App;

