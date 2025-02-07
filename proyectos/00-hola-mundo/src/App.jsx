import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './assets/twFollowCard';

export function App (){
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Durand
            </TwitterFollowCard>

            <TwitterFollowCard userName="zxvgxl" inicialIsFollowing={true}>
            zxvgxl
            </TwitterFollowCard>

            <TwitterFollowCard userName="juanmadb_">
                Juanma
            </TwitterFollowCard>

        </section>
    );
}