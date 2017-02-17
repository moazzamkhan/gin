import React from "react";
import {connect} from "react-redux";
import NavLink from "./NavLink";
import {Grid, Menu, Segment} from "semantic-ui-react";

const PropertiesComponent = ({properties, params, children}) => (
    <Segment>
        <Grid>
            <Grid.Column width={4}>
                <Menu text vertical>
                    <Menu.Item>
                        <Menu.Header><NavLink to={`/types/${params.type}`}
                                              style={{color: "rgba(0,0,0,.6)", textDecoration:"underline"}}>{params.type}</NavLink></Menu.Header>
                        <Menu.Menu>
                            {(properties && properties.length) ? (
                                    properties.map(p => (    <Menu.Item key={p.name} name={p.name}>
                                        <NavLink to={`/types/${params.type}/properties/${p.name}`}>{p.name}</NavLink>
                                    </Menu.Item>)))
                                : (<Menu.Item>No properties</Menu.Item>)}
                        </Menu.Menu></Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                {children}
            </Grid.Column>
        </Grid></Segment>
)


const mapStateToProps = (state, ownProps) => {
    let type = state.types.filter((type) => ownProps.params.type === type.name)[0]
    return {properties: type.properties}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log(this)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesComponent)

