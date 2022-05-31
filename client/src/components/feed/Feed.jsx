import { useState, useEffect } from "react";
import Post from "../post/post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ? await axios("http://localhost:8800/api/posts/profile/" + username) 
            : await axios("http://localhost:8800/api/posts/timeline/62926a036837c3bd85874527")
            setPosts(res.data)
        }
        fetchPosts();
    }, [username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
