import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

// store.dispatch(delayedActionCreater(3000))

export default store;
