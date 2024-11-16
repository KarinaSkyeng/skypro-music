import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./features/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { userReducer } from "./features/userSlice";

// Функция makeStore создает и возвращает хранилище Redux с помощью функции configureStore.
export const makeStore = () => {
  return configureStore({
    // Мы передаем объект, в котором свойство reducer содержит корневой редьюсер, объединяющий все редьюсеры нашего приложения.
    reducer: combineReducers({
      playlist: playlistReducer,
      user: userReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;