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

import { 
  BrowserRouter as Router, 
  Route, 
  useParams,
  Switch
} from 'react-router-dom'

import ChartBar from './ChartBar'

import logo from './logo_winc.png';
import React, { createContext, useState } from 'react';
import ToggleGraphBars from './components/ToggleGraphBars';

export const ToggleBars = createContext();
export const ToggleBarsUpdate = createContext();

const Title = () => {
  const { Username } = useParams()
  if (Username !== undefined) {
  return <h2>{Username}</h2>
  } else {
    return <h2>Average of all users</h2>
  }
}

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
    return calculateAveragePerAssignment(filteredData, listOfNames)
  }

  return (
    <ToggleBars.Provider value={toggleB} >
      <ToggleBarsUpdate.Provider value={setToggleB} >
        <div className="App">
          <header>
            <img src={logo} />
            <h1>Winc Academy Dashboard</h1>
          </header>
          <Router>
            <div className='container'>
              <nav className="navigation">
                <ToggleGraphBars />
                <Switch>
                  <Route exact path="/" >
                    <ListOfNames listOfNames={listOfNames} />
                  </Route>
                  <Route path="/assignment/:Username">
                    <ListOfNames listOfNames={assignments} />
                  </Route>
                </Switch>
              </nav>
              <main className="main">
                <Switch>
                  <Route exact path="/user/:Username">
                    <Title />
                    <ChartBar getData={getDataStudent} />
                  </Route>
                  <Route exact path="/assignment/:Username">
                    <ChartBar getData={getDataAssignment} />
                  </Route>
                  <Route exact path='/'>
                    <Title />
                    <ChartBar data={averages1} getData={getDataStudent} />
                  </Route>
                  <Route exact path='/data'>
                    <Title />
                  </Route>
                </Switch>
              </main>
            </div>
          </Router> 
        </div>
        </ToggleBarsUpdate.Provider>
    </ToggleBars.Provider>
  );
}

export default App;
