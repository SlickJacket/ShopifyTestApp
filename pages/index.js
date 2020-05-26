import { Layout, Page, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  header: {
    backgroundColor: "blue",
  },
});

const handleSelection = (resources) => {
  const idsFromResources = resources.selection.map((product) => product.id);
  store.set("ids", idsFromResources);
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const img =
    "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
  const emptyState = !store.get("ids");

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select products",
          onAction: () => setOpen(true),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => {
          handleSelection(resources), setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => setOpen(true),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      ) : (
        <ResourceListWithProducts />
      )}
    </Page>
  );
}

{
  /* <Grid container direction="column">
      <Grid item>
        <TextStyle variation="positive">
          Sample app using React and Next.js
        </TextStyle>
      </Grid>
      <Grid item>
          <Typography variant="h1" className={classes.header}>I'm working!</Typography>
      </Grid>
    </Grid> */
}
