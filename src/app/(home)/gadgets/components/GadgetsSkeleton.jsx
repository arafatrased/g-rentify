export default function GadgetsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="flex w-full flex-col gap-3">
          <div className="skeleton h-52 rounded w-full"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-8 w-28 rounded"></div>
        </div>
      ))}
    </div>
  );
}
