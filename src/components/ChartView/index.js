import React from 'react';
import { useParams } from 'react-router-dom';

import ChartDisplayOptions from '../ChartDisplayOptions';
import ChartDisplayType from '../ChartDisplayType';
import ChartRender from '../ChartRender';
import SortingOptions from '../SortingOptions';

import { useGlobalContext } from '../AppContext/AppContext';

/**
 * Array of averages
 * @param {Array} data 
 */
const ChartView = ({ data, getData }) => {

  const { selection } = useParams();

  /** GET GLOBAL STATE */
  const {state, setState} = useGlobalContext();

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
      <ChartRender 
      state={state}
      isDisplaySelected={isDisplaySelected}
      legend={legend}
      sortingArray={sortingArray}
      data={data}
      />

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