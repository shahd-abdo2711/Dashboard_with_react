
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { FaHome, FaUser, FaEnvelope, FaClock, FaTasks, FaUsers, FaCog, FaLifeRing, FaShieldAlt } from 'react-icons/fa';

function App() {


  return (
    <>
      <div className="sidebar">
         <h2>Dashboard</h2>
              <a href="#"><FaHome /> Home</a>
              <a href="#"><FaUser /> Profile</a>
              <a href="#"><FaEnvelope /> Messages</a>
              <a href="#"><FaClock /> History</a>
              <a href="#"><FaTasks /> Tasks</a>
              <a href="#"><FaUsers /> Communities</a>
              <a href="#"><FaCog /> Settings</a>
              <a href="#"><FaLifeRing /> Support</a>
              <a href="#"><FaShieldAlt /> Privacy</a>
      </div>

      <div className="main">
        {/* Top bar */}
        <div className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="topbar-right">
            <i className="fa fa-bell"></i>
            <span>Morgan Oakley (@morgan)</span>
            <img src="../public/user1.jpeg" alt="Avatar" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <div className="topbar-buttons">
              <button>New</button>
              <button>Upload</button>
              <button>Share</button>
            </div>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="greeting">
          <div className="avatar-circle">
            <img src="../public/user1.jpeg" alt="avatar" />
          </div>
          <div className="greeting-text">
            <p>Hi there,</p>
            <h2>Morgan Oakley (@morgan)</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="project-section">
          <div className="projects">
            <h3>Your Projects</h3>
            <div className="project-grid">
              {/* Project Cards */}
              {[
                "Super Cool Project",
                "Less Cool Project",
                "Impossible App",
                "Easy Peasy App",
                "Ad Blocker",
                "Money Maker"
              ].map((title, i) => (
                <div className="card" key={i}>
                  <h4>{title}</h4>
                  <p>Project description goes here...</p>
                   <div className="icons">
      <FontAwesomeIcon icon={faStar} style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faCodeBranch} />
    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Right */}
          <div className="sidebar-right">
            <section>
              <h4>Announcements</h4>
              <ul>
                <li><strong>Site Maintenance</strong><br />Vestibulum condimentum tellus...</li>
                <li><strong>Community Share Day</strong><br />Nam vel lectus tincidunt...</li>
                <li><strong>Updated Privacy Policy</strong><br />Phasellus efficitur nisi...</li>
              </ul>
            </section>

            <section>
              <h4>Trending</h4>
              <ul>
                {[
                  { user: "tegan", desc: "World Peace Builder", img: "../public/user1.jpeg" },
                  { user: "morgan", desc: "Super Cool Project", img: "../public/user2.jpeg" },
                  { user: "kendall", desc: "Life Changing App", img: "../public/user3.jpeg" },
                  { user: "alex", desc: "No Traffic Maker", img: "../public/user4.jpeg" },
                ].map((item, i) => (
                  <li key={i}>
                    <img src={item.img} alt="Avatar" style={{ width: 32, height: 32, borderRadius: "50%" }} />
                    @{item.user} - {item.desc}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
