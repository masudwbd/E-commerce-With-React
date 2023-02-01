import { Component } from "react";
import { connect } from "react-redux";
import { fetchFeatured } from "../../../../../redux/actionCreator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const mapStateToProps = state => {
    return{
        featured : state.myFeatured.featured,
        isLoading : state.myFeatured.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchFeatured : () => dispatch(fetchFeatured())
    }
}




class Popular extends Component{
    constructor(props){
        super(props)
        this.state = {
            active : false
        }
    }

    toggleActive = () => {
        this.setState({active: true} )
    }
    toggleDeActive = () => {
        this.setState( {active: false} )
    }


    componentDidMount(){
        this.props.fetchFeatured()
    }
    render(){

        const style = {
            'display': this.state.active ? 'block' : 'none',
            'transform': this.state.active ? '180deg' : '180deg',
            'tramsition': this.state.active ? '3s' : '3s',
        }
        
        

        const FeaturedGrid = this.props.featured.map(item => {
            return( 
                <div className="product-card"  onMouseEnter={this.toggleActive} onMouseLeave={this.toggleDeActive}>
                    <div className="product_image flex justify-center" style={{backgroundColor:'#F5F5F5'}}>
                        <img style={{height:250}} src={"http://127.0.0.1:8000/"+ item.thumbnail}/>
                    </div>
                    <div className="flex mt-5 justify-between">
                        <div className="flex-1">
                            <p className="mb-3 text-black-600">{item.name}</p>
                            <p className="line-through">{item.selling_price} - {item.discount_price}</p>
                            <p></p>
                        </div>
                        <div className="flex-1">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                    <div className="product-icons-container" style={style}>
                        <a href=""><FontAwesomeIcon className="product-icons" icon={faHeart} /></a>
                        <a href=""><FontAwesomeIcon className="product-icons" icon={faEye} /></a>
                    </div>
                </div>
            )
        })

        return(
            <div className="grid grid-cols-5 gap-5" style={{marginTop:50}}>
                {FeaturedGrid}
            </div>

        )

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Popular)