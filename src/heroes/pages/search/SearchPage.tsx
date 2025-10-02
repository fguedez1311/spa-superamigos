import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"


export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
          title="Búsqueda de SuperHeroes"
          description="Descubre, explora y administra super Héroes y Villanos" 
              
      />
      <CustomBreadcrumb 
      
        currentPage="Buscador de Heroes"
        breadcrumbs={[
            {label:'Home1',to:'/'},
            {label:'Home2',to:'/'},
            {label:'Home3',to:'/'}



        ]}
       />
      {/* Stats Dashboard */}
      <HeroStats/>
      {/*Filter and search */}
      <SearchControls/>
    </>
  )
}

export default SearchPage