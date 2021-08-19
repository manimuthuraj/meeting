const scheduling = require("../models/scheduling.model");

const scheduleMetting = async function(req, res) {
    try {

        if(!req.body.date || !req.body.startTime || !req.body.endTime){
           return res.status(401).json({
                message:"date, startime, end time are required fields"
            })
        }

        const checkExistingSlot = await scheduling.find({date:req.body.date})
        for(let i=0; i < checkExistingSlot.length;i++){
            if( (+req.body.startTime.substring(0,2)) <  (+checkExistingSlot[i].endTime.substring(0,2))  && (+req.body.startTime.substring(0,2)) >  (+checkExistingSlot[i].startTime.substring(0,2)) || (+req.body.startTime.substring(0,2)) ==  (+checkExistingSlot[i].startTime.substring(0,2)) && (+req.body.startTime.substring(0,2)) ==  (+checkExistingSlot[i].startTime.substring(0,2))){
                return res.status(401).json({
                    message:"Slot already booked"
                })
            }
        }

        const createScheduling = await scheduling.create(req.body);

        if(!createScheduling){
            return res.status(500).json({
                message:"some thing went wrong"
            })
        }
        res.status(200).json({data:createScheduling})
    } catch (error) {
        console.log(error)
    }
}

module.exports = { scheduleMetting }