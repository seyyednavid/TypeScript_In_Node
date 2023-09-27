import { Router } from "express";
import createReminderDto from "../dtos/create-reminder";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of reminders");
});

router.post("/", (req, res) => {
 const {title} = (req.body as createReminderDto);
  res.json(title);
});

export default router;
