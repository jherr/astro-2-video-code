import { CollectionEntry } from "astro:content";

import VideoCard from "./VideoCard";
import createSlug from "../lib/createSlug";

export default function VideoGrid({
  videos,
  isLoading
}: {
  videos: CollectionEntry<"videos">[];
  isLoading: Boolean;
}) {

  if(isLoading) return <div class='p-4 bg-white rounded-md drop-shadow-md'>Loading videos...</div>

  return (
    <>
      <ul
        role="list"
        class="grid grid-cols-1 p-8 pt-2 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3"
      >
        {videos.map(({ data }) => (
          <li>
            <a href={`/videos/${createSlug(data.title)}`}>
              <VideoCard {...data} />
            </a>
          </li>
        ))}
      </ul>
      {videos.length < 1 && <div className="p-4 bg-white flex items-center gap-2 rounded-md drop-shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(42, 50, 94, 1);">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3z">
        </path>
      </svg>
        <span>No video was found, try these queries:</span>
        <ul class="p-0 flex items-center gap-2 list-none">
          <li class="p-1 bg-[#2A325E30] rounded-md text-sm font-bold">Bun</li>
          <li class="p-1 bg-[#2A325E30] rounded-md text-sm font-bold">Node</li>
          <li class="p-1 bg-[#2A325E30] rounded-md text-sm font-bold">Fresh</li>
          <li class="p-1 bg-[#2A325E30] rounded-md text-sm font-bold">Astro</li>
          <li class="p-1 bg-[#2A325E30] rounded-md text-sm font-bold">Remix</li>
        </ul>
      </div> }
    </>
  );
}
