import React from 'react'
import Block from '../Block/index'
import phone from '../../../static/features/phone.png'

const Features = ({ id }) => {
  const featureRowClasses = 'flex flex-column justify-around'
  return (
    <Block
      id={id}
      title="Features"
      contentClasses="flex justify-around flex-wrap"
    >
      <div className={featureRowClasses}>
        <h1>❤️ Feature 1</h1>
        <h1>⚽️ Feature 2</h1>
        <h1>📱 Feature 3</h1>
      </div>
      <div className="w-30 tc">
        <img className="w-80" src={phone} alt="Phone with logo" />
      </div>
      <div className={featureRowClasses}>
        <h1>⌚️ Feature 4</h1>
        <h1>🍻 Feature 5</h1>
        <h1>💣 Feature 6</h1>
      </div>
    </Block>
  )
}

export default Features
