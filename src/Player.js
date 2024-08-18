import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Player = () => {
  return (
    <div className="player">
      <Container fluid="md">
        <Row>
          <Col>
            <img className="player-bg" src={process.env.PUBLIC_URL + '/Kiin_GenG_LCK.png'} alt="Kiin" />
            <h6>Kiin | Gi In Kim</h6>
            <h6>TOP</h6>
            <p>X | Instagram | AfreecaTv</p>
          </Col>
          <Col>
            <img className="player-bg" src={process.env.PUBLIC_URL + '/Canyon_GenG_LCK.png'} alt="Canyon" />
            <h6>Canyon | Geon Bu Kim</h6>
            <h6>JUNCLE</h6>
            <p>Instagram | AfreecaTv</p>
          </Col>
          <Col>
            <img className="player-bg" src={process.env.PUBLIC_URL + '/Chovy_GenG_LCK.png'} alt="Chovy" />
            <h6>Chovy | Ji Hun Jung</h6>
            <h6>MID</h6>
            <p>X | Instagram | Weibo | AfreecaTV</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="player-bg" src={process.env.PUBLIC_URL + '/Peyz_GenG_LCK.png'} alt="Peyz" />
            <h6>Peyz | Soo Hwan Kim</h6>
            <h6>ADC</h6>
            <p>X | Instagram | Weibo | AfreecaTV</p>
          </Col>
          <Col>
            <img className="player-bg" src={process.env.PUBLIC_URL + '/Lehends_GenG_LCK.png'} alt="Lehends" />
            <h6>Lehends | Si Woo Son</h6>
            <h6>SUP</h6>
            <p>X | Instagram | AfreecaTv</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;