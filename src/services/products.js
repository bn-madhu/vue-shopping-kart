import axios from 'axios';

const photosAPI = "https://jsonplaceholder.typicode.com";

export async function fetchPhotoProducts() {
    try {
        const response = await axios.get(`${photosAPI}/photos`);
        return response?.data;
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
}

export async function fetchPhotosById(id) {
  try {
    const response = await axios.get(`${photosAPI}/photos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
}