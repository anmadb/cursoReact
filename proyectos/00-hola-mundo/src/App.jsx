import './App.css';
import { TwitterFollowCard } from './assets/twFollowCard';

export function App (){
    const formattedUserName = (<span>@midudev</span>)

    return (
        <section className='App'>
        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowing 
        userName="midudev" 
        name= "Miguel Angel Durand" 
        />
        
        <TwitterFollowCard 
        formattedUserName={formattedUserName} 
        isFollowing 
        userName="zxvgxl" 
        name= "Zavegol" 
        />

        <TwitterFollowCard  
        formattedUserName={formattedUserName} 
        isFollowing={true} 
        userName="juanmadb_" 
        name= "Juanma" 
        />

        </section>
    );
}