import React from 'react';

import {
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
  VictoryLegend,
  VictoryLabel,
} from 'victory';

const ChartRender = (props) => {
  return (
  <>
  {props.isDisplaySelected &&
        <VictoryChart
          domainPadding={{ x: [50, 25] }}
          height={200}
          width={600}
          style={{ parent: { maxWidth: '100%' } }}
        >
          <VictoryLegend
            x={150}
            y={10}
            height={800}
            orientation='horizontal'
            style={{ border: { stroke: 'black' }, title: { fontSize: 8 } }}
            data={props.legend}
            labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
          />
          {!props.state.lineChart ?
            <VictoryGroup offset={4}>
            {props.state.difficulty ?
              <VictoryBar
                sortKey={props.sortingArray}
                data={props.data}
                barWidth={3}
                style={{ data: { fill: 'navy' } }}
                x='x'
                y='gradeDifficulty'
              />
              : null}
            {props.state.fun ?
              <VictoryBar
                sortKey={props.sortingArray}
                data={props.data}
                barWidth={3}
                style={{ data: { fill: 'royalblue' } }}
                x='x'
                y='gradeFun'
              />
              : null}
          </VictoryGroup>
            :
            <VictoryGroup>
              {props.state.difficulty ?
                <VictoryLine
                  sortKey={props.sortingArray}
                  data={props.data}
                  x='x'
                  y='gradeDifficulty'
                  style={{
                    data: { stroke: 'navy', strokeWidth: 0.5 },
                  }}
                />
                : null}
              {props.state.fun ?
                <VictoryLine
                  sortKey={props.sortingArray}
                  data={props.data}
                  x='x'
                  y='gradeFun'
                  style={{
                    data: { stroke: 'royalblue', strokeWidth: 0.5 },
                  }}
                />
                : null}
            </VictoryGroup>
          }
          {/* X-as */}
          <VictoryAxis
            style={{
              axisLabel: { padding: 5 },
              tickLabels: { fontSize: 6, padding: 1, angle: 85, textAnchor: 'start' },
              ticks: { stroke: 'black', size: 5 },
            }}
          />
          {/* Y-as */}
          <VictoryAxis dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              axisLabel: { padding: 20 },
              tickLabels: { fontSize: 6, padding: 5 },
              grid: { stroke: 'lightgrey' }
            }}
          />
        </VictoryChart>
      }
      </>
  )
}

export default ChartRender;