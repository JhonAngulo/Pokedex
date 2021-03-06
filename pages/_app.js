import '@styles/globals.scss'
import Layout from '@containers/Layout'

import { Provider } from 'react-redux'
import store from '../src/store/store'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
