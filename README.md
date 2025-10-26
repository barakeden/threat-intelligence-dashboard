# Threat Intelligence Dashboard

A modern web application for analyzing IP addresses and retrieving threat intelligence data. Built with React, Vite, and Express.js.

## Features

- 🔍 IP address threat intelligence lookup
- 🎨 Modern UI with styled-components
- ⚡ Fast development with Vite
- 🚀 Full-stack application with React frontend and Express backend
- 📱 Responsive design

## Tech Stack

- **Frontend**: React 19, Vite, Styled Components
- **Backend**: Express.js, Node.js
- **Development**: ESLint, Concurrently

## Prerequisites

- Node.js (v18.16.0 or higher)
- npm

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd threat-intelligence-dashboard
```

### 2. Install dependencies

Install client dependencies:
```bash
npm install
```

Install server dependencies:
```bash
cd server
npm install
cd ..
```

### 3. Start the application

**Option 1: Start both client and server together (Recommended)**
```bash
npm run dev
```

**Option 2: Start client and server separately**

Terminal 1 - Start the server:
```bash
npm run dev:server
```

Terminal 2 - Start the client:
```bash
npm run dev:client
```

### 4. Access the application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## Available Scripts

### Client Scripts
- `npm run dev:client` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server Scripts
- `npm run dev:server` - Start server with nodemon
- `cd server && npm start` - Start server in production mode

### Combined Scripts
- `npm run dev` - Start both client and server concurrently

