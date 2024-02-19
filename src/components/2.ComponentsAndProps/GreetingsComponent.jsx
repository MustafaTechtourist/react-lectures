// För att skapa ett skelett för en ny komponents kan vi skriva "rafc"
import React from 'react'

const GreetingsComponent = ({test, name, url}) => {
  return (
    <section>
        <h2>Hej {name}!</h2>
        <img src={url} />
    </section>
  )
}

export default GreetingsComponent
