import { useCallback, useMemo, useState } from "react";

export function useMap(initialState = new Map()) {
  const [map, setMap] = useState(
    Array.isArray(initialState) ? new Map(initialState) : initialState
  );

  const set = useCallback((key, value) => {
    setMap((aMap) => {
      const copy = new Map(aMap);
      return copy.set(key, value);
    });
  }, []);

  const deleteByKey = useCallback((key) => {
    setMap((_map) => {
      const copy = new Map(_map);
      copy.delete(key);
      return copy;
    });
  }, []);

  const clear = useCallback(() => {
    setMap(() => new Map());
  }, []);

  const initialize = useCallback((mapOrTuple = []) => {
    setMap(() => new Map(mapOrTuple));
  }, []);

  const actions = useMemo(
    () => ({
      setValue: setMap,
      clear,
      set,
      delete: deleteByKey,
      initialize,
    }),
    [clear, deleteByKey, initialize, set]
  );

  return [map, actions];
}

export default useMap;
