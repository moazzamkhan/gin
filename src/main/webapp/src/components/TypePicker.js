import React from "react";
import {Dropdown} from "semantic-ui-react";
import {connect} from "react-redux";

const TypePicker = (props) => {
    return <Dropdown {...props} search selection/>
}


const mapStateToProps = (state, ownProps) => {
    return {
        options: state.types.map((t) => ({
            key: t.name,
            value: t.name,
            text: t.name
        }))
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log(this)
            // dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(TypePicker)
