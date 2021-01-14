import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import About from './components/About';
import Resume from './components/Resume'
import Projects from './components/Projects'


function App() {
  return (
    <Router>
        <div className="App">
          <div className="container app_container">
            <div className="row app_row">
              <div className='col-lg-3'>
              
                  <Sidebar/>
              
              </div>
              <div className='col-lg-9 app_main_content'>
                <Navbar />
                <Switch>
                  <Route exact path='/'>
                    <About/>
                  </Route>
                  <Route path='/resume' component={Resume} />
                  <Route path='/projects' component={Projects} />
                  <Route>
                    <Redirect to='/'/>
                  </Route>
                </Switch>     
              </div>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
