# Chu Chat

A chat application that integrates three chatbot api to provide a better solution for user reference.

## Tech Stack

- [next.js/react](https://nextjs.org/)

## Usage

1. Install all dependency

    ```bash
    npm i
    ```

2. Create a .env.local file. Insind it, paste your clerk secrets key and other configuration in it. You can follow the doc on [their website](https://clerk.com/).

    .env.local

    ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
    ```

3. Run the development server

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
