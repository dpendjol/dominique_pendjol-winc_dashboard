import logo from './logo.svg';
import './App.css';
import { getMockData } from './utils.js/api-client';
import { 
  convertToObject, 
  getAssignmentNames, 
  calculateAveragePerAssignment, 
  buildChartBarDataSet
} from './utils.js/dataConversion'
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis
} from 'victory'

function App() {
  const data = calculateAveragePerAssignment(getMockData(), getAssignmentNames(getMockData()));
  const dataChart = buildChartBarDataSet(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <VictoryChart>
        <VictoryGroup offset={2.5}
          colorScale={["red", "green"]}
        >
          <VictoryBar
            data={data}
            x="assignment"
            y="gradeDifficulty"
          />
          <VictoryBar
            data={data}
            x="assignment"
            y="gradeFun"
          />
        </VictoryGroup>
        <VictoryAxis
          label="assignment"
          style={{
            axisLabel: { padding: 30 },
            tickLabels: {fontSize: 3, padding: 5, angle: 90}
          }}
        />
        <VictoryAxis dependentAxis
          label="grade"
          style={{
            axisLabel: { padding: 40 },
            tickLabels: {fontSize: 5, padding: 5}
          }}
        />
      </VictoryChart>

    </div>
  );
}

export default App;
