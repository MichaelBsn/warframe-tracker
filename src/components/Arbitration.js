import React from 'react'

const Arbitration = ({ data }) => {
    const arbi = <div>
        <h2>Arbitration</h2>
        <p>Enemy: {data.arbitration.enemy}</p>
        <p>Node: {data.arbitration.node}</p>
        <p>Type: {data.arbitration.type}</p>
    </div>
    return (
        <div>
            {arbi}
        </div>
    )
}

export default Arbitration