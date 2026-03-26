# FramedPro — Corporate Headshot Photographer HTML Template

> **Development Blueprint** | Version 1.0.0
> Use this document as the complete architectural reference for building the FramedPro template.
> Built with: **HTML · Tailwind CSS (CDN) · Vanilla JavaScript** — no build tools or UI frameworks assumed.

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [User (Client) Dashboard Pages](#6-user-client-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field | Details |
|---|---|
| **Template Name** | FramedPro |
| **Template Category** | Portfolio / Creative + Service-Based (Hybrid) |
| **Target Audience** | Corporate headshot photographers serving enterprise HR teams, recruiting departments, and executive branding agencies |
| **Template Purpose** | A clean, conversion-focused marketing site paired with a secure client portal that enables HR teams and corporate clients to proof, approve, bulk download, and re-order professional headshots — all without friction |
| **Dashboard Type** | Client (User) Dashboard + Admin Dashboard |
| **Design Tone** | Luxury-minimal — monochromatic with high contrast, generous white space, editorial typography, confidence-inspiring UI |
| **Styling Approach** | Tailwind CSS loaded via CDN (`<script src="https://cdn.tailwindcss.com">`) — utility-first, no build step required; custom design tokens configured via `tailwind.config` inline script |

---

## 2. Architecture Overview

FramedPro is a dual-surface template consisting of two distinct but visually unified layers:

### 2.1 Public Marketing Website
The outward-facing site communicates the photographer's brand, showcases work quality, and drives corporate inquiries. It is optimized for HR and executive decision-makers who need to quickly assess professionalism, turnaround time, and delivery process. The tone is confident, clean, and frictionless.

### 2.2 Client Dashboard (User Portal)
A password-protected portal for approved corporate clients. HR contacts log in to access their company's dedicated photo galleries, proof and approve individual shots, download image packages in bulk (web + print resolutions), manage reprint orders, and track delivery status. The portal is designed to feel fast, organized, and enterprise-appropriate — not like a consumer photo app.

### 2.3 Admin Dashboard
The photographer's operational control panel. Manages all client accounts, uploads galleries, sets approval workflows, processes reorder requests, and tracks invoicing. Provides a full CMS for managing portfolio images and public site content.

### 2.4 Key Architectural Principle
Public pages and dashboard pages share the same Tailwind configuration and reusable component files for visual consistency, but use separate layout shells. The public shell uses a top navbar. The dashboard shell uses a collapsible sidebar. Both support Dark/Light mode and RTL layout.

### 2.5 Shared Component Strategy
The `navbar` and `footer` are built as standalone HTML fragment files (`components/navbar.html` and `components/footer.html`) and injected into every public page at runtime using a lightweight vanilla JS include utility (`components.js`). This ensures a single source of truth — any update to the navbar or footer is reflected across all pages without touching individual files. Dashboard pages use their own sidebar/header shell components following the same pattern.

---

## 3. Public Website Pages

### 3.1 Core Pages (All Required)

| Page | Filename | Purpose |
|---|---|---|
| Home 1 | `index.html` | Primary hero-led landing page; leads with a striking portfolio statement and fast-turnaround CTA |
| Home 2 | `home-2.html` | Alternative homepage; leads with a process-first narrative and social proof |
| About | `about.html` | Photographer bio, studio story, equipment, and philosophy |
| Services | `services.html` | Detailed service packages (individual sessions, team shoots, on-site corporate days) |
| Portfolio | `portfolio.html` | Curated gallery grid showcasing headshot quality across industries |
| Portfolio Single | `portfolio-single.html` | Individual project case study — e.g., "Annual headshot day for 200-person law firm" |
| Pricing | `pricing.html` | Transparent package pricing with per-head and day-rate breakdowns |
| Process | `process.html` | Step-by-step visual walkthrough of the client journey, from booking to gallery delivery |
| Blog / Tips | `blog.html` | Articles on corporate photography best practices, wardrobe tips, LinkedIn photo advice |
| Blog Single | `blog-single.html` | Individual article page with related posts |
| Contact | `contact.html` | Inquiry form for corporate bookings, map to studio, phone, email, social links |
| FAQ | `faq.html` | Common questions from HR teams around licensing, turnaround times, file formats, on-site logistics |
| 404 | `404.html` | Custom error page with navigation back to key sections |
| Coming Soon | `coming-soon.html` | Pre-launch or maintenance page with email capture |

### 3.2 Conditional Pages (Required for This Template)

| Page | Filename | Purpose |
|---|---|---|
| Testimonials | `testimonials.html` | Dedicated page of corporate client reviews, logos, and case quotes |
| Team Shoots | `team-shoots.html` | Landing page specifically for group/department headshot bookings |
| On-Site Service | `onsite.html` | Dedicated page for the "we come to your office" service offering |
| Licensing Info | `licensing.html` | Clear explanation of commercial usage rights (web, print, PR, LinkedIn) |

---

## 4. Homepage Layouts

Both homepages use the same header and footer shell but differ in hero concept and content sequencing. Each includes a **Home dropdown** in the navbar linking to both variants.

---

### 4.1 Home 1 — "The Portfolio Statement"

**Concept:** Lead with visual impact. The hero is full-viewport with a large single headshot or split-screen of varied corporate subjects. Designed for prospects who make fast visual judgments.

| Section | Description |
|---|---|
| **Navbar** | Sticky, transparent-to-solid on scroll; includes Home dropdown, dark/light toggle, "Book a Session" CTA button |
| **Hero** | Full-screen split layout: left side — bold typographic headline ("Your Team. Professionally Seen.") with a primary CTA button ("Request a Quote") and a secondary text link ("View Our Work"); right side — large cropped headshot with a subtle scroll-triggered reveal |
| **Trust Bar** | Horizontally scrolling logo strip of recognizable corporate clients (placeholder logos) with label: "Trusted by forward-thinking HR teams" |
| **About Snapshot** | Two-column: left — short punchy bio and studio philosophy (2–3 sentences); right — photographer portrait in studio context; includes "Meet the Photographer" link |
| **Service Highlights** | 3-column icon card row: On-Site Team Shoots / Studio Individual Sessions / Fast Gallery Delivery — each with a short descriptor and "Learn More" link |
| **Portfolio Preview** | Masonry-style photo grid (6–8 images) with a hover overlay showing industry/company label; "View Full Portfolio" CTA below |
| **Process Teaser** | Horizontal 4-step timeline: Book → Shoot → Proof → Deliver; clean icon and label only; links to full Process page |
| **Testimonials Slider** | Auto-advancing quote carousel with client name, title, company, and star rating; includes navigation dots and prev/next arrows |
| **Pricing Teaser** | 2 or 3 featured pricing cards (Individual / Team / Enterprise) with "Most Popular" badge on the middle tier; links to full Pricing page |
| **Blog Preview** | 3-column recent post card row with thumbnail, category tag, title, date, and "Read More" link |
| **CTA Banner** | Full-width dark-background section: "Book your corporate headshot day — spots fill fast." + CTA button |
| **Footer** | Logo, tagline, nav links, social icons, newsletter input, copyright, policy links |

---

### 4.2 Home 2 — "The Process-First Narrative"

**Concept:** Lead with trust and process clarity. Designed for HR decision-makers who need to pitch the photographer internally and want to understand the workflow before seeing the portfolio. Converts through logic before aesthetics.

| Section | Description |
|---|---|
| **Navbar** | Same as Home 1 |
| **Hero** | Centered layout with headline focus: "Headshots Delivered. No Chaos, No Delays." — sub-headline highlights the client portal feature; dual CTA buttons: "Book Now" and "Client Login"; below the fold anchor arrow |
| **Pain Point Hook** | 3-column stat/icon row addressing HR-specific pain points: "⏱ 48hr Gallery Delivery" / "📦 Bulk Download in One Click" / "📋 No-Fuss Approval Workflow" |
| **How It Works** | Numbered vertical timeline with large step numbers, short titles, and paragraph descriptions — from initial inquiry to gallery delivery and reorder; visual side imagery per step |
| **Portfolio Strip** | Horizontal scroll strip of square headshot thumbnails (not masonry — more editorial/structured) with a simple "View Portfolio" link |
| **Client Portal Feature Showcase** | Feature highlight section specifically marketing the client dashboard: split layout with annotated screenshot mockup (placeholder) on one side, bullet benefits on the other — targeting HR teams directly |
| **Testimonials** | 2-column grid of quote cards with company logo, client name/role, and review text — more editorial, less slider |
| **Team Shoots CTA** | Full-width banner with background image: "Photographing your whole team? We specialize in it." + "Plan a Team Day" CTA |
| **Pricing Summary** | Simple comparison table (Individual vs. Team vs. Enterprise) with checkmarks; less visual than Home 1, more data-oriented |
| **FAQ Accordion Preview** | Top 4–5 HR-focused FAQs with expand/collapse; "View All FAQs" link below |
| **Trust Logos** | Static 2-row logo grid of corporate clients (more prominent than Home 1's scrolling bar) |
| **Footer** | Same as Home 1 |

---

## 5. Authentication Pages

All auth pages share a split-layout shell: left panel — brand visual (headshot or studio image with logo overlay); right panel — centered form card.

| Page | Filename | Key Elements |
|---|---|---|
| **Login** | `auth/login.html` | Email + password fields, "Remember me" checkbox, login button, link to contact photographer for access |
| **Sign Up** | `auth/signup.html` | Not public self-registration. This page is an "Access Request" form — company name, contact name, email, phone, and a message field. Submission triggers an admin-approval flow. |
| **Account Locked** | `auth/locked.html` | Message indicating account is pending approval or temporarily locked; contact link |

> **Note:** Sign-up is approval-gated — clients cannot self-register. The photographer must create accounts from the Admin panel. The "Sign Up" page functions as an access inquiry form only. No password recovery flow is included in this template — these are static UI shells with no real authentication implementation. Password management should be handled entirely at the backend/application layer by the developer integrating this template.

---

## 6. User (Client) Dashboard Pages

The client dashboard is accessed by HR contacts, recruiters, or executive assistants managing their company's headshot assets.

### 6.1 Dashboard Shell
- Left sidebar (collapsible on tablet/mobile)
- Top header bar with company name/logo, notification bell, user avatar, dark/light toggle, logout
- Content area with breadcrumb trail
- Footer with minimal links

---

### 6.2 Dashboard Pages

| Page | Filename | Purpose |
|---|---|---|
| **Overview** | `dashboard/index.html` | Summary cards: total photos approved, pending proofs, active galleries, reorders in progress; recent activity feed |
| **My Galleries** | `dashboard/galleries.html` | List/grid of all galleries associated with the client's company, each showing shoot date, photo count, status badge (Proofing / Approved / Delivered) |
| **Gallery View** | `dashboard/gallery-view.html` | Full photo viewer for a single shoot: image grid, individual approve/flag actions, selection checkboxes, bulk approve button, notes/comment field per photo |
| **Approved Photos** | `dashboard/approved.html` | Consolidated view of all approved images across shoots; filter by date, shoot name, or subject; bulk download controls |
| **Downloads** | `dashboard/downloads.html` | Packaged downloads available: Web Resolution ZIP, Print Resolution ZIP, LinkedIn-Optimized Pack; download history log |
| **Reorder Prints** | `dashboard/reorder.html` | Select approved photos, choose print size/finish/quantity, review order summary, submit reorder request |
| **Order History** | `dashboard/orders.html` | Table of past reorder requests with status (Received / In Production / Shipped / Delivered), invoice link, tracking number if applicable |
| **Invoices** | `dashboard/invoices.html` | List of all invoices (initial shoot + reorders) with status badge (Paid / Pending) and PDF download link |
| **Team Members** | `dashboard/team.html` | List of staff members who have been photographed, searchable by name/department; links to their individual approved photo |
| **Profile & Settings** | `dashboard/settings.html` | Company name, contact details, notification preferences (email alerts for new galleries, approval reminders), password change |
| **Support** | `dashboard/support.html` | Contact the photographer directly from within the portal; FAQ shortcut links; submission history |

---

## 7. Admin Dashboard Pages

Used exclusively by the photographer to manage all client accounts, shoots, galleries, and business operations.

### 7.1 Admin Shell
Same sidebar/header structure as the client dashboard but with a visually distinct admin color accent (e.g., a subtle sidebar header color shift) to prevent confusion when testing both views.

---

### 7.2 Admin Pages

| Page | Filename | Purpose |
|---|---|---|
| **Admin Overview** | `admin/index.html` | KPI cards: active clients, galleries pending upload, photos awaiting approval, open reorders, recent revenue; activity timeline |
| **Client Management** | `admin/clients.html` | Full list of client companies with contact details, account status, and last activity; create/edit/deactivate accounts |
| **Client Detail** | `admin/client-detail.html` | Individual client view: all their galleries, contacts, order history, notes, and invoices in one place |
| **Gallery Management** | `admin/galleries.html` | List of all shoots/galleries across all clients; filter by status (Draft / Published / Archived); create new gallery |
| **Gallery Upload** | `admin/gallery-upload.html` | Drag-and-drop multi-image upload interface; assign gallery to client; add shoot date, location, and notes; set gallery to "Proofing" status to notify client |
| **Photo Management** | `admin/photos.html` | View all images within a gallery; mark as hero/featured; delete; view client approval status per photo |
| **Reorder Management** | `admin/reorders.html` | Table of all print reorder requests; update status per order; add tracking number; mark as fulfilled |
| **Invoice Management** | `admin/invoices.html` | Create, send, and manage invoices; mark as paid; link to client and shoot; PDF generation placeholder |
| **Booking Inquiries** | `admin/inquiries.html` | All contact/booking form submissions from the public site; status (New / Responded / Converted / Closed) |
| **Blog Manager** | `admin/blog.html` | List of blog posts with publish status; create/edit/delete entries |
| **Portfolio Manager** | `admin/portfolio.html` | Manage public-facing portfolio images: upload, reorder, tag by industry, set featured status |
| **Testimonials Manager** | `admin/testimonials.html` | Add, edit, approve, and order testimonials displayed on the public site |
| **Settings** | `admin/settings.html` | Studio name, contact info, notification email, social links, business hours, default email templates for gallery notifications |
| **Reports** | `admin/reports.html` | Summary charts: revenue by period, shoots per month, most active clients, reorder volume; date range filters |

---

## 8. Navigation Structure

### 8.1 Public Navbar

```
Logo (left)                             Nav Links (center/right)              CTA (right)
─────────────────────────────────────────────────────────────────────────────────────────
FramedPro    Home ▾   Portfolio   Services   Process   Pricing   Blog   Contact    [Book a Session]   [☀/🌙]

Home Dropdown:
  ├── Home – Portfolio Focus (index.html)
  └── Home – Process Focus (home-2.html)
```

- Sticky on scroll with a background fill transition (transparent → white/dark)
- On mobile: hamburger menu, full-height slide-in drawer
- "Book a Session" is always visible even on mobile (sticky bottom bar option on small screens)
- "Client Login" link — subtle text link in the far right of the nav or in the mobile drawer footer

---

### 8.2 Client Dashboard Sidebar

```
[Company Logo / Name]
─────────────────────
📊  Overview
🖼  My Galleries
✅  Approved Photos
⬇️  Downloads
🖨  Reorder Prints
📦  Order History
🧾  Invoices
👥  Team Members
──────────────────── (divider)
⚙️  Settings
💬  Support
─────────────────────
[User Avatar]  [Name]
[Logout]
```

---

### 8.3 Admin Dashboard Sidebar

```
[Admin Logo / Studio Name]
──────────────────────────
📊  Overview
👤  Clients
🖼  Galleries
📷  Photos
🔁  Reorders
🧾  Invoices
📩  Inquiries
──────────────────────────
✍️  Blog
🗂  Portfolio
⭐  Testimonials
──────────────────────────
📈  Reports
⚙️  Settings
──────────────────────────
[Avatar]  [Admin Name]
[Logout]
```

---

## 9. Component Library

All components are built as standalone, reusable HTML/CSS/JS units. They follow a CSS variable–based theming system and must render correctly in both light and dark modes and in RTL layouts.

### 9.1 Global Components

| Component | Description |
|---|---|
| **Navbar** | Shared HTML fragment (`components/navbar.html`) injected into all public pages via `components.js`; sticky top bar with dropdown, dark/light toggle, mobile drawer |
| **Footer** | Shared HTML fragment (`components/footer.html`) injected into all public pages via `components.js`; logo, nav columns, newsletter field, social icons, copyright row |
| **Button System** | Primary, Secondary, Ghost, Danger, Icon-only — consistent sizing with hover/active/disabled states |
| **Badge / Status Pill** | Inline labels: Approved · Pending · Delivered · New · Paid · Proofing — color-coded |
| **Card Base** | Shadow card container used for services, portfolio items, blog posts, dashboard stats |
| **Modal / Lightbox** | Overlay container used for image proofing, confirm actions, and form overlays |
| **Toast Notifications** | Top-right slide-in alerts: success, error, info, warning — auto-dismiss with progress bar |
| **Tooltip** | Hover-activated descriptive label for icon buttons and truncated text |
| **Skeleton Loader** | Placeholder shimmer blocks for gallery grids, dashboard stats, and card rows |
| **Empty State** | Illustrated placeholder for empty galleries, no orders, no results — with a CTA link |
| **Breadcrumb** | Hierarchical page trail inside all dashboard pages |
| **Accordion / FAQ** | Expand/collapse item list for FAQ page and support sections |
| **Tabs** | Horizontal tab switcher for dashboard detail pages (e.g., Gallery View tabs: All / Approved / Flagged) |

### 9.2 Public Website Components

| Component | Description |
|---|---|
| **Hero Block** | Full-viewport split hero (Home 1) and centered hero (Home 2) |
| **Stat / Icon Row** | 3-column trust stat strip |
| **Portfolio Grid** | Masonry grid with hover overlay |
| **Portfolio Strip** | Horizontal scroll thumbnail row |
| **Process Timeline** | Horizontal (Home 1) and vertical (Home 2) step-by-step flow |
| **Pricing Card** | Tiered card with feature list, badge, and CTA; highlight/featured variant |
| **Testimonial Slider** | Auto-advancing quote carousel |
| **Testimonial Grid** | Static 2-column editorial quote card layout |
| **Blog Card** | Thumbnail + tag + title + date card |
| **Logo Strip** | Scrolling marquee and static grid variants for client logos |
| **Contact Form** | Name, company, email, phone, message, service type select, submit — with inline validation |
| **CTA Banner** | Full-width section with headline, subtext, button — light and dark variants |
| **Feature Showcase** | Split section with annotated screenshot mockup and bullet list |

### 9.3 Dashboard Components

| Component | Description |
|---|---|
| **Stat Card** | KPI card with icon, metric value, label, and optional delta/trend indicator |
| **Activity Feed** | Scrollable timeline of recent events (gallery uploaded, photo approved, order placed) |
| **Data Table** | Sortable, filterable table with pagination, row checkboxes, and bulk action bar |
| **Gallery Grid (Proofing)** | Image grid with per-photo approve/flag toggle overlay, checkbox selection, and bulk action bar |
| **Image Lightbox (Proofing)** | Full-screen proofing viewer with approve/flag buttons, prev/next navigation, and zoom |
| **Download Package Card** | Card showing package name, file count, resolution info, size estimate, and download button |
| **Reorder Form** | Photo selection grid → print spec form → order summary — multi-step flow |
| **Status Timeline** | Vertical step tracker for order status (Received → Processing → Shipped → Delivered) |
| **Avatar Upload** | Profile image upload with crop preview |
| **Notification Panel** | Slide-in panel showing unread notifications with timestamp and action links |
| **Sidebar** | Collapsible navigation with icon + label, active state, and nested group support |
| **Top Header Bar** | Dashboard header with breadcrumb, notification bell, user avatar dropdown |

---

## 10. Feature Breakdown

### 10.1 Photo Proofing System (Client Dashboard)
- Gallery viewer with image grid and individual approval toggle per photo
- Approve / Flag / Neutral states per image, visually indicated
- Bulk select + bulk approve for large team shoots
- Per-photo comment/note field for HR to communicate retouching requests
- Gallery progress indicator (e.g., "47 of 120 photos reviewed")
- Submit approval sends notification to admin

### 10.2 Bulk Download System (Client Dashboard)
- Photographer-prepared download packages (web, print, LinkedIn resolutions)
- One-click ZIP download per package
- Per-image individual download option
- Download history log with timestamps

### 10.3 Print Reorder System (Client Dashboard)
- Browse approved photos, select images for reprinting
- Choose print specifications: size (4×6, 5×7, 8×10, etc.), finish (matte/gloss), quantity
- Order summary with per-item totals (prices placeholder)
- Submit reorder — triggers admin notification
- Track reorder status and access delivery info

### 10.4 Gallery Management (Admin)
- Drag-and-drop multi-image upload with progress indicators
- Assign gallery to a specific client account
- Gallery status control: Draft → Proofing (client notified) → Approved → Delivered
- Automated client notification email templates (placeholder hooks)

### 10.5 Client Portal Access Control (Admin)
- Manual account creation for clients (no public self-registration)
- Client accounts scoped to their own company's galleries only
- Account activation / deactivation
- Access request form on public site queues in admin inbox

### 10.6 Fast Turnaround Communication (Public + Dashboard)
- Turnaround time prominently displayed across the public site (e.g., "48-hour delivery")
- Dashboard gallery status badges reinforce this at every stage
- Activity feed on client overview shows real-time progress milestones

### 10.7 Dark / Light Mode
- Toggle button in public navbar and dashboard header bar
- CSS variable–based theming: all color values reference variables only
- System preference detection on first load (`prefers-color-scheme`)
- Preference saved to `localStorage`

### 10.8 RTL Support
- Separate `rtl.css` file loaded conditionally via `<html dir="rtl">`
- Sidebar flips to right rail
- Flex/grid directions reversed
- Text alignment and icon positioning adjusted
- No layout breaks in RTL mode

### 10.9 Accessibility (WCAG 2.1 AA)
- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`)
- All images have descriptive `alt` attributes (especially portfolio and proofing gallery images)
- Full keyboard navigation: tab order, visible focus rings, skip-to-content link
- ARIA roles and labels on interactive components (modals, tabs, accordions)
- Color contrast ratios meet AA requirements in both light and dark modes
- Form labels explicitly linked to inputs; error messages tied to fields with `aria-describedby`

---

## 11. Folder Structure

```
framedpro/
│
├── assets/
│   ├── css/
│   │   ├── custom.css          # Supplemental styles not covered by Tailwind utilities
│   │   │                       # (e.g., complex animations, lightbox overrides, RTL tweaks)
│   │   └── dashboard.css       # Dashboard-specific styles not easily expressed in Tailwind utilities
│   │
│   ├── js/
│   │   ├── components.js       # ⭐ Shared component loader — fetches and injects
│   │   │                       #    navbar.html and footer.html into every public page
│   │   ├── main.js             # Global: dark mode toggle, navbar scroll behavior, smooth scroll
│   │   ├── dashboard.js        # Sidebar toggle, dashboard tab interactions
│   │   ├── gallery-proof.js    # Approval toggling, bulk select, lightbox logic
│   │   ├── reorder.js          # Multi-step reorder form logic
│   │   ├── form-validate.js    # Client-side form validation (public + auth)
│   │   ├── animations.js       # Scroll-triggered reveals, counter animations
│   │   └── plugins/
│   │       └── (minimal — e.g., GLightbox if needed)
│   │
│   ├── images/
│   │   ├── portfolio/          # Placeholder headshot images
│   │   ├── clients/            # Corporate client logo placeholders
│   │   ├── team/               # Photographer portrait
│   │   ├── icons/              # SVG icon set
│   │   ├── og/                 # Open Graph social preview images
│   │   └── ui/                 # UI mockup screenshots, empty state illustrations
│   │
│   └── fonts/                  # Self-hosted font files if not using Google Fonts CDN
│
├── components/                 # ⭐ Shared HTML fragment components
│   ├── navbar.html             # Public site navbar — single source of truth
│   ├── footer.html             # Public site footer — single source of truth
│   ├── dashboard-sidebar.html  # Client dashboard sidebar fragment
│   └── admin-sidebar.html      # Admin dashboard sidebar fragment
│
├── index.html              # Home 1 — Portfolio Focus
├── home-2.html             # Home 2 — Process Focus
│
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── team-shoots.html
│   ├── onsite.html
│   ├── portfolio.html
│   ├── portfolio-single.html
│   ├── pricing.html
│   ├── process.html
│   ├── testimonials.html
│   ├── blog.html
│   ├── blog-single.html
│   ├── contact.html
│   ├── faq.html
│   ├── licensing.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── signup.html             # Access request form (not open registration)
│   └── locked.html
│
├── dashboard/
│   ├── index.html              # Client Overview
│   ├── galleries.html
│   ├── gallery-view.html
│   ├── approved.html
│   ├── downloads.html
│   ├── reorder.html
│   ├── orders.html
│   ├── invoices.html
│   ├── team.html
│   ├── settings.html
│   └── support.html
│
├── admin/
│   ├── index.html              # Admin Overview
│   ├── clients.html
│   ├── client-detail.html
│   ├── galleries.html
│   ├── gallery-upload.html
│   ├── photos.html
│   ├── reorders.html
│   ├── invoices.html
│   ├── inquiries.html
│   ├── blog.html
│   ├── portfolio.html
│   ├── testimonials.html
│   ├── reports.html
│   └── settings.html
│
├── documentation/
│   ├── 01-installation.md
│   ├── 02-customization.md
│   ├── 03-page-structure.md
│   ├── 04-dashboard-guide.md
│   ├── 05-credits.md
│   └── 06-changelog.md
│
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 12. Responsive Design Strategy

### Breakpoints (per Document Spec)

```
Mobile:   < 640px
Tablet:   640px – 1024px
Desktop:  1024px – 1280px
Large:    > 1280px
```

### 12.1 Public Website Behavior

| Element | Mobile (< 640px) | Tablet (640–1024px) | Desktop (1024px+) |
|---|---|---|---|
| Navbar | Hamburger → full-screen drawer | Hamburger or condensed | Full horizontal nav |
| Hero | Single column, stacked | Reduced image, stacked | Full split-screen layout |
| Portfolio Grid | 1 column | 2 columns | 3–4 column masonry |
| Service Cards | 1 column | 2 columns | 3 columns |
| Process Timeline | Vertical stacked | Horizontal or vertical | Horizontal with connectors |
| Pricing Cards | 1 column scrollable | 2 columns | 3 columns inline |
| Blog Cards | 1 column | 2 columns | 3 columns |
| Footer | Stacked columns | 2-column grid | 4-column grid |
| CTA Buttons | Full-width | Auto-width | Auto-width |

### 12.2 Dashboard Behavior

| Element | Mobile (< 640px) | Tablet (640–1024px) | Desktop (1024px+) |
|---|---|---|---|
| Sidebar | Hidden; toggle via header hamburger | Collapsed (icon-only mode) | Expanded with labels |
| Gallery Proofing Grid | 2 columns | 3 columns | 4–5 columns |
| Data Tables | Horizontal scroll with frozen first column | Horizontal scroll | Full table visible |
| Stat Cards | 2 per row | 3–4 per row | 4 per row |
| Reorder Form | Single column steps | Two-column layout | Two-column layout |

### 12.3 Mobile-Specific Requirements

- Touch targets minimum 44×44px for all actionable elements
- Approve/Flag buttons on gallery view must be thumb-accessible (bottom of viewport)
- Simplified bulk-action bar collapses to an icon row on mobile
- Download package cards stacked vertically with large download button
- Reduced animations (`prefers-reduced-motion` media query also respected)
- All form inputs at 16px minimum font size to prevent iOS zoom-on-focus

---

## 13. Animation & Interaction Ideas

### 13.1 Public Website Animations

| Element | Animation Idea |
|---|---|
| **Hero image** | Subtle scale-in (105% → 100%) on page load, 0.8s ease-out |
| **Stat/Trust bar** | Animated number counters (0 → final value) on scroll entry |
| **Portfolio grid items** | Staggered fade-up on scroll with 60ms delay per item |
| **Navbar** | Background blur + solid fill transition on scroll (transparent → frosted glass) |
| **Service cards** | Lift shadow on hover (`box-shadow` + `translateY(-4px)`) |
| **Process timeline steps** | Sequential highlight as user scrolls past each step |
| **CTA button** | Subtle pulse ring animation on idle to draw attention |
| **Logo strip** | Infinite marquee scroll (CSS animation, no JS) |
| **Blog card thumbnails** | Zoom-in image on hover (overflow hidden) |

### 13.2 Dashboard Animations

| Element | Animation Idea |
|---|---|
| **Page transitions** | Fade-in (opacity 0 → 1) on dashboard page load, 200ms |
| **Stat card counters** | Count-up animation when dashboard overview loads |
| **Sidebar collapse** | Smooth width transition (240px → 64px) with icon-label cross-fade |
| **Gallery approval toggle** | Checkmark stamp animation on approve; red X pulse on flag |
| **Toast notifications** | Slide in from top-right, auto-dismiss with shrinking progress bar |
| **Skeleton loaders** | Shimmer sweep animation on all loading placeholders |
| **Lightbox open** | Scale-up from thumbnail position (origin transform) |
| **Reorder step progress** | Step indicator fills and transitions between steps |
| **Modal open** | Backdrop fade-in + modal scale-up from 95% → 100% |
| **Activity feed items** | Staggered slide-in from left on first load |

---

## 14. SEO & Performance Strategy

### 14.1 On-Page SEO (Public Pages)

- **Title Tags:** Unique per page, 60 characters max. Pattern: `[Page Topic] | FramedPro Corporate Headshot Photography`
- **Meta Descriptions:** 150–160 characters, action-oriented, include primary keyword
- **H1 Rule:** One H1 per page, visually prominent, keyword-rich
- **Header Hierarchy:** H1 → H2 (sections) → H3 (subsections) — never skip levels
- **Image Optimization:** All images use `alt` text describing content and context; use WebP format with JPEG fallback; `width` and `height` attributes on all `<img>` elements to prevent CLS
- **Structured Data (JSON-LD):** 
  - `LocalBusiness` schema on homepage and contact page
  - `Photograph` or `CreativeWork` schema on portfolio items
  - `FAQPage` schema on FAQ page
  - `Service` schema on Services page
- **Canonical Tags:** All pages include `<link rel="canonical">` to prevent duplicate content
- **XML Sitemap:** `sitemap.xml` includes all public pages; exclude auth and dashboard pages
- **robots.txt:** Disallow `/admin/`, `/dashboard/`, `/auth/`; allow all public pages
- **Open Graph & Twitter Card:** All pages include OG title, description, image tags for social sharing

### 14.2 Performance Targets

| Metric | Target |
|---|---|
| PageSpeed (mobile) | 90+ |
| PageSpeed (desktop) | 95+ |
| LCP | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |

### 14.3 Performance Implementation Notes

- **Hero image:** Preloaded with `<link rel="preload" as="image">` in `<head>`
- **Fonts:** Use `font-display: swap`; preconnect to Google Fonts CDN; configure chosen fonts in the Tailwind `fontFamily` config block
- **JavaScript:** All non-critical JS loaded with `defer`; `components.js` must load before `main.js` to ensure navbar/footer are in the DOM before interactions are initialised
- **Tailwind CDN note:** The CDN version (~350KB) includes all utilities and is suitable for development and template delivery. Document clearly that production deployments should replace the CDN tag with a proper Tailwind CLI build for optimal performance
- **Images:** Lazy loading (`loading="lazy"`) on all below-fold images; srcset for responsive image sizes
- **Dashboard assets:** `dashboard.css` and `dashboard.js` only loaded on dashboard pages — not on public pages
- **Production build note:** Minify all custom CSS and JS before final packaging

---

## 15. Development Notes

### 15.1 CSS Architecture

**Tailwind CSS is loaded via CDN** — include the following in the `<head>` of every page:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',        // Dark mode toggled via 'dark' class on <html>
    theme: {
      extend: {
        colors: {
          brand: {            // TODO: Replace with final brand color
            50:  '#f8f8f8',
            500: '#1a1a1a',
            900: '#0a0a0a',
          }
        },
        fontFamily: {
          display: ['"Your Display Font"', 'serif'],   // TODO: Set chosen display font
          body:    ['"Your Body Font"', 'sans-serif'],  // TODO: Set chosen body font
        }
      }
    }
  }
</script>
```

- All styling is done with Tailwind utility classes directly in HTML — no separate component CSS files
- For styles that Tailwind cannot express cleanly (complex keyframe animations, third-party plugin overrides, RTL-specific rules), use `assets/css/custom.css` as a minimal supplement — keep this file as lean as possible
- Dark mode: toggled by adding/removing the `dark` class on `<html>` via JS; Tailwind's `dark:` variant handles all color shifts
- RTL support: use Tailwind's logical property utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`) throughout instead of directional utilities (`ml-*`, `mr-*`, `pl-*`, `pr-*`) so RTL layout works automatically when `dir="rtl"` is set on `<html>`
- **Important:** The CDN build includes all Tailwind classes. For a production-ready delivery, note in documentation that the developer should run a proper Tailwind build with PurgeCSS/content scanning to reduce file size

### 15.2 JavaScript Architecture

- No framework dependencies — all vanilla ES6+ modules
- **Shared component loading:** `components.js` uses the Fetch API to load `navbar.html` and `footer.html` into placeholder `<div>` elements on every public page. Each page must include the mount points and load the script:

```html
<!-- In every public page <body> -->
<div id="navbar-mount"></div>

<!-- page content -->

<div id="footer-mount"></div>

<script src="/assets/js/main.js" defer></script>
```

```javascript
// components.js — example pattern
async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent('navbar-mount', '/components/navbar.html');
loadComponent('footer-mount', '/components/footer.html');
```

- Dashboard sidebar fragments follow the same pattern using `dashboard-sidebar.html` and `admin-sidebar.html` with their own mount `<div>` in each dashboard/admin page
- After components are injected, `main.js` initialises navbar interactions (scroll behavior, dropdown, mobile drawer, dark mode toggle) — ensure `main.js` runs after component injection completes (use Promise chaining or a `DOMContentLoaded`-equivalent callback)
- Global state (dark mode preference, sidebar open state) stored in `localStorage`
- Gallery proofing state (approved/flagged per photo ID) managed in a JS object and can be serialized for backend handoff
- Event delegation used for dynamic content (proofing grid, table rows)
- All `console.log` statements removed for production build

### 15.3 Form Integration Hooks

- Contact form: compatible with **Formspree** (`action` attribute ready) and **Netlify Forms** (`netlify` attribute placeholder)
- Newsletter signup: **Mailchimp** embed-ready input with `data-` attributes for list ID
- Access request (sign-up) form: submit state handled by JS; endpoint placeholder in config comment
- All forms include honeypot field for spam prevention (`<input type="text" name="_gotcha" style="display:none">`)

### 15.4 Dashboard Authentication Note

This is a **static HTML template** — no real authentication is implemented. The auth pages are UI shells only. The developer or integration tool connecting this template to a backend must:
- Implement session/token validation before serving dashboard pages
- Protect `/dashboard/` and `/admin/` routes at the server or application layer
- Replace placeholder user data with dynamic content from their chosen backend

### 15.5 Image Placeholder Strategy

- Use a consistent placeholder service (e.g., high-quality headshot-style images from a free stock library such as Unsplash) — keep subjects diverse and professional
- Never repeat the same placeholder image in two visible locations on the same page
- Portfolio images should vary by gender presentation, age range, and setting (studio / office) to reflect realistic corporate diversity
- All placeholder images should be pre-optimized to WebP at their display size before inclusion in the template

### 15.6 Code Comments Standard

```html
<!-- ========================================
     SECTION: Hero
     ======================================== -->

<!-- TODO: Replace placeholder heading with client's tagline -->
<!-- TODO: Replace hero image with client's hero photo -->
```

```css
/* =========================================
   COMPONENT: Gallery Proof Card
   ========================================= */
```

```javascript
/**
 * toggleApproval()
 * Toggles the approval state of a photo card.
 * @param {string} photoId - Unique identifier for the photo
 * @param {string} state - 'approved' | 'flagged' | 'neutral'
 */
```

### 15.7 Third-Party Plugin Policy

In alignment with the template architecture rules, external JS plugins are minimized. The following are the only acceptable plugin inclusions, and only if a pure CSS/vanilla JS solution would be significantly more complex:

| Plugin | Use Case | Acceptable? |
|---|---|---|
| A lightweight lightbox (e.g., GLightbox) | Full-screen image proofing viewer | ✅ Yes |
| A date-picker (e.g., Pikaday) | Future booking form integration | ✅ Yes |
| Chart.js | Admin reports/analytics charts | ✅ Yes |
| Swiper.js or equivalent | Testimonial slider | ⚠️ Only if CSS scroll snap solution is insufficient |
| jQuery | Any use case | ❌ No |
| Any UI framework (Bootstrap, etc.) | Any use case | ❌ No |

### 15.8 Browser Support Targets

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- No IE11 support required

---

## Quick Reference: Page Count Summary

| Surface | Page Count |
|---|---|
| Public Website | 16 pages |
| Authentication | 3 pages |
| Client Dashboard | 11 pages |
| Admin Dashboard | 14 pages |
| **Total** | **44 pages** |

---

*FramedPro Template Blueprint — v1.0.0*
*Architecture governed by HTML Template Development Guide (internal standards document)*
*Built with HTML · Tailwind CSS (CDN) · Vanilla JavaScript*
