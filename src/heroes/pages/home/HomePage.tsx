import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumb"
import { getHeroesByPageAction } from "@/heroes/actions/heroes-by-page.action"


export const  HomePage=()=> {

  const [searchParams,setSearchParams]=useSearchParams("")
  
  const activeTab=searchParams.get('tab') ?? 'all'
  const page=searchParams.get('page') ?? '1'
  const limit=searchParams.get('limit') ?? '6'

  const selectedTab=useMemo(()=>{
      const validTabs=['all' ,'favorites','heroes','villains']
      return validTabs.includes(activeTab) ? activeTab :'all'
  },[activeTab])

 

  
  const {data:heroesResponse}=useQuery({
    queryKey:['heroes'],
    queryFn:()=>getHeroesByPageAction(+page,+limit),
    staleTime:1000*60*5 //5 minutos
  })
 
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra super Héroes y Villanos" 
        
        />
        <CustomBreadcrumbs currentPage="Super Heroes"/>

        {/* Stats Dashboard */}
        <HeroStats/>
        

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={()=>
                setSearchParams((prev)=>{
                prev.set('tab','all')
                return prev
               })
            }
            >
              All Characters (16)</TabsTrigger>
            <TabsTrigger value="all" onClick={()=>
                setSearchParams((prev)=>{
                prev.set('tab','favorites')
                return prev
               })
            }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="all" onClick={()=>
                setSearchParams((prev)=>{
                prev.set('tab','heroes')
                return prev
               })
            }
            
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="all" onClick={()=>
                setSearchParams((prev)=>{
                prev.set('tab','villains')
                return prev
              })
            }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
             <HeroGrid heroes={heroesResponse?.heroes ?? []  }/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
             <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar Todos los Heroes */}
            <h1>Héroes!!!</h1>
             <HeroGrid heroes={[]}/> 
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos!!!</h1>
             <HeroGrid heroes={[]}/>
          </TabsContent>
        </Tabs> 

        

        
       

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
      </>
    </>
  )
}


