import React from 'react';
import { useParams } from 'react-router-dom';

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis
} from 'victory'

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartBar = ({data, getData}) => {
    const {Username} = useParams()

    if (data === undefined) {
      data = getData(Username)
    }
    
    return (
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
    )
}

export default ChartBar;