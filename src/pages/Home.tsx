import classes from './Home.module.css'
import cleverse_card from '../assets/course_card_cleverse.png'
import reactHandsOn_card from '../assets/course_card_react-hands-on.png'
import lock_Icon from '../assets/lock_icon.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      {isLoggedIn ? <Toaster /> : null}
      <div className={classes.container}>
        <Link to={`/course/cleverse`}>
          <div className={classes.card}>
            <img className={classes.image} src={cleverse_card} />
            <p className={!isLoggedIn ? classes.ButtonloginRequired : classes.lockIconDeactive}>Login required</p>
            <div className={classes.cardText}>
              <div className={classes.cardTextUp}>
                <p className={classes.projectName}>Cleverse Academy</p>
                <p className={classes.description}>Live Records</p>
                <p className={classes.description}>Update 31-Oct-2023</p>
                <img className={!isLoggedIn ? classes.lockIconActive : classes.lockIconDeactive} src={lock_Icon} />
              </div>
            </div>
          </div>
        </Link>

        <Link to={`/course/react-hands-on`}>
          <div className={classes.card}>
            <img className={classes.image} src={reactHandsOn_card} />
            <div className={classes.cardText}>
              <div className={classes.cardTextUp}>
                <p className={classes.projectName}>React Hands On By React ไปวันๆ</p>
                <p className={classes.description}>Learn react hooks and another tools</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
