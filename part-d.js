//תרגיל 15
const players = [
{ id: 1, nickname: "Pixel", score: 840, level: 5 },
{ id: 2, nickname: "Nova", score: 1200, level: 8 },
{ id: 3, nickname: "Blaze", score: 460, level: 3 }
];

players.forEach((player) => {console.log(`${player.nickname} - ${player.score} points, id: ${player.id}, level ${player.level}`);});

//["Pixel", "Nova", "Blaze"]

//תרגיל 16
const scores = [840, 1200, 460, 950];
const courses = ["JavaScript", "Design", "Databases"];

const updatedScores = scores.map(score => score+100);
const courseNameLengths = courses.map(course => course.length);

console.log(scores);
console.log(updatedScoresscores);
console.log(courses);
console.log(courseNameLengths);

const doubledScores = scores.map(score => score * 2);

//תרגיל 17
const posts = [
    { id: 101, username: "noa_dev", content: "First Project!", likes: 45 },
    { id: 102, username: "dan_codes", content: "New Feature", likes: 180 },
    { id: 103, username: "maya_js", content: "Weekend update", likes: 72 }
];

const postUsernames = posts.map(post => post.username);

const postLabels = posts.map(post => {
    console.log(`${post.username} | ${post.content} | ${post.likes} likes`);
});

const postCards = posts.map(post => ({
    id: post.id, label: `${post.username} - ${post.likes} likes`
}));

console.log(posts);
console.log(postCards);

const tasks = [
    { id: 1, title: "Write tests", completed: false, priority: "high" },
    { id: 2, title: "Update profile", completed: true, priority: "low" },
    { id: 3, title: "Fix login", completed: false, priority: "high" },
    { id: 4, title: "Review text", completed: false, priority: "medium" }
];

const openTasks = tasks.filter(task => !task.completed);
const highPriorityTasks = tasks.filter(task => task.priority === "high");
const urgentOpenTasks = tasks.filter(task => !task.completed && task.priority === "high");

const getTasksByPriority = (tasks, priority) => tasks.filter(task => task.priority === priority);

//array עם איבר 1

//תרגיל 19
const movies = [
    { id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
    { id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
    { id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 }
];

const findMovieById = (movies, id) => movies.find(movie => movie.id===id);

const result12 = findMovieById(movies, 12)!=undefined? findMovieById(movies, 12) : "undefined";
console.log(result12);
const result99 = findMovieById(movies, 99)!=undefined? findMovieById(movies, 99) : "undefined";
console.log(result99);

const movie = movies.find(movie => movie.id === 12);
console.log(movie.title);

//תרגיל 20

// foreach
players.forEach(player => {
    console.log(`${player.nickname} - ${player.score} points`);
});

//map
const usernames = posts.map(post => post.username);

//filter
const unfinishedTasks = tasks.filter(task => !task.completed);

//find
const id13 = movies.find(movie => movie.id===13);

//map
const moviesAboveEight = movies.map(movie =>{
    if(movie.rating>8)
        return movie.title;
} );

//find
const post102 = posts.find(post => post.id ===102);

//תרגיל 21
const playersAbove800 = players.filter(player => player.score>800).map(player => player.nickname);

const usernamesOver100 = posts.filter(post => post.likes >100).map(post => post.username);

const getOpenTaskTitles = (tasks) => tasks.filter(task => !task.completed).map(task => task.title);

//מערך מסוג אובייקט ואז מערך מסוג מחרוזת