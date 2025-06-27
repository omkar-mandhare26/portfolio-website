# Omkar Mandhare's Portfolio Website

Welcome to the codebase of my personal portfolio website, built with **Next.js**, **Tailwind CSS**, **Prisma**, and **shadcn/ui**. This site showcases my projects, skills, and contact information, and serves as a hub for potential clients or employers to reach out.

## 🚀 Tech Stack

-   **Next.js** – React framework for building fast, modern web apps
-   **Tailwind CSS** – Utility-first CSS framework
-   **TypeScript** – Typed JavaScript for scalable apps
-   **Prisma** – Modern ORM for PostgreSQL
-   **PostgreSQL** – Relational database for storing contact form submissions
-   **shadcn/ui** – UI components powered by Radix UI
-   **next-themes** – Theme toggling for dark/light mode
-   **lucide-react** – Icon library

---

## 📂 Features

-   ⚡ Fast and responsive UI
-   🌙 Dark/Light theme toggle
-   📬 PostgreSQL-powered contact form (via Prisma)
-   💻 Projects section with GitHub links
-   🛠 Tech stack and skills listed
-   📱 Socials and direct messaging

---

## 📁 Folder Structure

```
/portfolio
├── components       # Reusable UI components
├── data             # Static data for projects, skills, socials
├── pages            # Next.js pages (e.g., index.tsx, api)
├── prisma           # Prisma schema and migrations
├── public           # Static assets (images, favicon, etc.)
├── styles           # Global styles (if any)
├── lib              # Utility functions
├── app              # App directory (if using Next.js App Router)
├── package.json     # Project config and dependencies
```

---

## 🛠 Setup and Development

### 1. Clone the repo

```bash
git clone https://github.com/omkar-mandhare26/portfolio-website
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Prisma and PostgreSQL

Ensure you have a PostgreSQL database ready. Then configure your environment:

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Generate and run Prisma migrations:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🚀

---

## 🧠 About Me

I'm Omkar Mandhare, a full-stack developer from India passionate about building scalable and modern web applications. Check out the [live portfolio site](https://omkarmandhare.com) to know more!

### Connect with me:

-   GitHub: [omkar-mandhare26](https://github.com/omkar-mandhare26)
-   Twitter: [@omkarmandhare26](https://x.com/omkarmandhare26)
-   LinkedIn: [linkedin.com/in/omkar-mandhare26](https://linkedin.com/in/omkar-mandhare26)
-   Email: [omkarmandhare26@gmail.com](mailto:omkarmandhare26@gmail.com)

---

## 🙏 Acknowledgements

-   [shadcn/ui](https://ui.shadcn.com)
-   [Lucide Icons](https://lucide.dev)
-   [Next.js](https://nextjs.org)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Prisma](https://prisma.io)
