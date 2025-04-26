/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const formData = new FormData(form);
            const entries = Object.fromEntries(formData.entries());
            
            console.log("Form Data Submitted:", entries);
            alert("Form submitted successfully!");
            
            form.reset();
        });
    });
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
            // Open the clicked one
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
