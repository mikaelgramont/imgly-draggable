import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Imgly draggable crop area</title>
      </Head>

      <main>
        <div className="work-area">
          <img src="/images/beach.jpg" alt="Image being cropped" className="image"/>
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
        }
                
        .image {
          width: 100%;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
