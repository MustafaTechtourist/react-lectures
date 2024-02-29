import React, { useEffect, useState } from 'react'

const HooksExample = () => {
  let [count, setCount] = useState(0);
  let [date, setDate] = useState(new Date());
  let intervalId = '';

  useEffect( () => {
    console.log("setting title");
    document.title = `You have clicked ${count} times`;
}, [count]); // The array with "count" ensures useEffect runs only when the count-state is updated

  useEffect( () => {
    intervalId = setInterval(
      tick, 
      1000); // 1 sec
    console.log("setting interval");

    // Runs when DOM is removed/unmounted
    return () => {
      console.log("clear interval");
      clearInterval(intervalId)
    }
  }, [] // The empty array ensures useEffect runs only once with componentDidMount

  );

  function tick() {
    console.log("tick");
    setDate(new Date());
  }

  return (
    <>
      <div>{date.toLocaleTimeString()}</div>
      <button onClick={() => {setCount(count + 1)}}>Increment: {count}</button>
    </>
  )
}

export default HooksExample