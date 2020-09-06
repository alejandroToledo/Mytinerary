const Activity = require('../models/ActivityModel')

const activityController = {
    postActivity: (req, res) => {
        var { activity, itineraryId } = req.body
        const newActivity = new Activity({
            activity,
            itineraryId
        })
        newActivity.save()
            .then(activity => res.json({ activity }))
            .catch(error => res.json({ error }))
    },
    getActivities: async (req, res) => {
        const activities = await Activity.find({ itineraryId: req.params.id })
        res.json({
            activities,
        })
    }

}

module.exports = activityController