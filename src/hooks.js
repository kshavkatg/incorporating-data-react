import { useState, useEffect} from 'react'

export default function useFetch(url) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    if(!url) return;
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [url])

  return {
    data, error, loading
  }
}
