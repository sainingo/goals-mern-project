const asyncHandler = require('express-async-handler')
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get goals"})
})

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message: "Set goals"})
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "update goals"})
})


const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Delete goals"})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}