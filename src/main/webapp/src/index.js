import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ginApp from "./reducers";
import ThingContainer from "./ThingContainer";

$.ajax("http://localhost:8080/gin/rest/thing").done(function (things) {
    let store = createStore(ginApp, {things: things})
    render(
        <Provider store={store}>
            <ThingContainer />
        </Provider>,
        document.getElementById('main-box')
    )
})
