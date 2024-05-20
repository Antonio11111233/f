import Link from 'next/link'

import { IMenuItem } from './menu.interface'
import './style_button_plan.css'
export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className='cta flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors rounded-lg'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
