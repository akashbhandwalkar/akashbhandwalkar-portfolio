import '@styles/globals.scss'
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
function Application({ Component, pageProps }) {
  return (
  <>
    <Header></Header>
    <Sidebar />
    <Component {...pageProps} />
  </>
  
  )
}

export default Application
