import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../css/Playlist.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import hanz from "../../assets/images/elbasha.png"
import playbutton from "../../assets/images/play.png"
import clock from "../../assets/images/clock.png"
import PlaylistSong from './PlaylistSong'
import FooterContent from './FooterContent'
import useFetch from './useFetch.js'
function Playlist( {widthz}) {
  const { playlistID } = useParams(); // Extract the playlist ID from the URL
  const { error, data, isPending } = useFetch(`http://localhost:4000/api/spotify/playlist/${playlistID}`);
  const [duration, setDuration] = useState(0); // Initialize duration state
  function msToTime(msString) {
    const ms = parseInt(msString, 10); // Parse the string into an integer
    return ms;
  }
  function msToReadable(ms) {
    if (ms >= 3600000) { // 1 hour = 3,600,000 ms
      const hours = Math.floor(ms / 3600000);
      return `${hours} hr${hours > 1 ? 's' : ''}`;
    } else if (ms >= 60000) { // 1 minute = 60,000 ms
      const minutes = Math.floor(ms / 60000);
      return `${minutes} min${minutes > 1 ? 's' : ''}`;
    } else if (ms >= 1000) { // 1 second = 1,000 ms
      const seconds = Math.floor(ms / 1000);
      return `${seconds} sec${seconds > 1 ? 's' : ''}`;
    } else {
      return `${ms} ms`; // If the duration is less than a second, return in milliseconds
    }
  }
  useEffect(() =>{
    if (data) {
      // Calculate total duration of the playlist
      const totalDuration = data.tracks.items.reduce((acc, song) => acc + song.track.duration_ms, 0);
      setDuration(msToTime(totalDuration)); // Set the total duration in ms
    }
  },[data])
  return (
    <div id={containerstyle.container} className={styles.gradient} style={{width: widthz}}>
      {data && <div>
        <div id={styles.uppercontainer}>
        <img id={styles.playlistimg} src={data.images[0].url}></img>
        <div id={styles.playlistdetails}>
            <p id={styles.playlisttype}>Playlist</p>
            <h1 id={styles.playlisttitle} style={{fontSize: widthz == '53.2vw' ? 48: 96, marginTop: widthz == '53.2vw' ? 10: -14}}>{data.name}</h1>
            <p id={styles.playlistdesc} style={{marginTop: widthz == '53.2vw' ? 0: -69}}>{data.description}</p>
            <div id={styles.ownerdiv}>
            <img id={styles.ownerimage} src={data.images[0].url}></img> <p id={styles.ownerdetails} className={styles.ownerlink}>{data.owner.display_name}</p><p id={styles.ownerdetails}> • {data.followers.total} saves • {data.tracks.total} songs, about {msToReadable(duration)}</p>
            </div>
        </div>
        </div>
        <div id={styles.lowercontainer} >
        <div id={styles.midcontainer} >
          <div id={styles.midcontain}>
          <button id={styles.playbutton} className ={styles.reactbutton}><img src={playbutton}/></button>
          <div id={styles.addbutton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#b3b3b3" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></div>
          </div>
          <svg id={styles.more} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id={styles.morecolor} fill="#9a9996" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
        </div>
        <div id={styles.playlistdiv} >
          <div id={styles.playlistdata}>
          <p id={styles.hash}>#</p><p id={styles.title}>Title</p><p id={styles.album} style={{marginLeft: widthz == '53.2vw' ? 345: 540}}>Album</p><p id={styles.date} style={{marginLeft: widthz == '53.2vw' ? 210: 344}}>Date added</p><img style={{marginLeft: widthz == '53.2vw' ? 190: 280}} src={clock} />
          </div>
          <div id={styles.divider}></div>
          {data &&
          <div id={styles.songsList}>
          {data.tracks.items.map((song,index) => (
          <PlaylistSong key={index} song={song} wid={widthz} index={index}/>
          ))}
          </div>}
          
        </div>
        </div>
        <div id={styles.backgroundco}>
        <FooterContent wid={widthz}/>
        </div></div>}
    </div>
  )
}

export default Playlist