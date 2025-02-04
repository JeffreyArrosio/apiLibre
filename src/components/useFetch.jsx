import { useCallback, useEffect, useState } from "react";


export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setData(data)
            } else {
                throw Error("Error al aceder a la API")
            }
        } catch (error) {
            console.log(error)
            setData([])
            setError(error.message)
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => {
        fetchData()
    },[])

    return { data, loading, error }
}