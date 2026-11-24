# 🧩 Sort the Numbers

**A sleek 15-puzzle sliding game built with pure HTML, CSS & JavaScript, with themed backgrounds, live progress tracking and a win screen.**

Slide the tiles around the 4×4 grid and arrange them from **1 to 15**. Every tile that lands in its correct spot glows green and fills the progress bar.

---

## ✨ Features

- 🎯 Classic 15-puzzle on a 4×4 grid with a randomly shuffled start
- 🎮 Three ways to play: on-screen arrow buttons, clicking a tile next to the gap, or the keyboard
- 🟩 Correctly placed tiles glow green, and a progress bar fills as you get closer
- 🎨 Two themes (wood and sunset bubbles), picked at random on every load
- ⏱️ Move counter and timer, with a win pop-up showing your moves, time and a rank estimate
- 🔄 One-click restart button, plus "Play Again" and "Continue" options after winning
- 🪷 Animated Lotus logo with social links
- 📱 Responsive layout for desktop, tablet and mobile

## 🚀 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/KoustabK2006/Sort-the-Numbers.git
    ```
2. **Open the project folder**
    ```bash
    cd Sort-the-Numbers
    ```
3. **Run the game** by opening `index.html` in your browser, or use a local server (e.g. the VS Code Live Server extension).

## 🧩 Usage

| Control        | Action                                   |
| -------------- | ---------------------------------------- |
| `W` / `8` or ▲ | Slide the tile below the gap **up**      |
| `A` / `4` or ◀ | Slide the tile right of the gap **left** |
| `S` / `2` or ▼ | Slide the tile above the gap **down**    |
| `D` / `6` or ▶ | Slide the tile left of the gap **right** |
| Click a tile   | Moves it into the gap if it is adjacent  |
| ↻ (top right)  | Restart with a fresh shuffle             |

**Goal:** arrange the tiles in order from 1 to 15, with the empty space in the bottom-right corner.

## 🎨 Customization

| What                            | Where                     | How                                                        |
| ------------------------------- | ------------------------- | ---------------------------------------------------------- |
| Themes (background + tile icon) | `main.js` → `assetPairs`  | Add or replace `{ background, icon }` pairs                |
| Theme images                    | `images/`                 | Drop in your own `.jpg` files                              |
| Win rank estimate               | `main.js` → `puzzleWin()` | Adjust the move thresholds and divisors                    |
| Logo size and blur              | `logo-style.css`          | Edit `transform: scale()` and `backdrop-filter` on `.logo` |
| Fonts and colors                | `style.css`               | Change the `font-family` and color values                  |
| Responsive layout               | `style.css`               | Tweak the `@media` breakpoints at the bottom               |

## 📁 Project Structure

```
Sort-the-Numbers/
├── index.html        # Game layout, win pop-up and Lotus logo
├── style.css         # Game styling and responsive breakpoints
├── logo-style.css    # Lotus logo styling and animations
├── main.js           # Game logic, shuffle, moves, timer and win check
└── images/
    ├── background1.jpg
    ├── background2.jpg
    ├── icon1.jpg
    └── icon2.jpg
```

## 🛠️ Built With

- **HTML5**: structure
- **CSS3**: layout, animations, glassmorphism effects
- **JavaScript (Vanilla)**: game logic
- **Font Awesome**: icons
- **Google Fonts**: Barlow, Kanit, Josefin Sans, Varela Round

## 📸 Preview

| Wood Theme                            | Sunset Theme                            |
| ------------------------------------- | --------------------------------------- |
| ![Wood theme](images/background1.jpg) | ![Sunset theme](images/background2.jpg) |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```
Copyright (c) 2024-2026 Koustab Koley
```

## 👤 Author

**Koustab Koley**

- GitHub: [@KoustabK2006](https://github.com/KoustabK2006/)
- LinkedIn: [Koustab Koley](https://www.linkedin.com/in/koustab-koley/)

⭐ If you enjoyed the game, consider giving the repo a star!
