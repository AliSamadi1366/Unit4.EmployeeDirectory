import express from "express";
const app = express();
export default app;

import employees from "#db/employees";
app.route("/").get((request, response) => {
  response.send("Hello employees!");
});
app.route("/employees").get((request, response) => {
  response.send(employees);
});
app.route("/employees/random").get((req, res) => {
  const id = Math.floor(Math.random() * employees.length);
  const employee = employees[id];
  res.send(employee);
});
app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const ID = parseInt(id);
  const employee = employees[ID - 1];
  if (!employee)
    return res.status(404).send("This id does not exists in the employees");
  res.send(employee);
});
