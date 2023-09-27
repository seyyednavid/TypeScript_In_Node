import remindersRouter from "./routers/reminders"
import  express  from "express";
const app = express()
app.use(express.json())


app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send('hi typeScript')
})

app.listen(3000, ()=> {
  console.log("server is listening ...");
})