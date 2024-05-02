import {ChevronRight, OctagonX} from 'lucide-react'
import {Check} from 'lucide-react'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItemTwo } from './menu.interface-two'

export const MENUTWO: IMenuItemTwo[] = [
	{
		icon: OctagonX,
		link: DASHBOARD_PAGES.HOME,
		name: 'Команда'
	},

	
]
