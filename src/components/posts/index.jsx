import Post from './post'
import { useState, useEffect } from 'react'
// import { useFetchPosts } from './useMakeRequest'
import './style.css'

// API -> https://jsonplaceholder.typicode.com/posts  {userId, id, title, body}

export default function Posts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterBy, setFilterBy] = useState('')
    const [filtered, setFiltered] = useState([])

    const isFiltering = filterBy !== ''

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(url);
                if (!response.ok) {
                throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log(data)
                setData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    useEffect(() => {
        const newArray = data.filter((post) => (
            post.title.toLowerCase().includes(filterBy.toLowerCase()
        )))

        setFiltered(newArray)
    }, [data, filterBy])
    
    const postsList = isFiltering 
    ? (
        filtered.map((item) => (
            <Post
                title={item.title}
                content={item.body}
                key={item.id}
            />
        ))
    ) : (
        data.map((item) => (
            <Post
                title={item.title}
                content={item.body}
                key={item.id}
            />
        ))
    )

    const handleSortAtoZ = () => {
        if (isFiltering) {
            const newArray = [...filtered].sort((a, b) => (a.title.localeCompare(b.title)))
            setFiltered(newArray)
        } else {
            const newArray = [...data].sort((a, b) => (a.title.localeCompare(b.title)))
            setData(newArray)
        }
    }

    const handleSortById = () => {
        if (isFiltering) {
            const newArray = [...filtered].sort((a, b) => (a.id - b.id))
            setFiltered(newArray)
        } else {
            const newArray = [...data].sort((a, b) => (a.id - b.id))
            setData(newArray)
        }
    }

    return (
        <div>
            <h1 className='main-title-form'>
                Render posts fetched from an API and allow filtering or sorting.
            </h1>
            <div className='main-container'>
                <div className='header'>
                    <h2>POSTS</h2>
                    <div className='actions'>
                        <button onClick={handleSortAtoZ}>{'A -> Z'}</button>
                        <button onClick={handleSortById}>{'ID'}</button>
                        <input 
                            placeholder='filter'
                            value={filterBy}
                            onChange={(event) => {setFilterBy(event.target.value)}}
                        />
                    </div>
                </div>
                <div className='post-container'>
                    {error ?? <div>{error}</div>}
                    {isLoading ? <h2>Loading...</h2> : (
                        postsList
                    )}
                </div>
            </div>
        </div>
    )
}