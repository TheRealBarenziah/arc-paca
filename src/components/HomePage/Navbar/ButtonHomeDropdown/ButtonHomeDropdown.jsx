import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ButtonHomeDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Vous etes...
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="/citizen" >...Citoyen</DropdownItem>
                    <DropdownItem href="/developper">...Developpeurs</DropdownItem>
                    <DropdownItem href="/publicofficial">...Service de l'etat</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}
