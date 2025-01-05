import React, { useEffect } from 'react';
import styles from "../css/ListComponent.module.css";
import ListCard from "./ListCard";

function ListComponent({ list, widt }) {
  useEffect(() => {
  })
  console.log(list.length)
  return (
    <div id={styles.container}>
      <div id={styles.uppercontainer}>
        <h1 id={styles.madefor}>x</h1>
        <button id={styles.showall}>Show all</button>
      </div>
      <div id={styles.innercontainer} style={{ gap: widt === '53.2vw' ? 0 : 8}}>
        {list.map((playlist) => (
          <ListCard  playlist={playlist} wid={widt}/>
        ))}
      </div>
    </div>
  );
}

export default ListComponent;
