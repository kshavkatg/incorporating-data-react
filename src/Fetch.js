import useFetch from './hooks'

export default function Fetch({ 
    url, 
    renderSuccess, 
    loadingFallback=<p>loading...</p>, 
    renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre> }) {

    const { data, error, loading } = useFetch(url)
    
    if(loading) return loadingFallback
    if(error) return renderError(error)
    if(data) return renderSuccess({data})    
  }