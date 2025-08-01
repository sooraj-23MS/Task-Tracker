import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="ap-container">
        <div className="content-section">
          <div className="cs-head">About Task Tracker</div>
          <div className="cs-body">
            Task Tracker is a smart and intuitive task management tool designed
            for teams of any size. Whether you're a small startup or a growing
            enterprise, Task Tracker empowers managers to delegate effectively,
            employees to stay focused, and admins to maintain control over
            projects.
          </div>
          <div className="subcontent-section">
            <div className="scs-sec">
              <div className="sec-head">Our Mission</div>
              <div className="sec-body">
                Our mission is to simplify task delegation and tracking,
                ensuring teams spend less time managing and more time doing.
              </div>
            </div>
            <div className="scs-sec">
              <div className="sec-head">Why We Built It</div>
              <div className="sec-body">
                We noticed that many businesses struggle with task visibility
                and accountability. Task Tracker was built to bridge that gap
                with a clean, user-friendly interface and robust backend logic.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
