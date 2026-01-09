# 🌍 World Clock & Timer

<div align="center">

**Modern web application for tracking time across cities, countdown timers, and stopwatch**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Privacy](https://img.shields.io/badge/privacy-local--only-blue?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Live Demo](#) ·
[Report Bug](https://github.com/BilgeGates/Clock/issues) ·
[Request Feature](https://github.com/BilgeGates/Clock/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo Screenshots](#-demo--screenshots)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Browser Support](#-browser-support)
- [Security Privacy](#-security--privacy)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)

---

## 🌟 Overview

World Clock & Timer is a React-based web application for **tracking time across different cities worldwide**, setting **countdown timers**, and using a **stopwatch**.  
Built for users who need **fast, reliable, and feature-rich** time management tools.

---

## ✨ Features

- Real-time analog and digital clock with smooth animations
- World clocks for 25+ major cities with timezone support
- Add/remove cities dynamically with search functionality
- Countdown timer with hours, minutes, and seconds
- Stopwatch with millisecond precision and lap recording
- Alarms with toggle on/off functionality
- Time statistics (Day of Year, Week Number, Unix Timestamp)
- Browser notification support for timer completion
- Fully responsive design for all devices
- Zero-backend architecture (all data stays local)

---

## 🖼 Demo & Screenshots

> **Live demo:** [Your Demo URL]

<!-- Add screenshots here -->

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 16
npm >= 8
```

### Installation
```bash
# Clone the repository
git clone https://github.com/BilgeGates/Clock.git

# Navigate to project directory
cd Clock

# Install dependencies
npm install

# Start development server
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
# Create optimized production build
npm run build
```

---

## 📁 Project Structure
```
world-clock-timer/
│
├── 📂 public/
│   ├── index.html
│   └── favicon.ico
│
├── 📂 src/
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📂 ui/              # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Switch.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 stats/           # Statistics components
│   │   │   ├── StatCard.jsx
│   │   │   ├── StatsGrid.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 clock/           # Clock components
│   │   │   ├── AnalogClock.jsx
│   │   │   ├── DigitalTime.jsx
│   │   │   ├── ClockMarkers.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 world-clock/     # World clock features
│   │   │   ├── TimezoneCard.jsx
│   │   │   ├── TimezoneSearch.jsx
│   │   │   ├── TimezoneList.jsx
│   │   │   ├── WorldClockPanel.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 stopwatch/       # Stopwatch features
│   │   │   ├── StopwatchDisplay.jsx
│   │   │   ├── StopwatchControls.jsx
│   │   │   ├── LapItem.jsx
│   │   │   ├── LapsList.jsx
│   │   │   ├── StopwatchPanel.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 timer/           # Timer features
│   │   │   ├── TimerDisplay.jsx
│   │   │   ├── TimerInputs.jsx
│   │   │   ├── TimerControls.jsx
│   │   │   ├── TimerPanel.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 alarm/           # Alarm features
│   │   │   ├── AlarmCard.jsx
│   │   │   ├── AlarmList.jsx
│   │   │   ├── AlarmPanel.jsx
│   │   │   └── index.js
│   │   │
│   │   └── 📂 layout/          # Layout components
│   │       ├── Header.jsx
│   │       └── index.js
│   │
│   ├── 📂 hooks/               # Custom React hooks
│   │   ├── useTime.js
│   │   ├── useStopwatch.js
│   │   ├── useTimer.js
│   │   ├── useTimezones.js
│   │   ├── useAlarms.js
│   │   └── index.js
│   │
│   ├── 📂 utils/               # Utility functions
│   │   ├── constants.js
│   │   ├── timeUtils.js
│   │   └── index.js
│   │
│   ├── App.jsx                 # Root component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
│
├── 📄 .gitignore
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
├── 📄 CONTRIBUTING.md
├── 📄 SECURITY.md
└── 📄 LICENSE
```

---

## 🛠️ Technology Stack

### Core Technologies

<table>
<tr>
<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/><br>
  <b>React 18.2</b><br>
  <sub>UI Framework</sub>
</td>

<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
  <b>JavaScript ES6+</b><br>
  <sub>Language</sub>
</td>

<td align="center" width="25%">
  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg" width="50"/><br>
  <b>Tailwind CSS 3.3</b><br>
  <sub>Styling</sub>
</td>

<td align="center" width="25%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/><br>
  <b>Node.js 16+</b><br>
  <sub>Runtime</sub>
</td>
</tr>
</table>

### Additional Libraries

- **Lucide React** - Icon library
- **React Hooks** - State management (useState, useEffect, useMemo, useCallback)
- **Web APIs** - Intl.DateTimeFormat, Notification API, Web Audio API

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
- Intl.DateTimeFormat for timezone support

---

## 🔐 Security & Privacy

This project follows a **privacy-first, zero-backend architecture**.  
All functionality runs entirely in the user's browser with no external data flow.

### 🔒 Security Highlights

- ✅ No server-side data storage
- ✅ Client-side processing only
- ✅ No cookies, trackers, or fingerprinting
- ✅ No third-party analytics or telemetry
- ✅ No user data is collected, stored, or transmitted

### 🛡️ Data Safety Guarantee

> World Clock & Timer will **never** upload, sync, or share your data.  
> All settings, timers, and preferences remain local to your device.

For security concerns, see [SECURITY.md](SECURITY.md).

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Quick Contribution Guide
```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'feat: add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Code standards and best practices
- Pull request process
- Bug reporting
- Feature requests

### Contributors

Thanks to all the contributors who have helped make World Clock & Timer better!

<a href="https://github.com/BilgeGates/Clock/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BilgeGates/Clock" />
</a>

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
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

## 👨‍💻 Author

<div align="center">

### Khatai Huseynzada

**Front-End Web Developer | Open Source Contributor**

[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/BilgeGates)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/khatai-huseynzada)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:darkdeveloperassistant@gmail.com)

</div>

---

## 🙏 Acknowledgments

This project wouldn't be possible without these amazing resources:

<table>
<tr>
<td align="center" width="33%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="100"/><br>
  <b>React Team</b><br>
  <sub>Amazing framework</sub>
</td>
  
<td align="center" width="33%">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" width="100"/><br>
  <b>Tailwind Labs</b><br>
  <sub>Beautiful utilities</sub>
</td>

<td align="center" width="33%">
  <img src="https://lucide.dev/logo.light.svg" width="100"/><br>
  <b>Lucide Icons</b><br>
  <sub>Icon library</sub>
</td>
</tr>
</table>

---

## 📧 Support & Contact

### Get Help

<div align="center">

| Channel | Link | Response Time |
|---------|------|---------------|
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/BilgeGates/Clock/issues) | 24-48 hours |
| 💡 **Feature Requests** | [GitHub Discussions](https://github.com/BilgeGates/Clock/discussions) | 1-3 days |
| 📧 **Email** | darkdeveloperassistant@gmail.com | 2-5 days |

</div>

---

## ❓ FAQ

<details>
<summary><b>How do I report a bug?</b></summary>

1. Check if the issue already exists in [GitHub Issues](https://github.com/BilgeGates/Clock/issues)
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

1. Open `src/utils/constants.js`
2. Add your city to the `TIMEZONES` array following the existing format
3. Submit a pull request with your changes
</details>

<details>
<summary><b>Why do I need to grant notification permissions?</b></summary>

Notification permissions are optional and only used for timer completion alerts.  
The app works perfectly fine without them - you'll just see a standard browser alert instead.
</details>

<details>
<summary><b>How is my data stored?</b></summary>

All user data (timezones, timer settings, alarms) is stored locally in your browser.  
No data is sent to any server.
</details>

---

**© 2026 Khatai Huseynzada. Licensed under MIT.**
