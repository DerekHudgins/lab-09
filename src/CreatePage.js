import React, { Component } from 'react'
import { createMusic } from './fetch-utils.js'

export default class CreatePage extends Component {
    state = {
        name: '',
        description: '',
        category_id: 1,
        price: 1,

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

    handleSubmit = async e => {
        e.preventDefault();

        await createMusic({
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.category_id,
            price: this.state.price
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Create new band</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Description
                        <input onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        category
                        <select onChange={this.handleCategoryChange}>
                        <option value='1'>First Wave Emo</option>
                        <option value='2'>Indi Rock</option>
                        <option value='3'>Ska</option>
                        <option value='4'>Ska/Punk</option>
                        <option value='5'>Jazz</option>
                        <option value='6'>BeachGoth</option>
                        <option value='7'>New Wave</option>
                        <option value='9'>Pysch/Rock</option>
                        </select>
                    </label>
                    <button>create Band</button>
                </form>  
            </div>
        )
    }
}
