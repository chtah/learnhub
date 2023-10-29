import classes from './Home.module.css'
import cleverse_card from '../assets/course_card_cleverse.png'
import reactHandsOn_card from '../assets/course_card_react-hands-on.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className={classes.container}>
        <Link to={`/course/cleverse`}>
          <div className={classes.card}>
            <img className={classes.image} src={cleverse_card} />
            <div className={classes.cardText}>
              <div className={classes.cardTextUp}>
                <p className={classes.projectName}>Cleverse</p>
                <p className={classes.description}>Live Records</p>
                <p className={classes.description}>Update 27-Oct-2023</p>
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
