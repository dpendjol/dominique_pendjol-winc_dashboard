import React from 'react';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import ChartDisplayOptions from '../ChartDisplayOptions/ChartDisplayOptions';
import ChartDisplayType from '../ChartDisplayType/ChartDisplayType';
import ChartRender from '../ChartRender';
import SortingOptions from '../SortingOptions/SortingOptions';

import { useGlobalContext } from '../AppContext/AppContext';

import './ChartView.css';

/**

 */
const ChartView = ({ data, getData }) => {

  const { selection } = useParams();
  const { state } = useGlobalContext();
  const path = useRouteMatch().path

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
    legend.push({ name: 'gradeDifficulty', symbol: { fill: 'navy' } })
  }
  if (state.fun) {
    legend.push({ name: 'gradeFun', symbol: { fill: 'royalblue' } })
  }

  // check data
  const checkData = () => {
    return data.find(item => (isNaN(item.gradeDifficulty) || isNaN(item.gradeFun)))
  }

  //Set variables for conditional rendering
  const isDataCheck = checkData() ? false : true;
  const isDisplaySelected = state.difficulty || state.fun ? true : false;

  return (
    <div className='chart__container'>
      {!isDataCheck || (state.selectMultiple && (state.students.length <= 0)) ?   
        <h3>Please select a {path === '/perstudent' ? 'student' : 'assignment'}</h3>
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
        <ChartDisplayOptions />
        
        <ChartDisplayType />

        {/** SORTEREN VOOR DE CHARTBAR !! */}
        <SortingOptions />
        </>
      }
    </div>
  )
}

export default ChartView;