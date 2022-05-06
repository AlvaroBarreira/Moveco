import React from 'react'
import { Link  } from 'react-router-dom';
import './ItemFooter.css'


interface itemProps {
	item: {
		sentence: string,
		link: string
	}
}

export const ItemFooter = ({item}: itemProps) => {

    const { link } = item

  return (
    <Link key={item.sentence} to={link} >{item.sentence}</Link>  
  )
  
}

 