import React from 'react';
import './styles.css';

const Records = () => (
  <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
          <thead>
              <tr>
                <th>INSTANTE</th>
                <th>NOME</th>
                <th>IDADE</th>
                <th>PLATAFORMA</th>
                <th>GêNERO</th>
                <th>TÌTULO DO GAME</th>
               </tr>             
          </thead>
          <tbody> 
              <tr>
                <td>20/08/2020 13:45</td>
                <td>Pierre franck </td>
                <td>34</td>
                <td>XBOX</td>
                <td>Ação-Aventura</td>
                <td>The last of Us</td>
              </tr>

              <tr>
                <td>20/08/2020 13:45</td>
                <td>Pierre franck </td>
                <td>34</td>
                <td>XBOX</td>
                <td>Ação-Aventura</td>
                <td>The last of Us</td>
              </tr>

              <tr>
                <td>20/08/2020 13:45</td>
                <td>Pierre franck </td>
                <td>34</td>
                <td>XBOX</td>
                <td>Ação-Aventura</td>
                <td>The last of Us</td>
              </tr>
          </tbody>
      </table>
  </div>
);

export default Records;