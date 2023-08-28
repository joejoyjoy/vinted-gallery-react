import RoutingProvider from "./context/RoutingContext";
import UserLikesProvider from "./context/LikesContext";
import ModalProvider from "./context/ModalContext";
import SiteLayout from "./views/layouts/SiteLayout";
import "./app.scss";

function App() {
  return (
    <RoutingProvider>
      <UserLikesProvider>
        <ModalProvider>
          <SiteLayout />
        </ModalProvider>
      </UserLikesProvider>
    </RoutingProvider>
  );
}

export default App;
