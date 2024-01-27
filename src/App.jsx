import SharedLayout from "components/SharedLayout/SharedLayout";
import { Home, Main, SigninPage, SignupPage } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/welcome" element={<Main />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;