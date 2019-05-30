import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class ButtonGroup1 extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}