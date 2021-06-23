import request from 'superagent';

const URL = 'https://powerful-headland-27827.herokuapp.com'; 

export async function getAllMusic() {
    const data = await request.get(`${URL}/music`);
    return data.body;
}

export async function getOneMusic(id) {
    const { body } = await request.get(`${URL}/music/${id}`);
    return body;
}

export async function updateMusic(id, musicData) {
    const { body } = await request
        .put(`${URL}/music/${id}`)
        .send(musicData);
    return body;
}

export async function createMusic(musicData) {
    const { body } = await request
        .post(`${URL}/music/`)
        .send(musicData);
    return body;
}

export async function getAllCategories() {
    const { body } = await request.get(`${URL}/categories`);
    return body;
}

export async function deleteMusic(id) {
    const { body } = await request.delete(`${URL}/music/${id}`);
    return body;
} 