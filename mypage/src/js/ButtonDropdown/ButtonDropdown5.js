import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default class ButtonDropdown5 extends React.Component {
  render() {
    return (
        <UncontrolledButtonDropdown>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
   }
}