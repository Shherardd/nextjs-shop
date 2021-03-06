import { appProps } from 'next/app'
import Layout from '../components/Layout'
import '../style.css'

function MyApp({ Component, pageProps } = appProps) {
    //Providers - Context/Providers, theme, data
    //layout
    // props adicionales

    return <Layout>
        <Component {...pageProps} />
    </Layout> 
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
  