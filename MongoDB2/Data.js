// use students; switch to students database;

/*inserting users*/

db.users.insertMany([{
    userid: 1,
    name: "Raja",
    email: "Raja23@gmail.com",
    mentorid: 1,
},
{
    userid: 2,
    name: "Murugan",
    email: "Murugan35@gmail.com",
    mentorid: 2,
},
{
    userid: 3,
    name: "Arun",
    email: "Arun34@gmail.com",
    mentorid: 3,
},
{
    userid: 4,
    name: "Mani",
    email: "Mani89@gmail.com",
    mentorid: 1,
},
{
    userid: 5,
    name: "hari",
    email: "hari56@gmail.com",
    mentorid: 2,
},
]);
/*.............................................................................................................................................*/
/*codekata*/

db.codekata.insertMany([{
    userid: 1,
    problems: 30,
},
{
    userid: 2,
    problems: 10,
},
{
    userid: 3,
    problems: 20,
},
{
    userid: 4,
    problems: 60,
},
{
    userid: 5,
    problems: 40,
},
]);

/*....................................................................................................................................................*/
/*topics*/

db.topics.insertMany([{
    topicid: 1,
    topic: "html",
    topic_date: new Date("4-oct-2020"),
},
{
    topicid: 2,
    topic: "css",
    topic_date: new Date("10-oct-2020"),
},
{
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("15-oct-2020"),
},
{
    topicid: 4,
    topic: "React",
    topic_date: new Date("20-oct-2020"),
},
{
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-oct-2020"),
},
]);

/*..............................................................................................................................................................*/
/*tasks*/

db.tasks.insertMany([{
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "Css task",
    due_date: new Date("4-oct-2020"),
    submitted: true,
},
{
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "MongoDB task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
},
{
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Angular task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
},
{
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "Node Js task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
},
{
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "React task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
},
]);
/*....................................................................................................................................................*/
/*attendance*/

db.attendance.insertMany([{
    userid: 1,
    topicid: 1,
    attended: true,
},
{
    userid: 2,
    topicid: 2,
    attended: true,
},
{
    userid: 3,
    topicid: 3,
    attended: false,
},
{
    userid: 4,
    topicid: 4,
    attended: false,
},
{
    userid: 5,
    topicid: 5,
    attended: false,
},
]);

/*...................................................................................................................................................*/
/*mentors*/

db.mentors.insertMany([{
    mentorid: 1,
    mentorname: "Navin",
    mentor_email: "navin@gmail.com",
},
{
    mentorid: 2,
    mentorname: "Sri",
    mentor_email: "Sriraj@gmail.com",
},
{
    mentorid: 3,
    mentorname: "Krishna",
    mentor_email: "krishna34@gmail.com",
},
{
    mentorid: 4,
    mentorname: "Madhan",
    mentor_email: "Madhan67@gmail.com",
},
{
    mentorid: 5,
    mentorname: "sugan",
    mentor_email: "sugan56@gmail.com",
},
]);

/*.................................................................................................................................................*/
/*company drives*/

db.comapnydrives.insertMany([{
    userid: 1,
    drive_date: new Date("10-oct-2020"),
    company: "Apple",
},
{
    userid: 1,
    drive_date: new Date("15-oct-2020"),
    company: "Microsoft",
},
{
    userid: 2,
    drive_date: new Date("20-oct-2020"),
    company: "Google",
},
{
    userid: 3,
    drive_date: new Date("25-oct-2020"),
    company: "Guvi",
},
{
    userid: 4,
    drive_date: new Date("27-oct-2020"),
    company: "Verizon",
},
]);