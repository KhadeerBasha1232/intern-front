App.js -- 
1. `Navbar`: The navigation bar component for the application.
2. `Home`, `Login`, `Signup`, `Logout`, and `Resume`: These are individual components corresponding to different pages in the application.

The `App` function component serves as the main container for the application. It maintains a state for the `alert` using the `useState` hook from React. The `showAlert` function is used to display an alert message and remove it after a certain time (1.5 seconds in this case).

`BrowserRouter`, `Routes`, and `Route` are imported from `react-router-dom` to handle routing and navigation within the application.

Inside the `App` component, the `Router` component wraps the entire application. `Navbar` and `Alert` components are placed outside the `Routes` component, so they are displayed on all pages. The `Routes` component contains several `Route` components, each with a specific path and corresponding component to render for that path.

Finally, the `Footer` component is placed outside the `Routes` to be displayed on all pages. The `App` component is then exported as the default export.

Home.js--
It imports several sub-components from the `Landing` and `Home` folders:

1. `Landing` folder components: `Blog`, `Content`, `Feature`, and `Hero`.
2. `Home` folder components: `Hero1`, `Category`, `Gallery`, `Statistic`, and `Testimonial`.

The `Home` component checks if there is a "token" item in the browser's local storage. If there is no token (meaning the user is not logged in), it renders a landing page layout with the `Hero`, `Blog`, `Content`, and `Feature` components wrapped inside a `div` with a `mx-5` (horizontal margin) class.

If there is a token in the local storage (meaning the user is logged in), it renders a different layout with the `Hero1`, `Category`, `Statistic`, `Gallery`, and `Testimonial` components wrapped inside a `div`.

Finally, the `Home` component is exported as the default export.

Sign Up --

This code snippet is a React functional component called `SignUp` that utilizes Material-UI components to create a user registration form. The form includes fields for the user's name, email, password, confirm password, and a file input for uploading a resume. The component uses several Material-UI components for styling and layout:

1. `Avatar`: A graphical representation of the user.
2. `Button`: A clickable UI element.
3. `CssBaseline`: A component for applying a consistent baseline style.
4. `TextField`: A component for text inputs.
5. `Link`, `Grid`, `Box`, `Typography`, and `Container`: Components for layout and text display.
6. `createTheme` and `ThemeProvider`: Functions for creating and applying a custom Material-UI theme.

The component also uses React hooks, such as `useState` for managing component state and `useLocation` and `useNavigate` from `react-router-dom` for navigation.

The `Copyright` function is a small component that displays a copyright message with the current year.

`SignUp` component contains several event handlers and functions:

1. `covertToBase64`: Converts the selected resume file to a base64-encoded string and sets it in the `resume` state.
2. `handleSubmit`: Handles form submission by sending a POST request to the `/api/auth/createuser` API endpoint with the user's data. If the user is successfully created, it saves the token and resume to the local storage, navigates to the home page, and displays a success alert. If the user already exists, it displays an error alert.
3. `onChange`: Handles changes to the form inputs and updates the `credentials` state accordingly.

The `SignUp` component renders the form using Material-UI components and styles. When the form is submitted, it calls the `handleSubmit` function.

Alert.js --
This code snippet defines a React functional component called `Alert` that displays an alert message to the user based on the `props.alert` value. In this version, the `useLocation` import and the check for the "/contact" route have been removed, so the alert will be displayed on all routes as long as `props.alert` is not null.

The `Alert` component has a helper function called `capitalize` that takes a string input and capitalizes the first letter while converting the rest of the string to lowercase. If the input word is 'danger', it changes it to 'Error'.

If `props.alert` is not null, the component renders a div with an alert styled using Bootstrap classes. The alert message is constructed using the capitalized alert type and the alert message from `props.alert`.

If `props.alert` is null, the component renders an empty div. Finally, the `Alert` component is exported as the default export.

Token --

we can get user info by sending the token to /api/auth/getuser in the backend  to get user info 

LogIn --
This code defines a React functional component called `SignIn` that displays a sign-in form for the web application. It imports various Material-UI components to create a consistent, visually appealing user interface.

The `Copyright` component is defined to display a copyright notice with the current year, and the `theme` constant is created using `createTheme` from Material-UI.

The `SignIn` component includes the following state variables and functions:

1. `a` and `setA`: State variables to manage a disabled state for the submit button, initially set to `false`.
2. `history`: A constant that holds the `useNavigate` hook for programmatic navigation.
3. `credentials` and `setCredetials`: State variables to manage the user's email and password.
4. `handleSubmit`: An async function that handles form submission. It sends a POST request to the `/api/auth/login` endpoint with the user's email and password. If the response indicates a successful login, it stores the received token and resume in localStorage, navigates to the home page, and shows a success alert. If the response indicates invalid credentials, it shows an error alert and navigates to the home page.
5. `onChange`: A function to update the `credentials` state variable as the user types in the email and password fields.

The `SignIn` component renders a Material-UI-styled sign-in form with email and password input fields, a submit button, and buttons to navigate to the "Sign Up" and "Home" pages. The form submission is handled by the `handleSubmit` function, and the input fields are controlled components with their values managed by the `credentials` state variable.

The `SignIn` component is exported as the default export.

To Run This Application --

install Node.js In Your System

Run -> npm i 

Run -> npm start
