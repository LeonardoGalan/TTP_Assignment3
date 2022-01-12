// #1 Select the section with an id of container without using querySelector.

let containerEl = document.getElementById("container");

// #2 Select the section with an id of container using querySelector.

let containerQuery = document.querySelector("#container");

// #3 Select all of the list items with a class of "second".

let secondEl = document.getElementsByClassName("second");

// #4 Select a list item with a class of third, but only the list item inside of the ol tag.

let cThird = document.querySelector("ol .third");

// #5 Give the section with an id of container the text "Hello!".

let pText = (document.querySelector("#container").innerText = "Hello");

// #6 Add the class main to the div with a class of footer.

let footerMain = document.querySelector(".footer").classList.add("main");

// #7 Remove the class main on the div with a class of footer.

let footerNoMain = footerMain.classList.remove("main");

// #8 Create a new li element.

let li = document.createElement("li");

// #9 Give the li the text "four".

li.innerText = "four";

// #10 Append the li to the ul element.

let appendList = document.querySelector("ul").appendChild(li);

// #12 Loop over all of the lis inside the ol tag and give them a background color of "green".

let listOl = document.querySelectorAll("ol li");
for (let i = 0; i < listOl.length; i++) {
  listOl[i].style.backgroundColor = "green";
}

// #13 Remove the div with a class of footer.

document.querySelector("#footer").remove();
