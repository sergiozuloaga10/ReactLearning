import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    return(
        <section className='App'>
        <TwitterFollowCard initialIsFollowing={true} userName='midudev'>
         Miguel Angel Duran    
        </TwitterFollowCard>
        
        <TwitterFollowCard initialIsFollowing={false} userName='pheralb' >
         Pablo Hernandez
        </TwitterFollowCard>

        <TwitterFollowCard initialIsFollowing={true} userName='elonmusk' >
         Elon Musk
        </TwitterFollowCard>

        <TwitterFollowCard initialIsFollowing={false} userName='vxnder'>
         Vanderhart  
        </TwitterFollowCard>
        </section>
    )
}