import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Button} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Card>
          <CardImg top width="100%" src="./logo512.png" alt='react logo'/>
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardSubtitle>Card SubTitle</CardSubtitle>
            <CardText>Card Text............... lots of text!</CardText>
            <Button>Button in Card</Button>
          </CardBody>
    </Card>
      </body>
    </div>
  );
}

export default App;
