import Featured  from "./featuredproducts/featuredPorducts"
import Popular  from "./featuredproducts/popularProducts"
export function DailyDeals(){
    return(
        <div className="daily-deals bg-white pt-10" style={{marginTop:'100px'}}>
            <div className="grid grid-cols-1">
                <div className=" mx-auto">
                    <p className="daily_deals_header">Daily Deals!</p>
                    <div className="product-navbar" style={{marginTop:30}}>
                        <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                            <a href="#" class="text-2xl">Featured</a>
                            </li>
                            <li>
                            <a href="#" class="text-2xl" >Popular</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="products p-5" style={{marginTop:20}}>
                <Featured />
                {/* <Popular /> */}
                <a href="" className="text-center underline">View More Product</a>
            </div>
        </div>
    )
}