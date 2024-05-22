import axios from 'axios';
const imageUpload = async image => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    );
    return data.data.display_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image. Please try again later.');
  }
};
export default imageUpload