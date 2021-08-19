const scheduling = require("../models/scheduling.model");

const scheduleMetting = async function(req, res) {
    try {

        if(!req.body.date || !req.body.startTime || !req.body.endTime){
           return res.status(401).json({
                message:"date, startime, end time are required fields"
            })
        }

        let existingSubSlot = []
        const checkExistingSlot = await scheduling.find({date:req.body.date})
        console.log(checkExistingSlot)
        for(let i=0; i< checkExistingSlot.length;i++){
            console.log(+checkExistingSlot[i].startTime.substring(0,2), +checkExistingSlot[isSecureContext].endTime.substring(0,2))
            if((+checkExistingSlot[i].startTime.substring(0,2)) == (+req.body.startTime.substring(0,2)), +checkExistingSlot[i].startTime.substring(0,2) ){

            }
        }
        // console.log(endTime - startTime)
        // const createScheduling = await scheduling.create(req.body);
        console.log(createScheduling)
        if(!createScheduling){
            return res.status(500).json({
                message:"some thing went wrong"
            })
        }
        res.status(200).json({data:createScheduling})
    } catch (error) {
        
    }
}

module.exports = { scheduleMetting }