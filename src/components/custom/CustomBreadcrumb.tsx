
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb'
import { SlashIcon } from 'lucide-react'
import { Link } from 'react-router'

interface Breadcrumb{
    label:string;
    to:string;
}
interface Props{
    currentPage:string;
    breadcrumbs?:Breadcrumb[];

}
export const CustomBreadcrumb = ({currentPage,breadcrumbs=[]}:Props) => {
  return (
        <Breadcrumb className='my-5'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Inicio</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                

                {
                    breadcrumbs.map(crud=>(
                        <div className='flext items-center'>
                                <BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        <SlashIcon />
                                    </BreadcrumbSeparator>
                                    
                                    <BreadcrumbLink asChild>
                                        <Link to={crud.to}>{crud.label}</Link>
                                    </BreadcrumbLink>
                                   
                                </BreadcrumbItem>

                        </div>
                    ))
                }
                 <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                
                <BreadcrumbItem>
                    <BreadcrumbLink className='text-black'>{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
               
                
            </BreadcrumbList>
        </Breadcrumb>
  )
}
