# Husn — A considered lookbook

A refined, frontend-only clothing storefront preview for Husn, built with TanStack Start, React, and Tailwind CSS.

## Start the site

Requires Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

Open the local address printed in your terminal. Use `npm run build` to create a production build.

## What this preview includes

- A responsive home page, occasion-filtered collection, product details, brand story, and inquiries page.
- A private selection bag saved only in the visitor's browser storage.
- Locally bundled Cormorant Garamond, Jost, and Noto Nastaliq Urdu fonts and campaign preview photography.

The four lookbook entries, names, product descriptions, and fashion photographs are illustrative samples—not Husn's confirmed products, prices, stock, models, or campaign material. Replace them with your own approved catalog and product photos before selling.

## Intentionally not connected

This version does not connect to a database. It does not submit orders, accept payments, authenticate customers, send inquiries, or provide an order-management dashboard. The selection bag stays on the device where it was made. Checkout and account screens from the uploaded archive depend on services and credentials that are not included.

## Upload to your GitHub repository

The GitHub repository provided in chat is private or unavailable for public inspection, and this project is not connected to it. Do not share an access token in chat.

1. Extract this download into a new local folder.
2. Open your existing `HUSN-ONE` repository in GitHub and choose **Add file → Upload files**.
3. Upload the extracted project files and commit them to the branch you want to use.

Alternatively, move the extracted project into a local clone of the repository and push it using your own signed-in GitHub tools. Follow the README in your GitHub repository first if it already contains files you need to keep.

## Replace the preview content

Before a public launch, replace the sample entries and generated editorial images in `src/lib/husn-catalog.ts` and `src/assets/` with Husn's approved names, product photos, descriptions, sizing, and contact details. The sample catalog deliberately does not invent prices or claim availability.

## Runtime

This is a TanStack Start app, so its development/production server is started using the provided Vite scripts. It is not a plain HTML folder; deploy with a host that supports the project runtime, or add a documented static-export setup before using GitHub Pages.