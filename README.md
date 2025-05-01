# AeroCast - Weather App

AeroCast is a modern weather application built with React, TypeScript, and Vite. It provides real-time weather updates, forecasts, and location-based weather details. The app is designed with a responsive UI and supports both light and dark themes.

## Features

- **Real-Time Weather Updates**: Get current weather conditions for your location.
- **5-Day Forecast**: View detailed weather forecasts for the next five days.
- **Hourly Temperature**: Visualize temperature changes throughout the day.
- **Favorite Cities**: Save and manage your favorite locations for quick access.
- **Dark and Light Themes**: Toggle between dark and light modes for better usability.
- **Geolocation Support**: Automatically fetch weather data based on your current location.

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API**: OpenWeather API

## Folder Structure

```
AeroCast/
├── public/                # Static assets
├── src/
│   ├── api/              # API configuration and types
│   ├── components/       # Reusable UI components
│   ├── context/          # Context providers (e.g., theme)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## Acknowledgments

- [OpenWeather API](https://openweathermap.org/api) for providing weather data.
- [RoadsideCoder](https://www.youtube.com/watch?v=BCp_5PoKrvI&ab_channel=RoadsideCoder) for creating this tutorial project.

## Disclaimer

This project was inspired by a tutorial created by RoadsideCoder. While the UI design and CSS styling were referenced from the tutorial, the backend logic and 70% of the implementation were independently developed to test and enhance backend skills. Huge thanks to RoadsideCoder for introducing the ShadCN library and TypeScript concepts.