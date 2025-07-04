'use client'

export default function Home() {
  
  // TODO: Convert this JavaScript to React hooks and event handlers
  
// Original script:

        const defaultNames = [
            "Thunderbolt",
            "Spirit",
            "Shadow",
            "Lightning",
            "Starlight"
        ];

        const namesList = document.getElementById('namesList');
        const nameInput = document.getElementById('nameInput');

        function addName() {
            const name = nameInput.value.trim();
            if (name) {
                createNameElement(name);
                nameInput.value = '';
            }
        }

        function createNameElement(name) {
            const li = document.createElement('li');
            li.className = 'bg-amber-50 p-3 rounded-lg shadow hover:bg-amber-100 transition-colors duration-200 cursor-pointer';
            li.textContent = name;
            li.onclick = () => li.remove();
            namesList.appendChild(li);
        }

        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addName();
            }
        });

        // Initialize with default names
        defaultNames.forEach(name => createNameElement(name));
    

  
  
  return (
    <>
      
      <style jsx>{`
        
        @keyframes gallop {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
        .gallop-animation {
            animation: gallop 1s infinite;
        }
    

      `}</style>
      
      
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-amber-800 mb-8">A Horse With Many Names</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="text-center mb-6">
                <div className="text-8xl mb-4 gallop-animation">🐎</div>
            </div>
            
            <div className="space-y-4">
                <input type="text" id="nameInput" placeholder="Add a new horse name..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <button onClick="addName()" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Add Name</button>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-amber-800 mb-4">Known As:</h2>
                <ul id="namesList" className="space-y-2"></ul>
            </div>
        </div>

        <div className="text-center text-amber-700">
            <p className="text-sm">Click a name to remove it</p>
        </div>
    </div>

    <script>
        const defaultNames = [
            "Thunderbolt",
            "Spirit",
            "Shadow",
            "Lightning",
            "Starlight"
        ];

        const namesList = document.getElementById('namesList');
        const nameInput = document.getElementById('nameInput');

        function addName() {
            const name = nameInput.value.trim();
            if (name) {
                createNameElement(name);
                nameInput.value = '';
            }
        }

        function createNameElement(name) {
            const li = document.createElement('li');
            li.className = 'bg-amber-50 p-3 rounded-lg shadow hover:bg-amber-100 transition-colors duration-200 cursor-pointer';
            li.textContent = name;
            li.onclick = () => li.remove();
            namesList.appendChild(li);
        }

        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addName();
            }
        });

        // Initialize with default names
        defaultNames.forEach(name => createNameElement(name));
    </script>

    </>
  )
}