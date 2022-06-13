const oneStarBtn= document.getElementById("oneStar")
const twoStarBtn= document.getElementById("twoStar")
const threeStarBtn= document.getElementById("threeStar")
const fourStarBtn= document.getElementById("fourStar")
const fiveStarBtn= document.getElementById("fiveStar")
const btn= document.getElementById("submitBtn")

let rating= 0
const starBtns= [oneStarBtn,twoStarBtn,threeStarBtn,fourStarBtn,fiveStarBtn]
const getRating= (e)=>{

    if(e.target.id == "oneStar"){
        starBtns.forEach(element => element.style.backgroundColor= "hsl(213, 19%, 18%)");
        oneStarBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
        oneStarBtn.style.color = "hsl(0, 0%, 100%)"
        rating = 1
        
    }else if(e.target.id== "twoStar"){
        starBtns.forEach(element => element.style.backgroundColor= "hsl(213, 19%, 18%)");
        twoStarBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
        twoStarBtn.style.color = "hsl(0, 0%, 100%)"
        rating = 2
    }else if(e.target.id== "threeStar"){
        starBtns.forEach(element => element.style.backgroundColor= "hsl(213, 19%, 18%)");
        threeStarBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
        threeStarBtn.style.color = "hsl(0, 0%, 100%)"
        rating = 3
    }else if(e.target.id== "fourStar"){
        starBtns.forEach(element => element.style.backgroundColor= "hsl(213, 19%, 18%)");
        fourStarBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
        fourStarBtn.style.color = "hsl(0, 0%, 100%)"
        rating = 4
    }else if(e.target.id== "fiveStar"){
        starBtns.forEach(element => element.style.backgroundColor= "hsl(213, 19%, 18%)");
        fiveStarBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
        fiveStarBtn.style.color = "hsl(0, 0%, 100%)"
        rating = 5
    }else if(e.target.id=="submitBtn"){
        document.querySelector(".how-we-do-container").classList.add("hidden")
        document.querySelector(".thanks-container").classList.remove("hidden")
        document.querySelector(".your-rating-container").innerHTML= `<p>You selected ${rating} out of 5</p>`
    }
}

window.addEventListener("click", getRating)

