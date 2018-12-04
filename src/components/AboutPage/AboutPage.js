import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <container>
    <div>
      <div className="overview">
        <h3 className="title">Welcome to the photo directory of the</h3>
        <h3 className="title">Cottagewood Garden Club!</h3>
        <p>The way this works:<br>
        </br>
          Go to the <a href="MemberPage.js#/info">Member page</a> to view the directory of members in the following ways:
        <ol>
            <li>
              As a list of members
        </li>
            <li>
              As a collection of photos of members with phone number, garden and committee
        </li>
            <li>
              View the Club members by garden with photos or as a list
        </li>
            <li>
              View the Club members by committee with photos or as a list
        </li>
          </ol>
        </p>
      </div>
    </div>
  </container>
);

export default AboutPage;
