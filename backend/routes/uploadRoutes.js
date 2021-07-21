import express from 'express'
import multer from 'multer'
import path from 'path'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    // console.log(file.fieldname)
    cb(
      null,

      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const checkFileType = (file, cb) => {
  const fileTypes = /jpg|jpeg|png/
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = fileTypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    return cb('Images Only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  const str = req.file.path
  // console.log(str)
  const myArr = str.split('\\')
  const toSend = myArr[0] + '/' + myArr[1]
  // console.log(`/${toSend}`)
  res.send(`/${toSend}`)
})

export default router

// `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
// G:\Ongoing_project\Clickart\uploads\image-1626713260595.jpg
// uploads\image-1626713260595.jpg
// frontend\public\images\airpods.jpg
