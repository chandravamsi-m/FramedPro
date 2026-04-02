# FramedPro Documentation

Welcome to the FramedPro documentation. Follow these guides to install, customize, and structure your website template properly.

## Installation
1. Extract the ZIP file to your target directory.
2. The template uses a CDN for Tailwind CSS, so no `npm install` or build step is required.
3. Simply open `index.html` in your browser or host it on a local server.

## Customization
1. **Design Tokens:** Edit the Tailwind CSS config Block in the `<head>` of HTML files. Look for `tailwind.config` to modify colors and typography.
2. **Images:** Replace placeholder images inside `assets/images/` with your own assets. Make sure to keep the paths identical.
3. **Icons:** Swap out SVG paths in HTML directly or bring in your own SVG chunks.
4. **Dark Mode & RTL:** Are natively supported via Tailwind classes.

## Page Structure
- **Root Directory:** Contains index files and global assets
- `/pages/`: Holds public marketing, information, and dashboard shells.
- `/auth/`: Contains static HTML shells for Login and Access Request forms.
- `/assets/`: Stores raw CSS (custom/dashboard scripts), javascript models, placeholder images, and fonts.
- `/components/`: Reusable HTML fragments like `navbar.html` and `footer.html`.

## Credits
- Images Placeholder: [Unsplash](https://unsplash.com)
- Fonts: Google Fonts (Replace with your own licensed fonts ideally)
- Styling Engine: [Tailwind CSS](https://tailwindcss.com/)

## Changelog
- **v1.0.0**: 
  - Initial Release
  - Complete Marketing Website included
  - Dashboard UI (Admin + Client) implemented

## Support
If you require custom development or integration support for a real backend systems, please contact the developer via our support channel provided at purchase.
