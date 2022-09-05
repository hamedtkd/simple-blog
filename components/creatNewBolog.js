const mainBlog= document.getElementById("mainBlog");

export function creatNewBolog(id, userName, subject, profile , description ,title , date ,like,image){
    const newBlog =` <div class=" pt-3 border-top mt-3 pb-5 ">

    <div class="d-flex gap-3" id = "">

        <div class="rounded-circle profile " style="background-image: url(${profile});
        height: 8rem ;
        width: 8rem;
  background-position: center;

        background-size: cover;">
        </div>
        <div class="d-flex flex-column gap-1">
            <h1>${title}</h1>
            <div class="">
                <div class="d-flex gap-5">
                    <div class="d-flex gap-2 align-items-center">
                        <p class="fs-6 text-muted">write by</p>
                        <a href="#"  class="fs-5 pb-3 ">
                        ${userName}
                        </a>
                        <p>,</p>
                        <p class="text-muted">${date}</p>
                    </div>
                    <div class="d-flex gap-1 align-items-center">
                        <button class="btn bg-transparent border-0 p-0 mb-3 like" data-like = "like" id="${id}">
                       Like
                        </button>

                        <p class="fs-6 mt-3" id="2">${like}</p>
                    </div>


                </div>
                <a href="#" class="text-muted">${subject}</a>


            </div>


        </div>

    </div>
    <div class=" pt-4 fs-5 h-29">
        <article>
            <img src="${image}" alt="" class="" ALIGN="right" style="max-height: 400px;">
        ${ description}
        
        </article>
            <button class="btn btn-outline-danger mt-4 " id="${id}">Delete</button>
    </div>
 
    
</div>`
mainBlog.innerHTML +=newBlog
}

