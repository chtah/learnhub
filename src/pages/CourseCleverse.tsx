import { Layout, Menu } from 'antd'
import classes from './CourseCleverse.module.css'
import { useState } from 'react'

const { Sider, Content } = Layout

const CourseCleverse = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('item0')

  const componentSwitch = (key: string) => {
    switch (key) {
      case 'item0':
        return (
          <div className={classes.videoContent}>
            <h1>Welcome</h1>
            <p>Full Screen by right click on video and selected -Show all controls-</p>
          </div>
        )

      //Week 1
      case '11sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxpZ-F3diRS9B5nxg?e=6ShjSX" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>Basic Web Components / Initial Setup for Developers / Introduction to Terminal / JavaScript</p>
          </div>
        )
      case '12sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxoMCPYOMJoOWrdUQ?e=RVFfya" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>
              JavaScript / Recap Exercise Solution / Array / Exercise (Array) / GIT 101 / Data Types / Loop / Exercise
              (Loop)
            </p>
          </div>
        )
      case '12sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxqkVWBn-HRRUuKKQ?e=PRCPhu" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>
              JavaScript / Recap Exercise Solution / Array / Exercise (Array) / GIT 101 / Data Types / Loop / Exercise
              (Loop)
            </p>
          </div>
        )
      case '13sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxv6uRZq9WtyuwjwA?e=tcoexJ" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Callback Function / Exercise (Callback function) / Iterators / Exercise (Iterators)</p>
          </div>
        )
      case '14sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxrxJE-s3uZc8N7yQ?e=WZmajJ" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>
              JavaScript / Objects / Exercise (Objects) / Destructuring / Spread and Rest operator / Foundation Exercise
            </p>
          </div>
        )
      case '14sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxsamwAr48tBnmISw?e=ePdFUK" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>
              JavaScript / Objects / Exercise (Objects) / Destructuring / Spread and Rest operator / Foundation Exercise
            </p>
          </div>
        )
      case '15sep1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxuT-irNx6edWACCA?e=nJEk7J" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )
      case '15sep2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxtMKqHwgnlVwgAyQ?e=KnVcM7" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )
      case '15sep3':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxxcFixOe0NcN3SiQ?e=5xMWbh" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )
      case '15sep4':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxwjEdpvH4mri_coA?e=dMKHNB" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )
      case '15sep5':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxy9XUGHZB9HxjqpA?e=QR14Op" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )
      case '15sep6':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxz1QxmcFX7e-Pvgw?e=aSvjMP" allowFullScreen></iframe>
            <p>Foundation</p>
            <p>JavaScript / Foundation Exercise (cont.)</p>
          </div>
        )

      //Week 2
      case '18sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxfoixuweNVOjeWcw?e=pHb8Gp" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>
              HTML (Elements / Forms / Hands-on 1) / CSS (Selectors / Box Model / Common CSS properties / Hands-on 2)
            </p>
          </div>
        )
      case '18sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxisZlr5DsUfP76jw?e=eszy2s" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>
              HTML (Elements / Forms / Hands-on 1) / CSS (Selectors / Box Model / Common CSS properties / Hands-on 2)
            </p>
          </div>
        )
      case '19sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxgbOkSLtu_xseDEg?e=6kRgdd" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>CSS / Combinator selector / CSS Layout (Flexbox and Grid) / Hands-on 3</p>
          </div>
        )
      case '19sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxhGJFknAHtMaldyw?e=yJCG6U" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>CSS / Combinator selector / CSS Layout (Flexbox and Grid) / Hands-on 3</p>
          </div>
        )
      case '20sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxkQwpzytdbMiSd8w?e=GARTnv" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>CSS / Responsive / Advance CSS and CSS Frameworks / Hands-on 4</p>
          </div>
        )
      case '21sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxlIiLXYzbsxo9vyg?e=RT0mmf" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>JS DOM / DOM manipulation / Event handler / Hands-on 5 / Hands-on 5 Solution explaination</p>
          </div>
        )
      case '21sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxjpXXrbNoo4X2wlg?e=gCeimt" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>JS DOM / DOM manipulation / Event handler / Hands-on 5 / Hands-on 5 Solution explaination</p>
          </div>
        )
      case '22sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxmnpR6pJZ94K6cHA?e=cobibo" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>
              JavaScript Promise / JS DOM (Fetch API Method (GET, POST etc.) / HTTP Message (Req, Res) / JSON Hands-on
              6)
            </p>
          </div>
        )
      case '22sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbxn-pmffEEevfYEwg?e=K1cZBI" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>
              JavaScript Promise / JS DOM (Fetch API Method (GET, POST etc.) / HTTP Message (Req, Res) / JSON Hands-on
              6)
            </p>
          </div>
        )

      //Week 3
      case '25sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0U7IslUhbMpELIBA?e=BHFT2P" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>JS DOM / Hands-on 6 Solution explanation / Auth / Hands-on 7 / Tech Test (1.5 hrs)</p>
          </div>
        )
      case '25sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0TYBtRLIwItQA9xw?e=y17G7S" allowFullScreen></iframe>
            <p>Front End - Essential</p>
            <p>JS DOM / Hands-on 6 Solution explanation / Auth / Hands-on 7 / Tech Test (1.5 hrs)</p>
          </div>
        )
      case '26sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0VYJKOaW7fi75YgA?e=srG70A" allowFullScreen></iframe>
            <p>TypeScript</p>
            <p>TypeScript / Introduction, setup / Types / Exercise</p>
          </div>
        )
      case '26sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0WAa-9sPl5odONyA?e=D0hr0V" allowFullScreen></iframe>
            <p>TypeScript</p>
            <p>TypeScript / Introduction, setup / Types / Exercise</p>
          </div>
        )
      case '27sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0Xp23SujwrdIcKPQ?e=BIqmwa" allowFullScreen></iframe>
            <p>TypeScript</p>
            <p>TypeScript / Interface / Exercise</p>
          </div>
        )
      case '28sepaft1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0ZH0JZqNOWc9clHw?e=LFtVDd" allowFullScreen></iframe>
            <p>TypeScript</p>
            <p>TypeScript / Generics</p>
          </div>
        )
      case '28sepaft2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0YyaSHV78bPche3Q?e=UWGh2J" allowFullScreen></iframe>
            <p>TypeScript</p>
            <p>Tech Test Solution + JavaScript Fundamental Review</p>
          </div>
        )
      case '29sepmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0ag7166P0l2wWTsA?e=RkklXv" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>
              React (Introducing to React / Install React project / Walkthrough project files and structure / React
              Component) / React cont. (Create a first component Styling in react Mini Exercise 1) / GIT 101 (Git fetch,
              pull / Git Branch)
            </p>
          </div>
        )
      case '29sepaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0cg4Z9-TbYqR6N7w?e=QTwGT5" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>
              React (Introducing to React / Install React project / Walkthrough project files and structure / React
              Component) / React cont. (Create a first component Styling in react Mini Exercise 1) / GIT 101 (Git fetch,
              pull / Git Branch)
            </p>
          </div>
        )

      //Week 4
      case '2octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0barJcNVJNAjOzdg?e=iBnXjB" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Props / Rendering List / Event handler / Hands-on 8 / Hands-on 8 Solution</p>
          </div>
        )
      case '2octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0dsDawZXOYyA7YvA?e=nPTr1k" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Props / Rendering List / Event handler / Hands-on 8 / Hands-on 8 Solution</p>
          </div>
        )
      case '3octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0eYN6KTjYmPYsCAQ?e=8zTBNa" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / useState / Mini Exercise 3 / useRef / Form input / Hands-on 9</p>
          </div>
        )
      case '3octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0fCyOWlixRSO872g?e=Y58l2D" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / useState / Mini Exercise 3 / useRef / Form input / Hands-on 9</p>
          </div>
        )
      case '4octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0gp5Rj-BQsdRpT8g?e=ZJoAVg" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Hands-on 9 Solution / DTO / useEffect / Fetch data / Mini Exercise 4 / Custom hooks</p>
          </div>
        )
      case '5octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0hKxmAweJuabiAUA?e=TTux2N" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Router / Mini Exercise 5 / Mini Exercise 6</p>
          </div>
        )
      case '5octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0j1Mv91IZCKX5veA?e=684BCH" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Router / Mini Exercise 5 / Mini Exercise 6</p>
          </div>
        )
      case '6octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0i6u-qcyDwoUFTNA?e=hGdtuo" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Context</p>
          </div>
        )
      case '6octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0knFPux9cATkNLQQ?e=KMZi11" allowFullScreen></iframe>
            <p>Front End - Framework</p>
            <p>React / Context</p>
          </div>
        )

      //Week 6
      case '16octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb00ZjbZue4YNpID9g?e=163VF1" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental - Network</p>
            <p>
              Prologue: Abstraction + packages.json / Docker installation / pnpm installation / HTTP Protocol /
              Request-Line / Request-URI / Query String / Express initialization
            </p>
          </div>
        )
      case '16octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0BmT6p6PCJ5hid6Q?e=B8wbmZ" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental - Network</p>
            <p>
              Prologue: Abstraction + packages.json / Docker installation / pnpm installation / HTTP Protocol /
              Request-Line / Request-URI / Query String / Express initialization
            </p>
          </div>
        )
      case '17octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb03DsrYfbSIBk8Stw?e=1g90nN" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>
              Query string exercise solution / HTTP Protocol (Cont.) / Params / HTTP-Version / Response / Status-Code [
              reason-phrase ] / Body / Response Headers / Request Headers / POST, PUT/PATCH, DELETE along with Body /
              Hands-on #1: HTTP Protocol
            </p>
          </div>
        )
      case '17octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb04f5jNgLviE3Gkxg?e=adGxYh" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>
              Query string exercise solution / HTTP Protocol (Cont.) / Params / HTTP-Version / Response / Status-Code [
              reason-phrase ] / Body / Response Headers / Request Headers / POST, PUT/PATCH, DELETE along with Body /
              Hands-on #1: HTTP Protocol
            </p>
          </div>
        )
      case '18octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0u4vKnb5Od9bAQOg?e=RtGPhy" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>Express initialization, recap pnpm & typescript / PUT/PATCH/DELETE TODO</p>
          </div>
        )
      case '19octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb05-JyZxSMPC6S_dg?e=eOZp3J" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>
              OOP Day 1 / Class (methods, attribute, public / private) / Refactor a single-file TODO server / TODO with
              the Repository
            </p>
          </div>
        )
      case '20octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb08R13x_J60dIwYvw?e=IkmKuv" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>
              Why we need to write express.js by OOP way / OOP Day 2 / Interface & Inheritance / Hands-on #2: TODO List
            </p>
          </div>
        )
      case '20octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0AvAaOEk_OOuxeLg?e=CxChXC" allowFullScreen></iframe>
            <p>Back-end Software Engineering Fundamental</p>
            <p>
              Why we need to write express.js by OOP way / OOP Day 2 / Interface & Inheritance / Hands-on #2: TODO List
            </p>
          </div>
        )

      //Week 7
      case '24octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0lfEyIQUEvx-C4Pg?e=La56Y6" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '24octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0mA5WnukkFqo9s0w?e=JI5EAs" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '25octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0oKgMdxIrdT0otfA?e=frzt58" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '26octmor1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0nRWr15JaKaTys_A?e=fx66YS" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '26octmor2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0pbgAxofClL1lzSw?e=ec49ps" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '26octaft1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0qYlH1NDg9tcy_Fw?e=f8Lqla" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '26octaft2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0rJ93fQR4MURqWSg?e=ccCge9" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '27octmor':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0s6qbwDI-SHZ9gxw?e=EqcINh" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )
      case '27octaft':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgb0tjhz4XyAoKWsOtg?e=GTNMlA" allowFullScreen></iframe>
            <p>Back-endDatabase</p>
            <p></p>
          </div>
        )

      //Industry Talk
      case 'industrytalk1':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx13jc4ROJHHdZCtw?e=AgP7TZ" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk2':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx3EqFxjdAfohDZEA?e=3UAGbx" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk3':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx2ny9snw7vIt-q4g?e=kdJD6n" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk4':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx53q8J7AS4b-1eGQ?e=su7b3z" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk5':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx6hVTtAk9MqTD2cw?e=9F2Vat" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk7':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx4prcvAyF7nrfnEA?e=mrNnT7" allowFullScreen></iframe>
          </div>
        )
      case 'industrytalk8':
        return (
          <div className={classes.videoContent}>
            <iframe src="https://1drv.ms/v/s!An7xDCPOMleAgbx7rvufaUwyVobCKw?e=ZYhLdt" allowFullScreen></iframe>
          </div>
        )

      default:
        break
    }
  }

  return (
    <div>
      <Layout>
        <Sider width={280} className={classes.sider}>
          <Menu mode="inline" onClick={(e) => setSelectedMenuItem(e.key)} style={{ height: '100%', borderRight: 0 }}>
            <Menu.SubMenu title="Week 1">
              <Menu.SubMenu title="11-SEP">
                <Menu.Item key="11sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="12-SEP">
                <Menu.Item key="12sepmor">Morning</Menu.Item>
                <Menu.Item key="12sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="13-SEP">
                <Menu.Item key="13sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="14-SEP">
                <Menu.Item key="14sepmor">Morning</Menu.Item>
                <Menu.Item key="14sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="15-SEP">
                <Menu.Item key="15sep1">Part 1 - No.6 Solution</Menu.Item>
                <Menu.Item key="15sep2">Part 2 - No.12 Solution</Menu.Item>
                <Menu.Item key="15sep3">Part 3 - No.14 Solution</Menu.Item>
                <Menu.Item key="15sep4">Part 4 - No.18 Solution</Menu.Item>
                <Menu.Item key="15sep5">Part 5 - No.21 Solution</Menu.Item>
                <Menu.Item key="15sep6">Part 6 - No.1 Medium Solution</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Week 2">
              <Menu.SubMenu title="18-SEP">
                <Menu.Item key="18sepmor">Morning</Menu.Item>
                <Menu.Item key="18sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="19-SEP">
                <Menu.Item key="19sepmor">Morning</Menu.Item>
                <Menu.Item key="19sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="20-SEP">
                <Menu.Item key="20sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="21-SEP">
                <Menu.Item key="21sepmor">Morning</Menu.Item>
                <Menu.Item key="21sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="22-SEP">
                <Menu.Item key="22sepmor">Morning</Menu.Item>
                <Menu.Item key="22sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Week 3">
              <Menu.SubMenu title="25-SEP">
                <Menu.Item key="25sepmor">Morning</Menu.Item>
                <Menu.Item key="25sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="26-SEP">
                <Menu.Item key="26sepmor">Morning</Menu.Item>
                <Menu.Item key="26sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="27-SEP">
                <Menu.Item key="27sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="28-SEP">
                <Menu.Item key="28sepaft1">Afternoon - 1</Menu.Item>
                <Menu.Item key="28sepaft2">Afternoon - 2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="29-SEP">
                <Menu.Item key="29sepmor">Morning</Menu.Item>
                <Menu.Item key="29sepaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Week 4">
              <Menu.SubMenu title="2-OCT">
                <Menu.Item key="2octmor">Morning</Menu.Item>
                <Menu.Item key="2octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="3-OCT">
                <Menu.Item key="3octmor">Morning</Menu.Item>
                <Menu.Item key="3octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="4-OCT">
                <Menu.Item key="4octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="5-OCT">
                <Menu.Item key="5octmor">Morning</Menu.Item>
                <Menu.Item key="5octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="6-OCT">
                <Menu.Item key="6octmor">Morning</Menu.Item>
                <Menu.Item key="6octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Week 6">
              <Menu.SubMenu title="16-OCT">
                <Menu.Item key="16octmor">Morning</Menu.Item>
                <Menu.Item key="16octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="17-OCT">
                <Menu.Item key="17octmor">Morning</Menu.Item>
                <Menu.Item key="17octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="18-OCT">
                <Menu.Item key="18octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="19-OCT">
                <Menu.Item key="20octmor">Morning</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="20-OCT">
                <Menu.Item key="16octmor">Morning</Menu.Item>
                <Menu.Item key="16octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Week 7">
              <Menu.SubMenu title="24-OCT">
                <Menu.Item key="24octmor">Morning</Menu.Item>
                <Menu.Item key="24octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="25-OCT">
                <Menu.Item key="25octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="26-OCT">
                <Menu.Item key="26octmor1">Morning - 1</Menu.Item>
                <Menu.Item key="26octmor2">Morning - 2</Menu.Item>
                <Menu.Item key="26octaft1">Afternoon - 1</Menu.Item>
                <Menu.Item key="26octaft2">Afternoon - 2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="27-OCT">
                <Menu.Item key="27octmor">Morning</Menu.Item>
                <Menu.Item key="27octaft">Afternoon</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.SubMenu title="Industry Talk">
              <Menu.Item key="industrytalk1">Industry Talk 1 - By Prem (Cleverse)</Menu.Item>
              <Menu.Item key="industrytalk2">Industry Talk 2 - By Wichai (Wisesight)</Menu.Item>
              <Menu.Item key="industrytalk3">
                Industry Talk 3 - Career Path, What Employers Look For in Junior Dev
              </Menu.Item>
              <Menu.Item key="industrytalk4">Industry Talk 4 - Feedback like a Jedi by Yot, Thoughtworks</Menu.Item>
              <Menu.Item key="industrytalk5">
                Industry Talk 5 - Remote Working Opportunity, React in Real World
              </Menu.Item>
              <Menu.Item key="industrytalk7">Industry Talk 7 - Journey from Non-Computer Sci Grad to CTO</Menu.Item>
              <Menu.Item key="industrytalk8">Industry Talk 8 - How software developers work in teams</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Content
          className={classes.content}
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <div className={classes.contentTitle}></div>
          <div>{componentSwitch(selectedMenuItem)}</div>
        </Content>
      </Layout>
    </div>
  )
}

export default CourseCleverse
