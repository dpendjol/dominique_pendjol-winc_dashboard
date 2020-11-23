
import './App.css';
import { getMockData } from './utils.js/api-client';

import { 
  convertToObject, 
  getAssignmentNames, 
  calculateAveragePerAssignment,
  getListOfStudents,
} from './utils.js/dataConversion'

import ListOfNames from './components/ListOfNames';

function App() {
  const mockData = getMockData();
  const listOfNames = getListOfStudents(mockData);

  return (
    <div className="App">
      <ListOfNames listOfNames={listOfNames} />
    </div>
  );
}

export default App;
