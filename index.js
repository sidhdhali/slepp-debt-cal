// const getSleepHours = day => {
//   if (day === 'monday') {
//     return 8;
//   } else if (day === 'tuesday') {
//     return 7;
//   } else if (day === 'wednedday') {
//     return 9;
//   }else if (day === 'thusday') {
//     return 7;
//   }else if (day === 'friday') {
//     return 6;
//   }else if (day === 'saturday') {
//     return 7;
//   }else if (day === 'sunday') {
//     return 9;
//   }
// };

// console.log(getSleepHours('tuesday'));

const Day = ["Mon", "Tue", "Wed"];

const getSleepHours = (day) => {
  switch (day) {
    case "Mon":
      return 8;
      break;
    case "Tue":
      return 7;
      break;
    case "Wed":
      return 9;
      break;
    case "Thus":
      return 8;
      break;
    case "Fri":
      return 6;
      break;
    case "Sat":
      return 8;
      break;
    case "Sun":
      return 9;
      break;
    default:
  }
};

// console.log(getSleepHours('Tue'));
// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getActualSleepHours = () => {
  const totalSleep =
    getSleepHours("Mon") +
    getSleepHours("Tue") +
    getSleepHours("Wed") +
    getSleepHours("Thus") +
    getSleepHours("Fri") +
    getSleepHours("Sat") +
    getSleepHours("Sun");
  return totalSleep;
};
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const x = idealSleepHours - actualSleepHours;
  const y = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log("you got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.llog("you got more sleep than needed " + y + "hours");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("you should get some rest " + x + "hours");
  }
};

calculateSleepDebt();
// const idealSleepHours = getIdealSleepHours(8);
