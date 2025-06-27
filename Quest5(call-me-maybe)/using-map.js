const citiesOnly = (arr) => {
    return arr.map(c => {
            return c.city;
        });
}

// console.log(
//     citiesOnly([
//       {
//         city: 'Los Angeles',
//         temperature: '  101 °F   ',
//       },
//       {
//         city: 'San Francisco',
//         temperature: ' 84 ° F   ',
//       },
//     ]) // -> ['Los Angeles', 'San Francisco']
// );

const upperCasingStates = (arr) => {
  return arr.map(u =>
    u
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

// console.log(
//     upperCasingStates(
//         [
//     'Alabama',
//     'New Jersey',
//     'Alaska',
//     'New York',
//     'California',
//     'New Hampshire',
//     'Ohio',
//     'Texas',
//     'West Virginia',
//   ]
//     )
// );

const fahrenheitToCelsius = (arr) => {
    
    return arr.map(c => {
        return String(Math.floor((Number(c.split('°')[0]) - 32) * 5 / 9) + "°C");
    })
}

// console.log(
//     fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']
// );

const trimTemp = (arr) => {
    return arr.map(c => ({
    city: c.city,
    region: c.region,
    state: c.state,
    temperature: c.temperature.replace(/\s+/g, '')
    }));
}

// console.log(
// trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */
// );

const tempForecasts = (arr) => {
    return arr.map(c => {
        const tempF = trimTemp([c]);        
        const tempC = fahrenheitToCelsius(tempF.map(obj => obj.temperature));
        
        return `${tempC[0]}elsius in ${upperCasingStates([c.city])[0]}, ${upperCasingStates([c.state])[0]}`;
    })
}

// console.log(
//     tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]) // -> ['38°Celsius in Pasadena, California']
// );



