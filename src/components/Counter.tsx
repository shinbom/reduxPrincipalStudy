import useDispatch from "../hooks/useDispatch";
import useSelector from "../hooks/useSelector";
import useStore from "../hooks/useStore";

export default function Counter() {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
