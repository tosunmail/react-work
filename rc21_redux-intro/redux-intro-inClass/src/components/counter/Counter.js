import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../../redux/actions/counterAction";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.counter);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          onClick={() => dispatch(inc())}
          className="counter-button positive"
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
