import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ginApp from "./reducers";
import App from "./components/App";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import TypesHome from "./components/TypesHome";
import AppHome from "./components/AppHome";
import TypesComponent from "./components/TypesComponent";
import TypeComponent from "./components/TypeComponent";
import ThingsComponent from "./components/ThingsComponent";
import PropertiesComponent from "./components/PropertiesComponent";
import PropertiesHome from "./components/PropertiesHome";
import PropertyComponent from "./components/PropertyComponent";

$.ajax("http://localhost:8080/gin/rest/thing").done(function (things) {
    let store = createStore(ginApp, {things: things})
    render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={AppHome}/>
                    <Route path="/types" component={TypesComponent}>
                        <IndexRoute component={TypesHome}/>
                        <Route path="/types/:type" component={TypeComponent}></Route>
                    </Route>
                    <Route path="/types/:type/properties" component={PropertiesComponent}>
                        <IndexRoute component={PropertiesHome}/>
                        <Route path="/types/:type/properties/:property" component={PropertyComponent}></Route>
                    </Route>
                    <Route path="/things" component={ThingsComponent}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('main-box')
    )
})
