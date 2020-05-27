import React from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import Loader from '../Loader'
import styles from './Cards.module.css';
import CardMedia from '@material-ui/core/CardMedia';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div className={styles.container}>
         <Loader/>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography>
            <CardMedia
          component="img"
          alt="Covid-19"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDKcv-660ORS9wuveMMoBE-zV4jWhIx-pS3re_ElUcYUGBtttO&usqp=CAU"
      
        />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
          <Typography>
            <CardMedia
          component="img"
          alt="Covid-19"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDKcv-660ORS9wuveMMoBE-zV4jWhIx-pS3re_ElUcYUGBtttO&usqp=CAU"
         
        />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
          <Typography>
            <CardMedia
          component="img"
          alt="Covid-19"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDKcv-660ORS9wuveMMoBE-zV4jWhIx-pS3re_ElUcYUGBtttO&usqp=CAU"
    
        />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
