# Job Board Application

This is a mini job board application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to view job listings, add new jobs, and view individual job details.

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Bootstrap
  - SweetAlert2
  - Custom Loader Spinner
  - React Data Table Component

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Express Validator

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd job-board/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd job-board/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Running the Application

1. Ensure MongoDB is running.
2. Start the backend server.
3. Start the frontend development server.
4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- **Frontend:**
  - `src/components`: Contains React components.
  - `src/pages`: Contains React pages.
  - `src/styles`: Contains CSS files.

- **Backend:**
  - `src/controllers`: Contains controller functions.
  - `src/models`: Contains Mongoose models.
  - `src/routes`: Contains Express routes.
  - `src/validation`: Contains validation middleware.

## Features

- View job listings
- Add new jobs
- View individual job details
- Search functionality on the homepage

