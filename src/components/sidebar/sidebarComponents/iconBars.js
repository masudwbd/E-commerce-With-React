import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export function IconBar(){
    return(
        <div className='mt-12'>
            <div className='flex justify-between items-center ml-16 mr-16'>
                <div className='sidebar_icon'>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className='sidebar_icon'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='sidebar_icon'>
                    <FontAwesomeIcon icon={faShuffle} style={{position:'relative'}} />
                    <span class="icon-number" style={{position:'absolute'}}>0</span>
                </div>
                <div className='sidebar_icon'>
                    <FontAwesomeIcon icon={faHeart} />
                    <span class="icon-number" style={{position:'absolute'}}>0</span>
                </div>
                <div className='sidebar_icon'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span class="icon-number" style={{position:'absolute'}}>0</span>
                </div>
            </div>

        </div>
    )
}