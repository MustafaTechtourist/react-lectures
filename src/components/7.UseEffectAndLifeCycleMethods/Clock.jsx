import React, { useEffect, useState } from 'react'

const Clock = () => {
  let [date, setDate] = useState(new Date());
  let intervalId = '';

  useEffect( () => {
    // Step 1: Runs after rendering & commit
    intervalId = setInterval(
      tick, 
      1000); // Call tick every 1000 ms -> 1 sec
    console.log("setting interval");
    // Step 2: Runs when DOM is removed/unmounted
    return () => {clearInterval(intervalId)}
  }, [] // Steg 3: Dependency list - Empty list means that this useEffect is only triggered once after the first render.

  );

  function tick() {
    setDate(new Date());
  }

  return (
    <div>{date.toLocaleTimeString()}</div>
  )
}

export default Clock