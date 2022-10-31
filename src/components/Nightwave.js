import React from 'react'

const Nightwave = ({ data }) => {

    const challenges = data.nightwave.activeChallenges
    const mappedChallenges = challenges.map(challenge => (
        <tr key={challenge.id}>
            <td>{challenge.title}</td>
            <td>{challenge.desc}</td>
        </tr>
    ))

    return (
        <div className='nightwave'>
            <h2>Nightwave</h2>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {mappedChallenges}
                </tbody>
            </table>
        </div>
    )
}

export default Nightwave