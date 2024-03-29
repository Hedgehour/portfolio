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
import styles from "./DetailCard.module.css";
import Erd from "./Assets/ERD Diagram.jpg";
import Bar from "./Assets/Bar.png";
import area from "./Assets/area.png";
import ScBub from "./Assets/ScatterBub.png";
import pie from "./Assets/Pie.png";

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
const projectDescript = [
  {
    header: "Background and Purpose:",
    text: `My goal for this project was to
utilize my SQL expertise to create a robust database and design
its architecture. This project served as a personal endeavor to
enhance my skills and contribute to efficient data management.`,
  },
  {
    header: "Process and Components:",
    text: `I initially acquired a sample dataset from Kaggle, which encompassed a wide range of data types pertinent to animated TV shows. Upon obtaining the dataset, I embarked on the task of importing it into PGAdmin. I began by
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
  and the different data types:`,
    image: Erd,
  },
  {
    header: "Data Analysis:",
    text: `As part of the project's data analysis
  phase, I combined multiple datasets and wrote SQL queries to
  extract and present pertinent information about anime studios and
  their production output. This process involved merging datasets,
  establishing relationships between tables, and crafting SQL
  queries to generate valuable insights. The result was a
  comprehensive view of the anime industry, showcasing the various
  studios and their respective contributions, as visualized through
  a bar graph. This allowed us to identify key players in the
  field and gain a deeper understanding of their production
  histories.`,
    image: Bar,
  },
  {
    text: ` Building upon the foundation of the combined and queried datasets,
  I expanded the analysis to investigate the annual production
  trends in the anime industry. To do this, I first needed to clean
  the data by removing null values and ensuring a robust dataset for
  the analysis. Subsequently, I crafted SQL queries to group and
  count the number of anime productions by year. This allowed us to
  determine which year witnessed the highest production volume,
  providing valuable insights into the industry's temporal dynamics.
  The data cleaning step was pivotal in ensuring the accuracy and
  reliability of the findings.`,
    image: area,
  },
  {
    text: `As part of our comprehensive analysis, I also sought to understand
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
  basis for our findings and ensuring the integrity of our analysis.`,
    image: ScBub,
  },
  {
    text: `The pie chart titled "Anime Distribution by Genre" provides a visual representation of the number of anime produced across different genres. It offers a concise overview of how the anime industry is distributed among various genres, helping us understand the popularity of different anime themes.
    Most Popular Genre: The genre with the largest segment indicates the most popular genre of anime, as it has the highest count of anime productions.
Less Common Genres: Smaller segments reveal less common genres, indicating the variety within the anime industry.
Genre Diversity: The pie chart illustrates the diversity and richness of anime, as it spans a wide range of genres, each catering to different preferences.A significant observation from the chart is that many of the genres are classified as "Mature Themes," and they collectively represent a substantial portion of the anime produced. This suggests that mature and thought-provoking themes are prevalent in the anime industry, and numerous anime productions explore these complex and adult-oriented narratives. While some genres cater to younger audiences and family-friendly themes, the diversity of mature themes highlights the depth and sophistication of storytelling within the world of anime. **
Please note that It's important to acknowledge that the chart may not represent the anime industry as a whole. Some anime productions may not be categorized into specific genres, resulting in an underrepresentation of these works. As a result, the chart provides insights into the categorized genre preferences of the industry but may not capture the entirety of anime production.
Despite this limitation, the chart remains a valuable tool for understanding the distribution of categorized anime genres, offering valuable insights for enthusiasts and analysts. To gain a comprehensive view of the industry, it may be necessary to consider uncategorized or unclassified anime productions in addition to the genres displayed in the chart.`,
    image: pie,
  },
];
const technicalSkills = [
  {
    text: `Data Cleaning using Python: I demonstrated proficiency in data cleaning by
  removing null values from the dataset to ensure data integrity
  and quality. I demonstrated proficiency in utilizing
  python for data cleaning, data manipulation, and data
  analysis. I utilized the pandas and numpy libraries to perform
  data cleaning and manipulation to clean, prepare, and analyze
  data.`,
  },
  {
    text: `SQL Querying: I showcased my ability to craft SQL queries to
    extract, manipulate, and analyze data from the database,
    indicating my skill in working with relational databases and
    querying structured data.`,
    code: complexQuery,
  },
  {
    text: `Data Visualization: I used advanced charting libraries in
    python, such as matplotlib, to present data and visualize
    trends within the anime dataset. I showed understanding of how
    to utilize advanced chart types such as a cluster bubble
    scatter plot to visualize the relationship between the number
    of anime produced and their popularity ratings, highlighting
    my competence in data visualization techniques.`,
  },
  {
    text: `Statistical Data Analysis: The project involved a
    comprehensive data analysis of the open source anime dataset.
    This included statistical analysis such as average popularity
    ratings and z-score analysis to standardize and compare data.
    This showcases my understanding in applying statistical
    techniques to data analysis using SQL and Python to draw
    conclusions in a complex dataset.`,
  },
  {
    text: `Database Management: Importing data into PGAdmin and
    structuring the database schema was part of the project,
    indicating my proficiency in managing databases, including
    table creation and organization. I set up both a local,
    on-premise PostgreSQL database server instance for
    development, as well as, a cloud based instance utilizing
    CockroachDB. This showcases my proficiency and understanding
    of database infrastructure.`,
  },
  {
    text: `Data Integration: I successfully combined multiple datasets,
    demonstrating my skill in data integration, merging, and
    transforming data from various sources.`,
  },
  {
    text: `Data Interpretation: I drew insights from the data, such as
    identifying which studios consistently create popular anime
    despite production volume, reflecting strong data
    interpretation skills.`,
  },
  {
    text: `Project Management: The project involved managing various
    tasks and steps in a systematic manner, showcasing my project
    management skills.`,
  },
  {
    text: `Problem Solving: Throughout the project, I addressed
    challenges, made decisions about data presentation, and chose
    appropriate statistical methods, indicating my problem-solving
    abilities.`,
  },
];

export const DbarchDetailCard = () => {
  return (
    <Grid container spacing={5} sx={{ p: 5 }}>
      <Grid item xs={12} md={12}>
        <Card sx={{ padding: "1rem" }} elevation={4}>
          <CardContent className={styles["detail-card-content"]}>
            <Typography variant="h6" gutterBottom>
              Project Description: Analyzing
              Kaggle Dataset Using PostgreSQL and Python
            </Typography>
            {projectDescript.map(({ header, text, image }, index) => (
              <React.Fragment key={index}>
                <Typography fontWeight="bold" variant="body2">
                  {header}
                </Typography>
                <Typography variant="body2">{text}</Typography>{" "}
                {image ? (
                  <div
                    style={{
                      padding: "2rem 0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={image}
                      style={{ height: "auto", width: "100%", maxWidth: 720 }}
                      alt="Database Diagram"
                    />
                  </div>
                ) : null}
              </React.Fragment>
            ))}

            <div>
              <Typography fontWeight="bold" variant="body2">
                Technical skills obtained/demonstrated:
              </Typography>
              <List component="ol" sx={{ listStyle: "auto", ml: 4 }}>
                {technicalSkills.map(({ text, code }, index) => (
                  <ListItem sx={{ display: "list-item" }} key={index}>
                    <Typography variant="body2">{text}</Typography>
                    {code ? (
                      <CodeBlock
                        customStyle={{ marginLeft: "-2.5rem" }}
                        text={complexQuery}
                        language="sql"
                      />
                    ) : null}
                  </ListItem>
                ))}
              </List>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
