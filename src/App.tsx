import SoundBoardGrid from "./components/SoundBoardGrid";
function App() {
  const sounds = JSON.parse(localStorage.getItem("sounds"));
  return <SoundBoardGrid sounds={sounds} />;
}

export default App;
