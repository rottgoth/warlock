import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Memberships from '../components/settings/Memberships';
import Watermarks from '../components/settings/Watermarks';
import Distribution from '../components/settings/Distribution';
import Touts from '../components/video/Touts';
import Articles from '../components/articles/Articles';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/memberships" component={Memberships} />
    <Route path="/watermarks" component={Watermarks} />
    <Route path="/distribution" component={Distribution} />
    <Route path="/touts/pending" component={Touts} />
    <Route path="/touts/scheduled" component={Touts} />
    <Route path="/touts/published" component={Touts} />
    <Route path="/touts/rejected" component={Touts} />
    <Route path="/articles" component={Articles} />
    <Route path="/articles/unmatched" component={Articles} />
  </Route>
);