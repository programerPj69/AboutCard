function showCard(cardId) {
    // Get the selected card
    const selectedCard = document.getElementById(`${cardId}-card`);

    // Toggle the card's display
    if (selectedCard.style.display === 'block') {
        selectedCard.style.display = 'none'; // Hide if it's already visible
    } else {
        // Hide all other cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.display = 'none');

        // Show the selected card
        selectedCard.style.display = 'block';
    }
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = './asset/resume.pdf'; 
    link.click();
}
