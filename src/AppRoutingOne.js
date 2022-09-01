import { BrowserRouter as Router , Route  , Switch } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from  './pages/404/NotFoundPage'


function AppRoutingOne() {
return (
   <Router>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route component={NotFoundPage}/>
    </Switch>
   </Router>
  );
}

export default AppRoutingOne;
