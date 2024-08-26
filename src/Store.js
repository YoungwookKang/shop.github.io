import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // `localStorage`를 기본 스토리지로 사용

// `persistConfig` 설정
const persistConfig = {
  key: "root",
  storage,
};

// `user` slice
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeUser: (state) => {
      state.name = "park";
    },
    changeAge: (state) => {
      state.age += 1;
    },
  },
});
export const { changeUser, changeAge } = user.actions;

// `stock` slice
let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Gray Yordan", count: 1 },
  ],
  reducers: {
    changeStockCount: (state, action) => {
      const item = state.find((stockItem) => stockItem.id === action.payload.id);
      if (!item) return; // 아이템이 없으면 아무 작업도 하지 않음

      item.count += action.payload.amount;

      if (item.count < 0) {
        item.count = 0; // 음수로 내려가는 것을 방지
      }
    },
    addStock: (state, action) => {
      const item = state.find((stockItem) => stockItem.id === action.payload.id);
      if (item === undefined) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          count: action.payload.count,
        });
      } else {
        item.count += 1;
      }
    },
  },
});
export const { changeStockCount, addStock } = stock.actions;

// `rootReducer` 생성
const rootReducer = combineReducers({
  user: user.reducer,
  stock: stock.reducer,
});

// `persistedReducer` 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// `store` 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // `redux-persist`와 호환되도록 설정
    }),
});

export default store;
export const persistor = persistStore(store);
