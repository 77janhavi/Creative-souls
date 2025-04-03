let progress = 0;

function submitTask(taskId) {
    // Get the textarea for the task
    let taskAnswer = document.getElementById(taskId + "Answer").value;
    
    if (taskAnswer.trim() === "") {
        alert("Please provide an answer for the task before submitting.");
        return;
    }

    // Provide feedback based on the task ID (You can make this more dynamic later)
    let feedbackContainer = document.getElementById('feedback-container');
    let feedbackMessage = document.createElement('p');
    
    if (taskId === "task1") {
        feedbackMessage.innerText = "Task 1: Solution submitted! Your analysis seems comprehensive.";
    } else if (taskId === "task2") {
        feedbackMessage.innerText = "Task 2: Programming challenge solution received. Code seems correct.";
    }
    
    feedbackContainer.appendChild(feedbackMessage);
    
    // Update the progress
    updateProgress();
}

function updateProgress() {
    progress += 50; // Since there are two tasks, each completion increases by 50%
    
    if (progress > 100) progress = 100; // Ensure progress doesn't go over 100%

    let progressBar = document.getElementById('progress-filled');
    let progressText = document.getElementById('progress-text');
    
    progressBar.style.width = progress + "%";
    progressText.innerText = progress + "% Complete";
}
