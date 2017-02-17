import React from "react";
import {Input} from "semantic-ui-react";

const TextBox = ({value}) => {
    return <Input placeholder={value} defaultValue={value} onChange={(event, data) => {
        console.log(data.value)
    }}/>
}

export default TextBox