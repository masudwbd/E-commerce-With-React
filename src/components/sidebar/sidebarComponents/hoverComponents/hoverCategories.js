import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../../redux/actionCreator";

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


class HoverCategories extends Component{
    componentDidMount(){
        this.props.fetchCategories()
    }
    render(){
        const categoySection = this.props.categories.map(category => {
        return(
                <li className="my-2 w-100" style={{listStyleType:'none'}}>
                    <a href="">
                    {category.category_name}
                    </a>
                </li>
            )
            }
        )

        return(
            <div className='categories'>
               <h1 style={{fontSize:18, fontWeight:'bold'}}>Categories</h1>
               {categoySection}
            </div>
                        

            )

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HoverCategories)