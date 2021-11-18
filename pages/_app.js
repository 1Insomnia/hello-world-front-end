import { GeistProvider, CssBaseline } from "@geist-ui/react"
import "../styles/index.css"

const App = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default App
