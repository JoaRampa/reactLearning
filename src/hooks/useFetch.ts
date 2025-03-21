//custom hook (utilizan use al inicio)
import { useEffect, useState } from "react";

interface Params<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

//hook Fetch generico con parametros
export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let controller = new AbortController(); //para cancelar la peticion si el componente se desmonta
    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);
        if(!response.ok){
          throw new Error("Error en la petición");
        }

        const jsonData: T = await response.json();
        setData(jsonData)
        setError(null)
      } catch (err){
        setError(err as Error)
      } finally {
        setLoading(false)
      }

      fetchData();

      return () => { controller.abort(); }
    }
  }, [url]) //el hook se ejecuta en el proximo render si cambia la url
  return { data, loading, error };
}