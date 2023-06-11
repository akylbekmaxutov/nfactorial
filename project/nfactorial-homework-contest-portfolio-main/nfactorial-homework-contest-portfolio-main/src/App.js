import './App.css';
import Avatar from './avatar.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__MyName">
          Akylbek Maxutov
        </div>
        <ul className="App-header__NavInfo">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </header>
      <main className="App-main">
        <h1 className="App-main__Me">
          Hi, I'm Akylbek,
          I build things for the web.
        </h1>
        <p className="App-main__WhoAmI">I'm software developer and this is my portfolio.</p>
        <button className="App-main__CVButton">Check out my CV</button>
      </main>
      <div className="App-about">
        <div className="App-about__Info">
          <h1 className="App-about__Me">About me</h1>
          <p className="App-about__ExtraInfo">
            I'm Full-stack Developer
          </p>
          <div className="App-about__BulletInfo">
            <div className="App-about__BulletInfo-Col">
              <ul className="App-about__BulletInfo-Col-elems">
                <li>HTML5 && CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="App-about__BulletInfo-Col">
              <ul className="App-about__BulletInfo-Col-elems">
                <li>React && Hooks and Router</li>
                <li>Bootstrap and Material UI</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="App-about__Avatar">
          <img src={Avatar} alt="" />
        </div>
      </div>
      <div className="App-experience">
        <h1>Experience</h1>
        <div className="App-experience__Info">
          <p className="App-experience__Info-years">2021-2022</p>
          <div className="App-experience__Detailed">
            <ul className="App-experience__Info-role">
              <li>Softwater Developer</li>
            </ul>
            <p className="App-experience__Info-City">London, the United Kingdom</p>
            <p className="App-experience__Info-Obligations">Participated in the Development of Angular</p>
          </div>
        </div>
        <div className="App-experience__Info">
          <p className="App-experience__Info-years">2021-2022</p>
          <div className="App-experience__Detailed">
            <ul className="App-experience__Info-role">
              <li>Softwater Developer</li>
            </ul>
            <p className="App-experience__Info-City">London, the United Kingdom</p>
            <p className="App-experience__Info-Obligations">Participated in the Development of Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
