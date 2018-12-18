const { getFilePath, getFileName, getFileExtension, getImageSizesFromConfig } = require('./utils')

const file = 'src/assets/img/example-file.jpg'
const imageSizes = '1280x720,1920x1080'

test('Retrieve the directory where the file is', () => {
  expect(getFilePath(file)).toEqual('src/assets/img')
})

test('Retrieve the file name', () => {
  expect(getFileName(file)).toEqual('example-file')
})

test('Retrieve the file extension', () => {
  expect(getFileExtension(file)).toEqual('jpg')
})

test('Correctly parse image sizes', () => {
  expect(getImageSizesFromConfig(imageSizes)).toEqual([[1280, 720], [1920, 1080]])
})
