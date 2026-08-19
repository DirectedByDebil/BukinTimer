import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {

  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData || defaultValue;
  });

  useEffect(()=>{
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
