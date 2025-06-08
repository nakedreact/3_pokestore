import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${baseURL}/api/products`);
  if (!response.ok) {
    const text = await res.text();
    console.error("Fetch failed:", text); // Print HTML response
    throw new Error("Failed to fetch");
  }
  const products = await response.json();
  return products;
}
export default async function Home(props) {
  const products = await getProducts();

  let planner = null;
  let stickers = [];

  for (let product of products) {
    if (product.name === "Medieval Dragon Month Planner") {
      planner = product;
      continue;
    }
    stickers.push(product);
  }
  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
