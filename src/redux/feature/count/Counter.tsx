import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment } from "./counterSlice";

function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic

  return (
    <div className="text-center bg-gray-100 p-32">
      <h1 className="text-3xl font-bold">{count}</h1>
      <button className="bg-green-500 px-8 py-3 m-5" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="bg-red-500 px-8 py-3 m-5" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;