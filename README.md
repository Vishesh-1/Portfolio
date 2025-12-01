# Data Engineer Portfolio

A modern, minimalist portfolio website built for Data Engineers to showcase projects, certifications, and technical skills. Built with **Next.js**, **Tailwind CSS**, and a lightweight file-based CMS.

## 🚀 Features

*   **Portfolio Showcase:** Clean grid layout to display data engineering projects with tags and links.
*   **Certifications Section:** Dedicated area to display professional certifications with issuer details and optional images.
*   **Admin Dashboard:** A private `/admin` route to easily add, edit, or delete projects and certifications without touching code.
*   **File-Based Database:** Uses a local JSON file system (`data/projects.json`), making it zero-config and easy to back up.
*   **Responsive Design:** Fully mobile-friendly UI built with Tailwind CSS.

## 🛠️ Tech Stack

*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Deployment:** Vercel (Recommended)

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🔐 Admin Dashboard

The project includes a hidden admin dashboard at `http://localhost:3000/admin`.

1.  **Access:** Navigate to `/admin` in your browser.
2.  **Login:** The default password check is simple.
    *   Create a `.env.local` file in the root directory.
    *   Add your password: `ADMIN_PASSWORD=your_secure_password`
    *   If no environment variable is set, the default password is `admin`.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the `ADMIN_PASSWORD` environment variable in Vercel's settings.
4.  Deploy!

**Note on Vercel/Serverless:**
Since Vercel is a serverless platform, changes made via the Admin Dashboard (writing to JSON files) **will not persist** permanently in production. The Admin Dashboard is best used locally (`localhost`) to manage content. Once you've added your data locally, commit and push the changes to GitHub to update your live site.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.