const glob = require('glob')
const sqip = require('sqip')
const { getFilePath, getFileName } = require('../utils')
const fs = require('fs')
const path = require('path')

glob(
  process.argv[2] || 'src/assets/img/**/*.{jpg,jpeg,png}',
  {
    ignore: 'src/assets/img/partners-logos/**/*',
  },
  (err, img) => {
    img.forEach(img => {
      fs.writeFile(
        `${path.join(getFilePath(img), getFileName(img))}.svg`,
        sqip({
          filename: img,
        }).final_svg,
        err => {
          if (err) throw err

          /* eslint-disable-next-line */
          console.log(`SQIP generated for: ${getFileName(img)}`)
        }
      )
    })
  }
)
