'use client'

import { usePathname } from 'next/navigation';
import useWindowSize from '../../hooks/WindowsSize';
import AsideMenu from './AsideMenu';


export default function Menu() {

    const pathname = usePathname();

    const { width } = useWindowSize();

    
    const FixedMenu = () => {
        return (width > 360 && <AsideMenu pathname={pathname} />)
    }

    return <FixedMenu />
}
