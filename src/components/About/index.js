import React from 'react'
import Block from '../Block/index'
import rocket from '../../../static/about/rocket.png'

const About = ({ id }) => {
  return (
    <Block
      id={id}
      title="About"
      contentClasses="flex justify-between flex-wrap"
    >
      <div className="w-50">
        <img className="w-80 pt5" atl="Rocket" src={rocket} />
      </div>

      <div className="w-50">
        <h1>Loren Ipsun</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
          metus, sodales quis est id, tristique egestas quam. Fusce ultricies
          ligula non libero gravida iaculis. Quisque maximus faucibus purus eu
          malesuada. Fusce massa sapien, feugiat vitae tortor id, posuere
          facilisis metus. Fusce in erat sapien. Phasellus molestie lectus vel
          quam fringilla, vitae tincidunt sem scelerisque. Mauris eu lacus
          fermentum, varius nibh ac, fringilla tortor. Nulla metus purus,
          elementum quis pulvinar at, suscipit nec massa. Sed lobortis finibus
          est, non vestibulum sem lobortis non. Nulla ac pellentesque nibh, quis
          porttitor dolor. Nunc arcu turpis, finibus vitae metus et, tincidunt
          auctor libero. Sed vitae maximus nisl. Nullam luctus massa augue, a
          laoreet orci vulputate eu. Fusce varius luctus eros sed sagittis.
          Fusce mi metus, pretium quis risus eget, congue hendrerit libero.
          Curabitur fringilla lectus nisi, nec eleifend tortor consequat
          pellentesque.
        </p>
        <p>
          Vestibulum erat orci, dignissim eget tempor vel, semper non velit.
          Curabitur vehicula dictum mauris, vel congue nisi finibus id. Morbi
          lacus ex, fermentum et imperdiet eget, tempor at est. Aliquam
          condimentum ornare molestie. Suspendisse id rutrum orci, sed consequat
          urna. Aliquam nec eros vitae sem laoreet aliquam at vitae nulla. Cras
          bibendum enim augue, in fringilla odio blandit non. Sed eget magna
          diam. Cras nec purus feugiat, auctor libero a, porta nibh. Morbi sit
          amet rhoncus est, non pellentesque ante. Mauris eros purus, placerat
          fringilla blandit ac, dictum non diam.
        </p>
      </div>
    </Block>
  )
}

export default About
