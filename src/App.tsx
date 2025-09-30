import AppRouter from './AppRouter'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </>
  )
}

export default App