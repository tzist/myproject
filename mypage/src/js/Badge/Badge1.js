import React from 'react';
import { Badge } from 'reactstrap';

export default class Badge1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Heading <Badge color="primary">New</Badge></h1>
        <h2>Heading <Badge color="secondary">New</Badge></h2>
        <h3>Heading <Badge color="danger">New</Badge></h3>
        <h4>Heading <Badge color="secondary">New</Badge></h4>
        <h5>Heading <Badge color="light">New</Badge></h5>
        <h6>Heading <Badge color="secondary">New</Badge></h6>
      </div>
    );
  }
}