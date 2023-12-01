import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import classes from './CourseCleverse.module.css'
import React, { useEffect, useState } from 'react'
//import cleverse_logo from '../assets/cleverse_logo.png'
import w1_logo from '../assets/w1_icon.svg'
import w2_logo from '../assets/w2_icon.svg'
import w3_logo from '../assets/w3_icon.svg'
import w4_logo from '../assets/w4_icon.svg'
import w6_logo from '../assets/w6_icon.svg'
import w7_logo from '../assets/w7_icon.svg'
import w8_logo from '../assets/w8_icon.svg'
import cleverse_logo from '../assets/cleverse_logo.png'

import useCourseGet from '../hooks/useCourseGet'

const { Sider, Content } = Layout

//For update date

const CourseCleverse = () => {
  const [idArray, setIdArray] = useState('0,0,0')
  const [hideLandingPage, setHideLandingPage] = useState(false)
  const [isFullScreen, setFullScreen] = useState(false)
  const { newCourse } = useCourseGet()

  let updateDate = ''
  const idToArray = idArray.split(',').map((x) => +x)

  let topicVideoUrl = ''
  let topicDescription = ''

  if (newCourse !== null) {
    updateDate = newCourse.course_update_date
    topicVideoUrl = newCourse.menu[idToArray[0]].submenu[idToArray[1]].topic[idToArray[2]].topic_url
    topicDescription = newCourse.menu[idToArray[0]].submenu[idToArray[1]].topic[idToArray[2]].topic_description
  }

  const handlerFullScreen = () => {
    return setFullScreen(true)
  }

  const handlerExitFullScreen = () => {
    return setFullScreen(false)
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullScreen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const items1: MenuProps['items'] = [w1_logo, w2_logo, w3_logo, w4_logo, w6_logo, w7_logo, w8_logo].map((icon, i) => {
    const key = String(newCourse && newCourse.menu[i].id)

    return {
      key: key,
      icon: React.createElement('img', {
        src: icon,
        style: {
          width: '18px',
        },
      }),
      label: `${newCourse && newCourse.menu[i].menu_title}`,

      children:
        newCourse &&
        newCourse.menu[i].submenu.map((submenu, j) => {
          const key = String(newCourse.menu[i].submenu[j].id)
          return {
            key: `submenu${key}`,
            label: `${submenu.submenu_title}`,

            children:
              newCourse &&
              newCourse.menu[i].submenu[j].topic.map((topic, k) => {
                return {
                  key: `${i},${j},${k}`,
                  label: `${topic.topic_title}`,
                }
              }),
          }
        }),
    }
  })

  return (
    <div>
      <Layout>
        <Sider width={'20vw'} className={classes.sider} breakpoint="md">
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0, fontSize: '1.1vw' }}
            items={items1}
            onClick={({ key }) => {
              setIdArray(key), setHideLandingPage(true)
            }}
          ></Menu>
        </Sider>
        <Content
          className={classes.content}
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <div className={classes.contentTitle}></div>
          <div>
            <div className={`${classes.landingContent} ${hideLandingPage ? classes.hideLandingPage : null}`}>
              <h1>Cleverse Academy Live Records</h1>
              <h2>{updateDate}</h2>
              <p>Full Screen by right click on video and selected -Show all controls-</p>
              <img src={cleverse_logo} />
            </div>
          </div>

          <div className={`${classes.videoContent} ${hideLandingPage ? null : classes.hideLandingPage}`}>
            <iframe
              className={`${isFullScreen ? classes.openFullScreen : null}`}
              src={topicVideoUrl}
              allowFullScreen
            ></iframe>
            <button className={classes.fullScreenButton} onClick={handlerFullScreen}>
              Full Screen
            </button>
            <button
              className={`${isFullScreen ? classes.exitFullScreenButton : classes.exitFullScreenButtonHide}`}
              onClick={handlerExitFullScreen}
            >
              Exit Full Screen
            </button>
            <p>{topicDescription}</p>
            <p>Basic Web Components / Initial Setup for Developers / Introduction to Terminal / JavaScript</p>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default CourseCleverse
