import { toJpeg } from 'html-to-image'

const capture = (options = {}) => {
  // wait to make sure images and other assets loaded.
  const imgLoaded = () => {
    const node = document.getElementById('Card')
    counter += 1

    if (counter === document.images.length) { // all loaded
      toJpeg(node, options) // do the screen capture
        .then(function (dataUrl) {
          const img = new Image()

          img.src = dataUrl
          img.style.width = '100%'
          img.style.maxWidth = '600px'
          img.id = 'Generated'

          if (window.innerWidth > 600) img.style.marginLeft = `${(window.innerWidth - 600) / 2}px`

          // hide DOM element and place captured image on page
          node.style.display = 'none'
          node.parentElement.appendChild(img)
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }
  }

  // watch images
  let counter = 0

  // images are either already loaded, or, listen to when they will be
  for (const img of document.images) {
    if (img.complete) {
      imgLoaded()
    } else {
      img.addEventListener('load', (e) => {
        imgLoaded()
      })
    }
  }
}

export default capture
