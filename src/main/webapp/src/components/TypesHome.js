import React from "react";
import {connect} from "react-redux"
import {addType} from "../actions"
import {Container, Divider, Form, Button, Header} from "semantic-ui-react";

const TypesHome = ({onSubmit}) => (
    <Container>
        <Header as="h3" color="purple" textAlign={"right"}>Add type</Header>
        <Divider/>
        <Form onSubmit={onSubmit}>
            <Form.Group inline>
                <Form.Field label="me.moazzam.types." name="name" control='input' placeholder='Type'/>
                <Button type='submit' icon="add" circular color="purple"/>
            </Form.Group>
        </Form>
    </Container>
)

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (e, {formData}) => {
            e.preventDefault()
            console.log(formData)
            dispatch(addType(formData.name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypesHome)