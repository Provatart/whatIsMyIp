const express = require('express');
const cors =  require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
const rawIp = req.ip;
const ip = rawIp.startsWith('::ffff:') ? rawIp.replace('::ffff:', '') : rawIp;
res.json({
    ip,
})
});
app.listen(1987, ()=>{
    console.log('server runnnig');

})