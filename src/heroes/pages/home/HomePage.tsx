import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumb"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginateHero } from "@/heroes/hooks/usePaginateHero"


export const  HomePage=()=> {
  
  const [searchParams,setSearchParams]=useSearchParams("")
  
  const activeTab=searchParams.get('tab') ?? 'all'
  const page=searchParams.get('page') ?? '1'
  const limit=searchParams.get('limit') ?? '6'
  const category=searchParams.get('category') ?? 'all'

  const selectedTab=useMemo(()=>{
      const validTabs=['all' ,'favorites','heroes','villains']
      return validTabs.includes(activeTab) ? activeTab :'all'
  },[activeTab])
  

 

  
  

  const {data:heroesResponse}=usePaginateHero(+page,+limit,category)

  

  const {data:summary}=useHeroSummary()
 
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
                prev.set('category','all')
                prev.set('page','1')
                return prev
               })
            }
            >
              All Characters ({summary?.totalHeroes})</TabsTrigger>
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
                prev.set('category','hero')
                prev.set('page','1')
                return prev
               })
            }
            
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger value="all" onClick={()=>
                setSearchParams((prev)=>{
                prev.set('tab','villains')
                prev.set('category','villain')
                prev.set('page','1')
                return prev
              })
            }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
             <HeroGrid heroes={heroesResponse?.heroes ?? []  }/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
              {/* <HeroGrid heroes={heroesResponse?.heroes ?? []  }/> */}
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar Todos los Heroes */}
            <h1>Héroes!!!</h1>
              <HeroGrid heroes={heroesResponse?.heroes ?? []  }/>
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos!!!</h1>
             <HeroGrid heroes={heroesResponse?.heroes ?? []  }/>
          </TabsContent>
        </Tabs> 

        

        
       

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1 }/>
      </>
    </>
  )
}


