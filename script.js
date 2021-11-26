// ASSIGNMENT THREE
// (1)
// practice variables to test run
let contactList = [{
        name: "John Smith",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    },
    {
        name: "Jane Doe",
        phone: "123-867-5309",
        address: "Address address this is a place. ",
        email: "Janeeatsdoe@gmail.com",
    },
    {
        name: "Mark Jones",
        phone: "123-832-9199",
        address: "This Sure is a place",
        email: "adress@mail.example.com",
    },
];



// ASSIGNMENT TWO

// Index Page
function cleanUpIndex() {
    // removes all nodes unique to the index page
    let pop1 = document.querySelectorAll(".contacts a");
    for (i = 0; i < pop1.length; i++) { pop1[i].remove(); }
};

function createSingleIndex(contact) {
    // creates a new card
    // takes an object, returns a node
    let card = document.createElement("a");
    card.setAttribute("href", "PageThree.html");

    let para = document.createElement("p");
    para.classList.add("contact");
    para.textContent = contact["name"];

    card.appendChild(para);

    // (4)
    card.addEventListener("click", (event) => {
        event.preventDefault();
        let contactName = event.target.textContent;
        for (i = 0; i < contactList.length; i++) {
            let placeContact = contactList[i]
            if (placeContact['name'] == contactName) {
                console.log(contactName, placeContact);

            }
        }
    })

    return card;
};

function renderIndex(contactList) {
    // creates all of the DOM nodes that are unique to index
    // will take an array of contacts
    // reference createSingleIndex, and add it to the page
    let page = document.querySelector(".contacts");
    for (i = 0; i < contactList.length; i++) {
        let card = createSingleIndex(contactList[i]);
        page.appendChild(card);
    }
};

// View Page (page 3)
function cleanUpView() {
    // removes all of the nodes for this page
    let pop3 = document.querySelector("page3");
    if (pop3 != null) {
        pop3.remove();
    };
};


function renderView(contactList) {
    // creates the elements that are unique to the view page
    // takes an object (which has contact info)
    let defaultPage = document.querySelector("main")

    let mainpage = document.createElement('div');
    mainpage.setAttribute('id', '#page3');

    defaultPage.append(mainpage);

    let info = document.createElement("div");
    info.classList.add("contactinfo");
    mainpage.appendChild(info)

    let pic = document.createElement("img");
    pic.setAttribute("src", "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png");
    pic.setAttribute("alt", "Profile picture");
    info.appendChild(pic);

    let title = document.createElement("h1");
    title.textContent = contactList["name"];
    info.appendChild(title)

    let email = document.createElement("p");
    email.setAttribute("id", "contactemail");
    email.textContent = `email: ${contactList["email"]}`;
    info.appendChild(email);

    let phone = document.createElement("p");
    phone.classList.add("contactphone");
    phone.textContent = `cell: ${contactList["phone"]}`;
    info.appendChild(phone);

    let address = document.createElement("p");
    address.classList.add("contactaddress");
    address.textContent = `address: ${contactList["address"]}`;
    info.appendChild(address);

    let buttonsplace = document.createElement("p");
    buttonsplace.classList.add("buttons");
    buttonsplace.setAttribute("id", "contactbuttons");
    info.appendChild(buttonsplace);

    let editor = document.createElement("button");
    editor.classList.add("redbutton");
    editor.setAttribute("value", "Edit");
    editor.textContent = "Edit";
    buttonsplace.appendChild(editor);

    let close = document.createElement("button");
    close.classList.add("bluebutton");
    close.setAttribute("value", "Close");
    close.textContent = "Close";
    buttonsplace.appendChild(close);
};

// Create Page (page 2)
function cleanUpCreate() {
    // removes all unique nodes
    let pop2 = document.querySelector("#page2");
    if (pop2 != null) {
        pop2.remove();
    };
};

function renderCreate() {
    // creates all of the DOM nodes
    let defaultPage = document.querySelector("main")

    let mainpage = document.createElement('div');
    mainpage.setAttribute('id', 'page2');
    defaultPage.appendChild(mainpage)


    let editpage = document.createElement("div");
    editpage.classList.add("contactedit");
    mainpage.appendChild(editpage);

    let div_image = document.createElement("div");
    div_image.classList.add("contactimg");
    editpage.appendChild(div_image);

    let imgpro = document.createElement("img");
    imgpro.setAttribute("src", "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png");
    imgpro.setAttribute("class", "profilepic");
    imgpro.setAttribute("alt", "Profile picture");
    div_image.appendChild(imgpro);


    let Div_for_form = document.createElement("div");
    Div_for_form.classList.add("form");
    editpage.appendChild(Div_for_form);

    let former = document.createElement("form");
    Div_for_form.appendChild(former);

    // makes four with a loop
    for (i = 0; i < 4; i++) {
        let container = document.createElement("div");
        container.classList.add("plus");
        former.appendChild(container);

        let type = "";
        let input = "";
        if (i === 0) {
            input = "name";
            type = "text";
        } else if (i === 1) {
            input = "phone";
            type = "tel";
        } else if (i === 2) {
            input = "address";
            type = "text";
        } else {
            input = "email";
            type = "email";
        };

        let feild_input = document.createElement("input");
        feild_input.setAttribute("type", type);
        feild_input.setAttribute("id", `contact${input}`);
        feild_input.setAttribute("name", `contact${input}`);
        feild_input.setAttribute('placeholder', `Contact ${input.toUpperCase().substring(0, 1) + input.substring(1)}`);
        container.appendChild(feild_input);


        let button = document.createElement("button");
        button.classList.add("extrafield");
        button.setAttribute("id", `extra${input}field`);
        button.setAttribute("name", `extra${input}field`);
        button.textContent = "+";
        // if/else added so the "+" button won't show up on name input
        if (input === "name") {
            button.setAttribute("id", "emptyformat");
        } else {
            button.setAttribute("id", `extra${input}field`);
        };
        container.appendChild(button);
    };

    let button_place = document.createElement("div");
    button_place.setAttribute("class", "buttons");
    former.appendChild(button_place);

    let save = document.createElement("button");
    save.setAttribute("class", "redbutton");
    save.classList.add("button", "save");
    save.setAttribute("id", "savecontact");
    save.setAttribute("name", "savecontact");
    save.textContent = "Save Contact";
    button_place.appendChild(save);


    let cancel = document.createElement("button");
    cancel.setAttribute("type", "reset");
    cancel.classList.add("bluebutton");
    cancel.setAttribute("id", "cancel");
    cancel.setAttribute("name", "cancel");
    cancel.textContent = "Cancel";
    button_place.appendChild(cancel);
};

//  ASSIGNMENT THREE
// (2)

function clear_main(event) {
    event.preventDefault();
    cleanUpView();
    cleanUpCreate();
    cleanUpIndex();
    renderIndex(contactList);
}

let Contacts = document.querySelector("a.mainbutton");
Contacts.addEventListener("click", clear_main);

// (3)
function clear_new_con(event) {
    event.preventDefault();
    cleanUpCreate();
    cleanUpIndex();
    cleanUpView();
    renderCreate();
};

let Create_new_contact = document.querySelector(".newContact");
Create_new_contact.addEventListener("click", clear_new_con);