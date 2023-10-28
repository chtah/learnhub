import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <Link className={classes.logo} to={'/'}>
        <p className={classes.logoName}>LearnHub</p>
      </Link>

      {/* <div className={classes.navRight}>
        <>
          <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/project">
            Login
          </NavLink>
        </>
      </div> */}
    </div>
  )
}

export default Navbar
