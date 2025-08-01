import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

export default function MainContentPage() {
  return (
    <div className="maincontentPage">
        <div className="mcp-container">
            <HomePage/>
            <AboutPage/>
        </div>
    </div>
  )
}
