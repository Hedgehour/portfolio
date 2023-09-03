import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,

} from "@mui/material";
import Image from "next/image"
import styles from "./DetailCard.module.css";
import productimg from "./Assets/Productimg.jpg";



export const DbarchDetailCard = () => {
    return (

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
</Grid> ); };