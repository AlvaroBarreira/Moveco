import React from 'react'
import { ItemFooter } from '../ItemFooter/ItemFooter'

interface PropsItemMap {
	array: PropsItem[]
}

type PropsItem = {
	sentence: string,
	link: string
}

export const ItemMap = ({ array }: PropsItemMap) => {
	return (
		<>
			{
				array.map((item: PropsItem) => {
					return <ItemFooter key={item.sentence} item={item} />
				})
			}
		</>
	)
}


