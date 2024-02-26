// sanity.config.ts
import { defineConfig } from "sanity";
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
          title: "Games",
          name: "games",
          type: "document",
          fields: [
              {
              title: "Name",
              name: "name",
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

