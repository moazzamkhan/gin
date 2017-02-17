import React from "react";
import {connect} from "react-redux";
import ThingComponent from "./ThingComponent";


const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log(this)
            // dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

let ThingContainer = connect(mapStateToProps,
    mapDispatchToProps)(ThingComponent)

export default ThingContainer