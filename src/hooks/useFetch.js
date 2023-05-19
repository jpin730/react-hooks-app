import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setState({ data, isLoading: false });
  };

  useEffect(() => {
    setState({ data: null, isLoading: true });
    getFetch(url);
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
