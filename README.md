# Employee Polls Web Application

Employee polls is a web application to improve collaboration and transparency with in the company by creating polls with two proposed solutions

The `_DATA.js` file represents a fake database and methods that let you access the data.
You can check content of `_DATA.js` by using this [Link](https://github.com/asharn/Shell-Software-Engineer-Train-to-Hire-Scholarship-Program/blob/main/employee-polls-web-app/src/utils/_DATA.js).

## Run app on your local

- Clone the repository `git clone https://github.com/salmantec/employee-polls.git`
- Install dependencies `cd employee-polls` and `npm install`
- Run `npm run start`
- Navigate to `http://localhost:3000/` to view the SignIn (landing) screen of application.

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

## To test the application

- Run the application, login by selecting an existing user from the dropdown in `SignIn` screen
- In the `Home` screen, you could see the logged in user name in the navbar. Also, you could see `New Question` and `Answered Question` sections
- Try to add the answers to the polls which are available in `New Questions` section
- Then confirms that poll moved into `Answered Questions` section, and you can't change / modify the answer
- In the `Leader board` screen, check you score based on the number of question you have created and answered
- In the `New` screen, you could add new polls.
