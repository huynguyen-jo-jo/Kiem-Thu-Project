const Artical = require('../model/artical')
const { marked } = require('marked')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const dompurify = createDomPurify(new JSDOM().window)


class PostController {
    getPost (req, res) {
        const data = req.params.id
        Artical.findById({_id: data})
        .then((data) => {
        res.render("content", { title: "content", data})
        })
        .catch((err) => {
        res.send(err)
        })
    }

    getWrite (req, res) {
        res.render('postUpload', {title: 'Write '})
    }

    postUploas (req, res) {
        const sanitizedHTML = dompurify.sanitize(marked(req.body.content))
        const data = {
            img: req.file.path.substring(6),
            hashtag: req.body.hashtag.split(" "),
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            sanitizedHTML: sanitizedHTML
        }
        Artical.create(data)
        .then((data) => {
            res.redirect('/home')
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = new PostController