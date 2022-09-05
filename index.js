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


let srcImage = null;
let srcProfile= null;
function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
    imageInput.addEventListener('change',(e)=>{
    blobToBase64(e.target.files[0]).then((res) => { srcImage = res
    })});
    profileInput.addEventListener('change',(e)=>{
        blobToBase64(e.target.files[0]).then((res) => { srcProfile = res
        })});


export function creatBolgFromLC(){
    let getLcBlog = localStorage.getItem("blog") ;
    return JSON.parse(getLcBlog)?.sort((a ,b)=> a.id - b.id) || [];
}
let saveBlog = [...creatBolgFromLC()]
const d = new Date();

const handelNewBlog = (e)=>{

    e.preventDefault();
    const dateOfCreat = [d.getFullYear(),d.getMonth() + 1,d.getDate()]
    const time =[d.getHours(),d.getMinutes()]
    const timeOfCreat = [dateOfCreat.join("/") + " , " + time.join(":") ]
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
}
 saveBlog.push(blogInfo)
 localStorage.setItem('blog',JSON.stringify(saveBlog))
 creatNewBolog(blogInfo.id,blogInfo.userName , blogInfo.subject ,  blogInfo.profile , blogInfo.descOfBlog, blogInfo.titleOfBlog,blogInfo.date,blogInfo.like,blogInfo.image)
 

}
render()


mainBlog.addEventListener('click',(e) => {
    const id = e.target.id;
    if (e.target.dataset.like === "like"){
    console.log(e.target.id);
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
    console.log(filterBlog);
    saveBlog = [...filterBlog];
    localStorage.setItem('blog', JSON.stringify(filterBlog));
    mainBlog.innerHTML = ""

    render()}
    
})






submit.addEventListener('click',handelNewBlog)


