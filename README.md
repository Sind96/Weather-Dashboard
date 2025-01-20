# ToDo List App

This Weather Dashboard allows users to search for city weather data, view current weather conditions, and see a 5-day forecast. Users can also add and delete cities from their favorites list for quick access to their preferred locations.

## Getting started

To run this project locally, you'll need the following:

- **Node.js (version 18 or above)**: Download and install from the [Node.js](https://nodejs.org/en) website.
- **A command-line interface (CLI)**: Such as Terminal or Command Prompt.

## Prerequisites

1. Obtain API key for OpenWeatherMap:

- Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free membership.
- Once logged in, locate your username dropdown in the navbar, and navigate to My API Keys.
- Make sure you have an active key and save its Key and Name to use in the .env file.

2. Create environment files:

- In the client folder, create a .env file and add your OpenWeatherMap API key:

  ```bash
  VITE_API_KEY="your-api-key-here"

  ```

- In the server folder, create a .env file and add your MongoDB URI:
  ```bash
  MONGO_URI="your-mongodb-uri-here"
  ```

## Installation

1. Clone this repo and enter the main branch:

   ```bash
   git clone https://github.com/Sind96/To-Do-List-App
   ```

2. Install dependencies in both client and server folders.

   ```bash
   cd client - npm install
   cd server - npm install
   ```

3. Database Setup:

- To run the project locally, you need a MongoDB database. If you don't have MongoDB Compass installed, you can download it from [here](https://www.mongodb.com/docs/compass/current/) and follow the instructions for setup.
  1. Create the MongoDB database named **WeatherDashboard** (or another preferred name).
  2. Inside the **WeatherDashboard** database, create a collection called **favorites** to store favorite cities.

4. Start the app on both the client and server side for it to work on your localhost.

   ```sh
   cd client - npm run dev
   cd server - nodemon
   ```

## Tech Stack

[![TypeScript][TypeScript]][TypeScript-url][![Node.js][Node.js]][Node.js-url][![Express.js][Express.js]][Express.js-url] [![MongoDB][Mongo-Db]][Mongo-Db-url] [![Mongoose][Mongoose]][Mongoose-url] [![GitHub][GitHub]][GitHub-url] [![ESLint][ESLint]][ESLint-url] [![Prettier][Prettier]][Prettier-url][![Chart.js][Chart.js]][Chart.js-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Mongo-Db]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[Mongo-Db-url]: https://www.mongodb.com/docs/atlas/getting-started/
[Express.js]: https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat
[Express.js-url]: https://expressjs.com/
[Mongoose]: https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat
[Mongoose-url]: https://mongoosejs.com/docs/index.html
[ESLint]: https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat
[ESLint-url]: https://eslint.org/docs/latest/
[GitHub-url]: https://github.com/
[GitHub]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat
[Prettier]: https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat
[Prettier-url]: https://prettier.io/
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/docs/getting-started
[TailwindCSS]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[TypeScript-url]: https://www.typescriptlang.org/
[Node.js]: https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat
[Node.js-url]: https://nodejs.org/en
[Chart.js]: https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat
[Chart.js-url]: https://www.chartjs.org/
