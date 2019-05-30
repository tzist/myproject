import React from 'react';
import { Badge, Button } from 'reactstrap';

export default class Badge2 extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    );
  }
}