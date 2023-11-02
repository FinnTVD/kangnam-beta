export default function myImageLoader({ src, width, quality }) {
  const url = src.replace('https://kangnam-okhub.s3.ap-southeast-1.amazonaws.com', 'https://d1zo9jo0ujl2il.cloudfront.net')
  return `${url}?w=${width}&q=${quality || 75}`
}