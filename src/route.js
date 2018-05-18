import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './components/ClassComps/Auth/Auth';
import Dashboard from './components/ClassComps/Dashboard/Dashboard';
import Form from './components/ClassComps/Form/Form';
import Post from './components/ClassComps/Post/Post';

export default(
<Switch>
    <Route path='/' component={Auth} exact />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/post/:postid' component={Post} />
    <Route path='/new' component={Form} />
</Switch>
);