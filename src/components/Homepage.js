import React from 'react'
import SnippetEditorPage from './SnippetEditorPage';
import Title from './Title';


const Homepage = () => {
    return (
        <div className="py-10">
            <Title />
            <SnippetEditorPage />
        </div>
    )
}

export default Homepage