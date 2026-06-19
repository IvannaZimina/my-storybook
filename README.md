# UI Component Library (Storybook)

This project is a reusable UI component library built with React and documented using Storybook.

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

    my-storybook/
    ├── src/
    │   ├── components/      # UI components
    │   └── stories/         # Storybook stories
    ├── .storybook/          # Storybook configuration
    ├── public/
    └── package.json

## What is a Story?

In Storybook, a "story" represents a specific state of a component.
For example, a Button component may have multiple stories:
- Primary  
- Secondary  
- Disabled  
- Large  

This allows you to visualize and test different cases in isolation.

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