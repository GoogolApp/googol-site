import React from 'react'

import Block from './Block'
import Person from './Person'

import daniyel from '../../static/team/googol-team-daniyel.png'
import igor from '../../static/team/googol-team-igor.png'
import maia from '../../static/team/googol-team-maia.png'
import matheus from '../../static/team/googol-team-matheus.png'
import vinicius from '../../static/team/googol-team-vinicius.png'

const Team = ({ id }) => {
  return (
    <Block
      id={id}
      title="Meet our team"
      contentClasses="flex flex-wrap justify-center"
    >
      <Person picture={daniyel} name="Daniyel Rocha" job="Frontend" />
      <Person picture={igor} name="Igor Castor" job="Frontend" />
      <Person picture={maia} name="Matheus Maia" job="Backend" />
      <Person
        picture={matheus}
        name="Matheus Procópio"
        job="Frontend & Designer"
      />
      <Person
        picture={vinicius}
        name="Vinicius Agostini"
        job="Frontend & Backend"
      />
    </Block>
  )
}

export default Team
