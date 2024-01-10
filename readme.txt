# MBTI Questionnaire React App

This is a React application for conducting the Myers-Briggs Type Indicator (MBTI) questionnaire. Users can answer a series of questions and receive their MBTI personality type as a result.

## Project Structure

### Components
- MainPage: Landing page component.
- QuestionPage: Main component for rendering and managing the questionnaire.
- PersonalityTypeDetails: Component for displaying details based on the MBTI personality type.

### Routes

- **Routes.js:** Contains the routing setup for the application, defining routes for the main page, questionnaire, and personality type details.

### Assets

- QA.json: JSON file containing the questions and answer options for the questionnaire.
- MBTI.json: JSON file containing the MBTI Types and Descriptions.
## Getting Started

1. Install dependencies:

   ```bash
   npm install

Start the development server:
    npm start

Dependencies
react: JavaScript library for building user interfaces.
react-router-dom: Declarative routing for React.js.

Notes
The application uses React Hooks, including useState and useEffect for state management and side effects.
MBTI type calculation logic is implemented in the submitAnswers function.
Styling is done using Tailwind CSS.