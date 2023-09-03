import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Image from "next/image"
import styles from "./DetailCard.module.css";
import gamedev from "./Assets/Gamedveimg.jpg";




export const GameDetailCard = () => {
    return (

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
</Grid> ); };


