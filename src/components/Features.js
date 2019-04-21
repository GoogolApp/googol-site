import React from 'react'

import Block from './Block'
import phone from '../../static/features/phone.png'
import ParallaxImage from './ParallaxImage'
import Title from './Title'

const Features = ({ id }) => {
  const featureRowClasses = 'flex flex-column justify-around'
  return (
    <Block
      id={id}
      title="Features"
      contentClasses="flex justify-around flex-wrap"
    >
      <div className={featureRowClasses}>
        <Title preset="driftLeft fadeIn">❤️ Feature 1</Title>
        <Title preset="driftLeft fadeIn">⚽️ Feature 2</Title>
        <Title preset="driftLeft fadeIn">📱 Feature 3</Title>
      </div>
      <div className="w-30 tc">
        <ParallaxImage
          preset="zoomInOut fadeIn"
          className="w-100"
          src={phone}
          alt="Phone with logo"
        />
      </div>
      <div className={featureRowClasses}>
        <Title preset="driftRight fadeIn">⌚️ Feature 4</Title>
        <Title preset="driftRight fadeIn">🍻 Feature 5</Title>
        <Title preset="driftRight fadeIn">💣 Feature 6</Title>
      </div>
    </Block>
  )
}

export default Features
