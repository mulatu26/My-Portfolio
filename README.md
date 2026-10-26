# Mulatu Sakuma Sorsa — Personal Portfolio

A responsive personal portfolio built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## Project structure

```text
mulatu_portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── Mulatu_Sakuma_Sorsa_CV.pdf  (add your actual CV PDF here)
```

## Run locally in Visual Studio Code

1. Extract the ZIP file.
2. Open the `mulatu_portfolio` folder in Visual Studio Code.
3. Add your actual CV PDF to `assets/` and name it `Mulatu_Sakuma_Sorsa_CV.pdf`.
4. Install the **Live Server** extension if you do not already have it.
5. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in a browser. Live Server is recommended for testing.

## Personalize before publishing

Search the project files for these placeholders and replace them with real information:

- `your.email@example.com` — replace in `index.html` and `script.js`.
- `Add LinkedIn profile URL` and `Add GitHub profile URL` — replace `href="#"` with your real profile URLs.
- `assets/Mulatu_Sakuma_Sorsa_CV.pdf` — add your real CV PDF using this filename.
- `Replace with your photo` — in `index.html`, replace the `.profile-photo` placeholder block with an `<img>` element and update CSS for `object-fit: cover`.
- `[Add start date]`, `[Confirm employment dates]`, `[Confirm year]` — confirm dates before publishing.
- Project links — add real GitHub repository and live-demo URLs only after they exist.
- Certification entries — verify names, dates, and links against your certificates.

The current project cards are honest descriptions of the supplied project ideas. Do not imply a project is deployed or publicly available until you have a real demo or repository.

## Contact form behavior

The form validates required fields and opens the visitor's default email application with a prefilled message. It does **not** send messages itself or store submissions. Replace `your.email@example.com` in `script.js` with your real email. For a server-side form, connect a backend or a trusted form service and update the form handler.

## Publish with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `mulatu-portfolio`.
3. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and your `assets/` folder.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment source, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)`, then save.
7. Wait for deployment and open the URL shown in the Pages settings.

## Notes

- Bootstrap 5 and Google Fonts are loaded from external CDNs, so an internet connection is needed for those resources.
- The design includes a light/dark toggle and saves the theme choice in the browser.
- The portfolio is responsive and includes reduced-motion support and semantic landmarks.


### Add your profile photo
Create an `assets` folder if it does not exist and place your professional photo there named `profile.jpg`. The portrait frame automatically crops the image neatly without stretching. If the photo is not present, the site safely shows the “MS” initials placeholder. Use a clear, front-facing image with your face centered.


## Included personal files
- Profile image: `assets/profile.jpg`
- CV PDF: `assets/Mulatu_Sakuma_Sorsa_CV.pdf`

The hero section's **Download CV** button links to the included CV PDF. Keep the `assets` folder in place when running or publishing the website.
