import { useState, useEffect } from 'react'

const VoidFissures = ({ data }) => {

    function logFissures() {
        console.log(hardFissures)
        console.log(stormFissures)
        console.log(normalFissures)
    }

    const normalFissures = data.fissures.filter(fissure => fissure.isHard === false && fissure.isStorm === false)
    const hardFissures = data.fissures.filter(fissure => fissure.isHard === true)
    const stormFissures = data.fissures.filter(fissure => fissure.isStorm === true)

    const mappedNormal = normalFissures.map(fissure => (
        <p>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))
    const mappedHard = hardFissures.map(fissure => (
        <p>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))
    const mappedStorm = stormFissures.map(fissure => (
        <p>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))

    return (
        <div>
            <h2>Void Fissures</h2>
            <div className='fissures-container'>
                <div>
                    <h3>Normal fissures</h3>
                    {mappedNormal}
                </div>
                <div>
                    <h3>Hard fissures</h3>
                    {mappedHard}
                </div>
                <div>
                    <h3>Storm fissures</h3>
                    {mappedStorm}
                </div>
            </div>
            <button onClick={logFissures}>log fissures</button>
        </div>
    )
}

export default VoidFissures