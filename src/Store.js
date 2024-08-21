import {configureStore, createSlice} from "@reduxjs/toolkit"

// useState 역할
let user = createSlice({
  name: "user",
  initialState: {name : "kim", age : 20},
  reducers: {
    changeUser: (state, action) => {
      state.name = 'park'
    },
    changeAge: (state, action) => {
      state.age = state.age + 1;
    }
  }

})
export const { changeUser, changeAge } = user.actions

let stock = createSlice({
  name: "stock",
  initialState: [{id : 0, name : 'White and Black', count : 2}, {id : 2, name : 'Gray Yordan', count : 1}],
  reducers: {
    changeStockCount: (state, action) => {
      const item = state.find(stockItem => stockItem.id === action.payload);
      if (item) {
        item.count += 1; // count 값을 1 증가시킴
      }
    },
    addStock: (state, action) => {
      const item = state.find(stockItem => stockItem.id === action.payload.id);
      // 없는 아이템을 넣으니 undefined 형식이 나옴 null이 아니라
      console.log(item);
      if (item === undefined) {
        // 아이템이 없으면 추가
        state.push({id : action.payload.id, name : action.payload.name, count : action.payload.count});
      } else {
        // 있으면 수량 +1
        item.count += 1;
      }

    }
  }
})
export const {changeStockCount, addStock} = stock.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer
  }
})