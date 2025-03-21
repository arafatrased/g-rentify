export const dynamic = 'force-static'
 
export async function GET() {
  const data = {
    name: "G-Rentify",
    description: "Rentify is your ultimate destination for renting high-quality gadgets without the hassle of ownership.",
    status: "active",
  }
 
  return Response.json(data)
}


export async function POST(req) {
    const postedData = await req.json()
   
    return Response.json(postedData)
  }

