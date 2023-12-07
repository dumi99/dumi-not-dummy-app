import './Header.css';
import { NavLink } from 'react-router-dom';
import burger from '../../assets/burger.svg';
import close from '../../assets/close.svg';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Header = () => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawer = () => {
        document.body.classList.toggle('active-drawer')
        setDrawer(!drawer);
    }

    return (
        <header className='navbar'>
            <nav className='desktop'>
                <img className='logo' src={logo} alt='' />
                <Menu />
            </nav>
            <nav className='mobile'>
                <img className='logo' src={logo} alt='' />
                <img className='burger-menu' onClick={handleDrawer} src={burger} alt='' />
                <Drawer active={drawer} setActive={setDrawer} />
            </nav>
        </header>
    )
}

const Menu = ({drawerControl}) => {

    const handleDrawer = () => {
        try {
            drawerControl(false)
            document.body.classList.toggle('active-drawer');
        } catch {

        }
    }
    return (
        <ul className='nav-menu'>
            <li><NavLink onClick={handleDrawer} className={({ isActive }) => isActive ? "active" : ""} to={'/'}>Homepage</NavLink></li>
            <li><NavLink onClick={handleDrawer} className={({ isActive }) => isActive ? "active" : ""} to={'/my-contributions'}>My contributions</NavLink></li>
            <li><NavLink onClick={handleDrawer} className={({ isActive }) => isActive ? "active" : ""} to={'/projects-examples'}>Project examples</NavLink></li>
            <li><NavLink onClick={handleDrawer} className={({ isActive }) => isActive ? "active" : ""} to={'/about-me'}>About me</NavLink></li>
            <li><NavLink onClick={handleDrawer} className={({ isActive }) => isActive ? "active" : ""} to={'/contact-me'}>Contact</NavLink></li>
        </ul>
    )
}

const Drawer = ({active, setActive}) => {
    const handleClose = () => {
        document.body.classList.toggle('active-drawer');
        setActive(!active)
    }

    return (
        <div className={(active ? 'active ' : 'closed ') + 'drawer-menu'}>
            <img onClick={handleClose} className='close-drawer' src={close} alt='' />
            <Menu drawerControl={setActive} />
        </div>
    )
}

export default Header;