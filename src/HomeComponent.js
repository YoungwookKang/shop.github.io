import React from 'react';
import bg from "./assets/GenG_BG.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const HomeComponent= ({shoes, setShoes}) => {
  let navigate = useNavigate();
  const [getProduct, setGetProduct] = React.useState(true);
  const [indexData, setIndexData] = React.useState(2);
  return (
    <div className="HomeComponent">
      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <div className="col-md-4" key={index}>
              <img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%" alt={shoe.title}
                   onClick={() => {
                     navigate(`/detail/${shoe.id}`)
                   }}/>
              <h4>{shoe.title}</h4>
              <p>{shoe.price}</p>
            </div>
          ))}
        </div>

        <button onClick={() => {

          getProduct &&
          axios
            .get(`https://codingapple1.github.io/shop/data${indexData}.json`)
            .then(res => {
              console.log(res.data);
              const temp = [...shoes, ...res.data];
              setShoes(temp);
              setIndexData(indexData+1);
              if (indexData > 3) {
                setGetProduct(false);
              }
            })
            .catch((error) => {console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);});

        }}>더보기
        </button>
        <button onClick={() => {
          Promise.all([axios.get(`https://codingapple1.github.io/shop/data2.json`), axios.get(`https://codingapple1.github.io/shop/data3.json`)])
            .then(res => {
              const allData = res.flatMap(response => response.data);
              const temp = [...shoes, ...allData];
              setShoes(temp);})
            .catch((error) => {console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);})
        }}>모두 보기</button>
        <button onClick={() => {
          let temp = [...shoes];
          temp.sort((a, b) => a.title.localeCompare(b.title));
          setShoes(temp);
        }}>정렬
        </button>


      </div>
    </div>
  );
};
