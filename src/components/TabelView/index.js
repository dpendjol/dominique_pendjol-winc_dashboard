import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

//Import custom components
import SortingOptions from '../SortingOptions';
import SortingOrder from '../SortingOrder';
import DataFilter from '../DataFilter';

//Import compnent css
import './TableView.css';

const TableView = ({data, students, assignments}) => {

  //define component constants
  const state = useGlobalContext();
  const sortBy = state.sortBy;

  //Filter the data only if the nessary data is there
  if (state.filterByName && state.filterName !== '') {
    data = data.filter(item => {
      if (item.student === state.filterName) {
        return item;
      }
      return;
    })
  }

  //Filter the data only if the nessary data is there
  if (state.filterByAssignment && state.filterAssignment !== '') {
    data = data.filter(item => {
      if (item.assignment === state.filterAssignment) {
        return item;
      }
      return;
    })
  }

  //Sort the data only if the nessary data is there
  if (sortBy !== 'default') {
    let sortColumn;
    if (sortBy === 'difficulty') { sortColumn = 'gradeDifficulty' }
    if (sortBy === 'fun') { sortColumn = 'gradeFun' }
    if (sortBy === 'name') { sortColumn = 'student' }
    if (sortBy === 'assignment') { sortColumn = 'assignment' }
    data.sort((a,b) => {
        if (a[sortColumn] < b[sortColumn]) return state.sortOrder ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return state.sortOrder ? 1 : -1;
        return 0;
    });
  };

  let i = 0;
  const rijen = data.map(row => {
      i += 1
      return ( 
          <tr key={i}>
              <td>{row.student}</td>
              <td>{row.assignment}</td>
              <td>{row.gradeDifficulty}</td>
              <td>{row.gradeFun}</td>
          </tr>
      )
  })

  return (
      <div>
        <div>
          <SortingOptions />
          {state.sortBy !== 'default' ? 
            <SortingOrder/>
          : null}
        </div>
        <div>
          <DataFilter students={students} assignments={assignments} />
        </div>
        <table>
            <thead>
                <tr>
                  <th>
                    Student name 
                  </th>
                  <th>
                    Assignment name
                  </th>
                  <th>
                    Cijfer voor moeilijkheid
                  </th>
                  <th>
                    Cijfer voor fun
                  </th>
                </tr>
            </thead>
            <tbody>
                {rijen}
            </tbody>
        </table>
      </div>
  )
}

export default TableView