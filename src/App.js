import './App.css';
import "../src/styles/home.scss";
import {images} from "../src/constants"

function App() {
  return (
    <div>
    <div className="social--links-container">
        <div className="social-img">
            <div className="yellow--box" />
            <img src= {images.nft}  alt="nft"/>
            <p className="social--name"> Mr. Wallace</p>
        </div>
        <div className="social--header">
            <h2>Social Links</h2>
        </div>
        <div className="links-container">
            <ul>
              <li>
                <div className="social-links">
                  <img src={images.github} alt="github"/>
                  <p>Github</p>
                  <button onClick={event =>  window.location.href='https://github.com/matthewowallace'}>Explore</button>
                </div>
              </li>
              <hr/>
              <li>
                <div className="social-links">
                  <img src={images.behance} alt="behance"/>
                  <p>Behance</p>
                  <button onClick={event =>  window.location.href='https://www.behance.net/matthewwallace4'}>Explore</button>
                </div>
              </li>
              <hr/>
              <li>
                <div className="social-links">
                  <img src={images.linkedln} alt="linkedln"/>
                  <p>Linkedln</p>
                  <button onClick={event =>  window.location.href='https://www.linkedin.com/in/matthew-w-8748b0196/'}>Explore</button>
                </div>
              </li>
              <hr/>
              <li>
                <div className="social-links">
                  <img src={images.instagram} alt="instagram"/>
                  <p>Instagram</p>
                  <button onClick={event =>  window.location.href='https://www.instagram.com/matthewowallace/'}>Explore</button>
                </div>
              </li>
              <hr/>
              <li>
                <div className="social-links">
                  <img src={images.mix} alt="mix"/>
                  <p>Mix.io</p>
                  <button className="special"  onClick={event =>  window.location.href='https://www.behance.net/matthewwallace4'}>Explore</button>
                </div>
              </li>
            </ul>
        </div>
    </div>
  </div>
  );
}

export default App;
