import { Routes, Route } from 'react-router-dom'

//Pages
import { CompoRater } from './CompoRater.js'
import {CompoSaver} from './CompoSaver.js'
import {Home} from './Home.js'

function App() {
  return (
    <>
      <Routes>
        <Route element={<CompoSaver/>} path='/'/>
        <Route element={<CompoRater/>} path='/comporater' />
        <Route element={<CompoSaver/>} path='/composaver' />
      </Routes>
    </>
  )
} 

export default App;
