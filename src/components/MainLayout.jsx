import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
// import StatTracker from './StatTracker';
import HoopsFilm from './HoopsFilm';
// import Offers from './Offers';
import Media from './Media';
import Academics from './Academics';
// import AthleteProgression from './AthleteProgression';
import AskCruz from './AskCruz';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="hoops-film">
        <HoopsFilm />
      </div>
      <div id="ask-cruz">
        <AskCruz />
      </div>
      <div id="player-cards">
        <PlayerCards />
      </div>
      {/* <div id="athlete-progression">
        <AthleteProgression />
      </div>
      <div id="stat-tracker">
        <StatTracker />
      </div> */}
      <div id="media">
        <Media />
      </div>
      <div id="academics">
        <Academics />
      </div>
      {/* <div id="offers">
        <Offers />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default MainLayout;