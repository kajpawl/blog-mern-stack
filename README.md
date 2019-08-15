## About

The project is a full-stack Progressive Web App for blogging based on the MERN stack. It relies mostly React, Redux and React Router in the front-end, and on the Node, Express and MongoDB in the back-end.

The project was deployed on the Heroku platform and is available at [https://damp-river-81166.herokuapp.com/](https://damp-river-81166.herokuapp.com/).

## Features

The application provides features of **listing, adding, editing, deleting posts**, as well as **displaying single  and random post**.
The app is **integrated with Facebook**, which allows commenting and sharing posts on Facebook.

The app keeps track on the number of posts and their date of addition, and supports defining number of requested posts and starting number of posts displayed.

You can manipulate with the records from the database at the following API endpoints:
- Get all posts: GET `/posts`
- Get single post (define by post id): GET `/posts/:id`
- Get random post: GET `/posts/random`
- Get requested set of posts: GET `/posts/range/:startAt/:limit`
- Upload new post: POST `/posts`
- Edit post (define post by its id): PUT `/posts/:id`
- Rate post (define rating: `upvote` or `downvote`, and post by its id): PUT `/posts/:rate/:id`
- Delete post (define post by its id): DELETE `/posts/:id`

## Technologies

The back-end of the app was uses Node.js and Express.js for the server and is integrated with MongoDb database through Mongoose.js.

The front-end of the app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and utilizes the following solutions:
- React.js - for user interface design and rendering
- Redux - for global state management
- React Router - for intuitive routing within the app
- React Facebook plugins - for integration with Facebook

Development wise, it also uses:
- GIT - for version control
- YARN - for package managing
- SCSS - for style sheets' syntax
- ES6 Javascript syntax

## Available Scripts

After installing the project with `yarn install` in the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Don't forget to make sure if the config.js files in both `client` and `server` folders are prepared to be run in the development mode, as currently the app is ready to be deployed.

Suggested config variables are:

#### `client` folder
- 'API_URL': 'http://localhost:8000/api'
- 'BASE_URL': 'http://localhost:3000'

#### `server` folder
- 'PORT': 8000
- 'DB': link to your database. In my case it was 'mongodb://localhost:27017/mernapp'

Then open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### For `client` folder: `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### For `client` folder: `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

If you want to learn more about Create React App and its features, check the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
