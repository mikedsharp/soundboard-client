import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { io } from "socket.io-client";

// set up socket.io connection
const socket = io(import.meta.env.VITE_SOUND_SERVER_ADDRESS);

socket.on("get-sounds", (sounds) => {
  localStorage.setItem("sounds", JSON.stringify(sounds));
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
