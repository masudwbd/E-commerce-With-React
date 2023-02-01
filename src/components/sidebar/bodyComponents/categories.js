import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../redux/actionCreator";
import man from './../../../assets/images/man.png'

const mapStateToProps = state => {
    return{
        categories : state.myCategories.categories,
        isLoading : state.myCategories.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCategories : () => dispatch(fetchCategories())
    }
}

const src = `../../../../../public`;

class Categories extends Component{
    componentDidMount(){
        this.props.fetchCategories()
    }
    render(){
        const CategorySection = this.props.categories.map(category=> {
            return(
                <div className="bg-white">
                    <div className="grid grid-cols-2 gap-5" style={{height:200,overflow: 'hidden'}}>
                        <div className="category_content pt-16 pl-5">
                            <p style={{fontSize:22}}>{category.category_name}</p>
                            <p>Starting at $99.00</p>
                        </div>
                        <div className="category_image">
                            <img className="category_image" src={"http://127.0.0.1:8000/"+ category.icon}></img>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 mt-16 ">
            {CategorySection}
            </div>

        )
    }
 }


 export default connect(mapStateToProps,mapDispatchToProps)(Categories)