const router = require("express").Router(); // router method create modular mini applications that we can import in our app.js file

// CRUD - create, read, update, and delete
const Workout = require("../db").import("../models/workout");

// GET
router.get("/", (req, res) => {
  Workout.findAll() // look at workout table, find all of the data inside the table, returns a promise
    .then((workouts) =>
      res.status(200).json({
        workouts: workouts,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// POST
router.post("/", (req, res) => {
  const workoutFromRequest = {
    description: req.body.description,
    definition: req.body.definition,
    result: req.body.result,
    owner_id: req.user.id,
  };
  Workout.create(workoutFromRequest) // sending workoutFromRequest to be create
    .then((workout) =>
      res.status(200).json({
        workout: workout,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// QUERY WORKOUT BY NAME
router.get("/:id", (req, res) => {
  Workout.findOne({
    where: {
      id: req.params.id, // req.params searches URL path for specified parameter (name of workout)
    },
  })
    .then((workout) =>
      res.status(200).json({
        workout: workout,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// UPDATE BY ID
router.put("/:id", (req, res) => {
  Workout.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((workout) =>
      res.status(200).json({
        workout: workout,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// DELETE METHOD BY ID
router.delete("/:id", (req, res) => {
  Workout.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((workout) =>
      res.status(200).json({
        workout: workout,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});
module.exports = router; // exporting router (all the http methods that are attached to router)
