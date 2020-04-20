import React from "react";

function Controls(props) {
    return (
        <section className="buttons">
            <div className="homeButtons">

            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className="homeButtons__touchdown" onClick={props.homeScoreHandler}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal"onClick={props.homeScoreHandler}>Home Field Goal</button>
                <button className="homeButtons__extraPoint"onClick={props.homeScoreHandler}>Home Extra Point</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown"onClick={props.awayScoreHandler}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={props.awayScoreHandler}>Away Field Goal</button>
                <button className="awayButtons__extraPoint" onClick={props.awayScoreHandler}>Away Extra Point</button>
            </div>
         </section> 
    );

}

export default Controls 