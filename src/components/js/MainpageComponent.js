import React, {useState, useEffect} from 'react'
import styles from "../css/MainpageComponent.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import MainpageCard from "./MainpageCard.js"
import ListComponent from './ListComponent.js'
import useFetch from './useFetch.js'
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'

function MainpageComponent() {

  const { error, data:lists,isPending } = useFetch("http://localhost:8000/list");
  const { errormain, data:maincards,isPendingmain} = useFetch("http://localhost:8000/mainCards")
  const [displayList, setList] = useState([]);
  const isActive = (path) => window.location.pathname === path;

  function getSongs(){
      setList(maincards.filter((card) => card.type =="song"))
  }
  function getAll(){
      setList(maincards)
  }
  function getPodcasts(){
      setList(maincards.filter((card) => card.type =="podcast"))
  }
  useEffect(() => {
    if (maincards) {
      // console.log("Maincards loaded:", maincards);
      getAll();
    }
  }, [maincards]);
  
  useEffect(() => {
    // console.log("Display list updated:", displayList);
  }, [displayList]);
  
  

  return (
    <div id={containerstyle.container} className={styles.gradient} >
        <div id={styles.buttonscontainer}>
            <Link to="/">
            <button className={isActive("/") ? styles.buttonsheadselected : styles.buttonshead} onClick={getAll}>All</button>
            </Link>
            <Link to="/list=songs">
            <button className={isActive("/list=songs") ? styles.buttonsheadselected : styles.buttonshead} onClick={getSongs}>Music</button>
            </Link>
            <Link to="/list=podcasts">
            <button className={isActive("/list=podcasts") ? styles.buttonsheadselected : styles.buttonshead} onClick={getPodcasts}>Podcasts</button>
            </Link>
        </div>
        <div id={styles.playlists}>
        {errormain && <div style={{color: "red",fontSize:30,marginTop:50}}>{errormain }</div>}
        {isPendingmain && <div><p style={{color: "white",fontSize:50}}> Loading...</p></div> }
        {displayList && displayList.map((card) =>(
              <MainpageCard card={card} key={card.id}/>
          ))}
        </div>
        <div id={styles.listsdiv}>
          {error && <div style={{color: "red",fontSize:30,marginTop:50}}>{error}</div>}
          {isPending && <div><p style={{color: "white",fontSize:50}}> Loading...</p></div> }
          {lists && lists.map((list) => (
            <ListComponent key={list.id} list={list}/>
          ))}
        </div>
    </div>
  )
}

export default MainpageComponent