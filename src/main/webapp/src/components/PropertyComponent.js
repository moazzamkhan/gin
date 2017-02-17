import React from "react";
import {Button, Form, Header, Segment, Input, TextArea} from "semantic-ui-react";
import {connect} from "react-redux";


const PropertyComponent = ({property, params}) => (
    <Segment.Group>
        <Header as='h3' attached="top">{params.type}.{params.property}</Header>
        <Segment>
            <Form>
                <Form.Group inline>
                    <Form.Field control={Input} label='Property' placeholder={property.name}/>
                </Form.Group>
                <Form.Group inline>
                    <Form.Field control={Input} label='Type' placeholder={property.type}/>
                </Form.Group>
                <Form.Field control={TextArea} label='Constraints' placeholder={property.constraints || ""}/>
                <Form.Field control={TextArea} label='Description' placeholder={property.description || ""}/>
                <Form.Field control={Button} color="purple">Save</Form.Field>
            </Form>
        </Segment>
    </Segment.Group>
)

const mapStateToProps = (state, ownProps) => {
    let properties =  state.types.filter((type) => ownProps.params.type === type.name)[0].properties;
    console.log(properties)
    console.log(properties.filter((p)=> p.name === ownProps.params.property)[0])

    return {
        property: properties.filter((p)=> p.name === ownProps.params.property)[0]
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