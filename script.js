/* PHOTOS & CAPTIONS */
const photos = [
    "photos/mam1.jpg","photos/mam2.jpg","photos/mam3.jpg",
    "photos/mam4.jpg","photos/mam5.jpg","photos/mam6.jpg",
    "photos/mam7.jpg","photos/mam8.jpg","photos/mam9.jpg",
    "photos/mam11.jpg","photos/mam13.jpg"
];

const captions = [
    "A beacon of dedication 🌟","Inspiring every student’s journey 📖","Kindness in every word 💖",
    "Wisdom that lights the way ✨","Patience beyond measure ⏳","Motivating dreams to reality 🚀",
    "Caring with a big heart 🌸","Guiding with love and knowledge ❤️","Leadership through example 🏆",
    "Encouragement that uplifts 💫","Forever inspiring and unforgettable 🌷"
];

let index = 0;

/* SLIDESHOW */
function startSlideshow() {
    document.getElementById("layer1").classList.remove("active");
    document.getElementById("layer2").classList.add("active");
    showNextPhoto();
}

function showNextPhoto() {
    if (index < photos.length) {
        const img = document.getElementById("photo");
        const caption = document.getElementById("caption");

        img.src = photos[index];
        caption.textContent = captions[index];

        img.classList.remove("active");
        caption.classList.remove("active");

        setTimeout(() => {
            img.classList.add("active");
            caption.classList.add("active");
        }, 100);

        index++;
        setTimeout(showNextPhoto, 3000);

    } else {
        document.getElementById("layer2").classList.remove("active");
        document.getElementById("layer3").classList.add("active");
        document.querySelector(".birthday-header").style.display = "none";
        startTyping();
    }
}

/* TYPING EFFECT */
const text = `
Happy Birthday, Akshatha Mam 🤍
You are not just a teacher, you are a blessing in my life.
Your care, patience, and love have shaped me more than you’ll ever know.
In your words I found guidance, in your smile I found comfort,
and in your presence I found the strength to believe in myself.
I carry immense respect, gratitude, and pure love for you in my heart.
May your life be filled with the same warmth and happiness
that you spread to everyone around you—especially to me. 🌸
`;

let tIndex = 0;
function startTyping() {
    const target = document.getElementById("typingText");
    if (tIndex < text.length) {
        target.innerHTML += text.charAt(tIndex);
        tIndex++;
        setTimeout(startTyping, 40);
    } else {
        // Show signature AFTER typing
        document.getElementById("signature").style.opacity = 1;
    }
}
