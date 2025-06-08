import Stripe from "stripe";
import "../../../envConfig.js";

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY, { apiVersion: "2025-05-28.basil" });

export async function POST(request) {
  try {
    const { lineItems } = await request.json();
    console.log(lineItems);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: process.env.NEXT_PUBLIC_BASE_URL + "/success",
      cancel_url: process.env.NEXT_PUBLIC_BASE_URL + "/",
    });
    return Response.json(session);
  } catch (error) {
    console.log("Error creating cart checkout", error.message);
    return Response.json({ error: "Failed to create Stripe checkout page" });
  }
}
