# Dune Emirates IT Solutions (DEITS) Website

A professional, SEO-optimized business website for an IT solutions provider in the UAE, showcasing services, products, and expertise.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/deitsuae/generated-app-20251019-100601)

## About The Project

This project is a professional, modern, and SEO-optimized corporate website for Dune Emirates IT Solutions (DEITS), a UAE-based IT services provider. The website serves as a digital storefront, showcasing their comprehensive range of services, including IT Managed Services, Cybersecurity, Cloud Solutions, Hardware Supply, and priority offerings like Photocopier Rentals and Toner & Cartridge sales.

The site is built with a focus on performance, visual excellence, and user experience, leveraging a modern tech stack deployed on Cloudflare's global network.

### Key Features

*   **Comprehensive Service Showcase:** Detailed pages for all IT services offered by DEITS.
*   **Priority Product Pages:** Dedicated, e-commerce style pages for Photocopier Rentals and Toner & Cartridge Supply.
*   **Custom PC Builds:** A specialized section for high-performance custom PCs for various professional needs.
*   **SEO Optimized:** Built from the ground up with SEO best practices, including keyword-rich content, proper meta tags, and a fast, mobile-first design.
*   **Tech Insights Blog:** A content-rich blog to drive organic traffic and establish industry expertise.
*   **Modern & Responsive Design:** A clean, professional, and visually stunning interface that works flawlessly across all devices.
*   **High Performance:** Built with Vite and deployed on Cloudflare Workers for lightning-fast load times.

## Technology Stack

This project is built with a modern, robust, and scalable technology stack:

*   **Frontend:**
    *   [React](https://react.dev/)
    *   [Vite](https://vitejs.dev/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [shadcn/ui](https://ui.shadcn.com/)
*   **Routing:**
    *   [React Router](https://reactrouter.com/)
*   **Animation & UI:**
    *   [Framer Motion](https://www.framer.com/motion/)
    *   [Lucide React](https://lucide.dev/)
*   **Backend & Deployment:**
    *   [Cloudflare Workers](https://workers.cloudflare.com/)
    *   [Hono](https://hono.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/deits_website.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd deits_website
    ```
3.  Install dependencies:
    ```sh
    bun install
    ```

### Running the Development Server

To start the local development server, which includes the Vite frontend and a local `workerd` instance for the backend API:

```sh
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The page will reload automatically if you make edits.

## Project Structure

The project is organized into three main parts: the frontend application, the backend worker, and a shared directory.

*   `src/`: Contains all the frontend code, built with React and TypeScript.
    *   `src/pages/`: Top-level page components for each route.
    *   `src/components/`: Reusable UI components, including shadcn/ui primitives.
    *   `src/lib/`: Utility functions and API client.
*   `worker/`: Contains the Cloudflare Worker backend code, built with Hono.
    *   `worker/index.ts`: The entry point for the worker.
    *   `worker/user-routes.ts`: Define your API routes here.
*   `shared/`: Contains TypeScript types and mock data shared between the frontend and the worker to ensure type safety.

## Deployment

This application is designed for seamless deployment to the Cloudflare network.

### Deploying with Wrangler

1.  Ensure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated.
2.  Build the application for production:
    ```sh
    bun run build
    ```
3.  Deploy the application using the following command:
    ```sh
    bun run deploy
    ```

This command will build the frontend application and deploy both the static assets and the worker script to your Cloudflare account.

### Deploy with the Click of a Button

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/deitsuae/generated-app-20251019-100601)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.