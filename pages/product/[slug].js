import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import data from "../../utils/data";
import Layout from "../../components/Layout/Layout";
import {
  Grid,
  Link,
  ListItem,
  Typography,
  Card,
  List,
  Button,
} from "@material-ui/core";
import useStyles from "../../utils/style";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return (
      <div>
        {" "}
        <h5>Sorry product not found</h5>
      </div>
    );
  }

  const classes = useStyles();

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to home</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <img
            src={product.image}
            alt=""
            style={{ height: "600px", width: "100%" }}
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {" "}
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} star ({product.numReviews}) reviews{" "}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description} </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>$ {product.price} </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0
                        ? "available in stock"
                        : "unavailable"}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  ADD TO CART
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
