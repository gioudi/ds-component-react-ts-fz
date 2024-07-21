# Design System Components Library 

## Overview

My Design System Components Library is a versatile and reusable set off UI components designed for modern web applications. Built with React and TypeScript this library ensures type safety and a superior developer experience. Utilizing Bootstrap 5 for styling and SCSS for enhanced customization, the library also features interactive documentation through Storybook and robust testing with Jest.

## Features

**React and TypeScript**: Ensures type safety and improved developer productivity.
**StoryBook**: Provides an interactive development and documentation environment for UI components.
**Bootstrap 5**: Offers a responsive and customizable design system.
**SCSS**: Facilitates advanced styling capabilities.
**Jest**: Enables comprehensive unit testing.
**Design Patterns**: Implements design patterns like Factory for component creation and usage.

## Author

- **Sergio Penagos** 🔥
  - [LinkedIn](https://www.linkedin.com/in/analyst-sergio-penagos)
  - [GitHub](https://github.com/gioudi)
  - [GitHub2](https://github.com/SergioVass)
  - [Examples](https://www.youtube.com/@JormunganDev)




## Installation
To install the component library, run:

### Prerequisites
- Node.js (version 14.x or higher recommended)
- npm (version 6.x or higher)

```sh
npm install ds-component-react-ts-fz
``` 
## Structure
```
ds-component-library/
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   ├── tsconfig.json
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.scss
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── ButtonFactory.tsx
│   │   ├── AnotherComponent/
│   │       ├── AnotherComponent.tsx
│   │       ├── AnotherComponent.scss
│   │       ├── AnotherComponent.stories.tsx
│   │       ├── AnotherComponent.test.tsx
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.paths.json

```
