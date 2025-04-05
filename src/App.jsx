import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Homepage'
import AmzServiceAppeals from './Appeals/Appeals3pSeller/AmzServiceAppeals'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accountappeals/amazon" element={<AmzServiceAppeals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App