# Cyber CNY 2026

Welcome to the Cyber CNY 2026 project!

## Project Overview

This repository contains the source code for the Cyber CNY 2026 application, built with React, TypeScript, and Vite.

## Getting Started

To get started with the project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/HENRLYLIU/cyber-cny-2026.git
    cd cyber-cny-2026
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build locally.
- `npm run test`: Runs unit and component tests.
- `npm run coverage`: Generates test coverage reports.

## CI/CD Pipeline

This project uses GitHub Actions for automated testing and deployment:

1. **Test Phase**: Runs on every push/PR to ensure code quality.
2. **Deploy Phase**: Automatically builds and deploys to the production server via SSH when changes are pushed to `main`.

## License

This project is licensed under the MIT License.
