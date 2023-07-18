import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <div className='dark:bg-gray-800 dark:text-gray-50 text-gray-600'>
      <Component {...pageProps} />
    </div>
  </>
  )
}

export default MyApp;
