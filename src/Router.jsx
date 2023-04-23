import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import NotFound from './Pages/NotFound'
import LogIn from './Pages/LogIn'
import UserInfo from './Pages/UserInfo'
import Register from './Pages/Register'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={LandingPage}/>
                <Route exact path='/login' Component={LogIn}/>
                <Route exact path='/register' Component={Register}/>
                <Route exact path='*' Component={NotFound}/>
                <Route exact path='/users_page' Component={UserInfo}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;