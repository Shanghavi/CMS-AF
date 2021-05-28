const router = require("express").Router();
let user = require("../models/user.model");

//get all users
router.route("/").get((req, res) => {
  user.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a patient - won't add
router.route("/add").post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const age = req.body.age;
  

  const newUser = new user({
    email,
    name,
    age,
   
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update a patient
// router.route("/edit/:id").post((req, res) => {
//   Drug.findById(req.params.id)
//     .then((drug) => {
//       drug.drugId = req.body.drugId;
//       drug.drugName = req.body.drugName;
//       drug.quantity = req.body.quantity;
//       drug.type = req.body.type;
//       drug.unit = req.body.unit;

//       drug
//         .save()
//         .then(() => res.json("drug updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// //delete a patient
// router.route("/:id").delete((req, res) => {
//   Drug.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/:id").get((req, res) => {
  user.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
