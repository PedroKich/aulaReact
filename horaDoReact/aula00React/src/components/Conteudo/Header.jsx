import './Header.css'
import { CultOfTheLamb } from '../Redcrown'

function Header() {
  const titleIcon = {
    width: '50px',
    height: '50px'
  };
  return (
    <div className="header-container">
      <h1>Quagsire</h1>
      <CultOfTheLamb style={titleIcon}/>
    </div>
  )
}

export default Header
