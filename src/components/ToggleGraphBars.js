import React, { useContext, useState } from 'react';
import { ToggleBars, ToggleBarsUpdate} from '../App'
import CheckboxCompo from './CheckboxCompo'

const ToggleGraphBars = () => {
    const currentState = useContext(ToggleBars);
    const updateState = useContext(ToggleBarsUpdate);

    const handleChange = (e) => {
        updateState({...currentState, [e.target.name]: !currentState[e.target.name]})
    }

    const handleSubmit = (e) => {
        updateState()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='difficulty'>
                <input
                    type='checkbox'
                    id='difficulty'
                    name='difficulty'
                    checked={currentState.difficulty}
                    onChange={handleChange}
                    />
                Difficulty chart
            </label>
            <label htmlFor='fun'>
                <input
                    type='checkbox'
                    id='fun'
                    name='fun'
                    checked={currentState.fun}
                    onChange={handleChange}
                    />
                Fun chart
            </label>
            <label htmlFor='lineChart'>
                <input
                    type='checkbox'
                    id='lineChart'
                    name='lineChart'
                    checked={currentState.lineChart}
                    onChange={handleChange}
                    />
                Line chart
            </label>
        </form>
        </>
    )
}

export default ToggleGraphBars