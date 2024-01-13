import Main from "./pages/Main";
import Root from "./pages/global/Root";
import SurvayForm from "./pages/SurvayForm";
import Critics from "./pages/Critics";

import { AnimatePresence } from "framer-motion";
import SendComponent from "./components/SendComponent";

function App() {
  return (
    <AnimatePresence>
      <Root>
        <Main></Main>
        <SurvayForm></SurvayForm>
        <Critics></Critics>
        <SendComponent></SendComponent>
      </Root>
    </AnimatePresence>
  );
}

export default App;
