import { GlobalStyle } from './styles/global'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query' //
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//https://regres.in/api/users/1?delay=1

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export function App (){
  const [ currentUserId, setcurrentUserId ] = useState(1)
  const { data, isError, isLoading, } = useQuery(
    ['users', currentUserId], 
    () => getUser(currentUserId),
    {
      staleTime:Infinity
    }
    )
 
  
  async function getUser(id: number) {
    const request = await fetch(`https://reqres.in/api/users/${id}?delay=1`)
    const response = await request.json()
    
    return response.data as User
  }

  if(!data || isLoading){
    return (
      <>
          <GlobalStyle />
        <section>
          <SkeletonTheme baseColor="#202020" highlightColor="#000">
          <Skeleton circle={true} width={100} height={100} />
            <p>
              <Skeleton height={10} width={80}/>
              
            </p>
            <p>
            <Skeleton height={10} width={150}/>
            </p>
                
                
            <div className="skeleton-container-buttons">
              <Skeleton width={100} height={40} />
              <Skeleton width={100} height={40} />
            </div>

          </SkeletonTheme>
      </section>
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      <section>
        <img src={data.avatar} />
        <p> 
          {`${data.first_name} ${data.last_name}`}  
        </p>
        <p>Email: {data.email}</p>
        <div>
          <button disabled={currentUserId === 1} onClick={() => setcurrentUserId((currentId) => currentId - 1 )}>Prev</button>
          <button onClick={() => setcurrentUserId((currentId) => currentId + 1 )}>Next</button>
        </div>

      </section>

    </>
  )
}

