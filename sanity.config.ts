// sanity.config.ts
import { renderStudio, defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'

const config = {
    name: "vr-cafe",
    title: "vrcafe",
    projectId: "7hknafzd",
    dataset: "production",
    plugins: [structureTool()],
    schema: {
      types: [
        /* your content types here*/
      {
          title: "My Example Document Type",
          name: "exampleDocumentType",
          type: "document",
          fields: [
              {
              title: "Greeting",
              name: "greeting",
              type: "string"
              }
          ]
      }
      ],
    },
  }


export default defineConfig(
    config
);

