import AppRouter from './AppRouter'
import Navbar from './components/Navbar'
import { UserProvider } from './contexts/UserContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ProductsProvider } from './contexts/ProductsContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ProductsProvider>
          <Navbar />
          <main>
            <AppRouter />
          </main>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
