import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainContentPage from './pages/MainContentPage'
import AboutPage from './pages/AboutPage'
import Login from './auth/Login'
import Signup from './auth/Signup'


function App() {

  return (
    <>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<MainContentPage/>}/> 
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              {/* renders: The currently matched nested route component */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
