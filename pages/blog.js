import Link from "next/link";
import React, { useEffect, useState } from "react";

function Blog({ posts }) {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>Blog</h1>
      {posts.map((post, index) => (
        <div key={post.id} className="postContainer">
          <Link href={`/post/${post.id}`}>
            <h4 className="postTitle">{`${index}-${post.title}`}</h4>
            <p className="postBody">{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

//↪️getStaticProps()
//-must write it before or after component
//-it will run before component and run on server side
//-it will run on build time
//-it will run only once
//-it will not run on client side
//-it will not run on development mode

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
export default Blog;
