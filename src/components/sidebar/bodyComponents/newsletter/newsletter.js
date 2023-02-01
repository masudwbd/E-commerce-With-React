import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export function Newsletter(){
    return(
        <div className="newsletter pt-14 bg-white pb-14">
            <div className="grid grid-cols-1 justify-center">
                <div className="mx-auto">
                    <h1 className="text-5xl">Subscribe</h1>
                    <p className="mt-6 font-light text-gray-600 dark:text-gray-400 px-16" style={{fontSize:22}}>Subscribe to our newsletter to receive news on update</p>
                    <Input className="w-20" variant="static" placeholder="Your Email Address" />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-5">Subscribe</button>
                </div>
            </div>
        </div>
    )
}