const timeStr = '02:00 PM';
const secondTimeStr = '11:45 PM';
const convertTime = timeStr => {
   const [time, modifier] = timeStr.split(' ');
   let [hours, minutes] = time.split(':');
   if (hours === '12') {
      hours = '00';
   }
   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }
   return `${hours}:${minutes}`;
};
console.log(convertTime(timeStr));
console.log(convertTime(secondTimeStr));