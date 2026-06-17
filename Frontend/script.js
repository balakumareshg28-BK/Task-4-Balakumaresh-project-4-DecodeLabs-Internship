document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle Mobile Navigation Overlay State
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu workspace automatically if an anchor selection is performed
    const anchorElements = navLinks.querySelectorAll('a');
    anchorElements.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // --- PART A: Fetching data to display on screen (GET request) ---
    function loadTasks() {
        fetch('http://localhost:3000/tasks') 
            .then(response => response.json())
            .then(data => {
                console.log("Tasks from backend:", data);
                
                const taskList = document.getElementById('task-list'); 
                if (!taskList) return; 

                // Clear container to prevent duplicate visual rendering on re-load
                taskList.innerHTML = ''; 

                // Map database array objects directly to modern list elements
                data.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task.title; 
                    
                    // Style your layout slightly for clean readability
                    li.style.padding = '10px';
                    li.style.background = 'rgba(255,255,255,0.05)';
                    li.style.marginBottom = '8px';
                    li.style.borderRadius = '4px';
                    li.style.borderLeft = '4px solid #007bff';

                    if (task.completed) {
                        li.style.textDecoration = 'line-through';
                        li.style.opacity = '0.5';
                    }

                    taskList.appendChild(li);
                });
            })
            .catch(err => console.error("Connection to backend failed:", err));
    }

    // Automatically trigger the fetch function when page opens
    loadTasks(); 


    // --- PART B: Submitting form data to the backend (POST request) ---
    const form = document.querySelector('#task-form'); 

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload

            const userInputField = document.querySelector('#task-input'); 
            const userInput = userInputField.value;

            // Send it dynamically to your backend API
            fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: userInput }) 
            })
            .then(response => response.json())
            .then(result => {
                console.log("Saved successfully:", result);
                loadTasks(); // Refresh UI list from SQLite database entries
                userInputField.value = ''; // Clear input field box automatically
            })
            .catch(err => console.error("Failed to add task:", err));
        });
    }

}); // Closes the DOMContentLoaded block smoothly