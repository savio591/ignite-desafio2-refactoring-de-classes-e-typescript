import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}
