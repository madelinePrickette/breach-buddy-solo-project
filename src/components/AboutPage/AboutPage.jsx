import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="body-text">
      <div>
        <h2>The Technologies Used In This Project Are:</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PostgresQL</li>
          <li>Socket.io</li>
        </ul>
        <h2>Reflections</h2>
        <p>The hardest part about this project was writing the logic to check for friends.</p>
        <p>I am most proud of the combination filtering feature.</p>
        <h2>Progression</h2>
        <ol>
          <li>API to connect Ubisoft account for auto updated profiles</li>
          <li>Show a status when a player is currently online</li>
          <li>Add a calendar for easier availability selection</li>
          <li>Adapt to a mobile version</li>
        </ol>
        <h2>Appreciations</h2>
        <p> I would like to thank my parents for the encouragement and support, 
          my friends back home in Kansas, my amazing new friends in the Mitchison cohort,
          my talented instructors, Dane Smith, Kris Szafranski, Matt Black, Edan Schwartz, and Liz Kerber. 
          Finally I would like to thank Prime Digital Academy itself for changing my future.
        </p>
        <br></br>
      </div>
    </div>
  );
}

export default AboutPage;
