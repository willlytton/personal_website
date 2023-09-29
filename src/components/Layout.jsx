import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className>
            <NavBar />
                <div>
                    {children}
                </div>
            <Footer />
        </div>
    );
}

export default Layout;