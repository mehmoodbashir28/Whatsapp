let contacts = [
    {
        name: "Ali",
        imgURL: "ali.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `0300-1234567`,
        email: `ALi123@example.com`,
        'chat-message': `Hey there! I am using WhatsApp.`
    },

    {
        name: "Ahmed",
        imgURL: "ahmed.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0313-2239567`,
        email: `Ahmed234@example.com`,
        'chat-message': `Stay there to prove everyone wrong.`
    },

    {
        name: "zeeshan",
        imgURL: "zeeshan.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0321-5236561`,
        email: `Zeeshan345@example.com`,
        'chat-message': `urgent calls only.`
    },

    {
        name: "Ahsan",
        imgURL: "ahsan.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909092564656`,
        email: `Ahsan456@example.com`,
        'chat-message': `busy`
    },

    {
        name: "irfan",
        imgURL: "irfan.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0321-2951489`,
        email: `Irfan567@example.com`,
        'chat-message': `sleeping.`
    },

    {
        name: "arman",
        imgURL: "arman.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0331-6534564`,
        email: `Arman678@example.com`,
        'chat-message': `new number.`
    },

    {
        name: "hasan",
        imgURL: "hassan.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `0334-39814563`,
        email: `Hassan789@example.com`,
        'chat-message': `watching movie.`
    },

    {
        name: "ghani",
        imgURL: "ghani.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0315-2444560`,
        email: `Ghani987@example.com`,
        'chat-message': `battery about to die.`
    },

    {
        name: "shamir zaman",
        imgURL: "shamir.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0300-2389`,
        email: `shamir892@example.com`,
        'chat-message': `At Gym.`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">

        </div>

        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>

    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector("h4").style = `display: none`;
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}