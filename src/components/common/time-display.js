import React from 'react'

export const DisplayTime = () => {
  const date = new Date().getFullYear()
  return (
    <div>
      <div>Contact: Laly Ragimli (214) 335-3849</div>
      <div>&copy; Laly Ragimli {date}</div>
    </div>
  )
}

// export default DisplayTime
