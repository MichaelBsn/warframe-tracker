
const VoidFissures = ({ data }) => {

    const normalFissures = data.fissures.filter(fissure => fissure.isHard === false && fissure.isStorm === false)
    const hardFissures = data.fissures.filter(fissure => fissure.isHard === true)
    const stormFissures = data.fissures.filter(fissure => fissure.isStorm === true)

    const mappedNormal = normalFissures.map(fissure => (
        <p key={fissure.id}>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))
    const mappedHard = hardFissures.map(fissure => (
        <p key={fissure.id}>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))
    const mappedStorm = stormFissures.map(fissure => (
        <p key={fissure.id}>{fissure.tier} - {fissure.missionType} - {fissure.enemy}</p>
    ))

    return (
        <div className='fissures'>
            <h2>Void Fissures</h2>
            <div className='fissures-container'>
                <div className='fissures-list'>
                    <h3>Normal fissures</h3>
                    {mappedNormal}
                </div>
                <div className='fissures-list' id='hard-fissures'>
                    <h3>Hard fissures</h3>
                    {mappedHard}
                </div>
                <div className='fissures-list'>
                    <h3>Storm fissures</h3>
                    {mappedStorm}
                </div>
            </div>
        </div>
    )
}

export default VoidFissures