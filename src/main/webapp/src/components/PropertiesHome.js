import React from "react";
import {connect} from "react-redux";
import {Container, Divider, Form, Button, Header, Table} from "semantic-ui-react";
import {addProperty} from "../actions";
import TypePicker from "./TypePicker";

const PropertiesHome = ({params, onSubmit}) => (
    <Container>
        <Header as="h3" color="purple" textAlign={"right"}>Add property</Header>
        <Divider/>
        <Form onSubmit={onSubmit}>
            <Table style={{border: "none"}}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Property</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}><Form.Field name="property" control='input'
                                                                            placeholder='Property'/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Type</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}> <TypePicker name="type"
                                                                             placeholder='Select Type'/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Multiple</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}> <Form.Checkbox name='multiple'/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell textAlign="right" style={{borderTop: "none"}} colSpan="2"><Button type='submit'
                                                                                                      icon="add"
                                                                                                      circular
                                                                                                      color={"purple"}/></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        </Form>
    </Container>
)

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onSubmit: (e, {formData}) => {
            console.log(formData)
            e.preventDefault()
            dispatch(addProperty({
                type: ownProps.params.type,
                properties: [{name: formData.property, type: formData.type, multiple: formData.multiple}]
            }))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PropertiesHome)
