import React from "react";
import {Divider, Button, Form, Header, Container, TextArea, Table} from "semantic-ui-react";
import {connect} from "react-redux";


const PropertyComponent = ({property, params}) => (
    <Container>
        <Header as='h3' color="purple">{params.type}.{params.property}</Header>
        <Divider/>
        <Form>
            <Table style={{border: "none"}}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Property</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}><Form.Field name="property" control='input'
                                                                            placeholder={property.name}/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Type</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}><
                            Form.Field name="type" control='input' placeholder={property.type}/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                            as="h4">Multiple</Header></Table.Cell>
                        <Table.Cell style={{borderTop: "none"}}> <Form.Checkbox name='multiple' checked={property.multiple}/>
                        </Table.Cell>
                    </Table.Row>

                    {/*<Table.Row><Table.Cell style={{borderTop: "none"}} textAlign="right"><Header*/}
                        {/*as="h4">Constraints</Header></Table.Cell><Table.Cell style={{borderTop: "none"}}>*/}
                        {/*<Form.Field control={TextArea} name='constraints' placeholder={property.constraints || ""}/>*/}
                    {/*</Table.Cell></Table.Row>*/}
                    <Table.Row><Table.Cell style={{borderTop: "none"}} textAlign="right"><Header
                        as="h4">Description</Header></Table.Cell><Table.Cell style={{borderTop: "none"}}>
                        <Form.Field control={TextArea} name='description' placeholder={property.description || ""}/>
                    </Table.Cell></Table.Row>
                    <Table.Row >
                        <Table.Cell textAlign="right" style={{borderTop: "none"}} colSpan="2">
                            <Form.Field control={Button} color="purple">Save</Form.Field>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Form>
    </Container>
)

const mapStateToProps = (state, ownProps) => {
    let properties = state.types.filter((type) => ownProps.params.type === type.name)[0].properties;
    return {
        property: properties.filter((p) => p.name === ownProps.params.property)[0]
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
    mapDispatchToProps)(PropertyComponent)