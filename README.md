# Movie Explorer App 🎬

![Movie App Demo](public/0.movie.gif)

**Hosted URL:** [Movie App Live](https://movie-app-next-frwkf47vs-herfandos-projects.vercel.app/home)

---

## Description

This project is a **Movie Explorer App** built with **Next.js**, **Tailwind CSS**, **Context API**, and **TanStack Query**.  
It fetches data from **TMDB API** and allows users to:

- Browse popular movies
- Search for movies
- Add movies to favorites
- Watch trailers directly in the app
- Enjoy a fully responsive design for desktop and mobile

The app demonstrates best practices in:

- Component reusability
- State management using Context API
- Data fetching & caching with TanStack Query
- Responsive UI with Tailwind CSS
- Deployment using Vercel

---

## Features

- **Movie Listing:** Browse trending and top-rated movies from TMDB API
- **Search Functionality:** Filter movies by title
- **Favorites System:** Add/remove favorite movies using Context API, persisted in `localStorage`
- **Trailer Modal:** Watch YouTube trailers for each movie
- **Responsive Design:** Optimized for mobile, tablet, and desktop
- **Next.js Optimization:** Image optimization, dynamic routing, SSR & SSG as needed

---

## Screenshots / GIF

![Movie App Demo](public/0.movie.gif)

---

## Tech Stack

- **Frontend:** Next.js 13 (App Router), React 18
- **Styling:** Tailwind CSS 4.1.5
- **State Management:** React Context API
- **Data Fetching:** TanStack Query (React Query)
- **API:** The Movie Database (TMDB) API
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

1. Clone this repository:

```bash
git clone https://github.com/herfando/movie-app-next.git
cd movie-app-next
Install dependencies:

npm install
Start the development server:

npm run dev
Open http://localhost:3000 in your browser to see the app.

Project Structure
src/
├─ app/           # Next.js pages & routing
├─ components/    # Reusable React components
├─ context/       # Context API for favorites & search
├─ query/         # TanStack Query hooks & API services
public/           # Static files (images, GIFs)
Notes & Best Practices
Do not modify project setup files outside src/ or public/

Components are reusable and structured for maintainability

Tailwind CSS responsive classes (md:, lg:) are used to ensure mobile-friendly design

Context API is used for single source of truth for favorites and search

TanStack Query handles data fetching, caching, and loading states

Deployed on Vercel, so it reflects production-ready performance

Evaluation Focus
Understanding of Next.js structure and routing

Correct usage of Context API and state management

Implementation of responsive design with Tailwind CSS

Integration with TMDB API and dynamic trailer functionality

Deployment quality on Vercel

References
TMDB API

Next.js Documentation

Tailwind CSS Documentation

React Query Documentation

Author
Herfando
Front-End Developer | React & Next.js Enthusiast 🚀
```
