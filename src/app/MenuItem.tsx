import Link from 'next/link'

import { IMenuItem } from './menu.interface'
import './globals.css'
export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link id='individ'
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
			>
				<item.icon 
				className='Check'/>
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
