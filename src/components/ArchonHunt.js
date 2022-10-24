import React from 'react'

const ArchonHunt = ({ data }) => {
    const missions = data.archonHunt.missions.map(mission => (
        <p>{mission.type} {mission.node}</p>
    ))

    return (
        <div>
            <h2>Archon Hunt</h2>
            <p>Boss: {data.archonHunt.boss}</p>
            {missions}
        </div>
    )
}

export default ArchonHunt