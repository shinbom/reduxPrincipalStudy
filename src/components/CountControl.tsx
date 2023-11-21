import useDispatch from "../hooks/useDispatch";
import useStore from "../hooks/useStore";
import { State } from "../stores/Store";

type Selector<T> = (state: State) => T;

function useSelector<T>(selector: Selector<T>): T {
  const store = useStore();
  return selector(store.state);
}

export default function Counter() {
  const dispatch = useDispatch();

  // const { state } = useStore();

  const count = useSelector((state) => state.count);
  /*
  const countAndName = useSelector((state) => state.name);
  */
  function increase(step?: number) {
    return {
      type: "increase",
      payload: step,
    };
  }

  function decrease(step?: number) {
    return {
      type: "decrease",
      payload: step,
    };
  }

  return (
    <div>
      {/* <p>Name : {countAndName}</p> */}
      <p>{count}</p>
      <button type="button" onClick={() => dispatch(increase())}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        Decrease
      </button>

      <button type="button" onClick={() => dispatch(increase(10))}>
        Increase + 10
      </button>
      <button type="button" onClick={() => dispatch(decrease(10))}>
        Decrease - 10
      </button>
    </div>
  );
}
