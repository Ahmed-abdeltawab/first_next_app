import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="container">
        <h1>🤫Oops! Page not found</h1>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        img {
          width: 50%;
          margin-bottom: 2rem;
        }
        button {
          padding: 1rem 2rem;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #0060c0;
        }
      `}</style>
    </>
  );
};

export default NotFound;
