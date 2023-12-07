console.log('Hello from racer api')


const getRaceInfo = function(season, round){
    let racingInfo = fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    // return racingInfo
    console.log(racingInfo)
}


