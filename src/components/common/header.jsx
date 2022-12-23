import React from 'react'
// import vecteezyVector from '../../images/vecteezyVector.jpg'
import SearchBox from './searchBox'

const Header = (props) => {
  const { handleSearchTerm, handleGoHome } = props

  return (
    <React.Fragment >
      <div ></div>
      <img
      src='https://coloringhome.com/coloring/8T6/L8G/8T6L8GyTE.jpg'
    style={{
          width: '100px',
          height: '150px',
       
        }}
        onClick={handleGoHome}
      />
      <div></div>

      <div  style={{ paddingTop: '30px', paddingRight: '10px' }}>
        <SearchBox handleSearchTerm={handleSearchTerm} />
      </div>
    </React.Fragment>
  )
}

export default Header
