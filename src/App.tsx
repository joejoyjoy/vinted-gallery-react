import RoutingProvider from "./context/RoutingContext";
import UserLikesProvider from "./context/LikesContext";
import SiteLayout from "./views/layouts/SiteLayout";
import "./app.scss";

function App() {
  return (
    <RoutingProvider>
      <UserLikesProvider>
        <SiteLayout />
      </UserLikesProvider>
    </RoutingProvider>
  );
}

export default App;
