import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/Layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

const SearchPage=lazy(()=>import('@/heroes/pages/search/SearchPage'))

export const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<HeroesLayout />,
        children:[
             {
                index:true,
                element:<HomePage/>
             },
            {
                path:'heroes/1',
                element:<HeroPage/>
            },
            {
                path:'search',
                element:<SearchPage/>
            },
        
        ],
    },
    {
        path:'/admin',
        element:<AdminLayout />,
        children:[
            {
                path:'',
                element:<AdminPage/>
            },
        ]
    }
    
])