import { container } from "tsyringe";

import { useEffect, useState } from "react";

import Store, { State } from "../stores/Store";

import useForceUpdate from "./useForceUpdate";

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  // 전체 렌더링이 발생되는 문제때문에, 값을 저장하도록 처리
  const [state, setState] = useState<T>(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      // 특정 조건이 맞으면 forceUpdate
      const newState = selector(store.state);
      // selector의 결과가 객체인 경우, 처리 필요함.
      if (newState !== state) {
        setState(newState);
        forceUpdate();
      }
    };

    store.addListener(update);
    return () => store.removeListener(update);
  }, [store, forceUpdate]);

  return state;
}
