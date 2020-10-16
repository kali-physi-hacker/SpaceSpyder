# Architecture of app
-   frontend
-   backend 

## Frontend
Frontend is built using React as the Frontend Library and served
through the backend.

#### High Level Overview
-   Landing Page (Almost all the functionalities of the app are presented here)
-   Authentication (Login)
-   Authentication (Signup/Login)
-   About (A brief description of the app)
-   Contact (Contact details)


#### Technical Overview
##### Structure
- routes
    - /
    - /login
    - /signup
    - /about
    - /contact
    - /coming-soon
- src
    - App.js
    - components
        - Header.jsx
        - Footer.jsx
        - LoginModal.jsx
        - LogoutModal.jsx
    - pages
        - Main.jsx
        - Login.jsx
        - Auth.jsx (Signup / Signin)
        - About.jsx
        - Contact.jsx
        - Coming Soon (To implement more features, like native mobile app version)
        - 404.jsx
        - 500.jsx
    - public
        - index.html
        - manifest.json
        - other files


## Backend
The backend of this app is implemented in nodeJS using expressJS
as the web dev framework.


#### High Level Overview
- Endpoints
    ```javascript
    1. /api/auth/login/       -       (POST)
    2. /api/auth/signup/      -       (POST)
    3. /api/space/            -       (GET, POST)
    4. /api/space/:id/        -       (GET, PUT, DELETE)
    ```
  
 #### Technical Overview
 ##### Structure
 -  index.js (main entry)
 -  app.js  (usage of middlewares and controller to route config)
 -  models
    - user.js
    - space.js
 -  controllers
    - auth.js
    - space.js
 -  helpers
    - config.js
    - utils.js
 -  tests
    - models
        - auth.js
        - space.js
    - controllers
        - auth.js
        - space.js
 - .env
 

    