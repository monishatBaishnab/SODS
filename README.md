# Responsive Landing Page - Next.js & Tailwind CSS

## Overview
This project is a responsive landing page built using **Next.js** and **Tailwind CSS**. The objective was to replicate the **navbar,** **footer** and **two sections** from the reference website ([SODS](https://www.sods.sk.ca/)), ensuring design consistency, responsiveness, and performance optimization.

## Features
- **Fully responsive design** across all devices.
- **Custom navigation bar** with a dropdown for mobile and desktop views.
- **Curve background implementation** similar to the reference website.
- **Reusable Tailwind components** for better maintainability.

## Tech Stack
- **Next.js** - Framework for React with server-side rendering.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Vercel** - For deployment (optional but preferred).

## Problems Faced & Solutions
### 1. Custom Navigation Bar & Dropdown Behavior
- **Problem:** Initially, I struggled to create the **navigation dropdown**, especially since its display differs between desktop and mobile views.
- **Solution:** I broke the navigation bar into **separate components** and handled the dropdown using **conditional rendering**. I also created a **separate mobile menu component** for better manageability and a smoother user experience.

### 2. Curve Background Implementation
- **Problem:** I was unsure how to replicate the **curved background** from the reference website.
- **Solution:** I inspected the website’s styles and used **SVGs** to achieve the desired effect successfully.
 
## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/monishatBaishnab/SODS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SODS
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Run the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
5. Open `http://localhost:3000` in your browser.

## Live Demo
[Live Preview](https://sods-five.vercel.app/)

## Contact
- [**GitHub**](https://github.com/monishatBaishnab)
- [**LinkedIn**](https://www.linkedin.com/in/monishat-baishnab666/)
- baishnabmonishta@gmail.com

