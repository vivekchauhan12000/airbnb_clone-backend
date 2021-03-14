const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id:"p1",
    title:"empire state building",
    description:"where plane can be parked",
    location:{
      lat:40.7844,
      lng:-73.4498
    },
    address:"20 W 34th st,New York NY 10001",
    creator:"u1"

  }
]

router.get("/:pid",(req,res)=>{
const placeId = req.params.pid;
const place=DUMMY_PLACES.find(p=>{
return p.id===placeId;
});
res.json({place});
});

module.exports=router;