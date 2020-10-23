import React from 'react';
import Header from '../shared/Header';
import { Jumbotron, Container } from 'react-bootstrap'
const About = () => {
  return (
    <>
      {/* You need to use your shared header component... */
        <Header title="About Aayush" />
      }
      {/* You need a paragraph describing a fun fact about you */
        <Jumbotron fluid>
          <Container>
            <h1>Fun fact about me</h1>
            <p>
              My most embrassing moment was when I messed up with my girlfriend's brother because I thought he is a stranger and he's teasing her. LOL I got a fair punishment for that.
          </p>
          </Container>
        </Jumbotron>
      }
    </>
  );
}

export default About;