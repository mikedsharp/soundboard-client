import SoundTile from "./SoundTile";
import { StyledSoundBoardGrid } from "./styles/SoundBoardGrid";

function SoundBoardGrid(props: { sounds: any[] }) {
  return (
    <StyledSoundBoardGrid>
      {props.sounds.map((sound) => {
        return <SoundTile sound={sound} />;
      })}
    </StyledSoundBoardGrid>
  );
}

export default SoundBoardGrid;
