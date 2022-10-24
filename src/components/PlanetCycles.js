import { useState, useEffect } from 'react'

const PlanetCycles = ({ data }) => {
    const earth = data.earthCycle
    const cambion = data.cambionCycle
    const vallis = data.vallisCycle

    return (
        <div>
            <h2>Planet Cycles</h2>
            <div>
                <h3>Earth</h3>
                <p>{earth.state}</p>
            </div>
            <div>
                <h3>Cambion</h3>
                <p>{cambion.active}</p>
            </div>
            <div>
                <h3>Vallis</h3>
                <p>{vallis.state}</p>
            </div>
        </div>
    )
}

export default PlanetCycles