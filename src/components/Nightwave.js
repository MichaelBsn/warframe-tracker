import React from 'react'

const Nightwave = ({ data }) => {

    const challenges = data.nightwave.activeChallenges
    const mappedChallenges = challenges.map(challenge => (
        <p>{challenge.title}: {challenge.desc}</p>
    ))

    return (
        <div>
            <h2>Nightwave</h2>
            {mappedChallenges}
        </div>
    )
}

export default Nightwave