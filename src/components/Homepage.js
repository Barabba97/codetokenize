import React from 'react';
import SnippetEditorPage from './SnippetEditorPage';
import Tabs from './TabsTest';
import Title from './Title';
import imageCode from "../assets/images/coding3.png";
import imageTemplateMaker from "../assets/images/maker.png";
import imageCodeNft from "../assets/images/codenft.png";
import imageNftDev from "../assets/images/brilla.png";

const Homepage = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Quadrato a sinistra */}
            <div className="col-span-1 bg-gray-200 rounded-lg p-4">
                <SnippetEditorPage />
            </div>
            {/* Quadrato a destra */}
            <div className="col-span-1 bg-gray-200 rounded-lg p-4">
                {/* Dividi il quadrato a destra in 4 quadrati */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Quadrato 1 */}
                    <div className="bg-white rounded-lg p-4 block-home">
                    <p className='text-homepage-blocks'>Concept your code</p>
                    <div className="container-img-block-home">
                        <img src={imageCode} alt="NFT Image" className="icon-image" />
                    </div>
                    </div>
                    {/* Quadrato 2 */}
                    <div className="bg-white rounded-lg p-4 block-home">
                    <p className='text-homepage-blocks'>Create an NFT</p>
                    <div className="container-img-block-home">
                        <img src={imageCodeNft} alt="NFT Image" className="icon-image" />
                    </div>
                    </div>
                    {/* Quadrato 3 */}
                    <div className="bg-white rounded-lg p-4 block-home">
                    <p className='text-homepage-blocks'>Install your Code</p>
                    <div className="container-img-block-home">
                        <img src={imageTemplateMaker} alt="NFT Image" className="icon-image" />
                    </div>
                    </div>
                    {/* Quadrato 4 */}
                    <div className="bg-white rounded-lg p-4 block-home">
                    <p className='text-homepage-blocks'>...End Shine!</p>
                    <div className="container-img-block-home">
                        <img src={imageNftDev} alt="NFT Image" className="icon-image" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg p-4">
                {/* Includi il componente Tabs */}
                <Tabs />
            </div>
        </div>
    );
};

export default Homepage;
