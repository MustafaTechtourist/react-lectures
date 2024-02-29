import { useState } from 'react';

import './App.css';
import Jsx from './components/1.JSX/Jsx';
import GreetingsComponent from './components/2.ComponentsAndProps/GreetingsComponent';
import Comment from './components/2.ComponentsAndProps/comment/Comment';
import UserInfo from './components/2.ComponentsAndProps/comment/UserInfo';
import Avatar from './components/2.ComponentsAndProps/comment/Avatar';
import ClickEvent from './components/4.Eventhandler/ClickEvent';
import UseStateExample from './components/5.UseStateHook/UseStateExample';
import Blog from './components/6.ListsAndKeys/Blog';
import Clock from './components/7.UseEffectAndLifeCycleMethods/Clock';
import HooksExample from './components/7.UseEffectAndLifeCycleMethods/HooksExample';


function App() {
  {/* State belongs to lecture "7. LifeCycle Methods And UseEffect" */}
  const [displayHooksExample, setDisplayHooksExample] = useState(true);

  {/* Object belongs to lecture "2. Components and Props" */}
  {/* const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React! Allthough its pretty confusing',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  }; */}

  return (
    <>
      {/* 7. UseEffectAndLideCycleMethods */}
      {displayHooksExample && <HooksExample />}
      <button onClick={() => {setDisplayHooksExample(!displayHooksExample)}}>Show/Hide component</button>

      
      {/* <Clock /> */}

      {/* 6. ListsAndKeys */}
      {/* < Blog /> */}

      {/* 5. Use State Hook */}
      {/* <UseStateExample /> */}

      {/* 4. Event handler  */}
      {/* <ClickEvent /> */}

      {/* 3. Conditional rendering */}
      {/* <PackList /> */}

      {/* 2. Components and Props */}
      {/* Comment Component */}
      {/* <Avatar author={comment.author} />
      <UserInfo author={comment.author} />
      <Comment author={comment.author} text={comment.text} date={comment.date} />
      <Comment author={comment.author} text={comment.text} date={comment.date} /> */}

      {/* Greeting Component */}
      {/* <GreetingsComponent name="Lin Lanying" url="https://i.imgur.com/1bX5QH6.jpg" />
      <GreetingsComponent name="Anna" url="https://i.imgur.com/YfeOqp2.jpg" /> */}

      {/* 1. JSX examples */}
      {/* <Jsx /> */}
    </>
  )
}

export default App
