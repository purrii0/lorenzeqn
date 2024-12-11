# Lorenz Attractor Visualization

This project visualizes the Lorenz attractor, a system of differential equations used to model chaotic systems. The visualization is implemented using the p5.js library in JavaScript.

---

## Equations Used

The Lorenz attractor is defined by the following system of equations:

\[
\frac{dx}{dt} = \sigma (y - x)
\]
\[
\frac{dy}{dt} = x (\rho - z) - y
\]
\[
\frac{dz}{dt} = x y - \beta z
\]

Where:

- \( \sigma \): Prandtl number (default value: 10)
- \( \rho \): Rayleigh number (default value: 28)
- \( \beta \): A constant (default value: 8/3)
- \( dt \): Time step for numerical integration (default value: 0.01)

---

## Features

- **3D Visualization:** The attractor paths are rendered in a 3D space with customizable colors.
- **Orbit Control:** Use mouse or touch gestures to rotate, zoom, and pan the view.
- **Dynamic Animation:** Multiple attractors evolve dynamically with different initial conditions.

---

## How to Run Locally

### Prerequisites

- A modern web browser.

### Steps

1. Clone or download this repository.

   ```bash
   git clone https://github.com/purrii0/lorenzeqn.git
   cd lorenzeqn
   ```

2. Ensure the following files are present in the root folder:

   - `index.html`
   - `lawrance.js`
   - `attractor.js`

3. Open the `index.html` file directly in a browser.

   - Alternatively, use a local web server to serve the files. For example, with Python:

     ```bash
     python -m http.server 8000
     ```

     Then, navigate to `http://localhost:8000` in your browser.

4. Enjoy the visualization! Use the mouse to interact with the 3D space.

---

## Live[https://purrii0.github.io/lorenzeqn/]

## File Descriptions

### `index.html`

Defines the structure of the webpage and includes the required scripts.

### `lawrance.js`

Contains the main code for setting up the p5.js environment and managing multiple Lorenz attractors.

### `attractor.js`

Defines the `Attractor` class, which handles the Lorenz equations and rendering.

---

## Customization

- **Number of Attractors:** Modify the `num` variable in `lawrance.js` to increase or decrease the number of attractors.
- **Color Palette:** Adjust the color assignment in the `setup()` function in `lawrance.js`.
- **Integration Parameters:** Change \( \sigma \), \( \rho \), \( \beta \), or \( dt \) in `lawrance.js` for different dynamics.

---

## Dependencies

- [p5.js](https://p5js.org/) (included via CDN in `index.html`)

---
