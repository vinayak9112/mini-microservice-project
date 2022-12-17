import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PostList() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts'); // remember await!!!!
      
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    },[]);

    const renderedPosts = Object.values(posts).map((post) => {
        return (
          <div
            className="card mx-2"
            style={{ width: "30%", marginBottom: "20px" }}
            key={post.id}
          >
            <div className="card-body">
              <h3>{post.title}</h3>

            </div>
          </div>
        );
    })

    return (
        <>
            <h3 className=" my-3">Posts</h3>
            <div className="container d-flex flex-row flex-wrap" >{renderedPosts}</div>
        </>
    )
}

export default PostList

