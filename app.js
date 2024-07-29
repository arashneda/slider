const testiminials = [
  {
    name: "person A",
    photoURL:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "This is a paragraph toerson and is issued for herThisis a paragraph toerson and is issued for herThis is a paragraph toerson and is issued for her certifi a person and is issued for her certificate",
  },
  {
    name: "person B",
    photoURL:
      "https://images.unsplash.com/photo-1712847331947-9460dd2f264b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "ry. Lorem Ipsum has been the n unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
  },
  {
    name: "person C",
    photoURL:
      "https://plus.unsplash.com/premium_photo-1672907031609-16b4d3db8bc6?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "able content of a page whenhat it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infan",
  },
  {
    name: "person D",
    photoURL:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "m ipsum dolor sit amncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu",
  },
];

let imgEl = document.querySelector("img");
let userNameEl = document.querySelector(".userName");
let textEl = document.querySelector(".text");
let time = document.querySelector(".time");

let ind = 0;

updateTestiminial();

function updateTestiminial() {
  const { name, photoURL, text } = testiminials[ind];
  imgEl.src = photoURL;
  userNameEl.innerText = name;
  textEl.innerText = text;
  ind++;
  if(ind == testiminials.length){
    ind = 0
  }
  setTimeout(() => {
    updateTestiminial();
  }, 5000);

}

setInterval(()=>{
  let timeEl = new Date();
  let timeLocal = timeEl.toLocaleTimeString();
  time.innerHTML = timeLocal
} , 1000)
