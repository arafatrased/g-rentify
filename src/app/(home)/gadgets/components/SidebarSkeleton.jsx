export default function SidebarSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-5 gap-y-10">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="flex w-full flex-col gap-3">
          <div className="skeleton rounded w-full lg:w-[150px] lg:h-[130px] h-[150px]"></div>
          <div className="skeleton h-4 w-[80%] rounded"></div>
        </div>
      ))}
    </div>
  );
}
