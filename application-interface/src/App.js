import React from 'react'
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Img/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              Example of Card
            </Card.Text>
            <Button varriant="primary">read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active> Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant = "success">This is a button</Alert>
        <Button>Test Button</Button>

      </header>
    </div>
  );
}

export default App;
