import React, { useState, useCallback, useMemo } from "react";

export const useBoolean = (initial) => {
  const [value, setValue] = useState < boolean > initial;
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const actions = useMemo(
    () => ({ setValue, toggle, setTrue, setFalse }),
    [setFalse, setTrue, toggle]
  );
  return [value, actions];
};

export default useBoolean;
