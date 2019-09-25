import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import Profil from "../users.jsx/Profil";
import Userslist from "../users.jsx/UsersList";
import Posts from "../users.jsx/Post";

const Routes = () => (
        <Switch>
            <Route path="/profil/:id" render={(props)=> <Profil id={props.match.params.id}></Profil>} />
            <Route path="/users" component={Userslist} />
            <Route path="/posts/:id" render={(props)=> <Posts id={props.match.params.id}></Posts>} />
        </Switch>
);

export default Routes;

