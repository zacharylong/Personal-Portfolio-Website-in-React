import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="about-body" style={{width: '100%', height: '100%', margin: 'auto'}}>
        <Grid className="about-grid"  style={{}}>
          <Cell col={6} style={{padding: '1em', background: '#d9d9d9'}}>
            
            <p>New York Wedding photographer turned software developer. Life-long techie, building computers and websites in static HTML with Dreamweaver on GeoCities since the age of dinosaurs before everyone was a "ninja" or "guru."</p>
            <p>I'm "clasically trained" doing my second Bachelor's degree in Computer Science from Auburn University, which focuses their curriculm on Java and back-end technologies with a dash of Discrete Math and Algorithms.</p>
            <p>A previous career in Hotel Management with Marriott International and stints being a successful self-employed business owner has given me a well-rounded background with customer service, leadership, team management, and adapting quickly to new opportunities.</p>

          </Cell>
          <Cell col={6} style={{textAlign: 'center' }}>
              <img
                src="Zac-Profile-2019-9452-circular-1000.png"
                alt="avatar"
                style={{height: '250px'}}
                />
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default About;
