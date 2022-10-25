import React from 'react'

const QuickInfo = ({ data }) => {
    return (
        <div className='quick'>
            <h2>Worldstate Info</h2>
            <table>
                <thead>
                    <tr>
                        <th>Planet Cycles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Plains of Cetus (Earth)</td>
                        <td>{data.earthCycle.state}</td>
                    </tr>
                    <tr>
                        <td>Orb Vallis (Venus)</td>
                        <td>{data.vallisCycle.state}</td>
                    </tr>
                    <tr>
                        <td>Cambion Drift (Deimos)</td>
                        <td>{data.cambionCycle.active}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Archon Hunt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Boss</td>
                        <td>{data.archonHunt.boss}</td>
                    </tr>
                    <tr>
                        <td>Mission 1</td>
                        <td>{data.archonHunt.missions[0].type} - {data.archonHunt.missions[0].node}</td>
                    </tr>
                    <tr>
                        <td>Mission 2</td>
                        <td>{data.archonHunt.missions[1].type} - {data.archonHunt.missions[1].node}</td>
                    </tr>
                    <tr>
                        <td>Mission 3</td>
                        <td>{data.archonHunt.missions[2].type} - {data.archonHunt.missions[2].node}</td>
                    </tr>

                </tbody>
            </table>
            <p>Arbitration: {data.arbitration.enemy} {data.arbitration.type} {data.arbitration.node}</p>
        </div>
    )
}

export default QuickInfo