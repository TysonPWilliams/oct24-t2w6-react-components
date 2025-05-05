import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PageContent } from './components/PageContent'


function App() {

  return (
    <>

      <Header />

      <PageContent targetContent="home" theme="dark"/>

      <Footer />


      {/* <header>

      </header>
      <main>

      </main>

      <footer>
      </footer> */}
    </>
  )
}

export default App
