var liste = [
{ tittle: "le magic", image: "1.jpg", description: "chamseddine", prix: 120, type: "Money",note:6, },
{ tittle: "la vie en rose", image: "2.jpg", description: "fawzi", prix: 80, type: "Money",note:7, },
{ tittle: "ici c'est paris", image: "4.jpg", description: "houssam", prix: 220, type: "Money", note:4,},
{ tittle: "harry potter", image: "5.jpg", description: "nadir", prix: 130, type: "Money",note:9, },
{ tittle: "how to make money", image: "1.jpg", description: "Mr houssam 2", prix: 400, type: "loi",note:8, },
{ tittle: "go on", image: "2.jpg", description: "amin", prix: 125, type: "loi",note:5, },
{ tittle: "vive dz", image: "4.jpg", description: "abdelhafid", prix: 135, type: "loi",note:4, },
{ tittle: "oran ", image: "5.jpg", description: "imed", prix: 46, type: "loi",note:2, },

]
for (let index = 0; index < liste.length; index++) {
    document.getElementById("tout").innerHTML +=
    `
<div class="carte">
    <img class="modele" src= ${liste[index].image}>
    <h1 class="tittle"> ${liste[index].tittle}</h1>
    <div class="details">
        <h1>${liste[index].prix}
        <p>${liste[index].description}
    </div>
<div>
`
if (liste[index].prix < 60) {
    document.getElementById("bookmoney").innerHTML +=
        `
    <div class="carte">
        <img class="modele" src= ${liste[index].image}>
        <h1 class="tittle"> ${liste[index].tittle}</h1>
        <div class="details">
            <h1>${liste[index].prix}
            <p>${liste[index].description}
        </div>
    <div>
    `  } 
    
    if(liste[index].note > 5){
        document.getElementById("bookloi").innerHTML +=
            `
        <div class="carte">
            <img class="modele" src= ${liste[index].image}>
            <h1 class="tittle"> ${liste[index].tittle}</h1>
            <div class="details">
                <h1>${liste[index].prix}
                <p>${liste[index].description}
            </div>
        <div>
        `


    }
        
}