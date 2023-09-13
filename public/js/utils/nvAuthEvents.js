//LOGIN
const form = document.getElementById("login-form");

form.addEventListener("submit", async (event) => {
    
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form values by their names
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    // Create an object to send in the request body
    const data = { email, password };

    try {
      // Send an HTTP POST request to your server
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });

      if (response.ok) {
        // Successful login
        const result = await response.json();

        if (result.role === 0) {
          // Redirect to the admin dashboard
          window.location.href = "/admin/";
        } else if (result.role === 1) {
          // Redirect to the regular user dashboard
          window.location.href = "/student/dashboard";
        }

        console.log("Access Token:", result.accessToken);
        // window.location.href = "/admin/dashboard";
      } else {
        // Handle login error
        const errorData = await response.json();
        console.error("Login Error:", errorData.message);
      }
    } catch (error) {
      // console.error("An error occurred:", error);
    }
  });
