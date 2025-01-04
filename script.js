

document.addEventListener("DOMContentLoaded", () => {
  const skillElements = document.querySelectorAll(".skill");

  skillElements.forEach((skill) => {
    skill.addEventListener("click", () => {
      const isSelected = skill.getAttribute("data-selected") === "true";

      // Toggle the `data-selected` attribute
      skill.setAttribute("data-selected", !isSelected);

      // Update the CSS dynamically
      if (!isSelected) {
        skill.classList.add("selected");
      } else {
        skill.classList.remove("selected");
      }
    });
  });
});

function generateConnectSection() {
  const platforms = [
      { id: "twitter_username", label: "🐦 Twitter", url: "https://twitter.com/" },
      { id: "twitch_username", label: "📺 Twitch", url: "https://twitch.tv/" },
      { id: "linkedin_username", label: "🔗 LinkedIn", url: "https://linkedin.com/in/" },
      { id: "github_username", label: "🐙 GitHub", url: "https://github.com/" },
      { id: "instagram_username", label: "📸 Instagram", url: "https://instagram.com/" },
      { id: "devto_username", label: "📝 Dev.to", url: "https://dev.to/" },
      { id: "threads_username", label: "🧵 Threads", url: "https://www.threads.net/" },
      { id: "medium_username", label: "💼 Medium", url: "https://medium.com/@" },
      { id: "email_address", label: "💌 Email", url: "mailto:" },
  ];

  let connectSection = "**Let's Connect**\n";
  platforms.forEach((platform) => {
      const username = document.getElementById(platform.id).value.trim();
      if (username) {
          connectSection += `- ${platform.label} [${username}](${platform.url}${username})\n`;
      }
  });

  return connectSection;
}

// Object to store user selections
const userSelections = {
  interests: [],
  goals: [],
  funFacts: [],
  askMeAbout: [],
};

// Helper function to handle selection updates
function handleSelection(name, selector) {
  const selected = Array.from(document.querySelectorAll(selector))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  userSelections[name] = selected;
  console.log(`Selected ${name}:`, selected);
}

// Add event listeners for each category
document.querySelectorAll('input[name="exploring"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => handleSelection("exploring", 'input[name="exploring"]'));
});

document.querySelectorAll('input[name="interest"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => handleSelection("interests", 'input[name="interest"]'));
});

document.querySelectorAll('input[name="goals"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => handleSelection("goals", 'input[name="goals"]'));
});

document.querySelectorAll('input[name="funFacts"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => handleSelection("funFacts", 'input[name="funFacts"]'));
});

document.querySelectorAll('input[name="askMeAbout"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => handleSelection("askMeAbout", 'input[name="askMeAbout"]'));
});



/*
// Function to generate README content from user selections
function generateReadmeFromSelections() {
  let readmeContent = "## Generated README\n\n";

  // Add Interests
  if (userSelections.interests.length) {
    readmeContent += "### Interests\n";
    userSelections.interests.forEach((interest) => {
      readmeContent += `- ${interest}\n`;
    });
    readmeContent += "\n";
  }

  // Add Goals
  if (userSelections.goals.length) {
    readmeContent += "### Goals\n";
    userSelections.goals.forEach((goal) => {
      readmeContent += `- ${goal}\n`;
    });
    readmeContent += "\n";
  }

  // Add Fun Facts
  if (userSelections.funFacts.length) {
    readmeContent += "### Fun Facts\n";
    userSelections.funFacts.forEach((fact) => {
      readmeContent += `- ${fact}\n`;
    });
    readmeContent += "\n";
  }

  // Add Ask Me About
  if (userSelections.askMeAbout.length) {
    readmeContent += "### Ask Me About\n";
    userSelections.askMeAbout.forEach((item) => {
      readmeContent += `- ${item}\n`;
    });
    readmeContent += "\n";
  }

  // Update the README preview
  document.getElementById("output").textContent = readmeContent;
}

// Add a button to generate README for testing
document.getElementById("generateReadmeButton").addEventListener("click", () => {
  generateReadmeFromSelections();
});
*/





// Function to create a new project block
function createProjectBlock() {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  const fields = [
    { label: "Project Title:", type: "text", className: "project-title", placeholder: "[Project Name]" },
    { label: "Project Description:", type: "textarea", className: "project-description", placeholder: "Brief project description.", rows: 3 },
    { label: "Project URL:", type: "url", className: "project-url", placeholder: "https://github.com/username/project-name" },
  ];

  fields.forEach((field) => {
    const label = document.createElement("label");
    label.textContent = field.label;

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
      input.rows = field.rows || 2;
    } else {
      input = document.createElement("input");
      input.type = field.type;
    }

    input.className = field.className;
    input.placeholder = field.placeholder;
    input.required = true;

    projectContainer.appendChild(label);
    projectContainer.appendChild(input);
    projectContainer.appendChild(document.createElement("br"));
  });

  const categoryLabel = document.createElement("label");
  categoryLabel.textContent = "Category:";
  projectContainer.appendChild(categoryLabel);

  const categorySelect = document.createElement("select");
  categorySelect.className = "project-category";

  const categories = ["Web App", "API", "Open Source", "Tool"];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  projectContainer.appendChild(categorySelect);
  projectContainer.appendChild(document.createElement("br"));
  projectContainer.appendChild(document.createElement("br"));

  // Add a delete button to the project
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-project-button";
  deleteButton.textContent = "Delete Project";

  deleteButton.addEventListener("click", () => {
    projectContainer.remove();
  });

  projectContainer.appendChild(deleteButton);
  projectContainer.appendChild(document.createElement("br"));

  return projectContainer;
}

// Event listener to add a new project block
document.getElementById("addProjectButton").addEventListener("click", () => {
  const projectsSection = document.getElementById("projects-section");
  const newProject = createProjectBlock();
  projectsSection.appendChild(newProject);
});

    // Selectors
    const descriptionInput = document.getElementById("content-description");
    const urlInput = document.getElementById("content-url");
    const addButton = document.getElementById("add-content");
    const renderedContent = document.getElementById("rendered-content");

   
    
    
    // Helper function to generate "Ask Me About" section
    function generateAskMeAboutSection() {
      const checkboxes = document.querySelectorAll('input[name="about"]:checked');
      if (checkboxes.length === 0) return ""; // Skip if no items are selected
    
      let sectionContent = "## 💬 Ask Me About\n";
      checkboxes.forEach((checkbox) => {
        sectionContent += `- ${checkbox.value.trim()}\n`;
      });
    
      return sectionContent;
    }
    
    // Helper function to generate "Goals" section
    function generateGoalsSection() {
      const goals = document.querySelectorAll(".goal-item");
      if (goals.length === 0) return ""; // Skip if no goals are added
    
      let sectionContent = "## 🎯 Goals for 2025\n";
      goals.forEach((goal) => {
        sectionContent += `- ${goal.value.trim()}\n`;
      });
    
      return sectionContent;
    }
   /*
      // Generate content for sections
      const askMeAboutSection = generateAskMeAboutSection();
      const goalsSection = generateGoalsSection();
      const funFactsSection = generateFunFactsSection();
      const projectsSection = generateProjectsSection();
      const dynamicContentSection = generateDynamicContentSection();
      const interactiveElementsSection = generateInteractiveElementsSection();
    
      // Construct README content
      const readmeContent = `
    # ${title}
    
    ${description}
    
    ${askMeAboutSection}
    
    ${goalsSection}
    
    ${projectsSection}
    
    ${funFactsSection}
    
    ${dynamicContentSection}
    
    ${interactiveElementsSection}
    `;
    
   */
