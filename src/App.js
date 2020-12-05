import './App.css';
import { getMockData } from './utils.js/api-client';

import { 
  convertToObject, 
  getAssignmentNames,
  calculateAveragePerStudent,
  calculateAveragePerAssignment,
  getStudentNames,
  filterDataStudent,
  filterDataAssignment,
} from './utils.js/dataConversion'

import ListOfNames from './components/ListOfNames';
import Home from './components/Home'

import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from 'react-router-dom'

import ChartBar from './ChartBar'

import logo from './logo_winc_2.png';
import React, { createContext, useState } from 'react';
import ToggleGraphBars from './components/ToggleGraphBars';

export const ToggleBars = createContext();
export const ToggleBarsUpdate = createContext();

function App() {
  // get the data
  const mockData = getMockData();
  // build the object
  const mockObject = convertToObject(mockData)
  // get a list wit h the names of the assignments
  const assignments = getAssignmentNames(mockObject)
  // get a list with the names of the students
  const listOfNames = getStudentNames(mockObject);
  // calculate the averages per assignment
  const averages1 = calculateAveragePerStudent(mockObject, listOfNames)
  const averages2 = calculateAveragePerAssignment(mockObject, assignments)
  
  // set the state
  const [toggleB, setToggleB] = useState(
    {
      difficulty: true, 
      fun: true,
      lineChart: false,
        
      students: []
    }
  )
  
  const getDataStudent = (filtered) => {
    const filteredData = filterDataStudent(mockObject, filtered)
    return calculateAveragePerAssignment(filteredData, assignments)
  }

  const getDataAssignment = (filtered) => {
    const filteredData = filterDataAssignment(mockObject, filtered)
    return calculateAveragePerStudent(filteredData, listOfNames)
  }

  return (
    <ToggleBars.Provider value={toggleB} >
      <ToggleBarsUpdate.Provider value={setToggleB} >
      
        <div className="App">
        <Router>
          <header>
            <div className='header__imgcontainer'>
              <img src={logo} />
            </div>
            {/* <h1 className='slide-left' >Winc Academy Dashboard</h1> */}
            <div className='navigation'>
              <nav className='navigation'>
                <ToggleGraphBars />
                <ul>
                  <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName="selected" to="/dboverview">DashboardOverview</NavLink></li>
                  <li><NavLink activeClassName="selected" to="/perstudent">Per student routing</NavLink></li>
                  <li><NavLink activeClassName="selected" to="/slicingdicing">SlicingDicing</NavLink></li>
                  <li><NavLink activeClassName="selected" to="/perassignment">1 specifieke opdracht</NavLink></li>
                </ul>
              </nav>
            </div>
          </header>
            <div className='container'>
              <nav className="navigation">
              </nav>
              <main className="main">
                <div className="maintitle">
                  Dit is een title
                </div>
                <div className="maincontainer">
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/dboverview'>
                    <ChartBar data={averages2}/>
                  </Route>
                  <Route path='/perstudent'>
                    <div>
                      <ListOfNames listOfNames={listOfNames} url="perstudent" />
                    </div>
                    <Route path='/perstudent/:Username'>
                     <div>
                        <ChartBar getData={getDataStudent} />
                      </div> 
                    </Route>
                  </Route>
                  <Route exact path='/slicingdicing'>
                    <div>
                      <ListOfNames listOfNames={listOfNames} multiple={true} />
                    </div>
                    <div>
                      <ChartBar getData={getDataStudent} multiple={true}/>
                    </div>
                  </Route>
                  <Route path='/perassignment'>
                    <div>
                      <ListOfNames listOfNames={assignments} url="perassignment" />
                    </div>
                    <Route path='/perassignment/:Username'>
                      <div>
                        <ChartBar getData={getDataAssignment} />
                      </div> 
                    </Route>
                  </Route>
                </Switch>
                </div>
              </main>
            </div>
          </Router>
          <footer>
            <p>Dominique Pendjol - Eindopdracht FrontEnd WincAcademy 2020</p>
          </footer> 
        </div>
        </ToggleBarsUpdate.Provider>
    </ToggleBars.Provider>
  );
}

export default App;
