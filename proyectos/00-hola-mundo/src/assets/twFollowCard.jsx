export function TwitterFollowCard ( {formattedUserName, userName, name, isFollowing }) {

    console.log(isFollowing)

    const imageSrc = `https://unavatar.io/${userName}`

    return (
        <article className="tw-followcard">
            <header className='tw-followcard-header'>
                <img 
                className='tw-followcard-avatar'
                src={imageSrc} 
                alt="El avatar de midudev" />
                <div className='tw-followcard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followcard-infoUsername'>{formattedUserName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followcard-button'>
                    Seguir
                </button>
            </aside>
        </article>  
    )
}