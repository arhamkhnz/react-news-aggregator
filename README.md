# News Aggregator

## Overview
News Aggregator is a React-based application designed to aggregate news from multiple sources, including The Guardian, The New York Times, and other major news outlets. The application is fully containerized using Docker and styled with Tailwind CSS.

> **Note:** In the demo deployed on Vercel, the NewsAPI functionality is disabled due to request limitations. Specifically, requests from the browser are not allowed on the Developer plan, except from localhost. To fully experience the application, please clone the repository and run it locally. Be sure to add your own API key in the `.env` file to enable the NewsAPI integration.

## Table of Contents
- [Folder Structure](#folder-structure)
- [Root Level Config Files](#root-level-configuration-files)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Docker Setup](#docker-setup)

## Folder Structure

The project is organized into the following directories:

```plaintext
build/               # Output directory for production builds
node_modules/        # Node.js dependencies
public/              # Public assets and HTML file
src/                 # Source code for the application
  ├── api/           # API integration files
  │   ├── guardianAPI.js     # Integration with The Guardian API
  │   ├── newsAPI.js         # General news API integration
  │   └── nyTimesAPI.js      # Integration with The New York Times API
  ├── components/    # Reusable components
  │   ├── layout/    # Layout components
  │   │   ├── Footer.js       # Footer component
  │   │   └── Header.js       # Header component
  │   └── UI/        # UI-specific components
  │       ├── HeadlessUI/     # Headless UI components
  │       ├── skeletons/      # Loading skeletons
  │       ├── ArticleFilterPanel.js # Article filtering panel
  │       ├── ArticleListSidebar.js # Sidebar for article lists
  │       ├── FeedCard.js      # Card component for displaying articles
  │       ├── HeroGrid.js      # Hero grid component for main articles
  │       └── Layout.js        # General layout component
  ├── constants/     # Constant values used throughout the app
  │   └── filterOptions.js    
  ├── context/       # React context for state management
  │   └── FilterContext.js    # Context for filtering logic
  ├── pages/         # Page components
  │   ├── HomePage.js         # Main homepage component
  │   └── NotFoundPage.js     # 404 error page component
  └── utils/         # Utility functions
      ├── articleHelpers.js   # Helper functions for articles
      └── articleSearch.js    # Search functionality for articles
App.css             # Global CSS file
App.js              # Main React component
App.test.js         # Unit tests for the App component
index.css           # Global CSS styles
index.js            # Entry point for the React application
logo.svg            # Application logo
reportWebVitals.js  # Performance reporting
```
## Root-Level Configuration Files

- **.dockerignore**: Specifies files and directories to be excluded from the Docker image.
- **.env**: Environment variables, including API keys for different services.
- **.gitignore**: Lists files and directories to be ignored by Git.
- **.prettierignore**: Specifies files and directories to be ignored by Prettier.
- **.prettierrc**: Configuration for Prettier code formatting.
- **Dockerfile.frontend**: Docker image file for containerizing the React frontend.
- **eslint.config.mjs**: Configuration for ESLint to enforce coding standards.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **package.json**: Lists dependencies and scripts for the project.
- **package-lock.json**: Ensures consistent installs across environments.

## Features

- **API Integrations**: Fetch news from The Guardian, The New York Times, and other sources.
- **Dynamic Filtering**: Filter news articles based on categories, keywords, and more.
- **Responsive UI**: Fully responsive design with modern UI components.
- **Tailwind CSS**: Styled with Tailwind CSS for rapid UI development.
- **Containerized**: Supports Docker for easy deployment.

## Prerequisites

- **Node.js** (version 18.x or later)
- **npm** (comes with Node.js)
- **Docker** (optional, for containerization)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arhamkhnz/react-news-aggregator.git
cd react-news-aggregator
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root of your project and configure your API keys:

```
REACT_APP_NEWS_API_KEY=your_api_key
REACT_APP_NY_TIMES_API_KEY=your_api_key
REACT_APP_GUARDIAN_API_KEY=your_api_key
```
Replace your_api_key with your actual API keys.
### 4. Running the Application

To start the application in development mode, run:
```
npm start
```

### 5. Production Build

To create a production build of the application, run:
```
npm run build
```

## Docker Setup

### Building the Docker Image
To build a Docker image for the application, run the following command:

```bash
docker build -f Dockerfile.frontend -t news-aggregator .
```

### Running the Docker Container
Once the image is built, you can run the application in a Docker container:

```bash
docker run -p 80:80 news-aggregator
```




