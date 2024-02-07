import React from 'react'
import TitleAndDescription from './TitleAndDescription'
import SnippetEditorPage from './SnippetEditorPage';


const Homepage = () => {
    return (
        <React.Fragment>
            <TitleAndDescription />
            <SnippetEditorPage />
        </React.Fragment>
    )
}

export default Homepage