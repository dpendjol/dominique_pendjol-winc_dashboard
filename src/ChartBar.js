import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
  VictoryContainer,
} from 'victory'
import { ToggleBars } from './App';

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartBar = ({data, getData, multiple}) => { 
  
  const {Username} = useParams();
  const state = useContext(ToggleBars);

    if (data === undefined) {
     data = getData([Username])
     console.log(data)
    }

    if (multiple) {
      if (state.students.length > 0) {
        data = getData(state.students)
      }
      else {
        return (<h1>no data</h1>)
      }
    }

    return (
      <div className='chartcontainer'>
        <VictoryChart 
          domainPadding={{x: [50, 25]}}
          height={150}
          containerComponent={<VictoryContainer responsive={true}/>}
          >
        {!state.lineChart ? 
        <VictoryGroup offset={2}
          colorScale={["red", "orange", "red", "orange"]}
        >
          {state.difficulty ?
          <VictoryBar
            sortKey="x"
            data={data}
            barWidth={1}
            x="x"
            y="gradeDifficulty"
            animate={{
              onExit: {
                duration: 500,
              }
            }}  
          />
          : null }
          {state.fun ?
          <VictoryBar
          sortKey="x"
            data={data}
            barWidth={1}
            x="x"
            y="gradeFun"
          animate={{
            onExit: {
              duration: 500,
            }
          }}
          />
          : null }
        </VictoryGroup>
        : 
        <VictoryGroup>
          {state.difficulty ? 
          <VictoryLine
            sortKey="x"
            data={data}
            x="x"
            y="gradeDifficulty"
            style={{
              data: { stroke: "red", strokeWidth: 1 },
            }}
            animate={{
              onExit: {
                duration: 500,
              }
            }}
          />
          : null }
          {state.fun ?
        <VictoryLine
            sortKey="x"
            data={data}
            x="x"
            y="gradeFun"
            style={{
              data: { stroke: "orange", strokeWidth: 1 },
            }}
            animate={{
              onExit: {
                duration: 500,
              },
            }}
          />
          : null}
        </VictoryGroup>
        }
        <VictoryAxis
          style={{
            axisLabel: { padding: 5 },
            tickLabels: {fontSize: 4, padding: 1, angle: 85, textAnchor: 'start'},
            ticks: {stroke: "black", size: 5},
          }}
        />
        <VictoryAxis dependentAxis
          label="grade"
          tickValues={[0, 1, 2, 3, 4, 5]}
          style={{
            axisLabel: { padding: 20 },
            tickLabels: {fontSize: 5, padding: 5},
            grid: {stroke: "lightgrey"}
          }}
        />
      </VictoryChart>
    </div>
    )
}

export default ChartBar;