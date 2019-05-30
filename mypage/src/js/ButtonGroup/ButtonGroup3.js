import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

export default class ButtonGroup3 extends React.Component {
  render() {
    return (
        <div>
            <ButtonGroup size="lg">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            
            <ButtonGroup size="sm">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </div>
    );
  }
}