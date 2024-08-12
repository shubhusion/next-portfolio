<div align="center">
  <img src="https://github.com/shubhusion/next-portfolio/blob/master/public/portfolio-fork.png" alt="Portfolio Image" width="600" />
  <h1>Next Portfolio</h1>
  <p>Built with Next.js + TypeScript + Tailwind CSS + Firebase</p>
  <div>
    <img src="https://img.shields.io/github/forks/shubhusion/next-portfolio?style=for-the-badge" />
    <a href="http://shubhusion.vercel.app/">
      <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=vercel" />
    </a>
  </div>
  <p>
    <a href="#introduction-">Introduction</a> •
    <a href="#tech-stack-%EF%B8%8F">Tech Stack</a> •
    <a href="#development-">Development</a> •
    <a href="#deployment-">Deployment</a> •
    <a href="#license-">License</a>
  </p>
</div>

## Introduction 👋

Welcome to **Next Portfolio**! This portfolio website is built using:

- **Next.js** for a robust and scalable frontend
- **TypeScript** for improved code clarity and safety
- **Tailwind CSS** for a modern, responsive design
- **Firebase** for dynamic backend services like real-time database

Check out the demo to see it in action: [View Demo](http://shubhusion.vercel.app/)

## Tech Stack 🛠️

- **[Next.js](https://nextjs.org)** - A React framework for production
- **[TypeScript](https://www.typescriptlang.org)** - JavaScript with static types
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Firebase](https://firebase.google.com)** - Backend-as-a-Service
- **[Brevo](https://www.brevo.com)** - Email service
- **[Framer Motion](https://www.framer.com/motion)** - Animations and interactions

## Development 💻

To run the portfolio locally, follow these steps:

1. **Fork** [this repository](https://github.com/shubhusion/next-portfolio).

2. **Clone** your forked repository:

   ```bash
   git clone https://github.com/<your-github-username>/next-portfolio.git
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a Firebase project** and add a web app to it.

5. **Set up environment variables** in a `.env.local` file:

   ```
   BREVO_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```

   > **Note**: For `BREVO_API_KEY`, create an API key from "SMTP & API" -> "API Keys" in Brevo with "Restricted Access" to only "Transactional Email".

6. **Update the sample [data.json](https://github.com/jigar-sable/shubhusion/blob/main/data.json)** with your own data or import it into Firebase. You can use [Cloudinary](https://cloudinary.com) or [Firebase Storage](https://firebase.google.com/docs/storage) for images.

7. **Import JSON data** into Firebase:

   - Go to [Firebase Console](https://console.firebase.google.com) and select your project.
   - Navigate to "Database" -> "Realtime Database" -> "Import JSON" and import the [data.json](https://github.com/shubhusion/next-portfolio/blob/main/data.json) file.

8. **Run the project locally:**

   ```bash
   npm run dev
   ```

## Deployment 🚀

1. **Create a Vercel account** and select "Import Project".

2. **Import** your forked repository and deploy.

3. **Add environment variables** in the Vercel dashboard:

   ```
   BREVO_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```

4. **Congratulations!** Your portfolio is now live 🎉

## License 📄

This project is licensed under the [MIT License](https://github.com/shubhusion/next-portfolio/blob/main/LICENSE.md).
