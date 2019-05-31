import React from 'react';
import { Button } from 'reactstrap';

export default class Button4 extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" size="lg" active>Primary link</Button>{' '}
        <Button color="secondary" size="lg" active>Link</Button>
        <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
        <Button color="secondary" size="lg" disabled>Button</Button>
      </div>
    );
  }
}