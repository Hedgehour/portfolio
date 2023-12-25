import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./DetailCard.module.css";
import gamedev from "./Assets/Gamedveimg.jpg";
import productimg from "./Assets/Productimg.jpg";

export const GameDetailCard = () => {
  return (
    <Grid container spacing={5} sx={{ p: 5 }}>
      <Grid item xs={12} lg={6}>
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
      <Grid item xs={12} lg={6}>
        <Card sx={{ padding: "3rem" }} elevation={4}>
          <Image
            src={productimg}
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
