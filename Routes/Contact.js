const express = require('express')
const Contact = require('../Models/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact',async(req,res)=>{
    try {
        
        var found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send({msg : 'Email Already Exist'})
        }
        const NovContact = new Contact(req.body)

        await NovContact.save()

        res.status(200).send({msg : 'Contact Added',NovContact})
    } catch (error) {
        res.status(500).send({msg : 'could not add Contact'})
        
    }
})




module.exports = contactRouter