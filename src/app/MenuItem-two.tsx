import Link from 'next/link'

import { IMenuItemTwo } from './menu.interface-two'

export function MenuItemTwo({ item }: { item: IMenuItemTwo }) {
	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
			>
				<item.icon 
				className='OctagonX'/>
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
