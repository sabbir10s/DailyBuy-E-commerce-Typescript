import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import ThemeSuspense from "./components/theme/ThemeSuspense";
import router from "./routes";

function App() {
  return (
    <Suspense fallback={<ThemeSuspense />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
