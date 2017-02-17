import React from "react";
import {Header, Table} from "semantic-ui-react";
import BoxFactory from "./BoxFactory"

const ThingComponent = ({things}) => {
    let rows = things.map((thing) => {
        let MyBox = BoxFactory.get(thing.type)

        return (<Table.Row key={thing.id}>
            <Table.Cell style={{textAlign: "right"}}>
                <Header as='h4' color="teal">
                    <Header.Content>
                        {thing.property}
                        <Header.Subheader>{thing.type}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell>
                <MyBox value={thing.value}/>
            </Table.Cell>
        </Table.Row>)
    })
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    )
}

export default ThingComponent