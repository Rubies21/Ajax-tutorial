// A call back is a function which has to be executed after another function has finished execution.
// A call back is also a function that is passed as an argument into another function.


const Posts=[
    {   title: 'Post One', body:'This is post one'},
    {   title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        Posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        Posts.push(post);
        callback();
    }, 2000);
}

createPost({title:'Post Three', body:'This is post three'}, getPosts);