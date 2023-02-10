import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import casestudy from "./Assets/Excstudy.png";
import styles from "./DetailCard.module.css";
import gamedev from "./Assets/Gamedveimg.jpg";
import productimg from "./Assets/Productimg.jpg";

export const ActionAreaCard = () => {
  return (
    <Grid
      container
      spacing={8}
      sx={{ margin: 0, padding: 0 }}
    >
      <Grid item xs={12} style={{ paddingLeft: 0 }}>
        <Card sx={{ padding: "3rem" }} elevation={4}>
          <Image
            src={casestudy}
            component="img"
            height="200"
            width="250"
            alt="Project Images"
          />
          <CardContent className={styles["detail-card-content"]}>
            <Typography variant="h6" component="div" gutterBottom>
              Website Portfolio
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Background & Purpose: </b>The purpose of this project was to
              create a personal portfolio website to showcase my skills and
              progress as a novice developer. This website will serve as a
              platform to demonstrate my technical abilities and projects I have
              completed, as well as provide information about me. As technology
              continues to play a significant role in many industries, it is
              important for me to showcase my skills and abilities in
              programming and my aptitude for learning new skills. A personal
              portfolio website is a perfect way to do this, as it provides a
              centralized location to highlight my technical projects and
              relevant information about myself. Additionally, building a
              portfolio website from scratch will provide me with the
              opportunity to learn and apply various programming concepts,
              tools, and frameworks. The final product will serve as a tangible
              representation of my growth as a developer and a tool for future
              job opportunities.
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <b>Process: </b>
              To create a personal portfolio effectively and efficiently, I took
              an agile/scrum approach: By using an agile approach, I was able to
              work on the website in a flexible and iterative manner, which
              allowed me to continuously improve and make changes as needed.
              Additionally, this approach has enabled me to prioritize and focus
              on the most important features and goals for the project.
            </Typography>
            <List component="ol" sx={{ listStyle: "auto", ml: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body2" gutterBottom>
                  Defining project scope and goals:The first step for me was to
                  clearly define the scope of the project, including the
                  features and functionality that will be included on the
                  website. I also defined my goals for the projects, such as
                  learning specific programming concepts.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body2" gutterBottom>
                  Creating a product backlog: the second step I took was to
                  create a product backlog, that contained list of requirements
                  for the portfolio. This included description of each feature,
                  its priority, and any dependencies.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body2" gutterBottom>
                  Planning sprints: Using a product backlog (I used Trello), I
                  have planned and organized my work into sprints. My sprints
                  were typically 1-2 weeks, during which I worked on a subset of
                  the features in the product backlog.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body2" gutterBottom>
                  Daily stand-ups: during each sprint, I have reviewed the
                  progress, identify and blockers, and planned for the next day.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body2" gutterBottom>
                  Reviewing and demo sprint results: at the end of each sprint,
                  I reviewed and demonstrated the results of the sprint to
                  assess my progress and identify any areas for improvement.This
                  process was repeated until all my features in the backlog have
                  been completed and the website was ready for launch and
                  publicly accessible (current HedgeHour).
                </Typography>
              </ListItem>
            </List>
            <Typography
              gutterbottom
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              <b> Results: </b>
              In this personal project, I took an agile/scrum approach to
              creating my personal portfolio website as a demonstration of my
              ability to work within a team in a real business setting and apply
              project management principles. By following this method, I aimed
              to showcase my understanding of agile principles, my ability to
              work collaboratively towards a common goal, and my understanding
              of project management concepts such as scope definition, planning,
              risk management, etc. Throughout the project, I applied the key
              elements of agile, such as daily stand-ups, sprint planning, and
              sprint retrospectives, as well as project management techniques
              such as risk identification and mitigation, project documentation,
              and progress reporting to ensure that the website was developed
              efficiently and effectively. The result was a comprehensive
              personal portfolio website that demonstrates not only my technical
              skills, but also my ability to work in an agile environment and
              deliver high-quality results within a structured project
              management framework.
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b>Technical skills obtained/demonstrated: </b>
              In creating my personal portfolio website, I utilized my knowledge
              of backend programming by developing an API endpoint to allow
              visitors to securely send contact messages utilizing the Web3Forms
              API. I also integrated with the WhoisXML for email validation API
              to perform email validation before email contact request
              submission. To further enhance the security of the contact page, I
              implemented the Google reCAPTCHA system to ensure that the form
              submission is protected from malicious bots while still providing
              a seamless user experience.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: 0 }}>
        <Card sx={{ padding: "3rem" }} elevation={4}>
          <Image
            src={gamedev}
            component="img"
            height="200"
            width="250"
            alt="Project Images"
          />
          <CardContent className={styles["detail-card-content"]}>
            <Typography variant="h6" component="div" gutterBottom>
              Game Development :<i> In Progress</i>
            </Typography>
            <Typography variant="caption">
              In addition to creating my personal portfolio website, I am
              currently in the process of developing a game to continue learning
              programming and to showcase my creative side. This project allows
              me to apply and expand my knowledge of game development and
              programming concepts, while also exercising my creative abilities.
              Through the development of this game, I can demonstrate my ability
              to bring an idea to life and to turn it into a functional and
              engaging experience for players. Although the game is not yet
              complete, I am actively working on it and constantly refining my
              approach to ensure that the result is a high-quality and enjoyable
              experience for players. This project demonstrates my passion for
              both programming and game development and highlights my drive to
              continuously learn and improve my skills.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: 0 }}>
        <Card sx={{ padding: "3rem" }} elevation={4}>
          <Image
            src={productimg}
            component="img"
            height="200"
            width="250"
            alt="Project Images"
          />
          <CardContent className={styles["detail-card-content"]}>
            <Typography variant="h6" component="div" gutterBottom>
              Future Project : To-Do Application
            </Typography>
            <Typography variant="caption">
              Along with the game development project, I have also been
              exploring the idea of developing a To-Do productivity application
              as a future project to add to my portfolio. This application would
              allow users to track their tasks and manage their time more
              efficiently. The development of this application would allow me to
              showcase my ability to create practical and useful tools for
              people to improve their daily lives. This project is currently
              pending and in the development phase, but I am actively
              researching and planning the best approach to ensure that it meets
              the needs of users and delivers a high-quality user experience.
              The development of this to-do productivity application
              demonstrates my ability to identify a problem and create a
              solution, as well as my drive to create meaningful and impactful
              products.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
