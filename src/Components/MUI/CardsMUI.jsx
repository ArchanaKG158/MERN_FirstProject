import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Container, Grid, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <Typography variant="h4" align="center">
        MUI Cards
      </Typography>
      <Grid container spacing={2} my={1}>
        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/bird.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bird
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Birds are the one who gets up early in the morning or who does
                something before other people.
              </Typography>
              <Chip label="Humming Bird" color="secondary" size="small" />
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/rama.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lord Rama
              </Typography>
              <Typography variant="body2" color="text.secondary">
                He is the seventh and one of the most popular avatars of Vishnu.
                In Rama-centric traditions of Hinduism, he is considered the
                Supreme Being. Rama.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/nature.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nature
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "In every walk with nature one receives far more than he seeks."
              </Typography>
              <Chip
                label="Nature"
                color="secondary"
                variant="outlined"
                size="small"
              />
              <Chip
                label="Bridge"
                color="secondary"
                variant="outlined"
                size="small"
                style={{ margin: "1px 140px" }}
              />
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/umbrella.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cutest Umbrella
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rains and Umbrella comes into picture.
              </Typography>
              <Chip
                label="Umbrella"
                color="secondary"
                variant="outlined"
                size="small"
                avatar={<Avatar>U</Avatar>}
              />
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/flower.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Flower
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Happiness held is the seed; Happiness shared is the flower.”
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="Bird"
              height="180"
              image="/img/taj mahal.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Taj Mahal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The beauty of the Taj Mahal lies not just in its architecture,
                but in the love story behind it.”
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Share
              </Button>
              <Button size="small" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
