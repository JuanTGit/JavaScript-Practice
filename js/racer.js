console.log('Hello from racer api')


const getRaceInfo = async function(season, round){
    let racingInfo = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    let data = await racingInfo.json()
    return await data
}


const raceForm = document.getElementById('raceForm')

raceForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let seasonForm = event.target.raceSeason.value
    let roundForm = event.target.raceRound.value
    let foundRace = await getRaceInfo(seasonForm, roundForm)
    addToRaceList(foundRace)
})

function addToRaceList(race){
    let createTable = document.getElementById('raceList')

    for (let i = 0; i < 10; i++){
        let cell = document.createElement('li')
        let driver = race.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
        cell.innerHTML = `Position: ${driver.position} | Driver: ${driver.Driver.driverId} | Points: ${driver.points} | Nationality: ${driver.Constructors[0].nationality}`
        createTable.append(cell)
    }

}