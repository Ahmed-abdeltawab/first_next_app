import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState(null);
  const params = useRouter();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.query.id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [params.query.id]);
  if (!post) return <h1>Loading...</h1>;
  return (
    <div>
      <h1 style={{ color: "red" }}>{post.title}</h1>
    </div>
  );
}
export default Post;
