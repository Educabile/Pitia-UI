const getFileInfo = path => path.split('/').pop()

const getFilePath = path =>
  path
    .split('/')
    .slice(0, -1)
    .join('/')

const getFileName = path => getFileInfo(path).split('.')[0]

const getFileExtension = path => getFileInfo(path).split('.')[1]

const getImageSizesFromConfig = imageSizes =>
  imageSizes
    .split(',')
    .map(sizes => sizes.split('x'))
    .map(sizes => [parseInt(sizes[0]), parseInt(sizes[1])])

const scrollTo = (element = null, offset = 0, behavior = 'smooth') => {
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
      behavior: behavior,
    })
  } else {
    window.scrollTo({
      top: document.body.getBoundingClientRect().top - offset,
      behavior: behavior,
    })
  }
}

module.exports = {
  getFilePath,
  getFileName,
  getFileExtension,
  getImageSizesFromConfig,
  scrollTo,
}
