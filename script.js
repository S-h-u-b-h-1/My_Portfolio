let menuVisible = false;

function scroller() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function selectioner() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");


        if (!name || !email || !message) {
            alert("Please fill out all required fields!");
            return;
        }


        alert("Thank you, " + name + "! Your message has been sent successfully.");
        

        form.reset();
    });
}
