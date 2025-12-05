const photoData = [
    {
        title: "Palacio Del Gobernador",
        image: "./web/imgs/P (1).jpg",
        caption: "Photo of the Palacio Del Gobernador that I took when I was registering for voting",
        thumb: "./web/imgs/thumb/P (1).jpg",
    },
    {
        title: "Padre Burgos Avenue - Manila",
        image: "./web/imgs/P (2).jpg",
        caption: "Photo of the Manila City Hall while going to Central Station",
        thumb: "./web/imgs/thumb/P (2).jpg",
    },
    {
        title: "Sunset At Pureza Station",
        image: "./web/imgs/P (3).jpg",
        caption: "Random Sunset from the Vantage of Pureza Station",
        thumb: "./web/imgs/thumb/P (3).jpg",
    },
    {
        title: "MWSS Compound",
        image: "./web/imgs/P (4).jpg",
        caption: "Photo of the MWSS Compound, taken while I was doing my Work Immersion in Maynilad",
        thumb: "./web/imgs/thumb/P (4).jpg",
    },
    {
        title: "Early Morning - North EDSA",
        image: "./web/imgs/P (5).jpg",
        caption: "Photo taken during my daily commute during my Senior High School Years",
        thumb: "./web/imgs/thumb/P (5).jpg",
    },
    {
        title: "Evening - SM North EDSA South Rd.",
        image: "./web/imgs/P (6).jpg",
        caption: "Photo taken during my daily commute going home, it is the South Road adjacent to SM North EDSA",
        thumb: "./web/imgs/thumb/P (6).jpg",
    },
    {
        title: "Early Morning - Basea Kanto : Quirino Highway",
        image: "./web/imgs/P (7).jpg",
        caption: "Another Photo I've taken during my daily commute while I was Senior High School",
        thumb: "./web/imgs/thumb/P (7).jpg",
    },
    {
        title: "Sunset - SM North EDSA South Rd.",
        image: "./web/imgs/P (8).jpg",
        caption: "Photo taken during my daily commute going home, it is the South Road adjacent to SM North EDSA, What's Special about this is this was taken after the last graduation practice day",
        thumb: "./web/imgs/thumb/P (8).jpg",
    },
    {
        title: "Early Morning - Home",
        image: "./web/imgs/P (9).jpg",
        caption: "Random Photo I took during Sunrise",
        thumb: "./web/imgs/thumb/P (9).jpg",
    },
    {
        title: "Sunrise",
        image: "./web/imgs/P (10).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (10).jpg",
    },
    {
        title: "SFHS",
        image: "./web/imgs/P (11).jpg",
        caption: "Photo of my Senior High School, at least a part of it, part of the first photos in this gallery",
        thumb: "./web/imgs/thumb/P (11).jpg",
    },
    {
        title: "Landscape - Home - Evening",
        image: "./web/imgs/P (12).jpg",
        caption: "Part of the first photos in this gallery",
        thumb: "./web/imgs/thumb/P (12).jpg",
    },
    {
        title: "Landscape - Home - Early Evening",
        image: "./web/imgs/P (13).jpg",
        caption: "Part of the first photos in this gallery",
        thumb: "./web/imgs/thumb/P (13).jpg",
    },
    {
        title: "Commonwealth Ave. - Early Evening",
        image: "./web/imgs/P (14).jpg",
        caption: "Part of the first photos in this gallery, taken while going home after Friend Group Christmas Party",
        thumb: "./web/imgs/thumb/P (14).jpg",
    },
    {
        title: "UP - Sunken Garden",
        image: "./web/imgs/P (15).jpg",
        caption: "Photo of the Sunken Garden at UP, taken during the Friend Group Christmas Party",
        thumb: "./web/imgs/thumb/P (15).jpg",
    },
    {
        title: "Home - Early Sunset",
        image: "./web/imgs/P (16).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (16).jpg",
    },
    {
        title: "Balintawak Station - Sunset",
        image: "./web/imgs/P (17).jpg",
        caption: "Photo taken during my commute home after going to PUP",
        thumb: "./web/imgs/thumb/P (17).jpg",
    },
    {
        title: "PUP - University Avenue - Sunset",
        image: "./web/imgs/P (18).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (18).jpg",
    },
    {
        title: "Alta Vista - Early Evening",
        image: "./web/imgs/P (19).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (19).jpg",
    },
    {
        title: "Pureza Station Platform",
        image: "./web/imgs/P (20).jpg",
        caption: "Taken during my first commute home from PUP",
        thumb: "./web/imgs/thumb/P (20).jpg",
    },
    {
        title: "Recto - Doroteo Jose Connecting Bridge",
        image: "./web/imgs/P (21).jpg",
        caption: "Taken during my first commute home from PUP",
        thumb: "./web/imgs/thumb/P (21).jpg",
    },
    {
        title: "Marina Way - SM Mall of Asia",
        image: "./web/imgs/P (22).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (22).jpg",
    },
    {
        title: "Seaside Boulevard - SM Mall of Asia",
        image: "./web/imgs/P (23).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (23).jpg",
    },
    {
        title: "MOA Eye Overlooking Conrad Hotel - SM Mall of Asia",
        image: "./web/imgs/P (24).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (24).jpg",
    },
    {
        title: "Seaside - Early Evening - SM Mall of Asia",
        image: "./web/imgs/P (25).jpg",
        caption: "No Description",
        thumb: "./web/imgs/thumb/P (25).jpg",
    },
    {
        title: "Clouds",
        image: "./web/imgs/P (26).jpg",
        caption: "Clouds behind bars",
        thumb: "./web/imgs/thumb/P (26).jpg",
    }
    
];


const container = document.querySelector(".imgCont");
const imageBox = document.getElementById("image");

function renderImages() {
    container.innerHTML = "";
    photoData.forEach(
        (data, i) => {
            const clone = imageBox.content.cloneNode(true);
            const actImgBox = clone.querySelector(".imageBox");

            clone.querySelector(".cap").textContent = data.title;
            clone.querySelector(".imgA").src = data.thumb;
            actImgBox.setAttribute("onclick", `setter(${i})`);

            container.appendChild(clone);
        }, 
    );
}

renderImages();

let view = document.querySelector(".imageShow");
const closeBtn = document.querySelector('.btnClose');
let clicked = false;

let indexer = null;
let indexCurr = null;
function setter(index){
    console.log(index);
    indexer = index;
    if (indexCurr == index) {
        view.classList.toggle('hidden');
        closeBtn.classList.add("hidder");
    }
    else{
        indexCurr = index;
        view.classList.remove('hidden');
    }
    
    
    view.querySelector('.mainPic').src = photoData[index].image;
    view.querySelector('.title').textContent = photoData[index].title;
    view.querySelector('.description').textContent = photoData[index].caption;
    view.querySelector('.linker').href = photoData[index].image;
    if (!view.classList.contains('hidden')) {
        requestAnimationFrame(() => {
            view.scrollIntoView({ behavior: "smooth" });
            closeBtn.classList.remove("hidder");
        });
    }
}



closeBtn.addEventListener("click", ()=>{
    view.classList.add("hidden");
    closeBtn.classList.add("hidder");
});


function helper(ind) {
    view.querySelector('.mainPic').src = photoData[ind].image;
    view.querySelector('.title').textContent = photoData[ind].title;
    view.querySelector('.description').textContent = photoData[ind].caption;
    view.querySelector('.linker').href = photoData[ind].image;
    console.log(ind);
}

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener("click", ()=>{
    if (indexer != null && indexer != 25) {
        indexer++;
        helper(indexer);
    }
    
});

prevBtn.addEventListener("click", ()=>{
    if (indexer != null && indexer > 0) {
        indexer--;
        helper(indexer);
        
    }

    console.log("clicked-");
    
});