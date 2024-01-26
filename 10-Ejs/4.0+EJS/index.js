import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const today = new Date();
    //Test code
    // weekend:
    // new Date("June 24, 2023 11:13:00");
    // weekday:
    // new Date("June 20, 2023 11:13:00");
    const day = today.getDay();

    console.log(day);

    let type = "a weekday";
    let adv = "its time to work hard";
    if (day===0 || day ===6) {
        type= "the weekend!";
        adv = "its time to work hard";
        
    }
    res.render("index.ejs",{
        dayType : "a week day",
        advice: "Its time to work hard",
    });
});

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});