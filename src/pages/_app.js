import StaticLayout from '../scripts/components/StaticLayout'
import Loader from '../scripts/components/shared/Loader'
import Head from 'next/head'
import { TitleContext, PathNameContext } from '../scripts/contexts.js'
import { Container, Row, Col } from 'react-bootstrap'
import '../stylesheets/shared/styles.css'
import { Utils } from '../scripts/utils.js'

function MyApp({ Component, pageProps }) {

  const widthColumn = {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 }
  };

  return (
    <>
      <Head />
      
      <meta charSet="utf-8" />
      <meta 
        httpEquiv="X-UA-Compatible" 
        content="IE=edge" 
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta 
        name="description" 
        content="Description" 
      />
      <meta 
        name="keywords" 
        content="Keywords" 
      />
      <meta 
        name="theme-color" 
        content="#317EFB" 
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      <TitleContext.Consumer>
        { title => title && (
          <title>{title}</title>
        )}
      </TitleContext.Consumer>
      
      <PathNameContext.Provider value={ (typeof location !== Utils.sUndefined) && location.pathname }>
        <main className="main">
          <StaticLayout {...pageProps} />
          <Row id="main-content" className="row-margin-laterals row-margin-top">
            <Col 
                xs={widthColumn.xs}
                sm={widthColumn.sm}
                md={widthColumn.md}
                lg={widthColumn.lg}
                xl={widthColumn.xl}
            >
              <Component {...pageProps} />
            </Col>
          </Row>
        </main>
      </PathNameContext.Provider>
    </>
  )
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