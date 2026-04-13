import React from 'react'

function ZemníVpravo() {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <td>Hodinová sazba [Kč]</td>
            <td>1000</td>
            <td>Tato sazba je uvažována v případě, že souprava nebude využita déle než 11 hodin denně a nenajede více jak 300 km</td>
          </tr>
          <tr>
            <td>Sazba za ujeté kilometry [Kč]</td>
            <td>42</td>
            <td>Tato sazba je uvažována v případě, že souprava nebude využita déle než 11 hodin denně a najede více jak 300 km</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ZemníVpravo;
