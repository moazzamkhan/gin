import React from "react";
import {connect} from "react-redux";
import NavLink from "./NavLink";
import {Grid, Menu, Segment} from "semantic-ui-react";

const ThingsComponent = ({categories, types, children}) => (
    <Segment>
        <Grid>
            <Grid.Column width={4}>
                <Menu text vertical>
                    <Menu.Item>
                        <Menu.Header>me.moazzam.types</Menu.Header>
                        <Menu.Menu>
                            {(types && types.length) ? (types.map(t => (
                                    <Menu.Item key={t.name} name={t.name}><NavLink
                                        to={`/types/${t.name}`}>{t.name}</NavLink></Menu.Item>))) :
                                (<Menu.Item>No types</Menu.Item>)}
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                {children}
            </Grid.Column>
        </Grid></Segment>
)


const mapStateToProps = (state, ownProps) => {
    return {things: state.things, categories: state.things.}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log(this)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThingsComponent)
