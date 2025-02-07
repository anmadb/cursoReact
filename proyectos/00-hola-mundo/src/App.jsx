import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './assets/twFollowCard';

export function App (){
    
    const [name, setName] = useState('midudev');

    console.log('name', name);  

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                Miguel Angel Durand
            </TwitterFollowCard>

            <TwitterFollowCard userName="zxvgxl" >
            zxvgxl
            </TwitterFollowCard>

            <TwitterFollowCard userName="juanmadb_">
                Juanma
            </TwitterFollowCard>

            <button onClick={() =>setName('Juanma')}>
                Cambio nombre
            </button>

        </section>
    );
}