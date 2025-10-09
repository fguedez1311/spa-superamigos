import { getHeroesByPageAction } from '../actions/heroes-by-page.action'
import { useQuery } from '@tanstack/react-query'

export const usePaginateHero = (page:number,limit:number) => {
  return  useQuery({
                    queryKey:['heroes',{page,limit}],
                    queryFn:()=>getHeroesByPageAction(page,limit),
                    staleTime:1000*60*5 //5 minutos
                })
  
}
