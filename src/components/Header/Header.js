import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    toggleDropdown = () => {
        this.setState({open: !this.state.open})
      }
    render() {
    return(
        <div>
            <header>
                <section className='container'>   
            <div >
                <HamburgerMenu 
                isOpen = {this.state.open} 
                menuClicked = {this.toggleDropdown}
                width={25}
                height={22}
                color='black'/>
            </div>
            {this.state.open
          ? (
            <nav className = 'nav'>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/about' className='nav-links'>About</Link>
                <Link to = '/projects' className='nav-links'>Projects</Link>
                <Link to = '/technologies' className='nav-links'>Technologies</Link>
                <Link to = '/wireframes' className='nav-links'>Wireframes</Link>
                <Link to = '/resume' className='nav-links'>Resume</Link>
            </nav>
            )
            : null}
            </section>
            </header>
        </div>
        )
    }
}
export default withRouter(Header)