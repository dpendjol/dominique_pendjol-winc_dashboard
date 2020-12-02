import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToggleBars } from './App'

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine
} from 'victory'
import { ToggleBarsUpdate } from './App';

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartBar = ({data, selectMulti, getData}) => {
    const currentState = useContext(ToggleBars);
    
    const {Username} = useParams()

    console.log(currentState.students.length)

    if (data === undefined && currentState.students.length === 0) {
      data = getData([Username])
    } else if (currentState.students.length > 0) {
      data = getData(currentState.students)
    }

    return (
      <div className='chartcontainer'>
        <VictoryChart 
          domainPadding={{x: [50, 25]}}
          height={150}
          >
        <VictoryGroup offset={3}
          colorScale={["red", "orange", "red", "orange"]}
        >
          {currentState.difficulty && !currentState.lineChart ? <VictoryBar
            sortKey="x"
            data={data}
            x="assignment"
            y="gradeDifficulty"
          />
          : null }
          { currentState.fun && !currentState.lineChart ? <VictoryBar
          sortKey="x"
            data={data}
            x="assignment"
            y="gradeFun"
          />
          : null }
        </VictoryGroup>
        { currentState.difficulty && currentState.lineChart ? <VictoryLine
            sortKey="x"
            data={data}
            x="assignment"
            y="gradeDifficulty"
            style={{
              data: { stroke: "red", strokeWidth: 1 },
            }}
          />
          : null }
          { currentState.fun && currentState.lineChart ? <VictoryLine
            sortKey="x"
            data={data}
            x="assignment"
            y="gradeFun"
            style={{
              data: { stroke: "orange", strokeWidth: 1 },
            }}
          />
          : null }
        <VictoryAxis
          label="assignment"
          style={{
            axisLabel: { padding: 20 },
            tickLabels: {fontSize: 3, padding: 5, angle: 90},
            ticks: {stroke: "black", size: 5},
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
    )
}

export default ChartBar;