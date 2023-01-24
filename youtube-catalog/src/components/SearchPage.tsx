import { useState, useEffect } from "preact/hooks";

import { CollectionEntry } from "astro:content";

import VideoGrid from "./VideoGrid";

type VideoData = CollectionEntry<"videos">;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(`/search.json?q=${encodeURIComponent(search)}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setIsLoading(false);
      });
  }, [search]);

  return (
    <div class="flex flex-col">
      <div className="relative drop-shadow-md">
        <svg class="absolute top-2.5 left-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(42, 50, 94, 1);">
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
          </path>
        </svg>
        <input
          class="w-full px-4 py-2 pl-11 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-2"
          type="text"
          placeholder="Search"
          value={search}
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <h1 class="text-lg font-semibold px-8 py-4">Matched Videos:</h1>
      <VideoGrid videos={videos} isLoading={isLoading}/>
    </div>
  );
}
