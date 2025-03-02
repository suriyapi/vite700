const Picture = ({picture, title}) => {
    return (
        <div>
            <img src={picture} alt={title} className='w-5/6 rounded-md' />
        </div>
    )
}

export default Picture;