import React from 'react'
import styles from '../css/BrowseComponent.module.css'
import Card from './BrowseCard.js'
import useFetch from './useFetch.js'
function BrowseComponent( {widthz}) {
  const { error, data, isPending } = useFetch("http://localhost:4000/api/spotify/browse-categories");
  console.log(data)
  const limit = data?.categories?.limit;
  const cats = data?.categories?.items;
  console.log(cats)
  const colors = ["#db148b", "#016450", "#8401e7", "#158a08", "#1f3364", "#5f8108","#e8115c", "#e51e31", "#477d95", "#8c67ac"];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex]; 
  }
  const catsWithColors = cats?.map(cat => ({
    ...cat,
    color: getRandomColor(), 
  }));

  return (
    <div id={styles.container} style={{width: widthz}}>
        <h1 id={styles.browseTitle}>Browse all</h1>
        <div id={styles.cardsContainer}>
        {catsWithColors && catsWithColors.map((cat, index) => (
          <Card key={index} cat={cat} width={widthz} />
        ))}
        </div>
    </div>
  )
}

export default BrowseComponent