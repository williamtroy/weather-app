import React from 'react';
import { Container } from 'reactstrap';

export default (props) => {
  return (
    <div className={props.className}>
      <Container>
        {props.children}
      </Container>
    </div>
  );
};