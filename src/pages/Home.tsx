import classes from './Home.module.css'
import cleverse_card from '../assets/course_card_cleverse.png'
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
                <p className={classes.description}>Learn full stack developer</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
