# UI Component Library (Storybook)

This project is a reusable UI component library built with React and documented using Storybook.

## [Open StoryBook](https://6a3655623c956705830ae9f2-rovvjvlyhd.chromatic.com/)  

The goal of this repository is to create a structured and scalable design system that can be reused across different projects. Storybook is used as a visual interface to explore components, their states, and behavior in isolation.

## Overview

This repository contains:

- A collection of reusable UI components
- A Storybook environment to preview and test components
- Documentation for each component and its variations
- A foundation for building a design system

Each component is developed independently and includes multiple "stories" that represent different visual states and configurations.

## Features

- Modular and reusable React components
- Interactive component preview with Storybook
- Real-time modification of component props using controls
- Multiple component states (e.g. primary, secondary, disabled)
- Isolated development environment for UI testing
- Organized structure for building a scalable UI library

## Tech Stack

- React
- Vite
- Storybook
- TypeScript
- ESLint

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/IvannaZimina/my-storybook.git
cd my-storybook
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run Storybook:
```bash
npm run storybook
```
Storybook will start on: http://localhost:6006


## Project Structure

    storybook/
    ├── .storybook/         # Storybook configuration (main.ts, preview.ts)
    ├── node_modules/       # Installed dependencies (auto-generated)
    ├── public/             # Static assets (images, fonts, etc.)
    ├── src/                # Application source code
    ├── .gitignore          # Git ignore rules
    ├── eslint.config.js    # ESLint configuration
    ├── index.html          # HTML entry point
    ├── package.json        # Project configuration and scripts
    ├── package-lock.json   # Dependency lock file
    ├── tsconfig.json       # Base TypeScript config
    ├── tsconfig.app.json   # TypeScript config for app
    ├── tsconfig.node.json  # TypeScript config for Node
    ├── vite.config.ts      # Vite build configuration
    └── README.md           # Project documentation


## What is a Story?

In Storybook, a "story" represents a specific state of a component.
For example, a Button component may have multiple stories:
- Primary  
- Secondary  
- Disabled  
- Large  

This allows you to visualize and test different cases in isolation.

## Interactive Stories

- **Interactive**: some stories in this project are purely visual demonstrations of a single UI control (for example, the Task story's checkbox). These interactive stories show how the control looks and behaves (hover, active, checked states) but are not full-featured app interactions — they are intended for visual testing, layout verification, and styling iteration.

## Purpose of the Project

This project is intended to:
- serve as a reusable UI component library  
- provide a visual documentation system for components  
- improve consistency across applications  
- help understand component-driven development  

## Future Improvements

- Add more components to the library  
- Improve styling and design consistency  
- Add advanced component patterns  
- Introduce testing strategies  
- Integrate AI for component and story generation  