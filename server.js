const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
res.json({
    ip: req.ip,
})
});
app.listen(1987, ()=>{
    console.log('server runnnig');

})