import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './page/home';
import WorkPage from './page/work-page/work';
import ProjectDetailPage from './page/project-detail-page/projectDetail';
import SolutionsPage from './page/solutions';
import ServicesPage from './page/services';
import AboutusPage from './page/aboutus';
import BlogPage from './page/blog';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/work" exact><WorkPage /></Route>
          <Route path="/work/:project" exact><ProjectDetailPage /></Route>
          <Route path="/solutions" exact><SolutionsPage /></Route>
          <Route path="/services" exact><ServicesPage /></Route>
          <Route path="/about-us" exact><AboutusPage /></Route>
          <Route path="/blog" exact><BlogPage /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
