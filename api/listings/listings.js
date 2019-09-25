const router = require('express').Router();
const Listings= require('./listings-model')

router.get('/', (req, res) => {
    Listings.find()
    .then(listings => {
        res.status(200).json(listings);
    })
    .catch(err => {
        res.status(500).json({
            error: "Listings could not be retrieved. Please try again."
        })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Listings.findById(id)
    .then(listing => {
        if(listing) {
            res.status(200).json({listing})
        } else {
            res.status(404).json({
                message: "Could not find a listing with this ID."
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: "The listing could not be retrieved. Please try again."
        })
    })   
})

router.post('/', (req, res) => {
    const {
        address,
        contact_phone,
        state,
        description,
        price,
        start_availability,
        end_availability,
    } = req.body;

    if (!address || !contact_phone || !state || !description || !price || !start_availability || !end_availability) {
        res.status(404).json({
            error: "Please fill in all sections before submitting."
        })
    } else {
        Listings.insert(req.body)
        .then(listing => {
            res.status(201).json({
                message: "Listing was successfully added!",
                listing
            })
        })
        .catch( err => {
            res.status(500).json({
                error: "An error occurred while saving the post. Please try again."
            })
        })
    }
})

router.put('/:id', (req, res) => {
    const { 
        address,
        contact_phone,
        state,
        description,
        price,
        start_availability,
        end_availability
    } = req.body;

    if(!address || !contact_phone || !state || !description || !price || !start_availability || !end_availability) {
        res.status(400).json({
            error: "Please fill in all sections before submitting."
        })
    } else {
        Listings.update(req.params.id, req.body)
        .then(listing => {
            if(listing){
                res.status(200).json({
                    message: "Listing was successfully updated!",
                    listing
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: "The listing could not be updated. Please try again."
            })
        })
    }
})

router.delete('/:id', (req, res) => {
    const { id }= req.params;

    Listings.remove(id)
    .then(deletedListing => {
        if(deletedListing) {
            res.status(200).json({
                message: "Listing has been removed."
            })
        } else {
            res.status(404).json({
                error: "The listing with the specified ID does not exist."
            })
        }
    }) 
    .catch(err => {
        res.status(500).json({
            error: "The listing could not be removed. Please try again."
        })
    })
})

module.exports= router;