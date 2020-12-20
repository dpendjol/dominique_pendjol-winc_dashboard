import React, { useContext } from 'react';
import { State, SetState } from '../../App';

const ChartDisplayType = () => {
  const state = useContext(State);
  const setState = useContext(SetState);

  const handleChange = (e) => {
    if (e.target.type === 'radio') {
      setState({ ...state, lineChart: !state.lineChart })
    } 
  }

  return (
    <div>
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