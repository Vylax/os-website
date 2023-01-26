import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Card, CardMedia, CardContent, CardActions, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import './App.css';

import robotImage from './robot.jpg';
import algorithmImage from './algorithm.jpg';
import video from './video.mp4';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center">
          Robot Name Here TODO
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              image={robotImage}
              title="Robot"
            />
            <CardContent>
              <Typography variant="h6">
                Architecture of the Robot
              </Typography>
              <Typography variant="body2">
                Our robot is equipped with a variety of sensors and actuators to navigate and perform tasks in its environment. These include:
                <ul>
                  <li>Ultrasonic sensor for ball & obstacle detection</li>
                  <li>IR sensor for line tracking</li>
                  <li>IR compass sensor for orientation</li>
                  <li>Gyroscopic sensor for navigation</li>
                  <li>DC motors for movement</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              image={algorithmImage}
              title="Algorithm"
            />
            <CardContent>
              <Typography variant="h6">
                Algorithms
              </Typography>
              <Typography variant="body2">
                The robot uses two main algorithms for navigation and task execution:
                <ul>
                  <li>
                    <b>Ball identification:</b> The robot uses its ultrasonic sensor while rotating on itself to cast rays on its surroundings. The rays data are then processed to identify potential balls using trigonometry. If a ball is detected, the robot will change its direction to align with it.
                  </li>
                  <li>
                    <b>Grabbing routine</b> TODO
                  </li>
                  <li>
                    <b>Throwing routine</b> TODO
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box my={4}>
        <ExpansionPanel expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <ExpansionPanelSummary>
            <Typography variant="h6">Source Code (click to expand)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              The source code for the robot is available in a git repository TODO. To access the code, please contact the team members for the password.
              <br />
              To use the code, you will need to:
              <ol>
                <li>Clone the repository to your local machine</li>
                <li>Compile the code using a suitable compiler (such as GCC for C code)</li>
                <li>Upload the compiled code to the robot using a programmer (such as AVRdude)</li>
                <li>Power on the robot and ensure it is connected to the necessary sensors and actuators</li>
                <li>Run the code on the robot to start it's operation</li>
              </ol>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
      <Box my={4}>
        <Typography variant="h6" align="center">
          Pictures and videos of the Robot in Action
        </Typography>
        <Card>
          <CardMedia component="video" src={video} title="Robot in action" />
        </Card>
      </Box>
      <Box my={4}>
        <Typography variant="h6" align="center">
          Team Members and Contributions
        </Typography>
        <Typography variant="body2">
          The project was completed by a team of four students. The team members and their contributions are as follows:
          <ul>
            <li>Fanfu WEI - TODO</li>
            <li>Qin ZHENG - TODO</li>
            <li>Jordan ALLEMAND - Implemented the ball identification algorithm and created the website</li>
            <li>Roberto SIRIGU  - TODO</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;