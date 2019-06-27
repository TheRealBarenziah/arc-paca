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
import './NavBar.scss'

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
            <div className="NavBarContainer">
                <Navbar color="light" light expand="md">
                <img src="https://i.imgur.com/mn1lbg0.png"  alt="" width="50" height="50" />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="marginItem">
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="marginItem">
                                <NavLink href="/DashBoard">Tableau de bord</NavLink>
                            </NavItem>
                            <NavItem className="marginItem">
                                <NavLink href="/ressources">Donées</NavLink>
                            </NavItem>
                            <NavItem className="marginItem">
                                <ButtonHomeDropdown />
                            </NavItem>
                            <NavItem className="marginItem">
                                <FormGroup>
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="search"
                                    />
                                </FormGroup>
                            </NavItem>
                            <NavItem className="marginItem">
                                <Button outline color="success">Connexion</Button>
                            </NavItem>
                            <NavItem className="marginItem">
                                <Button outline color="primary">Inscription</Button>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}