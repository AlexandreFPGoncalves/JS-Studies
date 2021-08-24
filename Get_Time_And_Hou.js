const newDate = new Date();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

const currentDate = () => {
  return "Today is: " + daylist[newDate.getDay()];
}

const currentTime = () => {
  
  const MT = () => newDate.getHours() < 12 ? "AM" : "PM";
  
  return "It is currently: " + (newDate.getHours()+1)+":"+newDate.getMinutes()+":"+newDate.getSeconds() + MT();
}


console.log(currentDate());
console.log(currentTime());