
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import bg from './assets/GenG_BG.jpg';
import {useState} from "react";
import data from './data.js';

function App() {
  const players = ['Kiin', 'Canyon', 'Chovy', 'Peyz', 'Lehends'];

  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gen.G</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#player">Player</Nav.Link>
            <Nav.Link href="#record">Record</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage: 'url(' + bg + ')'}}></div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <Shoes shoes= {shoe} index= {index} key={index}/>
          ))}
          {/*{shoes.map((shoe, index) => (*/}
          {/*  <div className="col-md-4" key={index}>*/}
          {/*    <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" alt={shoe.title}/>*/}
          {/*    <h4>{shoe.title}</h4>*/}
          {/*    <p>{shoe.price}</p>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
      {/*나중에 player에 들어갈 애들*/}
      {/*<Container fluid="md">*/}
      {/*  <Row>*/}
      {/*    <Col>*/}
      {/*      <img className="player-bg" src={process.env.PUBLIC_URL + '/Kiin_GenG_LCK.png'} alt="Kiin"/>*/}
      {/*      <h6>Kiin | Gi In Kim</h6>*/}
      {/*      <h6>TOP</h6>*/}
      {/*      <p>X | Instagram | AfreecaTv</p>*/}
      {/*    </Col>*/}
      {/*    <Col>*/}
      {/*      <img className="player-bg" src={process.env.PUBLIC_URL + '/Canyon_GenG_LCK.png'} alt="Canyon"/>*/}
      {/*      <h6>Canyon | Geon Bu Kim</h6>*/}
      {/*      <h6>JUNCLE</h6>*/}
      {/*      <p>Instagram | AfreecaTv</p>*/}
      {/*    </Col>*/}
      {/*    <Col>*/}
      {/*      <img className="player-bg" src={process.env.PUBLIC_URL + '/Chovy_GenG_LCK.png'} alt="Chovy"/>*/}
      {/*      <h6>Chovy | Ji Hun Jung</h6>*/}
      {/*      <h6>MID</h6>*/}
      {/*      <p>X | Instagram | Weibo | AfreecaTV</p>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  <Row>*/}
      {/*    <Col>*/}
      {/*      <img className="player-bg" src={process.env.PUBLIC_URL + '/Peyz_GenG_LCK.png'} alt="Peyz"/>*/}
      {/*      <h6>Peyz | Soo Hwan Kim</h6>*/}
      {/*      <h6>ADC</h6>*/}
      {/*      <p>X | Instagram | Weibo | AfreecaTV</p>*/}
      {/*    </Col>*/}
      {/*    <Col>*/}
      {/*      <img className="player-bg" src={process.env.PUBLIC_URL + '/Lehends_GenG_LCK.png'} alt="Lehends"/>*/}
      {/*      <h6>Lehends | Si Woo Son</h6>*/}
      {/*      <h6>SUP</h6>*/}
      {/*      <p>X | Instagram | AfreecaTv</p>*/}
      {/*    </Col>*/}
      {/*    <Col></Col>*/}
      {/*  </Row>*/}
      {/*</Container>*/}
    </div>
  );
}

function Shoes({shoes, index}) {
  console.log(shoes);
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" alt={shoes.title}/>
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  )
}

export default App;


