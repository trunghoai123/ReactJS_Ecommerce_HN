import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddPhoto from './pages/AddPhoto';
import MainPhoto from './pages/Main';

const Photo = (props) => {
   const { url } = useRouteMatch();
   return (
      <Switch>
         <Route path={`${url}`} exact component={MainPhoto}></Route>
         <Route path={`${url}/add`} component={AddPhoto}></Route>
         <Route path={`${url}/:photoId`} component={AddPhoto}></Route>
      </Switch>
   );
};

Photo.propTypes = {};

export default Photo;
