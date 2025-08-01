import "./NavBar.css"
export default function NavBar() {
  return (
    <div className="nav">
        <div className="nav-container">
            {/* logo */}
            <div className="logo">
                <div>TaskTracker</div>
            </div>
            {/* link */}
            <div className="nav-links">
                <ul className="links-ul">
                    <li><a href="/">home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
            </div>
            {/* user */}
            <div className="nav-users">
                <a href="/login">Login</a>
            </div>
        </div>
    </div>
    
  )
}
