BEN BENNETT PORTFOLIO SITE
=========================

FILES INCLUDED
- index.html
- style.css
- script.js
- assets/
  - Ben_Bennett_Resume.pdf
  - images/
    - iso-27001.png
    - musl-rule-2.png
    - nist-800-53.png
    - nist-csf-2.0.png
    - pci-dss-4.0.1.png
    - soc-2-type-ii.png
    - evidence-placeholder.png

WHERE TO PLACE NEW SCREENSHOTS
1. Put new screenshots inside:
   assets/images/
2. Use short file names like:
   assets/images/hyperproof-control-mapping.png
   assets/images/audit-evidence-dashboard.png

HOW TO REPLACE TEXT LATER
1. Open index.html
2. Update text in these major sections:
   - HERO SECTION
   - ABOUT SECTION
   - EXPERIENCE SECTION
   - PROJECTS & EVIDENCE SECTION
   - SKILLS SECTION
   - EDUCATION SECTION
   - CONTACT SECTION
3. To replace contact placeholders, search for:
   your-email@example.com
   your-linkedin
   your-github
4. To replace resume file, overwrite:
   assets/Ben_Bennett_Resume.pdf

HOW TO ADD A NEW EVIDENCE CARD
1. Copy the placeholder evidence card block in index.html
2. Paste it inside the <div class="evidence-grid"> area
3. Replace:
   - [Add Your Evidence Title Here]
   - [example-file-name.png]
   - Context / Problem / Action / Outcome text
   - Tools / Frameworks
   - Optional metric / impact
4. Update the image src to your real screenshot file path

HOW TO CHANGE SCREENSHOTS
Example:
<img src="assets/images/iso-27001.png" alt="Description of screenshot" class="expandable-image" />

Replace iso-27001.png with your new file name.
Also update the alt text so it accurately describes the image.

GITHUB PAGES DEPLOYMENT
Option 1: Drag-and-drop upload in GitHub
1. Create a new GitHub repository
2. Upload all files from this folder to the root of the repository
3. Commit the files
4. Go to Settings > Pages
5. Under "Build and deployment," choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Save
7. Wait for GitHub Pages to publish your site

Option 2: Use Git locally
1. Create a new repository on GitHub
2. In this folder, run:
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
3. Then enable GitHub Pages in repository Settings > Pages

COMMON EDITS YOU MAY WANT TO MAKE
- Change "Graduating May 2026" in the hero if needed
- Replace placeholder contact links
- Add your LinkedIn and GitHub URLs
- Replace or add stronger screenshot evidence
- Add metrics only when you can verify them

TRUTHFULNESS NOTE
Keep all evidence captions accurate. Do not claim ownership of outcomes you cannot support.
The safest format is:
- what the screenshot shows
- what you supported
- why it matters

