//תרגיל 22
const movie ={
    id: 41,
    title: "Orbit",
    genre: "Sci-Fi",
    rating: 8.4
};

const {title, genre, rating}  = movie;
console.log(`${title} | ${genre} | ${rating}`);
//החיזוי שלי "Orbit Ocean"

//תרגיל 23
const user = {
    id: 7,
    name: "Dana Levi",
    email: "dana@example.com",
    isActive: true
};

const formatUser = ({name, email}) => `${name} - ${email}`;
console.log(formatUser(user));

const getUserStatus = ({name, isActive}) => {
    let msg = `${name}: `;
    msg+= isActive? "active" : "inactive";
    return msg;
}

console.log(getUserStatus(user));
//לא מכיוון שהפונקציה פונה רק לתכונות ספציפיות באובייקט ולכן כל שינוי של האובייקט שלא נוגע בתכונות הנ"ל לא ישפיע על הפונקציה\

//תרגיל 24
const player = {
id: 1,

nickname: "Noni",
score: 1200,
level: 8
};
const comments = [
{ id: 1, user: "Noa", text: "Great game!", likes: 12 },
{ id: 2, user: "Dan", text: "Well played", likes: 7 }
];
const newComment = {
id: 3,
user: "Maya",
text: "Amazing score!",
likes: 0
};

const updatedPlayer = {...player, score: 1350};
console.log(player);
console.log(updatedPlayer);
const commentsAfterAdd = [...comments, newComment];
console.log(comments);
console.log(commentsAfterAdd);
//אחד הוא העתק של player והשני הוא הפניה שנייה לplayer

//תרגיל 25
const tasks = [
{ id: 1, title: "Write tests", completed: false, priority: "high" },
{ id: 2, title: "Update profile", completed: true, priority: "low" },
{ id: 3, title: "Fix login", completed: false, priority: "high" }
];

const removeTaskById = (tasks, id) => tasks.filter(i => i.id !== id);
const tasksAfterDelete=removeTaskById(tasks, 2);
console.log(tasks);
console.log(tasksAfterDelete);

//הפונקציה תחזיר את המערך ללא שינוי