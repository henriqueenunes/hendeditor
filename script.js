
window.onload = function(){
   handleGetTheme();
   this.document.getElementById("ham-menu").style.display="none";
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const className = document.body.className
    handleSaveTheme(className)
}
function scrollToAbout(){
    document.getElementById('about-section').scrollIntoView({behavior:'smooth'});
    document.getElementById('about-btn').style.color='var(--destaque)';
    document.getElementById('about-btn').style.textDecoration='underline';

}
function scrollToPlanos() {
    document.getElementById('planos-section').scrollIntoView({behavior:'smooth'});
}
function scrollToHome() {
    window.scrollTo({
    top: 0,
    behavior: "smooth" 
    });
}
function scrollToProjects() {
    document.getElementById('projects-section').scrollIntoView({behavior:'smooth'});
}
function handleSaveTheme(theme){
    localStorage.setItem("theme", theme)
}
function handleGetTheme(){
    const theme = localStorage.getItem("theme");
    if (theme === 'dark-mode'){
        document.body.classList.toggle('dark-mode');
    } 
    
}

function d(){
    let caixa = document.getElementById("ham-menu");
    if (caixa.style.display == "none"){
        caixa.style.display = "flex";
    } else {
        caixa.style.display = "none";
        
    }
}