import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../store/counterSlice";
import { StoreState } from "../store/store";
import { changeAge, changeName } from "../store/userSlice";

const CounterPage = () => {
  const count = useSelector((state: StoreState) => state.counter.count);
  const name = useSelector((state: StoreState) => state.user.name);
  const age = useSelector((state: StoreState) => state.user.age);
  const dispatch = useDispatch();
  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrease(1))}>
        Redux Counter decrease -
      </button>
      <button onClick={() => dispatch(increase(1))}>
        Redux Counter increase +
      </button>

      <p>Name:{name}</p>
      <button onClick={() => dispatch(changeName("minjeong"))}>
        Redux ChangeName
      </button>
      <p>Age:{age}</p>
      <button onClick={() => dispatch(changeAge(20))}>Redux ChangeAge</button>
    </section>
  );
};

export default CounterPage;
