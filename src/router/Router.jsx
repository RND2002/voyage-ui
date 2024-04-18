import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "../component/Signup"
import Signin from "../component/Signin"
import MainPage from "../pages/MainPage"
import SignupEmail from "../component/SignupEmail"
import SigninEmail from "../component/SigninEmail"


const Router = () => {
  return (
    <div>
        <BrowserRouter>
       <Routes>
        
       <Route path="/" Component={MainPage}/>
        <Route path ='/signup' Component={Signup}/>
        <Route path ='/signin' Component={Signin}/>
        <Route path ='/signup/email' Component={SignupEmail}/>
        <Route path ='/signin/email' Component={SigninEmail}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Router