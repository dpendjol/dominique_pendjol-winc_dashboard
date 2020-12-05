import React from 'react';
import { getAssignmentNames } from '../utils.js/dataConversion';

const TableView = ({data}) => {
    const listOfAssignments = getAssignmentNames(data);

    const headerRows = listOfAssignments.map(item => {
        return (
            <th colSpan={2}>
                {item}
            </th>
        )
    })

    const rijen = data.map(row => {
        return ( 
            <tr>
                <td>{row.student}</td>
                <td>{row.assignment}</td>
                <td>{row.gradeDifficulty}</td>
                <td>{row.gradeFun}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Naam</th>
                    {headerRows}
                </tr>
            </thead>
            <tbody>
                {rijen}
            </tbody>
        </table>
    )
}

export default TableView