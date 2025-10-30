# Daily Task Optimizer 📅

An intelligent day planner that uses Google's Gemini AI to optimize your daily task schedule. Simply input your tasks, and the AI will generate an optimal schedule considering time constraints, task dependencies, and energy levels throughout the day.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=flat&logo=mui&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=flat&logo=google&logoColor=white)

## ✨ Features

- **AI-Powered Scheduling**: Leverages Google's Gemini 1.5 Flash model for intelligent task scheduling
- **Smart Task Optimization**: Considers multiple factors:
  - Time constraints (typical work hours 9AM-5PM)
  - Logical grouping of similar tasks
  - Energy levels throughout the day
  - Task dependencies
- **Clean UI**: Modern, responsive interface built with Material-UI
- **Task Management**: Easy-to-use task input with add/remove functionality
- **Detailed Explanations**: Each scheduled task includes reasoning for its placement

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google API Key with Gemini API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/superdev947/day-planner.git
cd day-planner
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google API key:
```env
REACT_APP_GOOGLE_API_KEY=your_google_api_key_here
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔑 Getting a Google API Key

1. Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key and add it to your `.env` file

## 📖 Usage

1. **Add Tasks**: Enter your daily tasks one by one using the input field
2. **Review Tasks**: Added tasks appear as chips below the input - remove any if needed
3. **Generate Schedule**: Click "Optimize My Day!" to generate your schedule
4. **View Results**: Review your optimized schedule with explanations for each task placement
5. **Start Over**: Click "Plan Another Day" to create a new schedule

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Material-UI (MUI)](https://mui.com/)** - Component library
- **[Google Generative AI](https://ai.google.dev/)** - Gemini AI integration
- **[Create React App](https://create-react-app.dev/)** - Project bootstrapping

## 📁 Project Structure

```
day-planner/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.tsx                 # Main application component
│   ├── gemini.ts               # Gemini AI integration
│   ├── index.tsx               # Application entry point
│   ├── LoadingIndicator.tsx    # Loading spinner component
│   ├── ScheduleDisplay.tsx     # Schedule results display
│   └── TaskInput.tsx           # Task input form
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## 🎨 Customization

### Changing Work Hours

Edit the prompt in `src/gemini.ts` to adjust the default work hours:
```typescript
// Change "9AM-5PM" to your preferred hours
1. Time constraints (typical work hours 9AM-5PM)
```

### Modifying the AI Model

To use a different Gemini model, update the model name in `src/gemini.ts`:
```typescript
const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
