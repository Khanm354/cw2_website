// Get form and input elements
const form = document.getElementById("feedbackForm");
const titleInput = document.getElementById("title");
const languageInput = document.getElementById("language");
const codeInput = document.getElementById("code");

// Get list element to display snippets
const snippetList = document.getElementById("snippet-list");

// Check local storage for existing snippets
let snippets = JSON.parse(localStorage.getItem("snippets")) || [];

// Update snippet list on page load
updateSnippetList();

// Add event listener to form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if inputs are blank
  if (titleInput.value.trim() === "") {
    showError(titleInput, "Please enter your title.");
    return;
  }

  if (languageInput.value.trim() === "") {
    showError(languageInput, "Please enter a valid language.");
    return;
  }

  if (codeInput.value.trim() === "") {
    showError(codeInput, "Please enter your code.");
    return;
  }

  // Create new snippet object
  const snippet = {
    title: titleInput.value,
    language: languageInput.value,
    code: codeInput.value,
  };

  // Add new snippet to snippets array
  snippets.push(snippet);

  // Save snippets to local storage
  localStorage.setItem("snippets", JSON.stringify(snippets));

  // Clear form inputs
  form.reset();

  // Update snippet list on page
  updateSnippetList();
});

// Function to update snippet list on page
function updateSnippetList() {
  // Clear existing list items
  snippetList.innerHTML = "";

  // Loop through snippets and create list items
  snippets.forEach((snippet, index) => {
    const li = document.createElement("li");

    // Add hover and click events for deleting
    li.addEventListener("mouseover", () => {
      li.style.textDecoration = "line-through";
    });

    li.addEventListener("mouseout", () => {
      li.style.textDecoration = "none";
    });

    li.addEventListener("click", () => {
      snippets.splice(index, 1);
      localStorage.setItem("snippets", JSON.stringify(snippets));
      updateSnippetList();
    });

    li.innerHTML = `
      <h5>${snippet.title}</h5>
      <p><strong>Language: </strong>${snippet.language}</p>
      <pre><code>${snippet.code}</code></pre>
    `;
    snippetList.appendChild(li);
  });
}

// Function to show error message under input
function showError(input, message) {
  const helpText = input.nextElementSibling;
  helpText.innerText = message;
  helpText.style.display = "block";
}
