import { useEffect, useState } from "react";


export const makeRequest = async() => {
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!posts.ok) {
            throw new Error("unable to get posts");
        }

        const data = await posts.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export function useFetchPosts(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("can not get Posts");
        }
        const json = await response.json();
        if (isMounted) {
          setData(json);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}


export const useMakeRequest = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        let isMounted = true

        setIsLoading(true)
        setError(null)
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('can not get Posts')
                }

                return response.json()
            })
            .then((json) => {
                if (isMounted) {
                    setData(json)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setError(error.message)
                    setIsLoading(false)
                }
            })
        return () => {
            isMounted = false
        }
    }, [url])

    return { data, isLoading, error }
}
