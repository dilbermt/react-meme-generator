import './Header.css'
import logo from "../images/Troll Face.png"

function Header(){
    return(
        <header className = "header">
            <img className="logo" src={logo} alt="logo"/>
            <h4 className="header-title">Meme Generator</h4>
        </header>
    )
}

export default Header