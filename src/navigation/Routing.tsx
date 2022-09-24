import React from "react"
import NotFound from "pages/NotFound"
import {Route, Routes, useLocation} from "react-router-dom"

function Routing(){
  const location = useLocation()

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<NotFound/>}/>
    </Routes>
  )
}

export default Routing
