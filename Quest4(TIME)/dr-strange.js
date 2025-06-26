const CustomEpoch = new Date("0001-01-01T00:00:00Z");

function addWeek(date){
  const timeInMs = (date.getTime() - CustomEpoch.getTime()) ;
  
  let timeInDays = timeInMs / (1000 * 60 * 60 * 24);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
  "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday" ];

  return days[timeInDays % 14];
}

function timeTravel({date, hour ,minute ,second}){
  
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
}

// console.log(
//   timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()
// );

