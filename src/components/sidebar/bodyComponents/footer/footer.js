import { Input } from "@material-tailwind/react";

export function Footer(){
    return(
        <div className="footer py-8"  style={{paddingTop:80,backgroundColor:'#F5F5F5'}}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h1 className="text-4xl">E-Commerce</h1>
                    <h1 className="text-1xl mt-4">© 2023 Masudwbd. <br/> All Rights Reserved</h1>
                </div>
                <div>   
                    <ul>
                        <li className="tex-1xl mb-2">About</li>
                        <li style={{color:'gray'}}>About us</li>
                        <li style={{color:'gray'}} className="my-1">Store location</li>
                        <li style={{color:'gray'}} className="my-1">Contact</li>
                        <li style={{color:'gray'}} className="my-1">Orders tracking</li>
                    </ul>
                </div>
                <div>   
                    <ul>
                        <li className="tex-1xl mb-2">About</li>
                        <li style={{color:'gray'}}>About us</li>
                        <li style={{color:'gray'}} className="my-1">Store location</li>
                        <li style={{color:'gray'}} className="my-1">Contact</li>
                        <li style={{color:'gray'}} className="my-1">Orders tracking</li>
                    </ul>
                </div>
                <div>   
                    <ul>
                        <li className="tex-1xl mb-2">About</li>
                        <li style={{color:'gray'}}>About us</li>
                        <li style={{color:'gray'}} className="my-1">Store location</li>
                        <li style={{color:'gray'}} className="my-1">Contact</li>
                        <li style={{color:'gray'}} className="my-1">Orders tracking</li>
                    </ul>
                </div>
                <div>   
                    <ul>
                        <li className="tex-1xl mb-2">Subscribe</li>
                        <p className="mt-6 font-light text-gray-600 dark:text-gray-400 px-16" >Get E-mail updates about our latest shop and special offers.</p>
                        <Input className="w-20" variant="static" placeholder="Your Email Address" />
                        <Input type="submit"  value="subscribe"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}