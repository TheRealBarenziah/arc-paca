import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button,
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
                <Navbar color="faded" light expand="md">
                    <img src="https://i.imgur.com/Mj17f2D.png" alt="" />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="marginItem marginHome">
                                <NavLink href="/"><ion-icon  className="icon" name="home"></ion-icon></NavLink>
                                
                            </NavItem>
                            <NavItem className="marginItem">
                                <NavLink href="/DashBoard">Tableau de bord</NavLink>
                            </NavItem>
                            <NavItem className="marginItem">
                                <NavLink href="/resources">Données</NavLink>
                            </NavItem>
                            <NavItem className="marginItem">
                                <ButtonHomeDropdown />
                            </NavItem>
                            <NavItem className="marginItem">
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