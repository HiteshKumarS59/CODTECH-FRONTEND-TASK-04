import { auth, db, doc, getDoc, setDoc, signOut } from "./firebase-config.js";

// Get User Data
auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();

        const progressContainer = document.getElementById("progress-container");
        progressContainer.innerHTML = "";

        for (const [course, progress] of Object.entries(userData.progress || {})) {
            const courseDiv = document.createElement("div");
            courseDiv.innerHTML = `
                <h3>${course}</h3>
                <progress value="${progress}" max="100"></progress>
                <button onclick="updateProgress('${course}')">Update</button>
            `;
            progressContainer.appendChild(courseDiv);
        }
    } else {
        window.location.href = "auth.html"; // Redirect if not logged in
    }
});

// Update Progress
window.updateProgress = async (course) => {
    const newProgress = prompt("Enter new progress (0-100):");
    if (newProgress !== null && newProgress >= 0 && newProgress <= 100) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();

        userData.progress[course] = parseInt(newProgress);
        await setDoc(userRef, userData);

        alert("Progress Updated!");
        window.location.reload();
    }
};

// Logout
document.getElementById("logout-btn").addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "auth.html";
});
