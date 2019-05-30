import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function Alert5() {
  return (
    <UncontrolledAlert color="info" fade={false}>
      I am an alert and I can be dismissed without animating!
    </UncontrolledAlert>
  );
}

export default Alert5;