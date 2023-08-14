// HTML Elements Variables
const addNoteBtn = document.getElementById("addNote");
const settingsBtn = document.getElementById("settings");
const searchBar = document.getElementById("searchBar");



// App Enents
document.addEventListener('click', (e)=>{
    if(e.target != searchBar){
        searchBar.classList.remove('large');
    }
}, true) // turn on capturing


searchBar.addEventListener('click', (e)=>{
    searchBar.classList.add('large');
})

addNoteBtn.addEventListener('click', ()=>{

})

settingsBtn.addEventListener('click', ()=>{
    
})


// tesing if timouts are cleared:

// window.originalSetTimeout = window.setTimeout;
// window.originalClearTimeout = window.clearTimeout;
// window.activeTimers = 0;

// window.setTimeout = function(func, delay) {
//     window.activeTimers++;
//     console.log(activeTimers)
//     return window.originalSetTimeout(func, delay);
// };

// window.clearTimeout = function(timerID) {
//     window.activeTimers--;
//     console.log(activeTimers)
//     window.originalClearTimeout(timerID);
// };

searchBar.querySelector('input').addEventListener('input', ()=>{
    let allNotes = document.querySelectorAll('[note]');
    console.log(allNotes)
    let searchtext = searchBar.querySelector('input').value
    allNotes.forEach((note)=>{
        if(!note.querySelector(".noteContent").textContent.includes(searchtext)){
            note.classList.add('hide');
            setTimeout(() => {
                note.classList.add('none');
            }, 200);
        }else{
            note.classList.remove('none');
            setTimeout(() => {
                note.classList.remove('hide');
            }, 200);
        }
    })
})
