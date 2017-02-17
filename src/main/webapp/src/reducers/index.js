import {combineReducers} from "redux";


const things = (state = [], action) => {
    switch (action.type) {
        default:
            return state
    }
}

const typeList = [
    {name: "string", "namespace": "me.moazzam.types"},
    {name: "number", "namespace": "me.moazzam.types"},
    {name: "boolean", "namespace": "me.moazzam.types"},
    {
        name: "date",
        "namespace": "me.moazzam.types",
        properties: [{name: "date", "type": "number"},
            {name: "month", "type": "number"},
            {name: "year", "type": "number"}]
    }]

const types = (state = typeList, action) => {
    switch (action.type) {
        case"ADD_TYPE":
            console.log([...state, action.payload])
            return [...state, action.payload]
        default:
            return state
    }
}


const ginApp = combineReducers({things, types});

export default ginApp