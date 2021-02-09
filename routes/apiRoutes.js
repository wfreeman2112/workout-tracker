const router = require("express").Router();
const db = require("../models");

//establish routes-
// Add exercises to the most recent workout plan.
router.get("/api/workouts", function (req, res) {
  db.Workout.find().then(function (workoutdb) {
    res.json(workoutdb);
  });
});

router.post("/api/workouts", function (req, res) {
  db.Workout.create(req.body).then(function (workoutdb) {
    res.json(workoutdb);
  });
});

router.put("/api/workouts/:id", function (req, res) {
  db.Workout.updateOne(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
    }
  ).then(function (workoutdb) {
    res.json(workoutdb);
  });
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find()
    .then(function (workoutdb){
        res.json(workoutdb);
    })
    
    module.export = router 
    
})


// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

module.exports = router;
