const tunr = require("../models/tunr")
const {Router} = require("express")
const router = Router()


//index route
router.get('/', async(req,res) => {
    const allSongs = await tunr.find({})
    res.json({status: 200, data: allSongs})
})
//create route
router.post('/', async (req, res) => {
    res.json(await tunr.create(req.body))
})
//update route
router.put('/:_id', (req,res) => {
    tunr.findByIdAndUpdate(req.params._id, req.body).then((song) => {
        res.json(song)
    })
})
//delete route
router.delete("/:_id", (req,res) => {
    tunr.findByIdAndDelete(req.params._id, req.body).then((song) => {
        res.json(song)
    })
})

module.exports = router