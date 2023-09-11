

// =====================
//     DOM Elements
// ===================
const modal = document.getElementById("contact_modal");
const form = document.querySelector(".modal__form");

const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");


// =====================
//        GLOBALE
// =====================
const RESULTS = {
    first: '',
    last:'',
    email: '',
    message: ''
  }


// =====================
//     FUNCTIONS
//   (définitions)
// =====================

// function launch modal form
const displayModal = () => {
    modal.style.display = "block";
  };
  // function close modal event
  const closeModal = () => {
    modal.style.display = "none";
  };

  //function de réinitialisation des champs

  const resetForm = () => {
    inputFirst.value = '';
    inputLast.value = '';
    inputEmail.value = '';
    inputMessage.value = '';
  };


  // function  soumission formulaire 
  const submit = (event) => {
    event.preventDefault();
  
    RESULTS.first = inputFirst.value;
    RESULTS.last = inputLast.value;
    RESULTS.email = inputEmail.value;
    RESULTS.message = inputMessage.value;
  

   // reset le formulaire 
    resetForm();
  
    // Close modal
    closeModal();
  };

// =================================
//      VALIDATION FORMULAIRE
// =================================


document.querySelector(".contact_button").addEventListener("click", displayModal);

 
form.addEventListener("submit", submit);

console.log(RESULTS)
