const Navbar = () => {
    return ( 
        <>
        <header>
            <div id="header">
                <div className="header-logo">
                <a href="indext.html"><img src="/logo.png" alt="" /></a>
                </div>
                <div className="header-list">
                <nav className="header-list-nav">
                    <ul>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="header-list-icon">
                    <a href=""><i className="fa fa-bag-shopping"></i></a>
                </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Navbar;