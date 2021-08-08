import './Menu.scss';
const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Accueil</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#formation">Formation</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#career">Experiences Pro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#enseignement">Enseignement</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Projets</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;