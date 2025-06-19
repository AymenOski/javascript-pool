const orbit = {
    earth: 365.25,
    mercury: 365.25 * 0.2408467,
    venus : 365.25 * 0.61519726,
    mars : 365.25 * 1.8808158,
    jupiter : 365.25 *  11.862615,
    saturn : 365.25 *  29.447498,
    uranus : 365.25 *  84.016846,
    neptune : 365.25 *  164.79132
}


const dogYears = (planetName, dogYearsInSecends) => {
    let x = dogYearsInSecends / (60 * 60 * 24 * orbit[planetName]) ;
    return Number((x * 7).toFixed(2));
}