import React from 'react'

function Image(){
    return(
      <div className='deakin-image'>
        <img src={require('./images/deakin.jpg')} alt='Burwood Campus'></img>
      </div>
    )
}

export default Image