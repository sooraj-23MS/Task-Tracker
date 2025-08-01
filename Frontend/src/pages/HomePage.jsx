import FeatureCard from "../reuseable-components/FeatureCard";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="homePage">
      <div className="hp-container">
        <div className="welcome-section">
          <div className="ws-head">Welcome to Task Tracker</div>
          <div className="ws-body">
            Your one-stop solution to manage tasks efficiently. Create, assign,
            and track tasks with role-based access and real-time updates.
          </div>
          <div className="ws-btn">
            <button>Login</button>
            <button>Get Started</button>
          </div>
        </div>
        <div className="feature-section">
          <div className="fs-head">Key Features</div>
          <div className="fs-body">
            <FeatureCard
              title={"Create & Assign Tasks"}
              desc={
                "Easily define task details, assign them to employees, and monitor progress in real-time."
              }
            />
            <FeatureCard
              title={"Role-Based Access"}
              desc={
                "Admins, Managers, and Employees have customized access to ensure secure and relevant interactions."
              }
            />
            <FeatureCard
              title={"Project Overview Dashboard"}
              desc={
                " Stay updated with dashboards that provide an overview of ongoing and completed tasks."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
