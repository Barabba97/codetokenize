import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    // Definisci il contenuto per ciascuna scheda, includendo il codice formattato
    const tabContents = {
        1: (
            <pre className="p-4 bg-gray-100 rounded-lg">
                <code className="text-sm font-mono">
                    {`.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 150px;
}

.magic-span {
    height: 200px;
    width: 200px;
    background-color: #0000007a;
    position: absolute;
    border-radius: 50px;
}
`}
                </code>
            </pre>
        ),
        2: (
            <pre className="p-4 bg-gray-100 rounded-lg">
                <code className="text-sm font-mono">
                    {`.grid {
    display: grid;
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-4 {
    gap: 1rem;
}
`}
                </code>
            </pre>
        ),
        3: (
            <pre className="p-4 bg-gray-100 rounded-lg">
                <code className="text-sm font-mono">
                    {`.col-span-1 {
    grid-column: span 1 / span 1;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.bg-gray-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.p-4 {
    padding: 1rem;
}
`}
                </code>
            </pre>
        ),
        4: (
            <pre className="p-4 bg-gray-100 rounded-lg">
                <code className="text-sm font-mono">
                    {`.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s;
}

.button:hover {
    background-color: #45a049;
    color: white;
}
`}
                </code>
            </pre>
        ),
    };

    // Funzione per copiare il testo negli appunti
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Code copied to clipboard!');
    };

    return (
        <div>
            <div className="flex">
                {[1, 2, 3, 4].map((tabNumber) => (
                    <button
                        key={tabNumber}
                        className={`px-4 py-2 mr-2 rounded ${
                            activeTab === tabNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => handleTabClick(tabNumber)}
                    >
                        Example code {tabNumber}
                    </button>
                ))}
            </div>
            {/* Mostra il contenuto della scheda attiva */}
            <div className="mt-4">
                {tabContents[activeTab]}
                <button
                    className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
                    onClick={() => copyToClipboard(tabContents[activeTab].props.children.props.children)}
                >
                    Copy Code
                </button>
            </div>
        </div>
    );
};

export default Tabs;
