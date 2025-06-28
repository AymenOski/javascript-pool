const hasCity = (country ,arr) => {
    return function(city){
        return arr.some(x => x === city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`
    }
}