import React from 'react';
import './Urls.css';

export default function Urls (props) {
 
    return (
      <table className="urlshits">
      <thead></thead>
      <tbody>
     {
     	props.data.map(row =>(
        <tr><td className="1">{row.shortUrl}<hr /></td>

            <td className="2">{row.hits}<hr /></td>
        </tr>

     	))
     }

      </tbody>
      </table>
    )
  }


