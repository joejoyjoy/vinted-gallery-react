import SiteLayout from "./views/layouts/SiteLayout";
import UserLikesProvider from "./context/LikesContext";
import "./app.scss";

function App() {
  return (
    <UserLikesProvider>
      <SiteLayout />
    </UserLikesProvider>
  );
}

export default App;
