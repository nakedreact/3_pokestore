# TechStore Fullstack Demo

This is a fullstack demo e-commerce app called **TechStore**, built with Next.js, React, and Stripe.  
It features a product catalog, shopping cart, Stripe-powered checkout, and a responsive UI.

## Features

- Product listing for planners and tech stickers
- Add to cart functionality
- Image portal/lightbox for product previews
- Responsive design
- Stripe checkout integration

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Stripe](https://stripe.com/) (for payments)
- [CSS Modules / Global CSS](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [FontAwesome](https://fontawesome.com/) (for icons)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Stripe account (for live checkout)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/pokestore.git
   cd pokestore/3_pokestore
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the `3_pokestore` directory:

   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
3_pokestore/
├── app/
│   ├── page.js         # Main landing page
│   ├── cart/
│   │   └── page.js     # Cart page
│   └── globals.css     # Global styles
├── components/
│   ├── ImageBanner.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   └── Portal.jsx
├── context/
│   └── ProductContext.jsx
├── public/
│   └── low_res/
│   └── med_res/
├── api/
│   └── checkout.js     # Stripe checkout API route
├── package.json
└── ...
```

## Customization

- **Add products:**  
  Update your API or mock data in `/api/products` as needed.

- **Styling:**  
  Edit `globals.css` or component styles for custom look and feel.

## License

MIT

---

**Made with ❤️ for learning and demo purposes.**
