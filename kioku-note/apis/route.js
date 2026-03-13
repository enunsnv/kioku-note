import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getNotionData() {
  const db = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const dataSourceId = db.data_sources[0].id;

  console.log("DATA SOURCE ID:", dataSourceId);

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
  });

  console.log("NOTION DATA:", response.results);

  return response.results;
}
