import "./App.css";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <BrowserRouter>
      <NavBar />
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                category="business"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                category="health"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                category="science"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                category="sports"
                country="us"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                category="technology"
                country="us"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
