import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from "@shopify/polaris";

export default function AnnotatedLayout() {
  const [discount, setDiscount] = useState("10%");
  const [enabled, setEnabled] = useState(false);
  const contentStatus = enabled ? "Disable" : "Enable";
  const textStatus = enabled ? "enabled" : "disabled";

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Default discount"
          description="Add a product to Sample App, it will automatically be discounted."
        >
          <Card sectioned>
            <Form
              onSubmit={() => {
                console.log("submission", discount);
              }}
            >
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={(value) => {
                    setDiscount(value);
                  }}
                  label="Discount percentage"
                  type="discount"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Price updates"
          description="Temporarily disable all Sample App price updates"
        >
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: () => {setEnabled(!enabled)},
            }}
            enabled={enabled}
          >
            This setting is{" "}
            <TextStyle variation="strong">{textStatus}</TextStyle>.
          </SettingToggle>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}
