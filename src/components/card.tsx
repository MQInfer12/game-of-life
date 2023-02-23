import React from 'react'

interface Props {
  text: string,
  data: number,
  icon: string,
  background: string,
  color: string
}

const Card = ({ text, data, icon, background, color }: Props) => {
  const colorStyle = {
    color,
    background
  }

  return (
    <div className='card'>
      <i className={icon} style={colorStyle}></i>
      <div className='card-text-container'>
        <h3 className='card-text-title'>{text}:</h3>
        <h3 className='card-text-data'>{data}</h3>
      </div>
    </div>
  )
}

export default Card