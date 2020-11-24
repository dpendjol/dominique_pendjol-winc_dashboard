
import './App.css';
import { getMockData } from './utils.js/api-client';

import { 
  convertToObject, 
  getAssignmentNames, 
  calculateAveragePerAssignment,
  getListOfStudents,
} from './utils.js/dataConversion'

import ListOfNames from './components/ListOfNames';

import { 
  BrowserRouter as Router, 
  Route, 
  useParams,
  Switch
} from 'react-router-dom'

import ChartBar from './ChartBar'

const H1 = () => {
  const { Username } = useParams()
  return <h1>{Username}</h1>
}

const H2 = () => {
  const { Username, Surname} = useParams()
  return <p>{Username} {Surname}</p>
}

function App() {
  const mockData = getMockData();
  const assignments = getAssignmentNames(mockData)
  const averages = calculateAveragePerAssignment(mockData, assignments)
  const listOfNames = getListOfStudents(mockData);
  return (
    <div className="App">
      <Router>
        <nav>
          <ListOfNames listOfNames={listOfNames} />
        </nav>
        <main>
          <Switch>
            <Route exact path="/:Username">
              <H1 />
              <ChartBar data={averages} />
            </Route>
            <Route path='/:Username/:Surname'>
              <H2 />
            </Route>
          </Switch>
        </main>
      </Router> 
    </div>
  );
}

export default App;
