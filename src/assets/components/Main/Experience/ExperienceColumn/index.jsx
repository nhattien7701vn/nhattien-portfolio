import React from 'react'
import './index.css'
const ExperienceColumn = ({ columnTitle, columnValue }) => {
  return (
    <div style={{ '--column-value': columnValue }} className='experience-column'>
      <span className='experience-columnTitle'>{columnTitle}</span>
    </div>
  )
}

export default ExperienceColumn
