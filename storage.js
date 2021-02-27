function Storage(){  // Constructor

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmFromStorage();

    films.push(newFilm);

/*
    [
        {title: "asdas",director : "sdasdasd",url : "231421412"}
        {title: "asdas",director : "sdasdasd",url : "231421412"}
        {title: "asdas",director : "sdasdasd",url : "231421412"}
    ]
*/

localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
