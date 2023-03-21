
import { INCREASE,DECREASE,RESET } from "../types/counterTypes";

const initialState = {
    counter: 0, //? Global state
  };
  
   const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE:
        return { counter: state.counter + 1 };
      case DECREASE:
        return { counter: state.counter - 1 };
      case RESET:
        return { counter: 0 };
  
      default:
        return state;
    }
  };
  
  export default counterReducer