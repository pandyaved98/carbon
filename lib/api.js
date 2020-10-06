import axios from 'axios'

import { fileToDataURL } from './util'

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || ''}/api`,
  headers: {
    Accept: 'application/json',
  },
})

const downloadThumbnailImage = img => {
  return client
    .get(img.url.replace('http://', 'https://'), { responseType: 'blob' })
    .then(res => res.data)
    .then(fileToDataURL)
    .then(dataURL => Object.assign(img, { dataURL }))
}

const unsplash = {
  download(id) {
    return client.get(`/unsplash/download/${id}`).then(res => res.data)
  },
  async random() {
    const imageUrls = await client.get('/unsplash/random')
    return Promise.all(imageUrls.data.map(downloadThumbnailImage))
  },
}

export default {
  unsplash,
  downloadThumbnailImage,
}
