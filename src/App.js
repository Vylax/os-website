import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Card, CardMedia, CardContent, CardActions, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import './App.css';

import robotImage from './robot.jpg';
import algorithmImage from './algorithm.jpg';

import robotImage1 from './PHOTO-2023-01-09-14-56-17.jpg';
import robotImage2 from './PHOTO-2023-01-11-00-52-32.jpg';
import robotImage3 from './PHOTO-2023-01-11-00-52-33(1).jpg';
import robotImage4 from './PHOTO-2023-01-11-03-10-05.jpg';
import robotImage5 from './PHOTO-2023-01-11-03-10-06(1).jpg';
import robotImage6 from './PHOTO-2023-01-11-03-10-06.jpg';
import robotImage7 from './PHOTO-2023-01-11-03-10-07.jpg';
import robotImage8 from './PHOTO-2023-01-13-02-39-48(1).jpg';
import robotImage9 from './PHOTO-2023-01-13-02-39-48.jpg';
import robotImage10 from './PHOTO-2023-01-13-02-39-49.jpg';
import robotImage11 from './PHOTO-2023-01-14-19-18-25.jpg';
import robotImage12 from './PHOTO-2023-01-18-14-20-55(1).jpg';
import robotImage13 from './PHOTO-2023-01-18-14-20-56(1).jpg';
import robotImage14 from './PHOTO-2023-01-18-14-20-56.jpg';
import robotImage15 from './PHOTO-2023-01-19-13-40-22.jpg';
import robotImage16 from './PHOTO-2023-01-19-14-34-18.jpg';
import robotImage17 from './Screenshot 2023-02-01 at 22-16-06 robot vision 1.pdf.png';
import robotImage18 from './Screenshot 2023-02-01 at 22-26-51 robot vision 2.pdf.png';

import video1 from './VIDEO-2023-01-08-16-38-25.mp4';
import video2 from './VIDEO-2023-01-09-14-51-01.mp4';
import video3 from './VIDEO-2023-01-11-03-10-08.mp4';
import video4 from './VIDEO-2023-01-13-02-39-46.mp4';
import video5 from './VIDEO-2023-01-13-02-39-47.mp4';
import video6 from './VIDEO-2023-01-15-12-10-11.mp4';
import video7 from './VIDEO-2023-01-18-00-56-34.mp4';
import video8 from './VIDEO-2023-01-19-13-37-34.mp4';

const robotImages = [
  { alt: "robotImage1", src: robotImage1, title: "robotImage1" },
  { alt: "robotImage2", src: robotImage2, title: "robotImage2" },
  { alt: "robotImage3", src: robotImage3, title: "robotImage3" },
  { alt: "robotImage4", src: robotImage4, title: "robotImage4" },
  { alt: "robotImage5", src: robotImage5, title: "robotImage5" },
  { alt: "robotImage6", src: robotImage6, title: "robotImage6" },
  { alt: "robotImage7", src: robotImage7, title: "robotImage7" },
  { alt: "robotImage8", src: robotImage8, title: "robotImage8" },
  { alt: "robotImage9", src: robotImage9, title: "robotImage9" },
  { alt: "robotImage10", src: robotImage10, title: "robotImage10" },
  { alt: "robotImage11", src: robotImage11, title: "robotImage11" },
  { alt: "robotImage12", src: robotImage12, title: "robotImage12" },
  { alt: "robotImage13", src: robotImage13, title: "robotImage13" },
  { alt: "robotImage14", src: robotImage14, title: "robotImage14" },
  { alt: "robotImage15", src: robotImage15, title: "robotImage15" },
  { alt: "robotImage16", src: robotImage16, title: "robotImage16" },
  { alt: "robotImage17", src: robotImage17, title: "robotImage17" },
  { alt: "robotImage18", src: robotImage18, title: "robotImage18" }
  ];
  
  const robotVideos = [
  { src: video1, title: "video1" },
  { src: video2, title: "video2" },
  { src: video3, title: "video3" },
  { src: video4, title: "video4" },
  { src: video5, title: "video5" },
  { src: video6, title: "video6" },
  { src: video7, title: "video7" },
  { src: video8, title: "video8" },
  ];

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center">
          Basket-ball robot - Group 5
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
                    <b>Grabbing routine</b>: The grabbing routine consists of passing the ball, releasing the claws, moving the arm down, moving backwards, closing the claws, and finally moving the arm up.
                  </li>
                  <li>
                    <b>Throwing routine</b>: Use a tacho to throw the ball like with a catapult.
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
              The source code for the robot is available on our <a href="https://github.com/Vylax/os-robot.git">git repository</a>.
              <br />
              To use the code, you will need to:
              <ol>
                <li>Clone the repository to your local machine</li>
                <li>Navigate to the directory <code>os-robot/client/robot_code/</code></li>
                <li>Compile the code using a suitable compiler</li>
                <li>Upload the compiled code to the robot by connecting it to your machine</li>
                <li>Power on the robot and ensure it is connected to the necessary sensors and actuators</li>
                <li>Run the code on the robot to start its operation</li>
              </ol>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
      <Box my={4}>
      <Typography variant="h6" align="center">
        Pictures and videos of the Robot in Action
      </Typography>
      <Grid container spacing={2}>
        {robotImages.map((image, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia component="img" alt={image.alt} src={image.src} title={image.title} />
            </Card>
          </Grid>
        ))}
        {robotVideos.map((video, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia component="video" controls src={video.src} title="Robot in action" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
      <Box my={4}>
        <Typography variant="h6" align="center">
          Team Members and Contributions
        </Typography>
        <Typography variant="body2">
          The project was completed by a team of four students. The team members and their contributions are as follows:
          <ul>
            <li>Fanfu WEI - Mechanical design and grab routine</li>
            <li>Qin ZHENG - Implemented robot movement (including moving forward and back, turning directions), attacking strategy </li>
            <li>Jordan ALLEMAND - Implemented the ball identification algorithm and created the website</li>
            <li>Roberto SIRIGU  - Sensors implementation, ball handling part, makefile description, debugging and testing, and very little help with the robot structure that is not worth mentioning</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;