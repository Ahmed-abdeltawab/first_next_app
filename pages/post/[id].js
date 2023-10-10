import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

function Post({ post }) {
  // const [post, setPost] = useState(null);
  // const params = useRouter();
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${params.query.id}`)
  //     .then((res) => {
  //       setPost(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [params.query.id]);
  if (!post) return <h1>Loading3...</h1>;
  return (
    <div>
      <h1>{post.id}</h1>
      <h1 className="postTitle">{post.title}</h1>
      <p className="postBody">{post.body}</p>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  //id is the name of the file in the pages folder = [id].js
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 10, // ⭐it will regenerate the page in every 10 seconds if the data is changed in the database
    
  };
};
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
//- getStaticPaths() is used to generate dynamic routes based on the data
//-it used to generate all the possible paths

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: `${post.id}` } }));
  return {
    paths,
    fallback: false, // if false then it will show (🚨404 page) when path is not found
    // if true then it will generate static page on the fly
  };
}
export default Post;
