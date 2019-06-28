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
                    Vous êtes...
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="/citizen" >... un citoyen</DropdownItem>
                    <DropdownItem href="/developper">... un développeur</DropdownItem>
                    <DropdownItem href="/publicofficial">... un service de l'Etat</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}
