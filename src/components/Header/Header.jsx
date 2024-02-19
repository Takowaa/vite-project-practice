import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <a className="header__logo" href="#">LOGO</a>
                    <nav className="header__nav">
                        <a className="header__link" href="">Home</a>
                        <a className="header__link" href="">Products</a>
                    </nav>

                </div>
            </header>
        </div>
    );
};

export default Header;