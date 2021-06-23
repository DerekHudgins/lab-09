import React, { Component } from 'react'
import { getAllMusic } from './fetch-utils.js'
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        musicList: []
    }

    componentDidMount = async () => {
        const music = await getAllMusic();
        this.setState({ musicList: music})
    }
    render() {
        return (
            <div className="musicList">
                {

                    this.state.musicList.map(music => <Link to={`/music/${music.id}`}>
                    <div className="music">
                        <p>{music.name}</p>
                        <p>{music.description}</p>
                        <p>{music.category_id}</p>
                    </div>
                    </Link>)
                }
            </div>
        
        )
    }
}
