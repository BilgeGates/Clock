# 🌍 World Clock & Timer

<div align="center">

**A modern and functional world clock, timer, and stopwatch application**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Privacy](https://img.shields.io/badge/privacy-local--only-blue?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Live Demo](#) ·
[Report Bug](https://github.com/yourusername/world-clock-timer/issues) ·
[Request Feature](https://github.com/yourusername/world-clock-timer/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo Screenshots](#-demo-screenshots)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Browser Support](#-browser-support)
- [Security Privacy](#-security--privacy)
- [Contributing](#-contributing)
- [Authors](#-authors)
- [Contributors](#-contributors)
- [License](#-license)
- [FAQ](#-faq)

---

## 🌟 Overview

**World Clock & Timer** is a fully functional web application for tracking time across different cities worldwide, setting countdown timers, and using a stopwatch. Built with modern design principles, intuitive interface, and comprehensive functionality - all running entirely in your browser.

---

## ✨ Features

### 🕐 Analog & Digital Clock
- Real-time updates with smooth animations
- Beautiful analog clock with hour, minute, and second hands
- Digital time display in 24-hour format
- Current date with full weekday and month names

### 🌍 World Clocks
- Track time in multiple cities simultaneously
- Pre-loaded with 5 major cities (New York, London, Tokyo, Dubai, Sydney)
- Add custom cities from a database of 25+ major cities worldwide
- Search functionality with city and country filters
- Remove cities with hover-to-reveal delete buttons
- Real-time synchronization across all timezones
- Display current date for each timezone

### ⏱️ Countdown Timer
- Set custom hours, minutes, and seconds
- Visual countdown display
- Pause and resume functionality
- Sound notification when timer completes
- Browser notification support
- Auto-reset option
- Input validation (max 23 hours, 59 minutes, 59 seconds)

### ⏲️ Stopwatch
- Precise timing up to centiseconds (0.01s)
- Start, pause, and resume controls
- Lap recording - track multiple split times
- Lap history display with numbered entries
- Keyboard shortcuts for quick access
- Clean and reset functionality

### ⏰ Alarms
- Pre-configured alarm examples
- Toggle alarms on/off with smooth switches
- Visual feedback for active/inactive states
- Weekday and weekend alarm categories

### 📊 Time Statistics
- Day of Year - current day count (1-365/366)
- Week Number - ISO week of the year
- Unix Timestamp - real-time epoch time
- Local time quick reference

### ⌨️ Keyboard Controls
- `Space` - Start/pause stopwatch
- `L` - Record lap (when stopwatch is running)
- `R` - Reset stopwatch
- Works only when stopwatch tab is active

---

## 🖼 Demo Screenshots

### Main Clock Display
```
┌─────────────────────────────────────┐
│  🌍 World Clock                     │
│                                     │
│  ⏰ Analog Clock    📊 Statistics   │
│  12:34:56           Day: 9          │
│  Thursday           Week: 2         │
│  January 9, 2026    Unix: 1736422496│
└─────────────────────────────────────┘
```

### World Clocks Tab
```
┌─────────────────────────────────────┐
│  🇺🇸 New York      07:34 Jan 9      │
│  🇬🇧 London        12:34 Jan 9      │
│  🇯🇵 Tokyo         21:34 Jan 9      │
└─────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
```bash
Modern web browser (Chrome, Firefox, Safari, Edge)
No installation required - runs directly in browser
```

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/world-clock-timer.git

# Navigate to project directory
cd world-clock-timer

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Development Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Deploy to Web

Deploy to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

---

## 📁 Project Structure
```
world-clock-timer/
│
├── 📄 index.html              # Main HTML file
├── 📄 script.js               # Application logic
├── 📄 styles.css              # Custom styles (optional)
│
├── 📄 README.md               # This file
├── 📄 LICENSE                 # MIT License
├── 📄 CONTRIBUTING.md         # Contribution guidelines
│
└── 📂 .git/                   # Git repository
```

### Code Organization

The `script.js` file is organized into clear sections:
```javascript
// ==================== TIMEZONE DATABASE ====================
// 25+ major cities with timezone data

// ==================== INITIALIZATION ====================
// Clock markers and DOM setup

// ==================== CLOCK FUNCTIONS ====================
// Real-time clock updates

// ==================== TAB SWITCHING ====================
// Navigation between features

// ==================== WORLD CLOCKS ====================
// Multi-timezone management

// ==================== TIMER ====================
// Countdown timer logic

// ==================== STOPWATCH ====================
// Stopwatch with lap recording

// ==================== ALARMS ====================
// Alarm management

// ==================== KEYBOARD SHORTCUTS ====================
// Keyboard event handling
```

---

## 🛠️ Technology Stack

### Core Technologies

<table>
<tr>
<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/><br>
  <b>HTML5</b><br>
  <sub>Markup</sub>
</td>

<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/><br>
  <b>CSS3</b><br>
  <sub>Styling</sub>
</td>

<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
  <b>JavaScript ES6+</b><br>
  <sub>Logic</sub>
</td>

<td align="center" width="25%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg" width="50"/><br>
  <b>Tailwind CSS</b><br>
  <sub>Framework</sub>
</td>
</tr>
</table>

### Web APIs Used

- **Intl.DateTimeFormat** - Timezone conversions
- **Notification API** - Browser notifications
- **Web Audio API** - Timer completion sound
- **setInterval/setTimeout** - Time tracking
- **Canvas API** - Analog clock rendering

### Performance Features

- Vanilla JavaScript (no dependencies)
- Minimal DOM manipulation
- Efficient event delegation
- GPU-accelerated CSS animations
- Optimized rendering loops

---

## 🌐 Browser Support

<div align="center">

| Browser | Version | Status |
|---------|---------|--------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="20"/> Chrome | 90+ | ✅ Full Support |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" width="20"/> Firefox | 88+ | ✅ Full Support |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg" width="20"/> Safari | 14+ | ✅ Full Support |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg" width="20"/> Edge | 90+ | ✅ Full Support |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg" width="20"/> Opera | 76+ | ✅ Full Support |

</div>

### Required Browser Features

- ES6+ JavaScript support
- CSS Grid & Flexbox
- Web Audio API
- Notification API (optional)
- Canvas API

---

## 🔐 Security & Privacy

This application follows a **privacy-first, zero-backend architecture**.  
All functionality runs entirely in your browser with no external data flow.

### 🔒 Security Highlights

- ✅ No server-side data storage
- ✅ Client-side processing only
- ✅ No cookies, trackers, or fingerprinting
- ✅ No third-party analytics or telemetry
- ✅ No user data is collected, stored, or transmitted
- ✅ No external dependencies or CDN tracking

### 🧠 Threat Model

- No authentication or user accounts
- No sensitive or personal data processed
- No external API calls (Tailwind CSS via CDN only)
- Attack surface limited to static client-side execution only

### 🛡️ Data Safety Guarantee

> World Clock & Timer will **never** upload, sync, or share your data.  
> All settings, timers, and preferences remain local to your device.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/world-clock-timer/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### Suggesting Features

1. Open a new issue with tag `enhancement`
2. Describe the feature and its benefits
3. Provide examples or mockups if possible

### Pull Requests
```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes
# - Follow existing code style
# - Add comments for complex logic
# - Test thoroughly across browsers

# 4. Commit your changes
git commit -m "Add: feature description"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request
```

### Development Guidelines

- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex algorithms
- Ensure responsive design works on all devices
- Test on multiple browsers before submitting
- Follow existing code formatting

---

## 👥 Authors

**Khatai Huseynzada**
- Initial work and project creator
- GitHub: [@khataihuseynzada](https://github.com/khataihuseynzada)
- Email: your.email@example.com

---

## 🌟 Contributors

We appreciate all contributions to this project!

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- This section will be automatically updated when contributors are added -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

### How to Become a Contributor

1. Fork the repository
2. Make your contribution (bug fixes, features, documentation, etc.)
3. Submit a pull request
4. Once merged, you'll be added to this list!

**Current Contributors:**
- None yet - Be the first to contribute!

---

## 📄 License

This project is licensed under the **MIT License**.
```
MIT License

Copyright (c) 2026 Khatai Huseynzada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/world-clock-timer?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/world-clock-timer?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/world-clock-timer)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/world-clock-timer)

---

## 🙏 Acknowledgments

This project wouldn't be possible without these amazing resources:

<table>
<tr>
<td align="center" width="33%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="100"/><br>
<b>MDN Web Docs</b><br>
<sub>Web API documentation</sub>
</td>
  
<td align="center" width="33%">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" width="100"/><br>
  <b>Tailwind Labs</b><br>
  <sub>CSS framework</sub>
</td>

<td align="center" width="33%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/iana.svg" width="100"/><br>
  <b>IANA</b><br>
  <sub>Timezone database</sub>
</td>
</tr>
</table>

---

## 📧 Support & Contact

### Get Help

<div align="center">

| Channel | Link | Response Time |
|---------|------|---------------|
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/yourusername/world-clock-timer/issues) | 24-48 hours |
| 💡 **Feature Requests** | [GitHub Discussions](https://github.com/yourusername/world-clock-timer/discussions) | 1-3 days |
| 📧 **Email** | your.email@example.com | 2-5 days |

</div>

---

## ❓ FAQ

<details>
<summary><b>How do I report a bug?</b></summary>

1. Check if the issue already exists in [GitHub Issues](https://github.com/yourusername/world-clock-timer/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and OS information
</details>

<details>
<summary><b>Can I use this commercially?</b></summary>

Yes! This project is MIT licensed, which means you can use it for commercial purposes.  
Just include the license notice in your project.
</details>

<details>
<summary><b>How do I add more cities?</b></summary>

1. Open `script.js`
2. Find the `timezoneData` array
3. Add your city with this format:
```javascript
{ 
  city: "City Name", 
  country: "Country", 
  timezone: "Continent/City", 
  flag: "🏳️" 
}
```
4. Save and refresh the page
</details>

<details>
<summary><b>Why do I need to grant notification permissions?</b></summary>

Notification permissions are optional and only used for timer completion alerts.  
The app works perfectly fine without them - you'll just see a standard browser alert instead.
</details>

<details>
<summary><b>Does this work offline?</b></summary>

Partially. The app itself works offline, but:
- Tailwind CSS requires internet connection (loaded via CDN)
- Emoji flags might not display without internet on some systems
- All core functionality (clock, timer, stopwatch) works offline
</details>

---

<div align="center">

**Made with ❤️ by Khatai Huseynzada**

**[⬆ Back to Top](#-world-clock--timer)**

</div>
