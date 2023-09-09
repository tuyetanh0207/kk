"use client"
import Image from 'next/image'
import styles from './styles/homeStyles.module.css'
import { useState } from 'react'
import { avt1 } from '../../assets/images'
import { moreIcon } from '../../assets/svgs'
import {Sidebar} from './components/sidebar'
export default function Home() {
  const navbarTitle= ['All', 'Important', 'Notes', 'Links']
  const [AllTodayTasks, setAllTodayTasks] = useState([

    {
      name: 'Dashboard Design Implementation',
      status: 'Approved'
    },
    {
      name: 'Create a userflow',
      status: 'In Progress'
    },
    {
      name: 'Application Implementation',
      status: 'In Review'
    },
    {
      name: 'Create a Dashboard Design',
      status: 'In Progress'
    },
    {
      name: 'Create a Web Application Design',
      status: 'Approved'
    },
    {
      name: 'Interactive Design',
      status: 'In Review'
    },
    {
      name: 'Dashboard Design Implementation',
      status: 'Approved'
    },
  ])
  const [UpcomingTasks, setUpcomingTasks] = useState([

    {
      name: 'Dashboard Design Implementation',
      status: 'Waiting'
    },
    {
      name: 'Create a userflow',
      status: 'Waiting'
    },
    {
      name: 'Application Implementation',
      status: 'Waiting'
    },
    {
      name: 'Create a Dashboard Design',
      status: 'Waiting'
    },
  ])
  const [Schedules, setSchedules ] = useState([
    {
      name: 'Product Review',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Design Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    }
    ,
    {
      name: 'Team Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Release Event',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Release Event',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Design Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Design Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Design Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    },
    {
      name: 'Design Meeting',
      staringTime: '08:00',
      endingTime: '09:00 PM',
      images: [avt1,avt1, avt1]

    }
  ])
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.taskContainer}>
        {/* today tasks */}
        <div className={styles.container}>
          <p className={styles.heading1} ></p>
          {/* navbar */}
          <div className={styles.navbar}>
            {navbarTitle.map((ele) => 
            <div className={styles.title}>
              {ele}
            </div>)}
          </div>
          {/* grid */}
          <div className={styles.taskGrid}>
              {
                AllTodayTasks.map((ele)=>(
                <div className={styles.taskRow}>
                  {/* square */}
                  <div className={styles.square}>
                  </div>
                  <p className={styles.taskName}>
                    {ele.name}
                  </p>
                  <div styles={styles.statusApproved}>{ele.status}</div>

                </div>))
              }
          </div>
        </div>
        {/* upcoming tasks */}
        <div className={styles.container}>
          <p className={styles.heading1} ></p>
            <div className={styles.horizonalLine}></div>
          {/* grid */}
          <div className={styles.taskGrid}>
              {
                AllTodayTasks.map((ele)=>(
                <div className={styles.taskRow}>
                  {/* square */}
                  <div className={styles.square}>
                  </div>
                  <p className={styles.taskName}>
                    {ele.name}
                  </p>
                  <div styles={styles.statusApproved}>{ele.status}</div>
                  
                </div>))
              }
          </div>
        </div>
      </div>
      {/* schedule container */}
      <div className={styles.scheduleContainer}>
        <p className={styles.schedule_title}></p>
        {/* schedule grid */}
        <div className={styles.scheduleGrid}>
          {Schedules.map((ele)=>(
            <div className={styles.schedule}>
              <Image src={moreIcon} width={20} height={20}/>
              <p className={styles.time}>{ele.staringTime} - {ele.endingTime}</p>
              <p className={styles.schedule__taskName}>{ele.name}</p>
              <div className={styles.images}>
                {ele.images.map((img)=>
                <Image src={img} width={40} height={40}></Image>)}
              </div>
          </div>
          ))}
              
        </div>
      </div>
    </div>
  )
}
