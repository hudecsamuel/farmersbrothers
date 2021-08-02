import React from 'react'

function SklizeňVpravo() {
    return (
        <div className="table">
            <table>
              <tr>
                <th>Minimální denní sazba [Kč]</th>
                <th>3000</th>
                <th>Tato sazba je uvažování v případě, že souprava nebude využita déle než 3 hodiny v kuse a řidič bude přítomen.</th>
              </tr>
              <tr>
                <td>Optimální hodinová sazba [Kč]</td>
                <td>1000</td>
                <td>Započítáno v případě, že souprava bude v provozu minimálně 3 hodiny v kuse, maximálně však 11 hodin. </td>
              </tr>
              <tr>
                <td>Maximální denní sazba [Kč]</td>
                <td>1000</td>
                <td>Maximální denní sazba je zastropení ceny i pro případ, že souprava bude v provozu déle než 11 hodin během jednoho dne.</td>
              </tr>
            </table>
            
        </div>
    )
}

export default SklizeňVpravo
