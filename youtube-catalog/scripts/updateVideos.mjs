import fs from "node:fs";
import { stringify } from "yaml";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID =
  process.env.YOUTUBE_CHANNEL_ID || "UC6vRUjYqDuoUsYsku86Lrsw";

const videoPath = (videoId) => `./src/content/videos/${videoId}.mdx`;

const videos = [];

let nextPageToken = null;
do {
  const listUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=500${
    nextPageToken ? `&pageToken=${nextPageToken}` : ""
  }`;
  const listRes = await (await fetch(listUrl)).json();
  for (const item of listRes.items ?? []) {
    if (!fs.existsSync(videoPath(item.id.videoId))) {
      videos.push(item.id.videoId);
    }
  }
  nextPageToken = listRes.nextPageToken;
  console.log(nextPageToken);
} while (nextPageToken);

videos
  .map((videoId) =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,status&id=${videoId}&key=${YOUTUBE_API_KEY}`
    ).then((resp) => resp.json())
  )
  .reduce(async (acc, cur) => {
    const data = await cur;
    const firstItem = data.items[0];
    if (firstItem?.id) {
      const { id, snippet, status } = firstItem;
      fs.writeFileSync(
        videoPath(id),
        `---
${stringify({
  title: snippet.localized.title,
  publishedAt: snippet.publishedAt.toString(),
  thumbnails: snippet.thumbnails,
  tags: snippet.tags,
  privacyStatus: status.privacyStatus,
  short: snippet.localized.description.includes("#shorts"),
})}---
  
  ${snippet.localized.description}
  `
      );
    }
  }, Promise.resolve());

const videoFiles = fs.readdirSync("./src/content/videos");
fs.writeFileSync(
  "./src/content/videos.ts",
  `export enum VideoIDsType { ${videoFiles
    .map((v) => `"${v}" = "${v}"`)
    .join(", ")} };`
);
