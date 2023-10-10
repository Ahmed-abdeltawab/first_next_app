import Head from "next/head";
import Link from "next/link";
import React from "react";

function Comments({ comments }) {
  if (!comments) {
    return <div>Loading❗❗❗❗❗❗❗❗❗❗❗❗❗❗</div>;
  }
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <div style={{ width: "70%", margin: "50px auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Comments</h1>
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
