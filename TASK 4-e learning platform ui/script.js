document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    const courses = {
        "1": { title: "Web Development", description: "Learn HTML, CSS, JavaScript", video: "videos/webdev.mp4" },
        "2": { title: "Machine Learning", description: "AI and ML concepts", video: "videos/ml.mp4" }
    };

    if (courseId && courses[courseId]) {
        document.getElementById("course-title").textContent = courses[courseId].title;
        document.getElementById("course-description").textContent = courses[courseId].description;
        document.getElementById("course-video").src = courses[courseId].video;
    }
});

function markCompleted() {
    alert("Course marked as completed!");
    localStorage.setItem("courseCompleted", "true");
}
