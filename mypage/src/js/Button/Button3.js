import React from 'react';
import { Button } from 'reactstrap';

export default class Button3 extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" size="lg">Large Button</Button>{' '}
        <Button color="secondary" size="lg">Large Button</Button>
        <Button color="primary" size="sm">Small Button</Button>{' '}
        <Button color="secondary" size="sm">Small Button</Button>
        <Button color="primary" size="lg" block>Large Block level button</Button>
        <Button color="secondary" size="lg" block>Large Block level button</Button>
        <Button color="primary" size="sm" block>Small Block level button</Button>
        <Button color="secondary" size="sm" block>Small Block level button</Button>
      </div>
    );
  }
}