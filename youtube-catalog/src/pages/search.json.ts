import { CollectionEntry, getCollection } from "astro:content";
import lunr from "lunr";
import { URL } from "node:url";

type VideoId = Pick<CollectionEntry<"videos">, "id">["id"];

const videosPromise = getCollection("videos").then((videos) => ({
  videos,
  index: lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("body");
    this.field("tags");

    videos.forEach((video) => {
      this.add({
        title: video.data.title,
        body: video.body,
        tags: video.data.tags,
        id: video.id,
      });
    });
  }),
}));

export async function get({ request }) {
  const videoIndex = await videosPromise;

  const q = new URL(request.url).searchParams.get("q")?.toLowerCase();

  const videos = videoIndex.index
    .search(q ?? "")
    .map((res) => {
      const id = res.ref as VideoId;
      return videoIndex.videos.find((video) => video.id === id);
    })
    .filter((a) => a)
    .sort(
      (a, b) => b!.data.publishedAt.getTime() - a!.data.publishedAt.getTime()
    );

  return new Response(JSON.stringify(videos.slice(0, 10)), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
