import HeaderTitle from "./HeaderTitle"
import * as BiIcons from 'react-icons/bi';

const Header = ({user}) => {
    return (
        <header className='header-wrapper'>
            
            <HeaderTitle title={'OVERVIEW'}/>

            <div className="userLabel">
                <div><p>Hello, <span class="userLogged">{user}</span></p> </div>
{/*             
                <div className="userIcon">
                  <BiIcons.BiUserCircle/>
                </div> */}
            </div>
        </header>
    )
}

export default Header

Header.defaultProps = {
    user: 'user',
}