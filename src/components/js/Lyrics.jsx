import styles from "../css/Lyrics.module.css";

const Lyrics = ({ lyricss }) => {
  return (
    <div id={styles.lyricsdiv}>
      {lyricss.map((text, index) => (
        <p key={index} className={styles.lyric}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Lyrics;
