import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    FormGroup, Input,
} from 'reactstrap';
import ButtonHomeDropdown from './ButtonHomeDropdown/ButtonHomeDropdown';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">ARC</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dashboard">Tableau de bord</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resources">Ressources</NavLink>
                            </NavItem>
                            <NavItem>
                                <ButtonHomeDropdown />
                            </NavItem>
                            <NavItem>
                                <FormGroup>
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="search"
                                    />
                                </FormGroup>
                            </NavItem>
                            <NavItem>
                                <Button outline color="danger">danger</Button>
                            </NavItem>
                            <NavItem>
                                <Button outline color="danger">danger</Button>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}