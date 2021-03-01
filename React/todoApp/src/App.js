import React from "react";
import "./style.css";
import Calendar from 'react-calendar';

export default function App() {
  const holidays = [
    {
       date: '1-1-2020',
       name: 'NewYearsEve'
   },
   {
       date: '4-10-2020',
       name: 'GoodFriday'
   },

     {
       date: '2-13-2020',
       name: 'GoodFriday'
   },


  ]

  // const datums = JSON.parse(holidays)
  // console.log(datums)

  const checkMonth = holidays.map((holiday)=> holiday.date.slice(0,2).replace('-', ''));

  const checkDay = holidays.map((holiday)=> holiday.date.slice(2,-5).replace('-', ''));

  console.log( checkDay[1])
  console.log( checkMonth[1])




  return (
    <div>
      <Calendar tileContent= {({ activeStartDate, date, view }) => view === 'month' && date.getMonth() === parseInt(checkMonth[0] - 1) && date.getDate() === parseInt(checkDay[0]) ? <p> hoi</p> : null}/>
      


    </div>
  );
}
