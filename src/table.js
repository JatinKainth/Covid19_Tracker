import React from 'react';
import './Table.css';

function table({ countries }) {
  return (
    <div className="Table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default table;
