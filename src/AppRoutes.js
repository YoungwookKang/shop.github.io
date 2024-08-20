import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {HomeComponent} from "./HomeComponent.js";
import {Player} from "./Player.js";
import Navigation from "./Navigation";
import Detail from "./Detail";
import data from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRoutesComponent = () => {
  let [shoes, setShoes] = useState(data);
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomeComponent shoes={shoes} setShoes={setShoes}/>}/>
        <Route path="/player" element={<Player />}>
          <Route path="player_state"></Route>
        </Route>
        {/*<Route path="/record" element={<Record />}>*/}
        {/* 여기에 이제 경기 기록 테이블 만들고 각 경기 누르면 <Outlet></OutLet> 사용해서 보여줄 곳 찾기*/}
        <Route path="detail" element={<Detail shoes={shoes}/>}></Route>
        {/*</Route>*/}
        <Route path="/detail/:index" element={<Detail shoes={shoes}/>}/>
        <Route path="*" element={<div>없는 페이지에요</div>}/>


      </Routes>
      <Link to={'/'}> 홈으로</Link>
      <Link to={'/player'}> 선수 소개</Link>
    </div>
  );
};