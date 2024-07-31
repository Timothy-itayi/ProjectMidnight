import { checkAndConnect, disconnect } from "../../../adapters/database/libs/db";

// export const runtime = "edge"; // Specify that this API route should run on the Edge runtime

export default async function handler(req: Request): Promise<Response> {
  try {
    // Check and connect to the database if not already connected
    await checkAndConnect();
    console.log("Database check complete.");

    // // Create a Response object for Edge runtime
    // return new Response("connected and disconnected", {
    //   status: 200,
    // });

    // Uncomment the line below to return a JSON response instead
    return new Response(JSON.stringify({ message: "Connected" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error during GET request:", error);
    return new Response("An error occurred", {
      status: 500,
    });
  } finally {
    // Disconnect from the database if necessary
    disconnect();
  }
}
