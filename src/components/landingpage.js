import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage  extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="Zac-Profile-2019-9414_Circular-1000.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Developer</h1>

            <hr/>

            <p><h3>Java | JavaScript | React | C# | .Net Core</h3></p>

          <div className="social-links">

            {/* LinkedIn */}
            <a href="http://www.linkedin.com/in/zaclong/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/zacharylong" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* YouTube */}
            <a href="http://www.youtube.com/fenglongphoto" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

          </div>

            </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default LandingPage;
