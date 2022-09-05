import {creatNewBolog} from "./components/creatNewBolog.js";
import {render} from "./moduale/render.js";
import {alertForNull} from './moduale/alert.js'
import {blobToBase64} from './moduale/blolbs.js'


const d = new Date();
const nameInput = document.getElementById("name-input");
const subjectInput = document.getElementById("subject-input");
const imageInput = document.getElementById("image-input");
const profileInput = document.getElementById("profile-input");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const submit= document.getElementById("submit");

let srcImage = null;
let srcProfile= null;

imageInput.addEventListener('change',(e)=>{blobToBase64(e.target.files[0]).then((res) => { srcImage = res})});
profileInput.addEventListener('change',(e)=>{
blobToBase64(e.target.files[0]).then((res) => { srcProfile = res})});

export function creatBolgFromLC(){
    let getLcBlog = localStorage.getItem("blog") ;
    return JSON.parse(getLcBlog)?.sort((a ,b)=> a.id - b.id) || [];
}
let saveBlog = [...creatBolgFromLC()]

const handelNewBlog = (e)=>{

    e.preventDefault();

    if (!nameInput.value) return alertForNull("Enter Your Name");
    else if (!subjectInput.value) return alertForNull("Enter a Subject");
    else if (!titleInput.value) return alertForNull("Enter a Title");
    else if (!descriptionInput.value) return alertForNull("Complte Your Blog");
    else if (!profileInput.value) srcProfile = "image/profile.jpg" ;

    const dateOfCreat = [d.getFullYear(),d.getMonth() + 1,d.getDate()];
    const time =[d.getHours(),d.getMinutes()];
    const timeOfCreat = [dateOfCreat.join("/") + " , " + time.join(":") ];
    const blogInfo ={
        id:Date.now(),
        userName:nameInput.value,
        subject:subjectInput.value,
        profile: srcProfile,
        titleOfBlog : titleInput.value,
        descOfBlog : descriptionInput.value,
        date :timeOfCreat,
        like: "00",
        image: srcImage,
};
 saveBlog.push(blogInfo);
 localStorage.setItem('blog',JSON.stringify(saveBlog));
 creatNewBolog(blogInfo.id,blogInfo.userName , blogInfo.subject ,  blogInfo.profile , blogInfo.descOfBlog, blogInfo.titleOfBlog,blogInfo.date,blogInfo.like,blogInfo.image);
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
else if (e.target.innerText === "Delete") {
    console.log(e.target.id);
    const filterBlog = creatBolgFromLC().filter((item) => item.id !== Number(id ));
    saveBlog = [...filterBlog];
    localStorage.setItem('blog', JSON.stringify(filterBlog));
    mainBlog.innerHTML = ""
    render()}
})

submit.addEventListener('click',handelNewBlog)


