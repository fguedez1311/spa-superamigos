import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"


export const  HomePage=()=> {
  const [activeTab, setActiveTab] = useState<'all' |'favorites'|'heroes'|'villains'>('all')
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra super Héroes y Villanos" 
        
        />
        <CustomBreadcrumb currentPage="Super Heroes"/>

        {/* Stats Dashboard */}
        <HeroStats/>

        


        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={()=>setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={()=>setActiveTab('favorites')}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={()=>setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={()=>setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
             <HeroGrid/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
             <HeroGrid/>
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar Todos los Heroes */}
            <h1>Héroes!!!</h1>
             <HeroGrid/>
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos!!!</h1>
             <HeroGrid/>
          </TabsContent>
        </Tabs>

        

        
       

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
      </>
    </>
  )
}


