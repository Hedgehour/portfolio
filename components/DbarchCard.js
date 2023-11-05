import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import Image from "next/image";
import styles from "./DetailCard.module.css";
import Erd from "./Assets/ERD Diagram.png";
import line from "./Assets/LineGraph.png";
import ScPlot from "./Assets/ScatterPlot.png";
import ScBub from "./Assets/ScatterBub.png";

import { CodeBlock } from "react-code-blocks";

const complexQuery = `SELECT 
    s.name as "Studio", 
    AVG(a.rating) as "Popularity",
    Count(a."id") as "NumberOfAnime" 
FROM anime a 
LEFT JOIN anime_studio ast ON ast.anime_id = a.id
LEFT JOIN studio s ON s.id = ast.studio_id 
GROUP BY s.name 
ORDER BY s.name ASC`;

export const DbarchDetailCard = () => {
  return (
    <Grid container spacing={5} sx={{ p: 5 }}>
      <Grid item xs={12} md={12}>
        <Card sx={{ padding: "3rem" }} elevation={4}>
          <CardContent className={styles["detail-card-content"]}>
            <Typography variant="h6" component="div" gutterBottom>
              Project Description: Creating a Custom Dashboard for Analyzing
              Kaggle Dataset Using PostgreSQL and Python
            </Typography>
            <Typography variant="body2">
              <b>Background and Purpose:</b> My goal for this project was to
              utilize my SQL expertise to create a robust database and design
              its architecture. This project served as a personal endeavor to
              enhance my skills and contribute to efficient data management.
            </Typography>
            <Typography variant="body2">
              <b>Process and Components:</b> I initially acquired a sample
              dataset from Kaggle, which encompassed a wide range of data types
              pertinent to animated TV shows. Upon obtaining the dataset, I
              embarked on the task of importing it into PGAdmin. I began by
              cleaning the dataset we obtained from Kaggle to prepare it for
              import into PGAdmin. This entailed a thorough data cleaning
              process to ensure the dataset was in a format compatible with the
              project's database. Following this, I took on the task of
              designing and implementing numerous many-to-many tables, a
              critical step that allowed me to effectively represent complex
              data relationships in line with our project's objectives.
              Throughout this procedure, I meticulously fashioned several
              tables, specifying their types and defining their structure. Below
              is an Entity Relationship Diagram that illustrates the structure
              and the different data types:
            </Typography>
            <Image src={Erd} height="405" width="720" />
            <Typography variant="body2">
              <b>Data Analysis:</b> As part of the project's data analysis
              phase, I combined multiple datasets and wrote SQL queries to
              extract and present pertinent information about anime studios and
              their production output. This process involved merging datasets,
              establishing relationships between tables, and crafting SQL
              queries to generate valuable insights. The result was a
              comprehensive view of the anime industry, showcasing the various
              studios and their respective contributions, as visualized through
              a scatter plot. This allowed us to identify key players in the
              field and gain a deeper understanding of their production
              histories.{" "}
            </Typography>
            <Image src={line} height="433" width="583" />

            <Typography variant="body2">
              {" "}
              Building upon the foundation of the combined and queried datasets,
              I expanded the analysis to investigate the annual production
              trends in the anime industry. To do this, I first needed to clean
              the data by removing null values and ensuring a robust dataset for
              the analysis. Subsequently, I crafted SQL queries to group and
              count the number of anime productions by year. This allowed us to
              determine which year witnessed the highest production volume,
              providing valuable insights into the industry's temporal dynamics.
              The data cleaning step was pivotal in ensuring the accuracy and
              reliability of the findings.{" "}
            </Typography>
            <Image src={ScPlot} height="433" width="583" />

            <Typography variant="body2">
              {" "}
              As part of our comprehensive analysis, I also sought to understand
              the relationship between the number of anime productions by each
              studio and the average popularity of their work. To achieve this,
              I meticulously computed the average popularity rating for each
              anime, connecting this metric to the studio responsible for its
              creation. This allowed me to discern which studio, regardless of
              the number of animes they produced, consistently excelled in
              generating the most popular works in terms of audience reception.
              The utilization of z-scores in this analysis was paramount for
              several reasons. Firstly, it standardized both the number of anime
              produced and the popularity ratings, enabling fair comparisons
              between studios. This is particularly important when studios vary
              significantly in their production output or when dealing with
              different rating scales for popularity. Additionally, z-scores
              allowed me to identify studios that outperformed or underperformed
              relative to the overall dataset, providing a robust statistical
              basis for our findings and ensuring the integrity of our analysis.
            </Typography>
            <Image src={ScBub} height="433" width="583" />

            <Typography variant="body2">
              <b>Technical skills obtained/demonstrated: </b>
              <List component="ol" sx={{ listStyle: "auto", ml: 4 }}>
                <ListItem sx={{ display: "list-item" }}>
                  Data Cleaning using Python: I demonstrated proficiency in data cleaning by
                  removing null values from the dataset to ensure data integrity
                  and quality. I demonstrated proficiency in utilizing
                  python for data cleaning, data manipulation, and data
                  analysis. I utilized the pandas and numpy libraries to perform
                  data cleaning and manipulation to clean, prepare, and analyze
                  data.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  SQL Querying: I showcased my ability to craft SQL queries to
                  extract, manipulate, and analyze data from the database,
                  indicating my skill in working with relational databases and
                  querying structured data.
                  <CodeBlock text={complexQuery} language="sql" />
                </ListItem>

                <ListItem sx={{ display: "list-item" }}>
                  Data Visualization: I used advanced charting libraries in
                  python, such as matplotlib, to present data and visualize
                  trends within the anime dataset. I showed understanding of how
                  to utilize advanced chart types such as a cluster bubble
                  scatter plot to visualize the relationship between the number
                  of anime produced and their popularity ratings, highlighting
                  my competence in data visualization techniques.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Statistical Data Analysis: The project involved a
                  comprehensive data analysis of the open source anime dataset.
                  This included statistical analysis such as average popularity
                  ratings and z-score analysis to standardize and compare data.
                  This showcases my understanding in applying statistical
                  techniques to data analysis using SQL and Python to draw
                  conclusions in a complex dataset.
                </ListItem>

                <ListItem sx={{ display: "list-item" }}>
                  Database Management: Importing data into PGAdmin and
                  structuring the database schema was part of the project,
                  indicating my proficiency in managing databases, including
                  table creation and organization. I set up both a local,
                  on-premise PostgreSQL database server instance for
                  development, as well as, a cloud based instance utilizing
                  CockroachDB. This showcases my proficiency and understanding
                  of database infrastructure.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Data Integration: I successfully combined multiple datasets,
                  demonstrating my skill in data integration, merging, and
                  transforming data from various sources.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Data Interpretation: I drew insights from the data, such as
                  identifying which studios consistently create popular anime
                  despite production volume, reflecting strong data
                  interpretation skills.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  {" "}
                  Project Management: The project involved managing various
                  tasks and steps in a systematic manner, showcasing my project
                  management skills.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Problem Solving: Throughout the project, I addressed
                  challenges, made decisions about data presentation, and chose
                  appropriate statistical methods, indicating my problem-solving
                  abilities.
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
