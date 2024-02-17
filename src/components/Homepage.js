import React from 'react'
import SnippetEditorPage from './SnippetEditorPage';
import Hero from './Hero';


const Homepage = () => {
    return (
        <React.Fragment>
            <Hero />
            <SnippetEditorPage />
        </React.Fragment>
    )
}

export default Homepage