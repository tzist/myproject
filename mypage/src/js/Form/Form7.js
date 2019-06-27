import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Form7 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some input
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Some other input
          </Label>
        </FormGroup>
      </Form>
    );
  }
}