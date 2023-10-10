import Head from "next/head";
import React from "react";

function Comment({ comment }) {
  if (!comment) return <h1>Loading❗❗❗❗❗❗❗❗❗❗❗❗❗❗</h1>;
  return (
    <>
      <Head>
        <title>{comment.email}</title>
      </Head>
      <div style={{ width: "70%", margin: "auto" }}>
        <h1>{comment.id}</h1>
        <h1 className="postTitle">{comment.email}</h1>
        <p className="postBody">{comment.body}</p>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const comment = await res.json();
  console.log(comment);
  return {
    props: {
      comment,
    },
  };
};
export default Comment;
