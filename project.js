const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// UI Objesini Başlatma
const ui = new UI();

//Storage Objesi üret
const storage = new Storage();
// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm Alanları doldurun...", "danger");
    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI (newFilm); // Arayüze Film Ekleme
        storage.addFilmToStorage(newFilm); // Storage a Film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success");
    }


ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}