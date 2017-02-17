import React from "react";
import {Segment, Form, Button, Header} from "semantic-ui-react";

const TypesHome = () => (
    <Segment.Group>
        <Header as="h3" attached={"top"}>Add type</Header>
        <Segment>
            <Form>
                <Form.Group inline>
                    <Form.Field label="me.moazzam.types." control='input' placeholder='Type'/>
                    <Button type='submit' icon="add" circular color={"purple"}/>
                </Form.Group>
            </Form>
        </Segment>
    </Segment.Group>
)

export default TypesHome