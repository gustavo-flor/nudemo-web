import { Link } from 'react-router-dom'
import Brand from '../Brand'

const AppBar = () => (
  <header className='w-full flex items-center justify-between p-4 border-b'>
    <Link to='/'><Brand /></Link>
  </header>
)

export default AppBar
