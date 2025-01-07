# TODO CRUD APP

This repository contains the TODO CRUD APP, an application developed with Expo React Native using TypeScript that allows users to create, read, update, and delete tasks. The project focuses on best practices and utilizes modern technologies to ensure a smooth and efficient experience.

## Technologies Used

- **React Native**: Used for front-end development.
- **TypeScript**: Used for increased safety and productivity in development.
- **styled-components**: Used for styling.
- **axios**: Used for API consumption.
- **Expo**: Platform used to simplify development and testing.

## Features

- User authentication.
- Viewing all tasks.
- Creating new tasks.
- Editing existing tasks.
- Deleting tasks.

[Video demonstration](https://youtu.be/3IS_vaEnJKw)

## API Structure

The application consumes an API with the following structure:

### Endpoints

#### Authentication

- **POST /login**: Authenticate user.
  - **Body**:
    ```json
    {
      "username": "<username>",
      "password": "<password>"
    }
    ```

#### Tasks

- **GET /tarefas**: Retrieve all tasks.
    ```
    [
      {"id":<id>,"task":"<task text>","isChecked":<isChecked>},
      {"id":<id>,"task":"<task text>","isChecked":<isChecked>}...
    ]
    ```
- **POST /tarefas**: Create a new task.
  - **Body**:
    ```json
    {
      "task": "<task text>"
    }
    ```
- **PUT /tarefas/{id}**: Update a task by ID.
  - **Body**:
    ```json
    {
      "task": "<task text>"
    }
    ```
- **DELETE /tarefas/{id}**: Delete a task by ID.

## Setup and Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rharael/todo-crud-react-native-app.git
   ```

2. **Install dependencies**:
   ```bash
   cd todo-crud-react-native-app
   yarn install
   ```

4. **Change to Your preferable API url**:
   - Change API url in both `./src/screens/Login.tsx` and `./src/services/TaskService.ts`.
   - You can use this one [todo-crud-api](https://github.com/rharael/todo-crud-api)

5. **Start the project with Expo**:
   ```bash
   yarn expo start
   ```

6. **Test on a simulator or physical device**:
   - Use the QR Code in the terminal to open the app in the Expo Go app (available on the App Store/Google Play).

## License

This project is licensed under the [MIT License](LICENSE).

