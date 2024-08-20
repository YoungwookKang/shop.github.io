import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import styles from "./Detail.module.css";

let YellowBtn = styled.button`
    background : ${ props => props.bg};
    color : ${ props => props.color};
    padding : 10px;
`

let NewButton = styled(YellowBtn)`
    color: 'white';
`


let Box = styled.div`
    background: grey;
    padding: 20px;
`
function Detail({ shoes }) {
  let { index } = useParams();
  index = index !== undefined ? parseInt(index) : null;
  const product = shoes.find((item) => item.id === index);
  let navigate = useNavigate();
  let [inputValue, setInputValue] = useState("");
  let buttonColor = ["#ff994b", "#1f88ff", "#30a839"]
  let [buttonValue, setButtonValue] = useState(0);

  // mount, update 될 때, 나머지 다 하고 마지막에 함
  // useEffect 안쓰면 자바스크립트는 위에서부터 아래로 코드를 실행시켜서
  // 화면 랜더링이 늦게 됨
  // 예를 들어 useEffect를 안쓰고 10초가 걸리는 연산을 한다면 화면은 10초뒤에 랜더링이됨
  // useEffect안에 그 연산을 넣으면 화면 랜더링 다 된 후 10초짜리 연산을 함
  // 핵심기능말고 sideEffect 넣어놓으면 좋음
  let [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setShowAlert(true);
    console.log("useEffect 실행");

    // 타이머는 보통 변수에 넣고 씀 왜냐하면 나중에 clearTimeout() function 사용해서 타이머 지우려고
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => {
      console.log("Clean up function 실행")
      clearTimeout(timer)
    }; // Clean up the timer on unmount
  //   cleanUp function이라해서 저 return은 useEffect가 실행되기 전에 실행됨
  //   리액트는 랜더링이 잦아서 내가 원하지 않을 때 타이머가 돌 수가 있음 그래서 타이머 초기화 시켜놓고 시작하는거임
  }, [index]); // `index`(dependency) 가 변경될 때마다 이 `useEffect`가 다시 실행됩니다.
  // mount 될 때도 실행되는 건 마찬가지임, 만약 [] 인 상태이면 mount 시에만 실행됨 update시에는 실행이 안됨

  // return () +> { 기존 요청 없애주세요 이런거 쓰면 됨 }
  // 2초정도 걸리는 요청이 끝나기 전에 재랜더링하면 요청이 쌓일 거 아님 그래서 그럴 때 기존 데이터 요청 cleanup 해달라는 function 쓰면됨
  // 또한 cleanup function은 mount될 때는 실행이 안되고 unmount될 때는 실행이 됨

  useEffect(() => {}, [inputValue])
  const [cnt, setCnt] = useState(0);


  // `index`가 범위 내에 있는 경우, 해당 상품을 보여줌
  if (product) {
    return (
      <div className="container">
        {showAlert && (<div className="alert alert-warning">2초 이내 구매시 할인</div>)}
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="100%" alt={shoes[index].title}/>
          </div>
          <div className="col-md-6">
            {isNaN(inputValue) ? (<div className="alert alert-warning">경고: 숫자만 입력하세요</div>) : null}
            <input onChange={(e)=> {
              setInputValue(e.target.value);
            }}/>
            <h4 className="pt-5">{shoes[index].title}</h4>
            <p>{shoes[index].content}</p>
            <p>{shoes[index].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=> {setButtonValue(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=> {setButtonValue(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=> {setButtonValue(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent buttonValue={buttonValue}></TabContent>


        {/*<YellowBtn onClick={()=>{*/}
        {/*  setCnt(cnt + 1);*/}
        {/*}}>{`버튼${cnt}`}</YellowBtn>*/}

      </div>
    );
  }
  return (
    <div className="container">
      {shoes.map((item, i) => (
        <div className="row" key={i}>
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="100%" alt={item.title}
            onClick={()=>{navigate("./" + item.id)}} />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      ))}
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        <NewButton>버튼</NewButton>
      </Box>

    </div>
  );
}

function TabContent({buttonValue}) {
  let [fade, setFade] = useState('');
  useEffect(()=> {
    let a = setTimeout(()=> {setFade('end');}, 100)

    return () => {
      clearTimeout(a);
      setFade('')
    }
  },[buttonValue]);
  let content = [<div>0</div>, <div>1</div>, <div>2</div>];
  return (
    <div className={`${styles.start} ${styles[fade]}`}>
      {content[buttonValue]}
    </div>
  );
}


export default Detail;
