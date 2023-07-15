require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8001

app.use(cors())


app.get('/', (req, res)=>{
    res.send('Welcome to the Products JSON server. Move to /data route for JSON product cart data.')
})

app.get('/data', (req, res)=>{
    const jsonData = [{"id":"rec1JZlfCIBOPdcT2","title":"Samsung Galaxy S8","price":"399.99","img":"https://www.course-api.com/images/cart/phone-1.png","amount":1},{"id":"recB6qcHPxb62YJ75","title":"google pixel","price":"499.99","img":"https://www.course-api.com/images/cart/phone-2.png","amount":1},{"id":"recdRxBsE14Rr2VuJ","title":"Xiaomi Redmi Note 2","price":"699.99","img":"https://www.course-api.com/images/cart/phone-3.png","amount":1},{"id":"recwTo160XST3PIoW","title":"Samsung Galaxy S7","price":"599.99 ","img":"https://www.course-api.com/images/cart/phone-4.png","amount":1}];

    res.json(jsonData);
});

app.listen(PORT, ()=>{
    console.log(`json server started at http://localhost:8000`)
})