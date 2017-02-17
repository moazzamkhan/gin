import React from "react";
import {Table, Header, Button, Popup} from "semantic-ui-react";
import NavLink from "./NavLink";
import {connect} from "react-redux";

const TypeComponent = ({type}) => (
    <Table attached>
        <Table.Header>
            <Table.Row><Table.HeaderCell colSpan={2}>
                <Header as='h3'>{type.name}<Header.Subheader>{type.namespace}</Header.Subheader>
                </Header>
            </Table.HeaderCell><Table.HeaderCell textAlign="right">
                <Popup
                    trigger={<NavLink to={`/types/${type.name}/properties`}>
                        <Button type='submit' size="mini" circular icon='add'
                                color={"purple"}/></NavLink>}
                    content='Add a new property'
                />

            </Table.HeaderCell></Table.Row></Table.Header>
        {
            type.properties && type.properties.length ? (
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="right">Name</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Type</Table.HeaderCell>
                            <Table.HeaderCell textAlign="left">Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                ) : null
        }

        <Table.Body>
            {(type.properties || []).map(p => (
                <Table.Row key={type.name + ":" + p.name}>
                    <Table.Cell><Header
                        as='h4'
                        color={"purple"} textAlign="right"><NavLink
                        to={`/types/${type.name}/properties/${p.name}`}>{p.name}</NavLink></Header></Table.Cell>
                    <Table.Cell><Header
                        as='h4'
                        textAlign="center"><Header.Subheader>{p.type}</Header.Subheader></Header></Table.Cell>
                    <Table.Cell textAlign="left">{p.description}
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>

)


const mapStateToProps = (state, ownProps) => {
    return {
        type: state.types.filter((type) => ownProps.params.type === type.name)[0]
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

export default connect(mapStateToProps, mapDispatchToProps)(TypeComponent)