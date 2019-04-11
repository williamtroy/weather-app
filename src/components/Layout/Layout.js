import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand} from 'reactstrap';

export default (props) => {
  return (
    <React.Fragment>
      <Navbar color="dark" className="navbar-dark" expand="md">
          <Container>
            <NavbarBrand href="/"><h1>WeatherApp</h1></NavbarBrand>
          </Container>
      </Navbar>
      <main className="pt-5">
        {props.children}
      </main>
    </React.Fragment>
  );
};