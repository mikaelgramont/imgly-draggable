import Head from 'next/head';

import Croppable from '../components/Croppable';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Imgly draggable crop area</title>
      </Head>

      <main>
        <div className="work-area">
          <Croppable url="/images/beach.jpg" />
        </div>
      </main>

      <style jsx>{`
        main {
          background: #222;
          width: 100vw;
          height: 100vh;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .work-area {
          margin: 2rem;
          border: 8px solid #000;
          position: relative;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Helvetica;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
