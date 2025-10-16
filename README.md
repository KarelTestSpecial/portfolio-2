# Portfolio Website

This is a React-based portfolio website designed to showcase projects and a curriculum vitae. It features a unique local content management system for the CV and supports multiple languages.

## Technologies Used

- **Frontend:** React, TypeScript, Bootstrap
- **Content Management (CV):** A local Node.js/Express web application.
- **Data Formats:** Markdown with YAML Front Matter for the CV, TSV for projects.

---

## Content Management

The content for this website is managed through local files in the `public/` directory, making it easy to update without touching the core application code.

### 1. Managing Your CV

Your CV is managed through a user-friendly, local web-based editor. This avoids the need to manually edit structured files and prevents errors.

**How to use the CV Editor:**

1.  **Start the editor:**
    Open your terminal in the project directory and run the following command:
    ```bash
    npm run edit-cv
    ```
    This will start a local web server.

2.  **Open the editor in your browser:**
    Navigate to [http://localhost:4000](http://localhost:4000).

3.  **Edit your data:**
    You will see a form where you can fill in all the details of your CV, from contact information to work experience and skills. You can easily copy and paste text from other documents into these fields.

4.  **Language Selection:**
    Use the dropdown menu at the top to switch between the Dutch (`nl`) and English (`en`) versions of your CV.

5.  **Save your changes:**
    Click the "Save CV" button. This will automatically:
    - Update the correct file (`public/cv.nl.md` or `public/cv.en.md`).
    - Create a backup of the *previous* version in the `CV_HISTORY/` directory. You will never lose old versions.

### 2. Managing Your Projects

Project information is stored in Tab-Separated Values (TSV) files, which are easy to edit with any spreadsheet software (like Google Sheets, Microsoft Excel, or LibreOffice Calc).

- **Dutch Projects:** `public/projects.nl.tsv`
- **English Projects:** `public/projects.en.tsv`

**Columns:**
- `type`: The category of the project. Use `chrome`, `github`, or `website`.
- `name`: The name of the project.
- `description`: A short description.
- `githubLink`: The full URL to the GitHub repository (optional).
- `liveLink`: The full URL to the live demo or website (optional).
- `status`: Set to `active` to make the link visible, or `inactive` to hide it.

**Using Google Sheets (Optional):**

You can also manage your projects in a Google Sheet.
1.  Create a sheet with the columns listed above.
2.  Go to `File > Share > Publish to web`.
3.  Select the correct sheet, and choose "Tab-separated values (.tsv)".
4.  Click "Publish".
5.  Copy the generated URL.
6.  Open `src/App.tsx` and replace the `projectsUrl` variable with your new Google Sheet URL.

---

## Development and Deployment

### Running the Portfolio Locally

To view the main portfolio website in a development environment, run:

```bash
npm start
```

This will open the site at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized build of the website for deployment, run:

```bash
npm run build
```

This command bundles all the necessary files into the `build/` directory.

### Deploying to GitHub Pages

This project is set up to be easily deployed to GitHub Pages.

1.  Make sure your changes are committed to your repository.
2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    This script will first run the `build` command and then push the contents of the `build/` folder to the `gh-pages` branch of your repository, making your site live.