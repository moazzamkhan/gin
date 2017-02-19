import {combineReducers} from "redux";
import typeList from "./defaultTypes"
import thingList from "./thingList"


const things = (state = thingList, action) => {
    switch (action.type) {
        default:
            return state
    }
}



const types = (state = typeList, action) => {
    switch (action.type) {
        case"ADD_TYPE":
            return [...state, {name: action.payload, namespace: "me.moazzam.types"}]
        case"ADD_PROPERTY":
            return state.map((type) => {
                if (action.payload.type === type.name) {
                    return {
                        name: type.name,
                        properties: (type.properties || []).concat(action.payload.properties)
                    }
                } else {
                    return type
                }
            })
        default:
            return state
    }
}


const ginApp = combineReducers({things, types});

export default ginApp