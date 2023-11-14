# Chu Chat

A chat application that integrates three chatbot api to provide a better solution for user reference.

## Tech Stack

- [next.js/react](https://nextjs.org/)
- Authentication: Next Oauth
- Database: Firestore Database

## Usage

1. Install all dependency

    ```bash
    npm i
    ```

2.
    - Create a .env.local file. Insind it, paste your google cloud oauth api secrets, openai api key

    - next oauth url is 'http://localhost:3000' for local development mode. If you deploy to cloud, change to your own domain name.

    .env.local

    ```bash
    GOOGLE_ID=
    GOOGLE_SECRET=

    OPENAI_API_KEY=

    NEXTAUTH_URL=
    NEXTAUTH_SECRET=

    FIREBASE_SERVICE_ACCOUNT_KEY=
    ```

3. Run the development server

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
