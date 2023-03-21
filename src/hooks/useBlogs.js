import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [Blogs, setBlogs] = useState([])

    const fetchData = () => {
        axios
            .get("/blogs.json")
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return [Blogs, setBlogs]
};

export default useBlogs;