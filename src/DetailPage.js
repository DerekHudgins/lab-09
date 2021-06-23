import React, { Component } from 'react'
import { getAllCategories, getOneMusic, updateMusic } from './fetch-utils';

export default class DetailPage extends Component {
    state = {
        name: ' ',
        description: ' ',
        categories: [],
        category_id: 1,
        price: 1,

    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const music = await getOneMusic(id);
        const categories = await getAllCategories();
        this.setState({
            name: music.name,
            description: music.description,
            category_id: music.category_id,
            categories: categories,
            id: music.id,
            price: music.price,
        })
        console.log(music.name);
    }
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }
    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await updateMusic(this.props.match.params.id, {
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.category_id,
            price: this.state.price
        });

        this.props.history.push('/')
    }

    render() {
        console.log(this.state.categories)
        return (
            <div>
                <h2>Update Bands!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Description
                        <input
                        value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        price
                        <input
                        value={this.state.price} type='number' onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            {this.state.categories.map(category => 
                                <option
                                    selected={category.id === this.state.category_id} 
                                    value={category.id}>
                                    {category.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Update!</button>
                </form>
            </div>
        )
    }
}
