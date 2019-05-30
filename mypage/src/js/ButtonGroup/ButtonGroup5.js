import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ButtonGroup5 extends React.Component {
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
        <ButtonGroup vertical>
        <Button>1</Button>
        <Button>2</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Dropdown Link</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    );
  }
}