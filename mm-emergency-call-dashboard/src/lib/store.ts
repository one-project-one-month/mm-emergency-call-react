import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CustomizerReducer from "./customizer/CustomizerSlice";
import UserReducer from './apps/user/userSlice'
import AdminReducer from './apps/admin/adminSlice'

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: UserReducer,
  admin: AdminReducer,
  customizer: CustomizerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
  });
};

export const persistor = persistStore(makeStore());

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<typeof rootReducer>;
