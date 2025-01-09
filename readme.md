
This is a simple application to keep track of day-to-day expenses. It demonstrates CRUD operations on NoSQL DB (Firebase), which stores the data permenantly against your email ID. Authentication and authorization is implemented using Google's Firebase authentication rules.

Things to remember when running it on local:

1. Since the application was developed in 2019, it uses Node version 10.16.0, which inturn has dependency on Python 2.7

2. Command to install Node -
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   nvm install 10.16.0

3. Run npm install to download the dependencies
   npm install --legacy-peer-deps
   
4. Have .env.development file at the root of the project with below properties as key-value pairs (make sure that values must not have quotes). You can find these properties under Project Settings in firebase console (after creating a project)
   FIREBASE_API_KEY=
   FIREBASE_AUTH_DOMAIN=
   FIREBASE_DATABASE_URL=
   FIREBASE_PROJECT_ID=
   FIREBASE_STORAGE_BUCKET=
   FIREBASE_MESSAGING_SENDER_ID=
   FIREBASE_APP_ID=
   FIREBASE_MEASUREMENT_ID=
