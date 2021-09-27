import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound";

function App(): ReactElement {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
