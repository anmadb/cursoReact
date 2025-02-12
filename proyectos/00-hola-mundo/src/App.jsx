import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './assets/twFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durand',
        inicialIsFollowing: false
        
    },
    {
        userName: 'zxvgxl',
        name: 'zxvgxl',
        inicialIsFollowing: true
    },
    {
        userName: 'juanmadb_',
        name: 'Juanma',
        inicialIsFollowing: true
    },
    {
        userName: 'Peereira7',
        name: 'Pereira',
        inicialIsFollowing: true
    },
    {
        userName: 'sixtocristiani',
        name: 'Sixto',
        inicialIsFollowing: false
    },
    {
        userName: 'SandraCabeza',
        name: 'GX Leviathan',
        inicialIsFollowing: false
    },
    {
        userName: 'KRÜ Esports',
        name: 'KRUesports',
        inicialIsFollowing: true
    }
]

export function App (){
    return (
        <section className='App'>
            {   
            users.map(users=>{
                const {userName, name, inicialIsFollowing} = users
                return (
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    inicialIsFollowing={inicialIsFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
            }
        </section>
    );
}