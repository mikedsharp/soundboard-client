import { StyledSoundTile } from "./styles/SoundTile";

function tileClicked(tile: any) {
  console.log("tile was clicked!", tile);
}

function SoundTile(props) {
  return (
    <StyledSoundTile
      onClick={() => tileClicked(props.sound)}
      color={props.sound.color}
    >
      <span>{props.sound.label}</span>
    </StyledSoundTile>
  );
}

export default SoundTile;
