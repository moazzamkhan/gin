import React from "react";
import {Container, Header, Menu, Segment, List} from "semantic-ui-react";
import NavLink from "./NavLink";

const App = ({children}) => (
    <Container fluid>
        <Segment.Group>
        <Menu attached>
            <Menu.Item header>GIN</Menu.Item>
            <Menu.Item><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/types">Types</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/things">Things</NavLink></Menu.Item>
        </Menu>
            {children}
        </Segment.Group>
    </Container>
)

export default App