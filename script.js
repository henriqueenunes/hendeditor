
window.onload = function(){
   handleGetTheme()
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const className = document.body.className
    handleSaveTheme(className)
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