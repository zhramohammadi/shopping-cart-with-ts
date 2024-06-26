
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {CartProvider} from './context/cartContext'
import Navbar from './components/navbar.tsx'
import Login from './pages/login.tsx'
import Shop from './pages/shop.tsx'
import Register from './pages/register.tsx'
import Success from './pages/success.tsx'
function App() {
  return (
    <>
    <CartProvider>
        <Container>
             <Navbar></Navbar>
            <Routes>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/sucess'} element={< Success/>}/>
            </Routes>
        </Container>
      </CartProvider>
    </>
  )
}

export default App
