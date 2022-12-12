const Artical = require('../model/artical')

class SearchController {
    getPost (req, res) {
        console.log(req.body)
        const hashtag = req.body.hashtag.split(" ")
        Artical.find({ hashtag: { $in: hashtag } })
        .then((data) => {
            res.render('searchPost', { title: 'Post', data: data })
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = new SearchController