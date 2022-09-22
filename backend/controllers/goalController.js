//@desc get goals
//@routes GET  /api/goals
//@access private
const getGoals = (req, res) => {
    res.status(200).json({message: "Get goals"})
}

//@desc set goals
//@routes POST  /api/goals
//@access private
const setGoals = (req, res) => {
    res.status(200).json({message: "Set goals"})
}

//@desc update goals
//@routes put  /api/goals
//@access private
const updateGoals = (req, res) => {
    res.status(200).json({message: "update goals"})
}

//@desc delete goals
//@routes delete  /api/goals
//@access private
const deleteGoals = (req, res) => {
    res.status(200).json({message: "Delete goals"})
}


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}