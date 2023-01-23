import { ComponentChildren, JSX } from "preact";

export default function ({
  thumbnails,
  title,
}: {
  thumbnails: {
    high: {
      url: string;
    };
  };
  title: string;
}) {
  return (
    <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:h-48">
        <img
          src={thumbnails.high.url}
          alt={title}
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div class="flex flex-1 flex-col space-y-2 p-4">
        <h3 class="text-sm font-medium text-gray-900 truncate line-clamp-1">
          {title}
        </h3>
      </div>
    </div>
  );
}
