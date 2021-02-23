function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  // T = 2 * PI * sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)
  return arr.map(item => ({ name: item.name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)) }))

  // return arr.map(({ name, avgAlt }) => {
  //   const earth = earthRadius + avgAlt
  //   const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3)/GM))
  //   return { name, orbitalPeriod }
  // })

  // return arr.map(function(item){
  //   return {name:item.name,
  //           orbitalPeriod:Math.round((2*Math.PI)*Math.sqrt(Math.pow(earthRadius+item.avgAlt,3)/GM))
  //   }
  // })

  // return arr.reduce(function(accu, value, index, array){
  //   var result =   Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + value.avgAlt, 3)/GM))
  //   return accu.concat({name: value.name, orbitalPeriod: result})
  // }, [])

  // return arr.reduce((accu, value) =>
  //   accu.concat({name: value.name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + value.avgAlt, 3)/GM))}), [])

  // return arr.map(p => {
  //   return {
  //     name: p.name,
  //     orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + earthRadius), 3) / GM))
  //   }
  // })

}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))

/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
