import {ChevronRight} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: ChevronRight,
		link: DASHBOARD_PAGES.HOME,
		name: 'Статистика'
	},
	{
		icon: ChevronRight,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Задачи'
	},
	{
		icon: ChevronRight,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Таймер'
	},
	{
		icon: ChevronRight,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Расписание'
	},
	{
		icon: ChevronRight,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Настройки'
	}
]
