const mainBlog= document.getElementById("mainBlog")

export function creatNewBolog(id, userName, subject, profile, description,title,date,like){
 
    
    const newBlog =` <div class=" pt-3 border-top mt-3 pb-5">

    <div class="d-flex gap-3" id = "">

        <div class="rounded-circle profile " style="background-image: url(${profile});
        height: 8rem ;
        width: 8rem;
        background-size: cover;">
        </div>
        <div class="d-flex flex-column gap-1">
            <h1>${title}</h1>
            <div class="">
                <div class="d-flex gap-5">
                    <div class="d-flex gap-2 align-items-center">
                        <p class="fs-5">write by</p>
                        <p class="text-dark">
                        ${userName}
                        </p>
                        <p>,</p>
                        <p>${date}</p>
                    </div>
                    <div class="d-flex gap-1 align-items-center">
                        <button class="btn bg-transparent border-0 p-0 mb-3"  id="${id}">
                       Like
                        </button>

                        <p class="fs-6 mt-3" id="2">${like}</p>
                    </div>


                </div>
                <a href="#">${subject}</a>


            </div>


        </div>

    </div>
    <div class=" pt-4 fs-5">
        <article>
        ${ description}
        </article>
    </div>
</div>`

mainBlog.innerHTML +=newBlog
}