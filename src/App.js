import './App.css';
import { getMockData } from './utils.js/api-client';

import { 
  convertToObject, 
  getAssignmentNames, 
  calculateAveragePerAssignment,
  getListOfStudents,
  filterData,
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
import { useEffect } from 'react';
import ToggleGraphBars from './components/ToggleGraphBars';

export const ToggleBars = createContext();
export const ToggleBarsUpdate = createContext();

const H1 = () => {
  const { Username } = useParams()
  if (Username !== undefined) {
  return <h2>{Username}</h2>
  } else {
    return <h2>Average of all users</h2>
  }
}

function App() {
  const mockData = getMockData();
  const assignments = getAssignmentNames(mockData)
  const averages = calculateAveragePerAssignment(mockData, assignments)
  const listOfNames = getListOfStudents(mockData);

  const [toggleB, setToggleB] = useState(
    {
      difficulty: true, 
      fun: true,
      lineChart: false,
      students: []
    })

  const getData = (filtered) => {
    const mockData = getMockData();
    const assignments = getAssignmentNames(mockData)
    const filteredData = filterData(mockData, filtered)
    return calculateAveragePerAssignment(filteredData, assignments)
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
                <ListOfNames listOfNames={listOfNames} />
              </nav>
              <main className="main">
                <Switch>
                  <Route exact path="/:Username">
                    <H1 />
                    <ChartBar getData={getData} />
                  </Route>
                  <Route exact path="/multiple">
                    <H1 />
                    <ChartBar selectMulti={true} getData={getData} />
                  </Route>
                  <Route exact path='/'>
                    <H1 />
                    <ChartBar data={averages} getData={getData} />
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
