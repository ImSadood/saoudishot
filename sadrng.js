let coins = 0;
    let inventory = [];
    let luck = 0;

    // Update the inventory UI whenever the inventory changes
    function updateInventoryUI() {
        const inventoryList = document.getElementById('inventoryList');
        inventoryList.innerHTML = "";
        inventory.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'inventory-item';
        li.textContent = item;
        li.onclick = () => showDeleteConfirmation(index); // Show delete confirmation on item click
        inventoryList.appendChild(li);
    });
    }

    // Function to generate random number and handle coin rewards
    function generateRandomNumber() {
        const luminosityChance = 1200000000 - luck * 12000000;
        let randomNumber = Math.floor(Math.random() * 10000000) + 1;
        let earnedCoins = 0;
        let rarity = "";

    if (randomNumber <= 4999999) {
        earnedCoins = 2;
        rarity = "Common";
    } else if (randomNumber <= 6666666) {
        earnedCoins = 3;
        rarity = "Uncommon";
    } else if (randomNumber <= 7500000) {
        earnedCoins = 4;
        rarity = "Rare";
    } else if (randomNumber <= 8125000) {
        earnedCoins = 16;
        rarity = "Epic";
    } else if (randomNumber <= 8750000) {
        earnedCoins = 64;
        rarity = "Legendary";
    } else if (randomNumber <= 9000000) {
        earnedCoins = 248;
        rarity = "Mythic";
    } else if (randomNumber <= 9050000) {
        earnedCoins = 524;
        rarity = "Master";
    } else if (randomNumber <= 9060000) {
        earnedCoins = 999;
        rarity = "Chromatic";
    } else if (randomNumber <= 9065000) {
        earnedCoins = 7777;
        rarity = "Heavenly";
    } else if (randomNumber <= luminosityChance) {
        earnedCoins = 10000000;
        rarity = "Luminosity";
    }

    coins += earnedCoins;
    document.getElementById('coinCount').textContent = `Coins: ${coins}`;
    document.getElementById('randomNumberDisplay').textContent = `You got a ${rarity} item! Earned ${earnedCoins} coins.`;

    inventory.push(rarity);
    updateInventoryUI();

    document.getElementById('actionButtons').style.display = 'block';
    }

    // Show delete confirmation
    function showDeleteConfirmation(index) {
        document.getElementById('deleteConfirmation').style.display = 'block';
        document.getElementById('confirmDeleteButton').onclick = () => {
        inventory.splice(index, 1); // Remove the item
        updateInventoryUI(); // Update inventory display
        document.getElementById('deleteConfirmation').style.display = 'none'; // Hide confirmation
        };
        document.getElementBy
    }