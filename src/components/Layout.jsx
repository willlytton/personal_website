import NavBar from './NavBar';
import Footer from './Footer';
import ArtPage from './pages/ArtPage';

const Layout = ({ children }) => {
    const shouldRenderChild = true;
    return (
        <div className>
            <NavBar />
                <div className="">
                    {children}
        
                </div>
            <Footer />
        </div>
    );
}

export default Layout;