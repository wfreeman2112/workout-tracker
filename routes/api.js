const router = require("express").Router();
const { prototype } = require("module");
const Workout = require("../models/workoutModel.js");


//establish routes- 
//to port
//to api
//to html


// Add exercises to the most recent workout plan.
//hey there

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

// router.get("/api/transaction", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

module.exports = router;