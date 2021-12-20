import React, {useState} from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Intro from './Intro';
import {Link, Route, Switch} from 'react-router-dom';
import Projects from './Projects';
import Learning from './Learning';
import About from './About';

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
              <Nav.Link as={Link} to='/learning'>Learning</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path='/' exact>
            <Intro />
        </Route> 
        <Route path='/projects'>
            <Projects />
        </Route> 
        <Route path='/learning'>
            <Learning />
        </Route> 
        <Route path='/about'>
            <About />
        </Route> 
        <Route path='/:id'>
          <div>해당페이지는 없는 페이지 입니다.</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;



