import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToggleBars } from './App'

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLine
} from 'victory'
import { ToggleBarsUpdate } from './App';

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartBar = ({data, getData}) => {
    const currentState = useContext(ToggleBars);
    
    const {Username} = useParams()

    if (data === undefined) {
      data = getData(Username)
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