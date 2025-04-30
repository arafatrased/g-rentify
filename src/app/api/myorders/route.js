import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Email query parameter is required" }),
      { status: 400 }
    );
  }

  try {
    const ordersCollection = dbConnect("orders");

    const results = await ordersCollection
      .aggregate([
        {
          $match: { email },
        },
        {
          $unwind: "$gadgetId",
        },
        {
          $addFields: {
            gadgetIdObj: { $toObjectId: "$gadgetId" },
          },
        },
        {
          $lookup: {
            from: "gadgets",
            localField: "gadgetIdObj",
            foreignField: "_id",
            as: "gadgetDetails",
          },
        },
        {
          $unwind: "$gadgetDetails",
        },
        {
          $project: {
            _id: 0,
            title: "$gadgetDetails.title",
            price: "$gadgetDetails.price",
            status: 1,
            date: 1,
          },
        },
        {
          $sort: { date: -1 },
        },
      ])
      .toArray();

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Order summary error:", error);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}
