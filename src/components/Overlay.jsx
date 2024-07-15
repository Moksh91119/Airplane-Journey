import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Hello!!!
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <h2 className="intro__scroll"> Let's see what we got here </h2>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Click to Explore 🚀
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">
          Thank you for visiting!
        </p>
      </div>
    </div>
  );
};
