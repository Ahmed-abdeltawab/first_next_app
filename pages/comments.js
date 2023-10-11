import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "./blog";
import dynamic from "next/dynamic";
const BlogPage = dynamic(() => import("./blog.js"), { ssr: true });

function Comments({ comments }) {
  const [show, setShow] = useState(false);
  if (!comments) {
    return <div>Loading❗❗❗❗</div>;
  }
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <div style={{ width: "70%", margin: "50px auto" }}>
        {/* <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Comments</h1> */}
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2f17TKRAxpv6gWFlFSNRvUQKQ9ScpZdt4A&usqp=CAU"
          width={400}
          height={200}
          alt="comments"
          onClick={() => {
            setShow(!show);
          }}
        />
        {show && <BlogPage />}
        {comments.map((comment, index) => (
          <div key={comment.id} className="postContainer">
            <Link href={`/comment/${comment.id}`}>
              <h4 className="postTitle">{`${index + 1}-${comment.email}`}</h4>
              <p className="postBody">{comment.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  return {
    props: {
      comments,
    },
  };
};
export default Comments;
