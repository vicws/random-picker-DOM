// TODO: add options to HTML: pick through text or dial? to pick between random numbers and such.

function pickOptions() {
    const options = document.getElementById('options').value;
    const splitOptions = options.split(',');

    let randomSelection = Math.floor(Math.random() * splitOptions.length);
    let selectedOption = splitOptions[randomSelection].trim().toLowerCase();

    if (options == '') {
        const submitBtn = document.getElementById('awesome-button')
        submitBtn.innerHTML = 'You gotta write something before clicking!';

    } else {

        switch (selectedOption) {

            case "babies":
                alert("Alright, tonight we're going for ba.... yo, why the $&@# did you put babies as an option? Alright, I'm calling the cops.");
                break;

            case "souls":
                alert("HELL YEAH, WE'RE FEASTING ON THE SOULS OF THE UNWORTHY TONIGHT!");
                break;

            case "league":
            case "league of legends":
            case "lol":
                alert("For real? Fine, I guess it's League of Legends today...");
                break;

            case "naruto":
                alert("Dattebayo! We're watching Naruto!");
                break;

            case "vegan":
            case "vegan food":
                alert("Vegan food? You MUST be a Slytherin.");
                break;

            default:
                alert(`Alright, the gods have decided: it's ${selectedOption} time!`);
                break;
        }
    }
}