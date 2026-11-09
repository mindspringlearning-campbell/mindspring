# MindSpring — Version 1

MindSpring is a free, English-language psychology and human-development learning prototype. It is built with plain HTML, CSS, and JavaScript so it can run on a modest Windows laptop without installing a heavy development environment.

## What works in this prototype

- Responsive home page for phone, tablet, and desktop
- Five topic areas and 15 introductory lessons
- Search and category/level filters
- Lesson reading dialog with reflection prompts and further-reading suggestions
- Bookmarks saved locally on the current browser/device
- Light/dark theme toggle
- PWA manifest and service worker for installability and basic offline caching
- Educational disclaimer

## Project structure

```text
mindspring/
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── service-worker.js
├── README.md
└── icons/
    └── icon.svg
```

## Run on Windows 10/11

### Option A — easiest local preview
1. Extract `MindSpring-v1.zip` to a folder such as `Documents\\mindspring`.
2. Open the folder.
3. Double-click `index.html`. The website should open in your default browser.
4. Most interface features work this way. Service-worker offline caching and install prompts require a local web server or HTTPS.

### Option B — run as a local website (recommended)
1. Install Python 3 from https://www.python.org/downloads/ if it is not already installed. During installation, tick **Add Python to PATH**.
2. Open the extracted `mindspring` folder in File Explorer.
3. Click the address bar, type `cmd`, and press Enter.
4. In the terminal, run:

   ```bat
   python -m http.server 8000
   ```

   If that command does not work, try:

   ```bat
   py -m http.server 8000
   ```

5. On the laptop, open http://localhost:8000
6. Keep the terminal window open while testing. Press `Ctrl+C` to stop the server.

## Test on an Android phone on the same Wi-Fi

1. Find your laptop's local IPv4 address: open Command Prompt and run `ipconfig`.
2. Look for the IPv4 Address under the Wi-Fi adapter, for example `192.168.1.25`.
3. On the phone connected to the same Wi-Fi, open `http://LAPTOP-IP:8000` (replace `LAPTOP-IP` with the actual address).
4. This local HTTP address may allow browsing but usually does **not** enable PWA installation or service workers on the phone, because browsers require HTTPS or localhost for those features.
5. For a proper installable PWA on Android, deploy the site to an HTTPS host such as GitHub Pages or another static web host. Hosting account setup and domain choices are separate from this source project.

## Install as an Android PWA

After deploying to an HTTPS address:
1. Open the site in Chrome on Android.
2. Use Chrome's menu and choose **Install app** or **Add to Home screen** (wording may vary).
3. Open MindSpring from the home screen.

A PWA is not automatically a Play Store app. Publishing a native Android package or listing in Google Play is a later step.

## Editing the content

The lesson data is in the `lessons` array near the top of `app.js`. Each lesson has an id, category, title, level, time, summary, introduction, sections, reflection prompt, and further-reading note. Keep ids unique.

## Important limitations in v1

- No user accounts or cloud synchronization
- Bookmarks and theme preference are stored only in the current browser on the current device
- No admin/editor interface yet; lesson changes are made by editing `app.js`
- Search works on the included lesson data only
- The lessons are short introductions, not clinical guidance or a substitute for academic references
- There is no clinical assessment or diagnosis functionality
- Offline support caches the app shell and visited same-origin resources; first load requires a connection

## Next recommended milestones

1. Verify the prototype on laptop and Android.
2. Review every lesson and replace general further-reading notes with checked, specific references.
3. Add proper source links and content-review dates.
4. Add quizzes with explanations.
5. Choose hosting and publish the PWA over HTTPS.
6. Only then consider accounts, cloud-saved progress, or a Play Store package.


MindSpring v1.2 adds a structured 15-chapter Introduction to Psychology course. Chapter 1 has Beginner, Intermediate and Advanced notes, reflection, quiz and further reading. Chapters 2-15 are mapped outlines for staged development. Existing library, bookmarks, search, theme and PWA features are retained.
