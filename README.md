# Personal Portfolio Website

This is a personal portfolio website built with React to showcase projects and professional information. The website is live and deployed via GitHub Pages.

## Managing Content

The content of this website is managed through data files, making it easy to update without touching the layout code.

### Updating the Project List

The list of projects is sourced from a Google Sheet. A custom script fetches the data from this sheet and generates the required `src/data/projects.json` file.

To update the projects on the website, follow these steps:

1.  **Edit the Google Sheet**: Make all your changes, additions, or removals in the project's designated Google Sheet.
2.  **Run the Update Script**: In your local project terminal, run the following command:
    ```bash
    npm run update-projects
    ```
    This command fetches the latest data from the sheet and rebuilds the `src/data/projects.json` file.

## Development and Deployment

Instructions for setting up and deploying the project.

### 1. Installation

Before you can run any commands, you need to install the project's dependencies.
```bash
npm install
```

### 2. Available Scripts

Once the installation is complete, you can use the following scripts:

**`npm start`**

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make edits.

**`npm run update-projects`**

As described above, this script updates your project list from the Google Sheet.

**`npm test`**

Launches the test runner to check for any errors.

**`npm run build`**

Builds a production-ready version of the app into the `build` folder. This step is automatically done when you deploy.

### 3. Deploying to GitHub Pages

To publish your latest changes (including any updated project data) to the live website, run the deploy command:
```bash
npm run deploy
```
This command first builds the project and then pushes the contents of the `build` folder to the `gh-pages` branch on GitHub, making your changes live. It can take a few minutes for the changes to become visible.
