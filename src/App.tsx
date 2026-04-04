"use client";

import React from "react";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      {/* Global wrapper for the app */}
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
        {/* All routes and pages */}
        <AppRoutes />
      </div>
    </React.StrictMode>
  );
};

export default App;