import SoundBoardGrid from "./components/SoundBoardGrid";
function App() {
  const mockSounds = JSON.parse(localStorage.getItem("sounds"));
  return <SoundBoardGrid sounds={mockSounds} />;
}

export default App;
