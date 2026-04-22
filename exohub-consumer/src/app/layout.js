export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header style={{padding: '10px', borderBottom: '1px solid #ccc'}}>
          <h1>ExoHub  Engine</h1>
        </header>
        {children}<ToastContainer position='bottom-right' autoClose={3000} theme='colored' />
      </body>
    </html>
  )
}

