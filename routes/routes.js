const homecontroller = require('../app/controllers/homecontroller/homecontroller.js')
const cartcontroller = require('../app/controllers/customercontroller/cartcontroller.js')
const logincontroller = require('../app/controllers/authcontroller/logincontroller.js')
const { admincontroller } = require('../app/controllers/admincontroller/adminordercontroller.js')
const checkoutcontroller = require('../app/controllers/checkoutcontroller/checkoutcontroller.js')

const { allowedlink, guest } = require('../app/middlewares/auth.js')

function initroutes(app) {

    app.get('/', homecontroller().home)
    app.post('/update', homecontroller().update)

    app.get('/login', guest, logincontroller().login)
    app.post('/login', guest, logincontroller().postlogin)
    app.post('/logout', logincontroller().postlogout)
    app.get('/register', guest, logincontroller().register)
    app.post('/register', guest, logincontroller().postregister)

    app.get('/cart', cartcontroller().cart)
    app.post('/order', cartcontroller().postorder)
    app.get('/order', allowedlink, cartcontroller().order)
    app.get('/orderstatus/:id', cartcontroller().orderstatus)

    app.get('/admin', admincontroller().adminorder)
    app.post('/adminupdateorderstatus', admincontroller().adminupdateorderstatus)

    app.get('/checkout', checkoutcontroller().checkout)
    app.post('/checkout', checkoutcontroller().postcheckout)
    app.get('/checkoutlist', checkoutcontroller().checkoutlist)
    app.get('/checkoutdisplay/:id', checkoutcontroller().checkoutdisplay)

}

module.exports = initroutes