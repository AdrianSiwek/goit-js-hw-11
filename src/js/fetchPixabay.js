import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios').default;

export async function fetchPixabay(valueSearch, numberPage, perPage) {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      method: 'get',
      params: {
        key: '32876779-a95b33eb506c24842b74d871c',
        q: valueSearch,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: numberPage,
      },
    });

    if (response.data.totalHits === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    if (response.data.totalHits > 0 && numberPage === 1)
      Notify.success(`Hooray! We found ${response.data.totalHits} images.`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}