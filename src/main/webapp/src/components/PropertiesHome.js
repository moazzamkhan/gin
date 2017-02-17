import React from "react";
import {Segment, Form, Button, Header} from "semantic-ui-react";

const TypesHome = ({params}) => (
    <Segment.Group>
        <Header as="h3" attached={"top"}>Add property</Header>
        <Segment>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field control='input' placeholder='Property'/>
                    <Form.Field control='input' placeholder='Type'/>
                    <Button type='submit' icon="add" circular color={"purple"}/>
                </Form.Group>
            </Form>
        </Segment>
    </Segment.Group>
)

export default TypesHome