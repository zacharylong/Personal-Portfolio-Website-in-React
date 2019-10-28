import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (

        <div className="projects-grid" >

        {/* React Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >Personal Portfolio Website</CardTitle>
          <CardText>
            This website! Getting my feet wet again in front-end work learning React and re-learning CSS and HTML 5. Built with React and React-MDL as an alternative to Bootcamp and other mobile-first frameworks.
            </CardText>
          <CardActions border style={{padding: '1em', justifyContent: 'center'}}>
            <Button raised ripple colored href="https://github.com/zacharylong/Personal-Portfolio-Website-in-React" target="_blank">Github</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      {/* Project 2... here */}
      </div>

      )
    } else if(this.state.activeTab === 1) {
      return (

        <div className="projects-grid">

        {/* Java Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://spng.pngfly.com/20190713/qor/kisspng-java-development-kit-programming-language-computer-download-logo-transparent-background-java-png-imag-5d2a9388925cb8.1584044615630713685995.jpg) center / cover'}} >TCP/UDP Server</CardTitle>
          <CardText>
            Class project for Auburn University's CPSC 3353 Computer Networking exploring making TCP and UDP connections in Java to transfer data. The Github repo linked below is a private repository as per Auburn's sharing policy, contact me to view if you would really like to see :).
            </CardText>
          <CardActions border style={{padding: '1em', justifyContent: 'center'}}>
            <Button raised ripple colored href="https://github.com/zacharylong/CPSC-3353-Networking-UDP_Server" target="_blank">Github UDP</Button>
            <Button raised ripple colored href="https://github.com/zacharylong/CPSC-3353-Networking-TCP_Server" target="_blank">Github TCP</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      {/* Project 2... here */}

      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (

        <div className="projects-grid">

        {/* C# Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://docs.microsoft.com/en-us/dotnet/images/hub/dotnet-core.svg) center / cover'}} >Web Browser</CardTitle>
          <CardText>
            Class project for Auburn University's CPSC 2713 class designing a web browser in C#. The Github repo linked below is a private repository as per Auburn's sharing policy, contact me to view!
            </CardText>
          <CardActions border style={{padding: '1em', justifyContent: 'center'}}>
            <Button raised ripple colored href="https://github.com/zacharylong/Webbrowser-CPSC-2713" target="_blank">Github</Button>

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      {/* Project 2... here */}

      </div>

      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Unused Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >Personal Portfolio Website</CardTitle>
          <CardText>
            This website! Getting my feet wet again in front-end work learning React and re-learning CSS and HTML 5. Built with React and React-MDL as an alternative to Bootcamp and other mobile-first frameworks.
            </CardText>
          <CardActions border style={{padding: '1em', justifyContent: 'center'}}>
            <Button raised ripple colored>Github</Button>
            <Button raised ripple colored>CodePen</Button>
            <Button raised ripple colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      {/* Project 2... here */}

      </div>
      )
    }
  }

  render() {
    return(
      <div className="projects-return" style={{width: '100%', height: '100%', margin: 'auto'}}>

        <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>C#</Tab>
          {/* <Tab>Unused</Tab> */}
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
