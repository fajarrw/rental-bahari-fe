"use client";

const SummaryCardSkeleton = () => {
  return (
    <div className="flex flex-col max-w-[25rem] w-full items-stretch gap-3 md:shadow-xl pt-4 pb-10 px-6">
      <span class="skeleton-loader h-12 w-80"></span>

      <div className="flex flex-row justify-between items-center">
        <div className="relative h-20 aspect-video">
          <span class="skeleton-loader h-full w-32"></span>
        </div>
        <span class="skeleton-loader h-6 w-32"></span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <span class="skeleton-loader h-2 w-16"></span>
          <span class="skeleton-loader h-4 w-16"></span>
        </div>
        <div className="flex flex-col gap-2">
          <span class="skeleton-loader h-2 w-16"></span>
          <span class="skeleton-loader h-4 w-16"></span>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between text-sm py-1">
        <span class="skeleton-loader h-4 w-16"></span>
        <span class="skeleton-loader h-4 w-32"></span>
      </div>
      <div className="flex flex-row justify-between text-sm py-1">
        <span class="skeleton-loader h-4 w-16"></span>
        <span class="skeleton-loader h-4 w-32"></span>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center py-1">
        <span class="skeleton-loader h-6 w-16"></span>
        <span class="skeleton-loader h-6 w-32"></span>
      </div>
      <div className="flex flex-col items-center py-1">
        <span class="skeleton-loader h-4 w-full"></span>
      </div>
      <div className="flex flex-row justify-center gap-4 py-2">
        <span class="skeleton-loader h-12 w-32"></span>
      </div>
    </div>
  );
};

module.exports = SummaryCardSkeleton;
