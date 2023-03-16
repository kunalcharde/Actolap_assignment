import { createStore } from "redux";
import  reducer from "./reducer"
const Initial = {}
export const store = createstore(reducer,Initial)