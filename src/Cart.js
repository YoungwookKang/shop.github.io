import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from "react-redux";
import {changeUser, changeStockCount, changeAge} from "./Store";

export const Cart = () => {

  let userSelect = useSelector((state) => { return state })
  let dispatch = useDispatch(); // useDispatch 훅 사용해야 reducers에 있는 변경함수 사용가능

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
        </thead>
        <tbody>
        {userSelect.stock.map((stock, i) => {return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{stock.name}</td>
            <td>{stock.count}</td>
            <td>
              <button onClick={() => {
                dispatch(changeStockCount(stock.id)); // dispatch로 액션 디스패치
              }}>수량 증가
              </button>
            </td>
          </tr>
        )
        })}

        <tr>
          <td>2</td>
          <td>{userSelect.user.name}</td>
          <td>
            <button onClick={() => {
              dispatch(changeUser()); // dispatch로 액션 디스패치
            }}>이름 변경
            </button>
            <button onClick={() => {
              dispatch(changeAge()); // dispatch로 액션 디스패치
            }}> 나이 변경
            </button>
          </td>
          <td>{userSelect.user.age}</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
}