import Stripe from "stripe";
import "../../../envConfig.js";

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY, { apiVersion: "2025-05-28.basil" });

export async function GET() {
  try {
    const products = await stripe.products.list({ active: true });
    const prices = await stripe.prices.list({ active: true });

    const combinedData = products.data.map((product) => {
      const productPrices = prices.data.filter((price) => {
        return price.product === product.id;
      });

      return {
        ...product,
        prices: productPrices.map((price) => {
          return {
            id: price.id,
            unit_amount: price.unit_amount,
            currency: price.currency,
            recurring: price.recurring,
          };
        }),
      };
    });
    return Response.json(combinedData);
  } catch (error) {
    console.log("Error fetching data from Stripe", error.message);
    return Response.json({ error: "Failed to fetch data from Stripe" });
  }
}
