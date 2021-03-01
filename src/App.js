import React, {useState} from 'react';
import tablet from './assets/tablet.png'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <div className="hero">
        <img src={tablet} alt="Hero" />  
      </div>
      <div className="content">
      <h3>Customer Experience</h3>
      <h1>Extract Meaning & drive action</h1>

      <p>Customer data doesn't only come in the form of surveys; it's also in chats, call transcripts, social media, online reviews, and other sources. No matter what form your CX data takes, we can extract meaning and help you drive action.</p>

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Feedback Lifecycle Management
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <h4> Lorem Ipsum</h4>
              <p>Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.</p>
                        <a class="btn" href="#">See more work</a>
                        </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Integrations
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body><h4> Lorem Ipsum</h4>
              <p>Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.</p>
                        <a class="btn" href="#">See more work</a></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Multimedia Feedback
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body><h4> Lorem Ipsum</h4>
              <p>Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.</p>
                        <a class="btn" href="#">See more work</a></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        </div>
      

    </div>
  );
}

export default App;
