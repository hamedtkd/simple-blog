import {creatNewBolog} from "./moduale/creatNewBolog.js";
import {render} from "./moduale/render.js";

const nameInput = document.getElementById("name-input");
const subjectInput = document.getElementById("subject-inout");
const imageInput = document.getElementById("image-input");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description-input");
const submit= document.getElementById("submit");
// const like= document.getElementById("like")
// const likeNumber= document.getElementById("likeNumber")

let saveBlog = []
export function creatBolgFromLC(){
    let getLcBlog = localStorage.getItem("blog") ;
    return JSON.parse(getLcBlog)?.sort((a ,b)=> a.id - b.id) || [];

}

const handelNewBlog = (e)=>{
    e.preventDefault();

const blogInfo ={
    id:Date.now(),
    userName:nameInput.value,
    subject:subjectInput.value,
    profile:imageInput.value,
    titleOfBlog : titleInput.value,
    descOfBlog : descriptionInput.value,
    date : dateInput.value,
    like: "00",
}
 saveBlog.push(blogInfo)
 localStorage.setItem('blog',JSON.stringify(saveBlog))
 creatNewBolog(blogInfo.id,blogInfo.userName , blogInfo.subject ,  blogInfo.profile , blogInfo.descOfBlog, blogInfo.titleOfBlog,blogInfo.date,blogInfo.like)
 
}
render()


mainBlog.addEventListener('click',(e) => {
    const id = e.target.id
    if (e.target.id === id){
    let numberOfLikes=e.target.parentElement.children[1].innerHTML++;
    numberOfLikes += 1;
    const filterBlog = creatBolgFromLC().filter((item)=> item.id === Number(id));
    console.log(creatBolgFromLC());
    console.log(filterBlog);
    const updateFilterBlog = {...filterBlog[0] , like: String(numberOfLikes)};
    console.log(updateFilterBlog);
    const filtersBlog = creatBolgFromLC().filter((item)=> item.id !== Number(id));
    const updateLCFilterBlog = [...filtersBlog,updateFilterBlog];
    localStorage.setItem('blog',JSON.stringify(updateLCFilterBlog),[updateLCFilterBlog])
    mainBlog.innerHTML = " "
    render()
}
    else if(e.target){}
})





submit.addEventListener('click',handelNewBlog)


