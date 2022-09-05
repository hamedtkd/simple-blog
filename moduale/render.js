import {creatBolgFromLC} from "../index.js"
import {creatNewBolog} from "../components/creatNewBolog.js"

export function render(){
    creatBolgFromLC().forEach((blog)=> {
        creatNewBolog(blog.id, blog.userName, blog.subject, blog.profile, blog.descOfBlog, blog.titleOfBlog,blog.date,blog.like,blog.image)
        
    });
}