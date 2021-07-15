import { Container, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { MdBookmarkBorder } from 'react-icons/md';

import data from '../assets/data.json';

const useStyle = makeStyles((theme) => ({
  containerBox: {
    margin: '0px',
    padding: '0px',
    background: '#FFF3ED',
  },
  title: {
    paddingLeft: '0px',
    fontFamily: 'OpenSansCondensed',
  },
  card: {
    maxWidth: '350px',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
    },
  },
  imageData: {
    height: '20rem',
  },
  cardSection: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },
  },
  singleCardItem: {
    margin: '0px 20px',
  },
  avatar: {
    marginRight: '1rem',
  },
  iconConf: {
    color: theme.palette.secondary.dark,
  },
}));

const BlogSection = () => {
  const classes = useStyle();
  console.log(data);
  return (
    <div className={classes.containerBox}>
      <Typography variant="h3" align="left" className={classes.title}>
        Articles
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        className={classes.cardSection}
      >
        {data.map((data) => (
          <Grid item key={data.id} className={classes.singleCardItem}>
            <Card className={classes.card}>
              <CardActionArea disableRipple>
                <CardMedia
                  className={classes.imageData}
                  image={`${data.image}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" align="left">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <Avatar
                            src={data.avatar}
                            className={classes.avatar}
                          />
                        </Grid>
                        <Grid item>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography>{data.name}</Typography>
                            </Grid>
                            <Grid item>
                              <Typography>{data.date}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <MdBookmarkBorder className={classes.iconConf} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogSection;
