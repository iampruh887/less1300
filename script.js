document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');

    const problems = [
        { id: 1, name: "Young Physicist", difficulty: 1 },
        { id: 2, name: "Beautiful Matrix", difficulty: 1 },
        { id: 3, name: "Queue at the School", difficulty: 1 },
        { id: 4, name: "Borze", difficulty: 1 },
        { id: 5, name: "Beautiful Year", difficulty: 1 },
        { id: 6, name: "Lights Out", difficulty: 1 },
        { id: 7, name: "Word", difficulty: 1 },
        { id: 8, name: "Word Capitalization", difficulty: 1 },
        { id: 9, name: "Nearly Lucky Number", difficulty: 1 },
        { id: 10, name: "Stones on the Table", difficulty: 1 },
        { id: 11, name: "Panoramix's Prediction", difficulty: 1 },
        { id: 12, name: "Ultra-Fast Mathematician", difficulty: 1 },
        { id: 13, name: "Perfect Permutation", difficulty: 1 },
        { id: 14, name: "Arrival of the General", difficulty: 1 },
        { id: 15, name: "Drinks", difficulty: 1 },
        { id: 16, name: "Insomnia cure", difficulty: 1 },
        { id: 17, name: "Cupboards", difficulty: 1 },
        { id: 18, name: "I_love_%username%", difficulty: 1 },
        { id: 19, name: "Tram", difficulty: 1 },
        { id: 20, name: "Helpful Maths", difficulty: 1 },
        { id: 21, name: "Is your horseshoe on the other hoof?", difficulty: 1 },
        { id: 22, name: "Way Too Long Words", difficulty: 1 },
        { id: 23, name: "Boy or Girl", difficulty: 1 },
        { id: 24, name: "Amusing Joke", difficulty: 1 },
        { id: 25, name: "Soft Drinking", difficulty: 1 },
        { id: 26, name: "HQ9+", difficulty: 1 },
        { id: 27, name: "Petya and Strings", difficulty: 1 },
        { id: 28, name: "Team", difficulty: 1 },
        { id: 29, name: "Bit++", difficulty: 1 },
        { id: 30, name: "Effective Approach", difficulty: 2 },
        { id: 31, name: "Dima and Friends", difficulty: 2 },
        { id: 32, name: "Jzzhu and Children", difficulty: 2 },
        { id: 33, name: "Supercentral Point", difficulty: 2 },
        { id: 34, name: "Petr and Book", difficulty: 2 },
        { id: 35, name: "Parallelepiped", difficulty: 2 },
        { id: 36, name: "Reconnaissance 2", difficulty: 2 },
        { id: 37, name: "Even Odds", difficulty: 2 },
        { id: 38, name: "Little Elephant and Rozdil", difficulty: 2 },
        { id: 39, name: "Hexadecimal's theorem", difficulty: 2 },
        { id: 40, name: "Jeff and Digits", difficulty: 2 },
        { id: 41, name: "Xenia and Ringroad", difficulty: 2 },
        { id: 42, name: "Magic Numbers", difficulty: 2 },
        { id: 43, name: "Translation", difficulty: 2 },
        { id: 44, name: "Football", difficulty: 2 },
        { id: 45, name: "Bicycle Chain", difficulty: 2 },
        { id: 46, name: "Sale", difficulty: 2 },
        { id: 47, name: "System of Equations", difficulty: 2 },
        { id: 48, name: "Business trip", difficulty: 2 },
        { id: 49, name: "Dubstep", difficulty: 2 },
        { id: 50, name: "k-String", difficulty: 2 },
        { id: 51, name: "The number of positions", difficulty: 2 },
        { id: 52, name: "Football", difficulty: 2 },
        { id: 53, name: "String Task", difficulty: 2 },
        { id: 54, name: "Little Elephant and Function", difficulty: 2 },
        { id: 55, name: "Present from Lena", difficulty: 2 },
        { id: 56, name: "Dragons", difficulty: 2 },
        { id: 57, name: "Puzzles", difficulty: 2 },
        { id: 58, name: "Chat room", difficulty: 2 },
        { id: 59, name: "Airport", difficulty: 2 },
        { id: 60, name: "DZY Loves Chessboard", difficulty: 3 },
        { id: 61, name: "Pashmak and Flowers", difficulty: 3 },
        { id: 62, name: "Jeff and Periods", difficulty: 3 },
        { id: 63, name: "Little Girl and Game", difficulty: 3 },
        { id: 64, name: "Sail", difficulty: 3 },
        { id: 65, name: "Shower Line", difficulty: 3 },
        { id: 66, name: "Shooshuns and Sequence", difficulty: 3 },
        { id: 67, name: "Xenia and Divisors", difficulty: 3 },
        { id: 68, name: "Letter", difficulty: 3 },
        { id: 69, name: "Kitahara Haruki's Gift", difficulty: 3 },
        { id: 70, name: "Comparing Strings", difficulty: 3 },
        { id: 71, name: "Hungry Sequence", difficulty: 3 },
        { id: 72, name: "Big Segment", difficulty: 3 },
        { id: 73, name: "Little Elephant and Bits", difficulty: 3 },
        { id: 74, name: "Yaroslav and Permutations", difficulty: 3 },
        { id: 75, name: "Fence", difficulty: 3 },
        { id: 76, name: "TL", difficulty: 3 },
        { id: 77, name: "Increase and Decrease", difficulty: 3 },
        { id: 78, name: "Two Bags of Potatoes", difficulty: 3 },
        { id: 79, name: "Unlucky Ticket", difficulty: 3 },
        { id: 80, name: "Boys and Girls", difficulty: 3 },
        { id: 81, name: "Easy Number Challenge", difficulty: 3 },
        { id: 82, name: "Pythagorean Theorem II", difficulty: 3 },
        { id: 83, name: "Cards with Numbers", difficulty: 3 },
        { id: 84, name: "Domino", difficulty: 3 },
        { id: 85, name: "Cinema Line", difficulty: 3 },
        { id: 86, name: "Rank List", difficulty: 3 },
        { id: 87, name: "Cut Ribbon", difficulty: 3 },
        { id: 88, name: "IQ Test", difficulty: 3 },
        { id: 89, name: "Building Permutation", difficulty: 3 },
        { id: 90, name: "Kuriyama Mirai's Stones", difficulty: 3 },
        { id: 91, name: "T-primes", difficulty: 3 },
        { id: 92, name: "Sereja and Suffixes", difficulty: 3 },
        { id: 93, name: "Flipping Game", difficulty: 3 },
        { id: 94, name: "Free Cash", difficulty: 3 },
        { id: 95, name: "Polo the Penguin and Matrix", difficulty: 4 },
        { id: 96, name: "Jzzhu and Sequences", difficulty: 4 },
        { id: 97, name: "Appleman and Card Game", difficulty: 4 },
        { id: 98, name: "Sort the Array", difficulty: 4 },
        { id: 99, name: "Sereja and Bottles", difficulty: 4 },
        { id: 100, name: "Adding Digits", difficulty: 4 }
    ];


    // Load saved tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to create a list item
    function createListItem(problem) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = savedTasks.includes(problem.id);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                savedTasks.push(problem.id);
            } else {
                const index = savedTasks.indexOf(problem.id);
                if (index > -1) {
                    savedTasks.splice(index, 1);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(`${problem.id}. ${problem.name} (Difficulty: ${problem.difficulty})`));
        return li;
    }

    // Add all problems to the list
    problems.forEach(problem => {
        todoList.appendChild(createListItem(problem));
    });
});
