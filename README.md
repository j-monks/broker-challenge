# Broker Challenge
This repository contains multiple packages for the frontend and backend components. Below are the steps to set up and run each package.

## Frontend

### Setup
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.

### Running the Application
3. Execute `npm run serve` to start the development server.
4. Access the application at `http://localhost:8080` in your browser.


## Backend

### Setup
1. Go to the `backend` directory.
2. Run `npm install` to install dependencies.

### Database Configuration
3. Ensure mysql is installed on your computer.
4. Ensure the database settings are aligned with your mysql credientials in `config/db-config.js`.
5. Create the necessary database (if not created) by running `npm run createdb`

### Starting the Server
6. Execute `npm run dev` to start the backend server.

### Testing
7. Run tests using `npm run test`.

## Additional Notes

- Ensure mysql is installed on your computer.
- Both the frontend and backend components need to be running together for the application to work properly.
  - You can run them in separate terminal instances:
    1. Open a terminal for the frontend and execute `npm run serve`.
    2. Open another terminal for the backend and start it with `npm run dev`.
- If encountering authentication issues while setting up the database:
  - Refer to MySQL's official documentation or community forums for guidance on resolving 'Client does not support authentication protocol requested by server...' errors.
