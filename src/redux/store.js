import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slices/cat.slise";
import dogReducer from "./slices/dog.slise";

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store