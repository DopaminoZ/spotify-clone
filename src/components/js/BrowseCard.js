import React, {useState, useEffect} from 'react'
import styles from '../css/BrowseCard.module.css'
function BrowseCard({width}) {
  const [currentWidth,setCurrentWidth] = useState(298);
  const [currentHeight,setCurrentHeight] = useState(191);
  const checkWidth = () => {
    if(width == '53.2vw'){
      setCurrentWidth(194);
    }
    else{
      setCurrentWidth(298);
    }
  };
  const checkHeight = () => {
    if(width == '53.2vw'){
      setCurrentHeight(130);
    }
    else{
      setCurrentHeight(191);
    }
  };
  useEffect(() => {
    checkWidth();
    checkHeight();
    console.log(width);
  },[width]);
  return (
    <div id={styles.container} style={{backgroundColor: "red", width: `${currentWidth}px`,height: `${currentHeight}px`}}>
        <h1 id={styles.cardTitle}>Testing</h1>
    </div>
  )
}

export default BrowseCard