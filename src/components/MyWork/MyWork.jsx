import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>

      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">

        {mywork_data.map((work, index) => {
          return (

            <div className="work-card" key={index}>

              <a href={work.repo_link} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} />
              </a>

              <h3>{work.w_name}</h3>

            </div>

          )
        })}

      </div>

    </div>
  )
}

export default MyWork;