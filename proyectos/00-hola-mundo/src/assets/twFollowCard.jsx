
import { useState } from "react" 

export function TwitterFollowCard ( {children, userName = 'unknow' }) {


    const [isFollowing, setIsFollowing] = useState(false)



    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followcard-button is-following'
    : 'tw-followcard-button'

    const handleClick  = () => {
        setIsFollowing(!isFollowing)
    }

    return ( 
        <article className="tw-followcard">
            <header className='tw-followcard-header'>
                <img 
                className='tw-followcard-avatar'
                src={`https://unavatar.io/${userName}`} 
                alt="El avatar de midudev" />
                <div className='tw-followcard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followcard-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>  
    )
}