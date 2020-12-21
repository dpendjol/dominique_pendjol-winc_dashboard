import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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
import ListItems from './components/List/ListItems.jsx';
import TabelView from './components/TabelView/TabelView.jsx';
import ChartView from './components/ChartView/ChartView.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content.jsx';

function App() {

  const mockData = getMockData();
  const mockObject = convertToObject(mockData)
  const assignments = getAssignmentNames(mockObject)
  const studentNames = getStudentNames(mockObject);
  const averagesPerAssignment = calculateAveragePerAssignment(mockObject, assignments)

  const getDataStudent = (filtered) => {
    const filteredData = filterDataStudent(mockObject, filtered)
    return calculateAveragePerAssignment(filteredData, assignments)
  }

  const getDataAssignment = (filtered) => {
    const filteredData = filterDataAssignment(mockObject, filtered)
    return calculateAveragePerStudent(filteredData, studentNames)
  }

  return (
        <div className="App">
          <Router>
            <Header />
            <Main>
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
                    <ChartView data={averagesPerAssignment} />
                  </Route>
                  <Route exact path='/tableview'>
                    <TabelView data={mockObject} students={studentNames} assignments={assignments} />
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
            </Main>
          </Router>
        </div>
  );
}

export default App;
