import { useState, useEffect} from 'react'

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error
  };
}

export function useIterator(items = [], initialIndex = 0) {
  const [i, setIndex] = useState(initialIndex)

  const prev = () => {
    if(i === 0) return setIndex(items.length - 1)
    setIndex(i - 1)
  }

  const next = () => {
    if(i === items.length - 1) return setIndex(0)
    setIndex(i + 1)
  }

  return [items[i], prev, next];
}