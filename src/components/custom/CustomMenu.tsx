import  { NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'

import  { Link } from 'react-router'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import { useLocation } from 'react-router'
import { cn } from '@/lib/utils'

export const CustomMenu = () => {
  const {pathname}=useLocation()
  const isActive=(path:string)=>{
        return pathname===path
  }
  return (

    <NavigationMenu className='py-5'>
         <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(isActive('/') && 'bg-slate-200', 'p-2  rounded-md')}>
                    <Link to="/">Inicio</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Search */}
            <NavigationMenuItem>
                <NavigationMenuLink asChild  className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}>
                    <Link to="/search">Buscar Superhéroes</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>

         </NavigationMenuList>
    </NavigationMenu>

     
  )
}
