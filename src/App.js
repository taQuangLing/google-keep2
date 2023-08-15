import Main from "./components/Main"
import { Router } from "@reach/router";
function App() {
  return (
    <>
        <Router>
            <Main path="/" />
        </Router>
    </>
  );
}

export default App;
