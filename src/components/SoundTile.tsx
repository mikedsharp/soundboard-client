import { StyledSoundTile } from "./styles/SoundTile";

function SoundTile(props) {
  return (
    <StyledSoundTile
      onClick={() => props.onTileClick(props.sound)}
      color={props.sound.color}
    >
      <span>{props.sound.label}</span>
    </StyledSoundTile>
  );
}

export default SoundTile;
