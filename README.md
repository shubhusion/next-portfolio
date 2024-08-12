
# Portfolio

<div align="center">
  &middot;
  <i>Next Portfolio built in Next.js + TypeScript + Tailwind CSS + Firebase</i>
  &middot;
  <br/>
  <br/>

  <p align="center">
    <img src="https://img.shields.io/github/forks/shubhusion/next-portfolio?style=for-the-badge" />
  <a href="http://shubhusion.vercel.app/">
    <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=vercel" />
  </a>
</p>

<p align="center">
  <a href="#introduction-">Introduction</a> •
  <a href="#tech-stack-%EF%B8%8F">Tech Stack</a> •
  <a href="#development-">Development</a> •
    <a href="#deployment-">Deployment</a> •
  <a href="#license-">License</a>
</p>

</div>

## Introduction 👋

Next Portfolio is built using Next.js and Tailwind CSS for a modern design and rapid development. TypeScript is utilized for code clarity and safety. Additionally, Firebase is integrated for backend services such as a real-time database. The result is a dynamic and functional portfolio website that showcases the developer's skills and experience.

## Tech Stack 🛠️

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)
- [Brevo](https://www.brevo.com)
- [Framer Motion](https://www.framer.com/motion)

## Development 💻

Here are the steps to run the portfolio locally.

1. Fork [this](https://github.com/shubhusion/next-portfolio) repository.

2. Clone your forked copy of the repo

   ```bash
   git clone https://github.com/<your-github-username>/next-portfolio.git
   ```

3. Install dependencies

   ```bash
   npm i
   ```

4. Create a Firebase project and select the web app.

5. Create an `.env.local` file in the root directory, and add the following variables with your Firebase config:
   ```
   BREVO_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```

> **Note**: `BREVO_API_KEY` - Create an API key from "SMTP & API" -> "API Keys" in Brevo with "Restricted Access" to only "Transactional Email"

6. Update the sample [data.json](https://github.com/jigar-sable/shubhusion/blob/main/data.json) provided with your data or directly import the same and edit using Firebase later. (For storing images, you can use [Cloudinary](https://cloudinary.com) or [Firebase Storage](https://firebase.google.com/docs/storage))

7. Import JSON data:

   - Go to [Firebase Console](https://console.firebase.google.com) and select your project.
   - Go to "Database" -> "Realtime Database" -> "Import JSON" and import the [data.json](https://github.com/shubhusion/next-portfolio/blob/main/data.json) file.

8. Run the project:

   ```bash
   npm run dev
   ```

## Deployment 🚀

1. Create a Vercel account and select "Import Project."

2. Select the forked repository and deploy.

3. Add the following environment variables in the Vercel dashboard:
   ```
   BREVO_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```

4. Hurray! You successfully deployed the portfolio 🥳

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/shubhusion/next-portfolio/blob/main/LICENSE.md).

---

The demo link is now updated to `http://shubhusion.vercel.app/`.
