# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- ******************************************************************************** -->

## Design Decisions

### Component Structure

- **Header Component**: 
  - Renders the logo, header content, and formatted date.
  - Provides a consistent header across the application.

- **Footer Component**:
  - Displays contact information and copyright details.
  - Ensures a consistent footer layout on all pages.

- **NewsInfo Component**:
  - Fetches news data from the News API and displays it.
  - Implements pagination for navigating through news articles.
  - Implemented filtering based on search query and sorted news based on publishing date.

- **SearchInput Component**:
  - Provides a search input field for users to search news articles.
  - Utilizes debouncing to improve search performance.

- **Pagination Component**:
  - Implements pagination functionality for navigating through news pages.
  - Calculates the total number of pages based on the total number of results and page size.

- **WeatherInfo Component**:
  - Retrieves weather data based on the user's geolocation.
  - Sets background image based on current weather conditions.

### API Integration

- **News API**:
  - Integrates with the News API to fetch top headlines based on search queries and language preferences.
  - Handles loading indicators, error messages, and pagination.

- **OpenWeather API**:
  - Utilizes the OpenWeather API to retrieve weather information based on the user's geolocation.
  - Dynamically sets background images based on weather conditions.

### Styling

- **SCSS Stylesheets**:
  - Organizes stylesheets into separate files for each component.
  - Follows a modular approach to styling for easier maintenance and readability.