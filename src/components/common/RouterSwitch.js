import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {urls} from "../../constants/router/Urls";
import MainMenu from "../menu/MainMenu";
import StoriesMenu from "../menu/stories/StoriesMenu";

export default function RouterSwitch() {

    return (
        <Router basename="/cthulhu">
            <Switch>
                <Route exact path={urls.menu}>
                    <MainMenu/>
                </Route>
                <Route exact path={urls.stories}>
                    <StoriesMenu/>
                </Route>

                <Route path="/">
                    <Redirect to={urls.menu}/>
                </Route>
            </Switch>
        </Router>
    )
}