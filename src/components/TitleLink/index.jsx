const TitleLink = ({ isHighLight, title, link }) => {
    
    if (!link) {
            return <div className={`text-primaryAccent ${isHighLight ?"text-primaryTitle":""}`}></div>
    }
    return(
        
        <div className={`text-primaryAccent ${isHighLight ?"text-primaryTitle":""}`}>
            <a href={link} target="_blank">
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isMouseEnter ['ex1'] ? "translate-x-1 -translate-y-1":""}`} icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink;