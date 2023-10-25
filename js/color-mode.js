// define dom elements 

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// load the user preffered color mode from storage

function loadColorMode(){
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updateToggleButton();
}

loadColorMode();

// toggle the color mode

toggleButton.addEventListener("click",() => {
    saveColorMode();
});

// saving user color prefrence at local storage

function saveColorMode(){
    const currentMode = root.classList.contains("dark-mode") 
    ? "light-mode"
    :"dark-mode";
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode)
    updateToggleButton()
}

function updateToggleButton(){
    if (root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)";
    }else{
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}
