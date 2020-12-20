import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import css
import './App.css';
//import mockData
import { getMockData } from './utils.js/api-client';

//Import functions
import {
  convertToObject,
  getStudentNames,
  getAssignmentNames,
  calculateAveragePerStudent,
  calculateAveragePerAssignment,
  filterDataStudent,
  filterDataAssignment,
} from './utils.js/dataConversion'

//Import components
import ListItems from './components/List/ListItems';
import Home from './components/Home';
import TabelView from './components/TabelView';
import ChartView from './components/ChartView';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

//export the state
export const State = createContext();
export const SetState = createContext();

function App() {
  const mockData = getMockData();
  const mockObject = convertToObject(mockData)
  const assignments = getAssignmentNames(mockObject)
  const studentNames = getStudentNames(mockObject);
  const averagesPerAssignment = calculateAveragePerAssignment(mockObject, assignments)

  // set the initial state
  const [state, setState] = useState(
    {
      difficulty: true,
      fun: true,
      lineChart: false,
      filterMultiplePersons: true,
      selectMultiple: false,
      sortBy: 'default',
      sortOrder: true,
      filterByName: false,
      filterByAssignment: false,
      filterName: '',
      filterAssignment: '',
      students: []
    }
  )

  const getDataStudent = (filtered) => {
    const filteredData = filterDataStudent(mockObject, filtered)
    return calculateAveragePerAssignment(filteredData, assignments)
  }

  const getDataAssignment = (filtered) => {
    const filteredData = filterDataAssignment(mockObject, filtered)
    return calculateAveragePerStudent(filteredData, studentNames)
  }

  return (
    <State.Provider value={state} >
      <SetState.Provider value={setState} >
        <div className="App">
          <Router>
            <Header />
            <main className="maincontainer">
              <Menu>
                <Switch>
                  <Route path='/perstudent'>
                    <ListItems listValues={studentNames}/>
                  </Route>
                  <Route path='/perassignment'>
                    <ListItems listValues={assignments}/>
                  </Route>
                </Switch>
              </Menu>
              <Content>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/tableview'>
                    <TabelView data={mockObject} students={studentNames} assignments={assignments} />
                  </Route>
                  <Route exact path='/dboverview'>
                    <ChartView data={averagesPerAssignment} />
                  </Route>
                  <Route path='/perstudent'>
                    <Route exact path='/perstudent'>
                      <ChartView getData={getDataStudent} />
                    </Route>
                    <Route path='/perstudent/:selection'>
                      <ChartView getData={getDataStudent} />
                    </Route>
                  </Route>
                  <Route path='/perassignment'>
                    <Route exact path='/perassignment'>
                      <ChartView getData={getDataAssignment} />
                    </Route>
                    <Route path='/perassignment/:selection'>
                      <ChartView getData={getDataAssignment} />
                    </Route>
                  </Route>
                </Switch>
              </Content>
            </main>
          </Router>
        </div>
      </SetState.Provider>
    </State.Provider>
  );
}

export default App;
