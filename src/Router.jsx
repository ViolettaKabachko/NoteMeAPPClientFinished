import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import NotFound from './Pages/NotFound'
import LogIn from './Pages/LogIn'
import UserInfo from './Pages/UserInfo'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import Feed from './Pages/Feed'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={LandingPage}/>
                <Route exact path='/login' Component={LogIn}/>
                <Route exact path='/register' Component={Register}/>
                <Route exact path='*' Component={NotFound}/>
                <Route exact path='/users_page' Component={UserInfo}/>
                <Route exact path='settings' Component={Settings}/>
                <Route exact path='feed' Component={Feed}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;