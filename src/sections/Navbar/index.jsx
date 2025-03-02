import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => { 
    return (
        <div className='flex flex-col gap-4'>
                    <div className='text-left'>
                      <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                      About
                    </div>
                    <div className='text-left'>Experience</div>
                    <div className='text-left'>Project</div>
                    <div className='text-left'>Article</div>
                  </div>
    )
}

export default Navbar;