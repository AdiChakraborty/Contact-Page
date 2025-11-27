
// import ` from './Navigation.module.css'
import styles from '../Navigation/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`} >
      <div className='logo'>
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mBuq6-S9sYjiQx5FrfF6SANdllGEJ8pyJgxePBJUoE0w=s900-c-k-c0x00ffffff-no-rj" alt="" width="120px" />
      </div>
      <ul>
        <li className='home'>Home</li>
        <li className='about'>About</li>
        <li className='contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation


