import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact  extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zachary Long</h2>
            <img
              src="Zac-Profile-2019-9479-1x1-1000.png"
              alt="avatar"
              style={{height: '250px'}}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

          <div className="contact-list">
            <List>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                   <a href="mailto:zac@zacharylong.com">zac@zacharylong.com</a>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fab fa-instagram" aria-hidden="true"/>
                   @zacharylong
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fab fa-twitter" aria-hidden="true"/>
                   @zacharylong
                </ListItemContent>
              </ListItem>

            </List>
          </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
