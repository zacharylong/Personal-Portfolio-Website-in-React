import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
//import Skills from './skills';

class Resume  extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="Zac-Profile-2019-9452-circular-1000.png"
                alt="avatar"
                style={{height: '250px'}}
                />
            </div>

            <h2 style={{paddingTop: '2em'}}>Zachary Long</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi! Computer Science student at Auburn University with expected graduation in 2020 seeking Internship or Full-time positions in the greater New York City area in back-end, front-end, fullstack development!</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Long Island, New York</p>
            <h5>Email Me</h5>
            <p><a href="mailto:zac@zacharylong.com">zac@zacharylong.com</a></p>
            <h5>Elsewhere on the Web</h5>
            <p><a href="http://www.fenglongphoto.com" target="_blank">FengLongPhoto.com</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Auburn University"
              schoolDescription="BS, Computer Science"
              />

            <Education
              startYear={2000}
              endYear={2005}
              schoolName="University of Central Florida"
              schoolDescription="BS, Hospitality Management"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

          <Experience
            startYear=""
            endYear="Summer 2019"
            jobName="Software Developer Intern | Scrap-It! Technologies"
            jobDescription="• Using agile methodology, developed a scheduling API using .NET Core and Swagger to connect requests from the user app and website to connect the jobs to the driver app following licensing and operating rules.
• Set up initial hauler information database using PostgreSQL.
• Managed project using JIRA and Gitlab version control to synchronize details with remote team members."
            />

          <Experience
            startYear={2009}
            endYear="Present"
            jobName="Owner | FengLong Photography, LLC"
            jobDescription="• Exceeded client expectations delivering superior wedding photos showcasing consistent creativity and style.
• Managed onsite team members during live events and coordinated with remote editors on final products.
• Produce social media content including blog posts, YouTube videos, Facebook Ads, and Instagram posts."
              />

          <Experience
            startYear={2009}
            endYear={2014}
            jobName="Owner | Camera Concierge, LLC"
            jobDescription="• Launched online camera equipment rental website business servicing local photographers and filmmakers.
• Managed developer’s implementation of Authorize.net API for payment processing.
• Enhanced user experience through website layout and design improvements."
                />

          <Experience
            startYear={2005}
            endYear={2011}
            jobName="Front Office Manager | Marriott International"
            jobDescription="Various leadership roles spanning Back of House and Front of House positions in Room Operations at the
              Orlando World Center Marriott, Orlando Airport Marriott, and Atlanta Airport Marriott."
                  />

          <hr style={{borderTop: '3px solid #e22947'}} />

        <h2>Technologies</h2>
<Grid>
  <Cell>
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                <i class="fab fa-java"> Java </i>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                <i class="fab fa-js-square"> JavaScript </i>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                <i class="fab fa-react">React </i>
              </ListItemContent>
            </ListItem>
          </List>
          </Cell>
          <Cell>
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                  <i class="fab fa-html5"> HTML/CSS </i>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                  <i class="fas fa-code"> C# / .Net</i>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                  <i class="fab fa-swift">Swift</i>
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
</Grid>

          </Cell>

        </Grid>

      </div>
    )
  }
}

export default Resume;
