import { BrowserRouter as Router , Route  , Switch ,Link ,Redirect} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/Dashboard/DashBoard';


function AppRoutingFinal() {


  //TODO Change to value from sessionStorage(or something dinamic)
  let loggedIn = true

return (
 <Router>
  {/*Route swtich */}
  <Switch>
  {/* Redirections to protect our routes*/}
  <Route exact path='/'>
    {
      loggedIn?
     ( <Redirect from='/' to='/dashboard'/>)
      :
      (<Redirect from='/' to='/login'/>)
    }
  </Route>
    {/* Login Route */}
    <Route exact path='/login' component={LoginPage}></Route>
{/* Dashboard Route */}
<Route exact path='/dashboard'>
    {
      loggedIn?
     ( <DashBoard></DashBoard>)
      :
      (<Redirect from='/' to='/login'/>)
    }
  </Route>


    <Route component={NotFoundPage}></Route>
  </Switch>
 </Router>
  );
}

export default AppRoutingFinal;
