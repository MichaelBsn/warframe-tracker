import React from 'react'

const Nightwave = ({ data }) => {

    const challenges = data.nightwave.activeChallenges
    const mappedChallenges = challenges.map(challenge => (
        <p key={challenge.id}>{challenge.title}: {challenge.desc}</p>
    ))

    return (
        <div className='nightwave'>
            <h2>Nightwave</h2>
            {mappedChallenges}
        </div>
    )
}

export default Nightwave