import TestData from "./components/TestData";

export default async function Dashboard() {
  const result = await fetch(process.env.NEXT_PUBLIC_CLIENT_API_CAMERA, {
    cache: "no-store", // Ensures fresh data on every request
  }).then(res => res.json());

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <TestData data={result} /> */}
    </div>
  );
}