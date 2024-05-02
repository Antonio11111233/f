import Image from "next/image";
import Link from 'next/link'
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";
import './globals.scss'
import Particle from "./components/Particle";

export default function Ho() {
    return (
        <aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
        <div>
        <Link
          href='/'
          className='flex items-center gap-2.5 p-layout border-b border-b-border'
        >
          <span className='text-2xl font-bold relative'>
            План
            <span className='absolute -top-2 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
              v4.34.10
            </span>
          </span>
        </Link>
    
        <div className='p-3 relative'>
    
          {MENU.map(item => (
            <MenuItem
              item={item}
              key={item.link}
            />
          ))}
        </div>
      </div>
      </aside>
    )
}
