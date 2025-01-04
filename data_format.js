document.getElementById("readmeForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
        user_name: formData.get("user_name"),
        twitter_username: formData.get("twitter_username"),
        twitch_username: formData.get("twitch_username"),
        linkedin_username: formData.get("linkedin_username"),
        github_username: formData.get("github_username"),
        instagram_username: formData.get("instagram_username"),
        devto_username: formData.get("devto_username"),
        threads_username: formData.get("threads_username"),
        medium_username: formData.get("medium_username"),
        email_address: formData.get("email_address"),
        exploring: Array.from(document.querySelectorAll("input[name='exploring']:checked")).map(e => e.value),
        interests: Array.from(document.querySelectorAll("input[name='interest']:checked")).map(e => e.value),
        askMeAbout: Array.from(document.querySelectorAll("input[name='askMeAbout']:checked")).map(e => e.value),
        goals: Array.from(document.querySelectorAll("input[name='goals']:checked")).map(e => e.value),
        funFacts: Array.from(document.querySelectorAll("input[name='funFacts']:checked")).map(e => e.value),
    };

    const response = await fetch("server.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message || result.error);
});

// Example: Fetching data for download
async function fetchData() {
    const response = await fetch("server.php");
    const data = await response.json();
    console.log(data); // Replace with formatting and download logic
}
