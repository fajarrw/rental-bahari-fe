"use client";

const CarCardSkeleton = ({ item }) => {
  return (
    <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
      <div className="relative h-28 aspect-video">
        <span class="skeleton-loader h-full w-full"></span>
      </div>
      <div className="flex flex-col w-52 ml-8 gap-2 px-2">
				<span class="skeleton-loader h-4 w-32"></span>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2">
						<span class="skeleton-loader h-4 w-4"></span>
            <span class="skeleton-loader h-4 w-16"></span>
          </div>
          <div className="flex flex-row gap-2">
						<span class="skeleton-loader h-4 w-4"></span>
            <span class="skeleton-loader h-4 w-16"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-36 items-end gap-4">
        <div className="flex flex-col w-36 items-end gap-2">
					<span class="skeleton-loader h-4 w-16"></span>
          <span class="skeleton-loader h-4 w-36"></span>
        </div>
        <span className="skeleton-loader h-14 w-32"></span>
      </div>
    </div>
  );
};

module.exports = CarCardSkeleton;
