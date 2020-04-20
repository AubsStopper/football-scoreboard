//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Scoreboard from "./components/scoreboard";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  function homeScoreHandler(e) {
    if(e.target.textContent === 'Home Touchdown') {
      setHomeScore(homeScore + 7);
    } else if (e.target.textContent === 'Home Field Goal') {
      setHomeScore(homeScore + 3)
    } else if (e.target.textContent === 'Home Extra Point') {
      setHomeScore(homeScore + 1)
    }
  }
  
  function awayScoreHandler(e) {
    if(e.target.textContent === 'Away Touchdown') {
      setAwayScore(awayScore + 7);
    } else if (e.target.textContent === 'Away Field Goal') {
      setAwayScore(awayScore + 3);
    } else if (e.target.textContent === 'Away Extra Point') {
      setAwayScore(awayScore + 1);
    }

  }

  return (
    <div className="container">
      <Scoreboard apple={homeScore} orange={awayScore} />
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeScoreHandler}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick={homeScoreHandler}>Home Field Goal</button>
          <button className="homeButtons__extraPoint"onClick={homeScoreHandler}>Home Extra Point</button>

        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={awayScoreHandler}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayScoreHandler}>Away Field Goal</button>
          <button className="awayButtons__extraPoint" onClick={awayScoreHandler}>Away Extra Point</button>
        </div>
      </section>
    </div>
  );
}

export default App;
