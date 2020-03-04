import { useEffect, useState } from "react";
import { getApiUrl } from "helpers/getApiUrl";
import { getData } from "services/api";

const useFetch = (type, option = {}) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(getApiUrl(type, { id: option.id }));

        setState(prevState => {
          return { ...prevState, data: result, loading: false };
        });
      } catch (error) {
        setState(prevState => {
          return { error: true, loading: false, ...prevState };
        });
      }
    };
    fetchData();
  }, [type, option.id]);

  return { ...state };
};

export default useFetch;
