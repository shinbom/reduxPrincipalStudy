import { useEffect } from "react";
import useSelector from "../hooks/useSelector";

export default function NameCard() {
  useEffect(() => {
    console.log("render NameCard");
  });
  const name = useSelector((state) => state.name);

  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
}
