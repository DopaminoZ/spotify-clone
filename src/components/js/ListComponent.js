import React from 'react';
import styles from "../css/ListComponent.module.css";
import ListCard from "./ListCard";

function ListComponent({ list }) {
  return (
    <div id={styles.container}>
      <div id={styles.uppercontainer}>
        <h1 id={styles.madefor}>{list.title}</h1>
        <button id={styles.showall}>Show all</button>
      </div>
      <div id={styles.innercontainer}>
        {list.albums.map((album) => (
          <ListCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default ListComponent;
