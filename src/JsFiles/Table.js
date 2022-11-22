import React from 'react'
import Entry from './Entry.js';
import Units from './Units.js';
import '../CssFiles/Table.css';

function Table() {
  return (
    <div className="CustomTable">
    <Entry />
    <Units />
    </div>
  )
}

export default Table