import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

const ChartDisplayType = () => {
  const {state, setState } = useGlobalContext();

  const handleChange = (e) => {
    const {type} = e.target;
    if (type === 'radio') {
      setState({ ...state, lineChart: !state.lineChart })
    } 
  }

  return (
    <div className="ChartDisplayType">
      <fieldset>
        <legend>Display data with</legend>
        <label htmlFor='rbBar'>
          <input
            type='radio'
            id='rbBar'
            name='lineChart'
            checked={!state.lineChart}
            onChange={handleChange}
          />
          Bar chart
        </label>
        <label htmlFor='rbLine'>
          <input
            type='radio'
            id='rbLine'
            name='lineChart'
            checked={state.lineChart}
            onChange={handleChange}
          />
          Line chart
        </label>
      </fieldset>
    </div>
  );
}

export default ChartDisplayType;