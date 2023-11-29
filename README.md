# Chu Chat

A chat application that integrates 

- Google Cloud Vertex AI API
- Open AI API

to provide a better solution for user reference.

## Demo

![demo1-img](./public/assets/images/demo1.png)

## Tech Stack

- [next.js/react](https://nextjs.org/)
- Authentication: Next Auth and Google Authentication
- Database: Firestore Database

## Usage

1. Install all dependency

    ```bash
    npm i
    ```

2.
    - Create a .env.local file. Insind it, paste your google cloud oauth api secrets, openai api key

    - next oauth url is 'http://localhost:3000' for local development mode. If you deploy to cloud, change to your own domain name.

    - GCP project ID is for calling vertex ai api.

    - Firebase service account key is for accessing the firebase from client side library.

    .env.local

    ```bash
    GOOGLE_ID=
    GOOGLE_SECRET=

    OPENAI_API_KEY=

    NEXTAUTH_URL=
    NEXTAUTH_SECRET=

    GCP_PROJECT_ID=
    
    FIREBASE_SERVICE_ACCOUNT_KEY=
    ```

3. Run the development server

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
