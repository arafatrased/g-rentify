import dbConnect from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log("Email parameter:", email); // Log the email parameter for debugging

    if (!email) {
      return Response.json({ message: "Email parameter is required" }, { status: 400 });
    }

    const notifications = await dbConnect("notifications").find({ email }).toArray();

    if (!notifications) {
      return Response.json({ message: "No notifications found" }, { status: 404 });
    }

    return Response.json(notifications, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/notification:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const postedData = await req.json(); 
    const result = await dbConnect("notifications").insertOne(postedData);

    if (!result) {
      return Response.json({ message: "Failed to create notification" }, { status: 500 });
    }

    return Response.json({ message: "Notification created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/notification:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}