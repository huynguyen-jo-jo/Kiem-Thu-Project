
const Artical = require('../model/artical')

class HomeController {
    getHome (req, res ) { 
        Artical.find({})
        .then((data1) => {
            const data = [...data1]
            data.forEach(data => {
                data.img.replace(/\\/i, '/')
                data.timeString = data.time.toDateString()
            })
            res.render('home', {title: 'home', data: data})
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = new HomeController
