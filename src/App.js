import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {useNavigate, Outlet, Link, Route, Routes} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Player from './Player';
import Detail from "./Detail";
import bg from './assets/GenG_BG.jpg';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gen.G</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/player')}}>Player</Nav.Link>
            <Nav.Link href="detail">Detail</Nav.Link>
            <Nav.Link href="record">Record</Nav.Link>

          </Nav>
        </Container>
      </Navbar>


      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/player" element={<Player />}>
          <Route path="player_state"></Route>
        </Route>
        <Route path="/detail" element={<Detail />}/>
        {/*<Route path="/record" element={<Record />}>*/}
        {/* 여기에 이제 경기 기록 테이블 만들고 각 경기 누르면 <Outlet></OutLet> 사용해서 보여줄 곳 찾기*/}
        {/*  <Route path="detail" element={<Detail/>}></Route>*/}
        {/*</Route>*/}
        <Route path="*" element={<div>없는 페이지에요</div>}/>
      </Routes>
      <Link to={'/'}> 홈으로</Link>
      <Link to={'/player'}> 선수 소개</Link>
    </div>
  );
}

export default App;
