import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

/*
export let date = dayjs();
const data = date.add(6, 'days')*/

  function isWeekend(date){
  //date = dayjs();
  const dateString = date.format('dddd');
  if(dateString === 'Saturday' || dateString === 'Sunday'){
    console.log("It's a weekend")
  }else{
    console.log("It's not a weekend")
  }
}

export default isWeekend
