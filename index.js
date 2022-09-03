import {creatNewBolog} from "./moduale/creatNewBolog.js";
import {render} from "./moduale/render.js";

const nameInput = document.getElementById("name-input");
const subjectInput = document.getElementById("subject-input");
const imageInput = document.getElementById("image-input");
const profileInput = document.getElementById("profile-input");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description-input");

const submit= document.getElementById("submit");

// const like= document.getElementById("like")
// const likeNumber= document.getElementById("likeNumber")



export function creatBolgFromLC(){
    let getLcBlog = localStorage.getItem("blog") ;
    return JSON.parse(getLcBlog)?.sort((a ,b)=> a.id - b.id) || [];
}
let saveBlog = [...creatBolgFromLC()]

const handelNewBlog = (e)=>{


    e.preventDefault();

const blogInfo ={
    id:Date.now(),
    userName:nameInput.value,
    subject:subjectInput.value,
    profile:profileInput.value,
    titleOfBlog : titleInput.value,
    descOfBlog : descriptionInput.value,
    date : dateInput.value,
    like: "00",
    image:imageInput.value,
}
 saveBlog.push(blogInfo)
 localStorage.setItem('blog',JSON.stringify(saveBlog))
 creatNewBolog(blogInfo.id,blogInfo.userName , blogInfo.subject ,  blogInfo.profile , blogInfo.descOfBlog, blogInfo.titleOfBlog,blogInfo.date,blogInfo.like,blogInfo.image)
 
}
render()


mainBlog.addEventListener('click',(e) => {
    const id = e.target.id;
    if (e.target.dataset.like === "like"){
    let numberOfLikes=e.target.parentElement.children[1].innerHTML++;
    numberOfLikes += 1;
    const filterBlog = creatBolgFromLC().filter((item)=> item.id === Number(id));
    const updateFilterBlog = {...filterBlog[0] , like: String(numberOfLikes)};
    const filtersBlog = creatBolgFromLC().filter((item)=> item.id !== Number(id));
    const updateLCFilterBlog = [...filtersBlog,updateFilterBlog];
    localStorage.setItem('blog',JSON.stringify(updateLCFilterBlog),[updateLCFilterBlog])
    mainBlog.innerHTML = " "
    render()
}
else{console.log("object");}
})





submit.addEventListener('click',handelNewBlog)


