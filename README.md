# Divine Encounter 40 — Landing Page
### Divine Connection Ministries Worldwide

A landing page for **Divine Connection Ministries Worldwide**, promoting their flagship 40 days of prayer and fasting program: **Divine Encounter 40 (DE40)**.

**Official 2026 Theme:**
> **“SEEKING GOD UNTIL WE ENCOUNTER HIM.”**  
> *« CHERCHER DIEU JUSQU'À CE QUE NOUS LE RENCONTRIONS. »*

---

## 📅 Official Schedule & Broadcast Links

| Parameter | Details |
|---|---|
| **Program Dates** | **November 11, 2026 – December 20, 2026** (40 Days) |
| **Shift 1: Morning Watch** | **08:30 AM – 12:30 PM** (Extended Intercession & Consecration) |
| **Shift 2: Evening Watch** | **5:00 PM – 6:00 PM** (Twilight Warfare & Breakthrough Hour) |
| **Shift 3: Midnight Watch** | **11:00 PM – 1:00 AM** (Midnight Altar of Fire & Prophetic Impartation) |
| **Direct Zoom Room** | [Launch Zoom Room (ID: 760 785 7923)](https://us06web.zoom.us/j/7607857923?pwd=HldrhaVs8eEtxfs9OrznJgTyqE088b.1@?) |
| **Official YouTube** | [YouTube Channel @DivineConnectionMGlobal](https://www.youtube.com/@DivineConnectionMGlobal) |

---

## 🌟 Key Features

1. **Bilingual Translation (English & French Toggle)**:
   - Instant language switcher (`EN` | `FR`) located in both the desktop navigation bar and mobile drawer.
   - Comprehensive French translation covering all 212 UI elements, form placeholders, interactive modals, and the **entire 40-Day French Devotional Database** (`devotionalData_FR`).
   - Theme seamlessly translates: *“SEEKING GOD UNTIL WE ENCOUNTER HIM.”* ⇄ *« CHERCHER DIEU JUSQU'À CE QUE NOUS LE RENCONTRIONS. »*
   - Language preference is automatically persisted in `localStorage`.

2. **Sacred Celestial & Gold Visual Design**:
   - Palette tailored for solemn consecration: Deep Midnight (`#070B14`), Celestial Navy (`#121B30`), Radiant Gold (`#E5A93C`, `#F6C85F`), and Royal Amethyst glow accents.
   - Sacred typography pairing **Cinzel** (majestic headers) and **Plus Jakarta Sans** (clean readability).

3. **Real-Time Live Countdown & Shift Tracker**:
   - Counts down to program launch on **November 11, 2026 at 08:30 AM**.
   - During the 40 days (Nov 11 – Dec 20), dynamically shows the current day active (`Day X of 40`) and counts down to the next upcoming daily prayer watch.

4. **Interactive 40-Day Prayer & Devotional Guide**:
   - Structured into 4 distinct spiritual phases:
     - **Phase 1 (Days 1–10)**: *Foundations & Consecration* / *Fondements & Consécration*
     - **Phase 2 (Days 11–20)**: *Breaking Strongholds & Deliverance* / *Destruction des Forteresses*
     - **Phase 3 (Days 21–30)**: *Supernatural Favor & Open Heavens* / *Faveur & Cieux Ouverts*
     - **Phase 4 (Days 31–40)**: *Fresh Fire & Kingdom Dominion* / *Feu & Autorité Apostolique*
   - Full 40-day database in both English and French with daily scriptures, fasting focuses, anointed prayer bullets, and prophetic declarations.
   - Interactive phase tabs and direct Day 1–40 jump controls.

5. **Biblical Fasting Tracks & Medical Protocols**:
   - Details 4 distinct tracks: The Daniel Fast, Dawn-to-Dusk (6AM–6PM), Liquid/Juice Consecration, and Media/Soul Fast.
   - Clear pastoral & medical advisory notice for expectant mothers and individuals with health considerations.

6. **Daily Prayer Watches & Livestream Hub**:
   - Highlighting the 3 daily prayer shifts with 1-click access to the Zoom room (`Meeting ID: 760 785 7923`) and YouTube channel.

7. **Interactive Fasting Journey Tracker**:
   - Participants can check off each of the 40 days as they complete them.
   - Real-time progress bar showing completion percentage, saved in `localStorage`.

8. **Instant Registration & Digital Fasting Covenant Pass**:
   - Free worldwide registration form.
   - Generates a digital **Divine Encounter 40 Covenant Pass** with custom participant ID (`DCMW-DE40-XXXX`), country badge, program dates, and verified seal.
   - One-click **WhatsApp Share** (pre-populated in chosen language with dates, schedule, Zoom link, and YouTube link) and **Print Pass** functionality.

9. **Virtual Prayer Altar**:
   - Submit confidential or general prayer petitions to the intercessory team.
   - Instant confirmation popup with scripture promise (Isaiah 65:24).

10. **Official Pastoral Exhortation Portrait**:
    - High-resolution visual featuring Senior Pastoral Leadership (Apostolic Council), open Bible, and core ministry pillars (*Preach the Word, Pray Without Ceasing, Make Disciples, Reach the Nations*).

11. **Kingdom Seed & Giving Donation Box**:
    - Dedicated dual-channel giving suite supporting:
      - **PayPal Secure Card/Checkout**: `https://www.paypal.com/ncp/payment/SGWZ2A4CKR7KE`
      - **Direct PayPal.Me Handle**: `https://paypal.me/DConnectionministrie`
    - Fast preset seed shortcuts ($25, $50, $100, $250, $500, Custom), 1-click handle copy button, and 256-bit SSL trust indicators.

12. **Atmospheric Audio Generator (Web Audio API Synthesizer)**:
    - Built-in gentle ambient worship pad synthesizer generating soothing chords.
    - 100% offline, zero external audio MP3 dependencies.

13. **Interactive FAQ & Pastoral Welcome**:
    - Smooth accordion answering practical questions about shift hours, time zones, working while fasting, and accessing resources.

---

## 📁 Project Structure

```
divine-encounter-40/
├── index.html                 # Semantic landing page with bilingual data-i18n attributes
├── styles.css                 # Custom typography, animations, glassmorphism, golden glows
├── translations.js            # Full English & French dictionary + 40-day French devotionals
├── app.js                     # App controller, language switcher, 40-day EN database, tracker, audio
├── pastoral-exhortation.jpg   # Official Apostolic Council / Pastoral portrait
└── README.md                  # Documentation & setup guide
```

---

## 🚀 How to Run & View

### Option 1: Direct File Open
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari):
```powershell
Start-Process "C:\Users\davem\.gemini\antigravity\scratch\divine-encounter-40\index.html"
```

### Option 2: Local HTTP Server (Python)
```powershell
cd "C:\Users\davem\.gemini\antigravity\scratch\divine-encounter-40"
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 📌 Workspace Recommendation
To work on this project in your code editor or Antigravity, set the active workspace to:
`C:\Users\davem\.gemini\antigravity\scratch\divine-encounter-40`
