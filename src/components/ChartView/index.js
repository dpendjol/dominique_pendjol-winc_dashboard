import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import {
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
  VictoryLegend,
  VictoryLabel,
} from 'victory';

import { State, SetState } from '../../App';
import ChartDisplayOptions from '../ChartDisplayOptions';
import ChartDisplayType from '../ChartDisplayType';
import SortingOptions from '../SortingOptions';

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartView = ({ data, getData }) => {

  const { selection } = useParams();

  /** GET GLOBAL STATE */
  const state = useContext(State);
  const setState = useContext(SetState);

  /** ADJUST GLOBAL STATE */
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setState({ ...state, [e.target.name]: !state[e.target.name] })
    }

    if (e.target.type === 'radio') {
      setState({ ...state, sortBy: e.target.value })
    } 
  }

  /** SET SORTING ARRAY */
  const sortingArray = [];
  if (state.sortBy === 'difficulty') {
    sortingArray.push('gradeDifficulty');
    sortingArray.push('gradeFun');
  } else if (state.sortBy === 'fun') {
    sortingArray.push('gradeFun');
    sortingArray.push('gradeDifficulty');
  } else {
    sortingArray.push('x')
  }

  if (data === undefined) {
    data = getData([selection])
  }

  if (state.students.length > 0) {
    data = getData(state.students)
  }

  /* Check what has to be displayed in the legend */
  const legend = [];
  if (state.difficulty) {
    legend.push({ name: "gradeDifficulty", symbol: { fill: "navy" } })
  }
  if (state.fun) {
    legend.push({ name: "gradeFun", symbol: { fill: "royalblue" } })
  }

  // check data
  const checkData = () => {
    return data.find(item => (isNaN(item.gradeDifficulty) || isNaN(item.gradeFun)))
  }

  //Set variables for conditional rendering
  const isDataCheck = checkData() ? false : true;
  const isDisplaySelected = state.difficulty || state.fun ? true : false;

  return (
    <div className='chartcontainer'>
      {!isDataCheck || (state.selectMultiple && (state.students.length <= 0)) ?   
      <h3>Sorry, no data found. Did you select a name or assignment?</h3>
      :
      <>
      {isDisplaySelected &&
        <VictoryChart
          domainPadding={{ x: [50, 25] }}
          height={200}
          width={600}
          style={{ parent: { maxWidth: "100%" } }}
        >
          <VictoryLegend
            x={150}
            y={10}
            height={800}
            orientation="horizontal"
            style={{ border: { stroke: "black" }, title: { fontSize: 8 } }}
            data={legend}
            labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
          />
          {!state.lineChart ?
            <VictoryGroup offset={4}>
            {state.difficulty ?
              <VictoryBar
                sortKey={sortingArray}
                data={data}
                barWidth={3}
                style={{ data: { fill: "navy" } }}
                x="x"
                y="gradeDifficulty"
              />
              : null}
            {state.fun ?
              <VictoryBar
                sortKey={sortingArray}
                data={data}
                barWidth={3}
                style={{ data: { fill: "royalblue" } }}
                x="x"
                y="gradeFun"
              />
              : null}
          </VictoryGroup>
            :
            <VictoryGroup>
              {state.difficulty ?
                <VictoryLine
                  sortKey={sortingArray}
                  data={data}
                  x="x"
                  y="gradeDifficulty"
                  style={{
                    data: { stroke: "navy", strokeWidth: 0.5 },
                  }}
                />
                : null}
              {state.fun ?
                <VictoryLine
                  sortKey={sortingArray}
                  data={data}
                  x="x"
                  y="gradeFun"
                  style={{
                    data: { stroke: "royalblue", strokeWidth: 0.5 },
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
              ticks: { stroke: "black", size: 5 },
            }}
          />
          {/* Y-as */}
          <VictoryAxis dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              axisLabel: { padding: 20 },
              tickLabels: { fontSize: 6, padding: 5 },
              grid: { stroke: "lightgrey" }
            }}
          />
        </VictoryChart>
      }

      {/** OPTIES VOOR DE CHARTBAR !! */}
      <ChartDisplayOptions state={state} handleChange={handleChange} />
      
      <ChartDisplayType />
      {/** SORTEREN VOOR DE CHARTBAR !! */}
      <SortingOptions />
      </>
          }
    </div>
  )
}

export default ChartView;