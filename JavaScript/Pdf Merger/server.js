const express = require('express')
const app = express()
const path = require("path")
const multer  = require('multer')
const {mergePdfs} = require("./merge")



const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'));
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdf', 2), async (req, res, next) => {
    console.log(req.files)
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})