import {ChevronRight} from 'lucide-react'
import {Check} from 'lucide-react'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: Check,
		link: DASHBOARD_PAGES.HOME,
		name: 'Индивидуальная'
	},

	
]
