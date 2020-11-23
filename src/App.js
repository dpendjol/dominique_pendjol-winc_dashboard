
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
  const mockData = getMockData();
  const assignmentNames = getAssignmentNames(mockData);
  const data = calculateAveragePerAssignment(mockData, assignmentNames);

  return (
    <div className="App">
      <VictoryChart domainPadding={{x: [50, 25]}}>
        <VictoryGroup offset={2.5}
          colorScale={["red", "yellow"]}
        >
          <VictoryBar
            sortKey="x"
            data={data}
            x="assignment"
            y="gradeDifficulty"
          />
          <VictoryBar
          sortKey="x"
            data={data}
            x="assignment"
            y="gradeFun"
          />
        </VictoryGroup>
        <VictoryAxis
          label="assignment"
          style={{
            axisLabel: { padding: 20 },
            tickLabels: {fontSize: 3, padding: 5, angle: 90},
            data: {stroke: "#000", strokeWidth: 10}
          }}
        />
        <VictoryAxis dependentAxis
          label="grade"
          style={{
            axisLabel: { padding: 20 },
            tickLabels: {fontSize: 5, padding: 5}
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default App;
