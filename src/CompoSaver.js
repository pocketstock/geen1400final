import compost_png from './compost.png'

export function CompoSaver() {
    return (
        <div className="saver-wrapper">
            <div className='saver-heading'>
            <h1>Compost at CU Is Changing!</h1>
            </div>
            <div className="blurb">
                <div>
                    <p>Due to the high proportion of contaminated loads received by the compost\manufacturer, the guidelines for 
                        composting in Colorado are changing. From now on ONLY <b>food scraps</b> and <b>yard trimmings</b> are being accepted. 
                        For more information on why these guidelines changed, please visit the ecocycle website here. 
                    </p>
                </div>
                <div>
                    <a href="https://ecocycle.org/guides-and-resources/guides-for-boulder-county/composting-guide-boulder-county/2023-compost-guidelines/"><button>Visit EcoCycle</button></a>
                </div>
            </div>
            <div className='blurb'>
                <div className="saver-header">
                    <h1>What Does This Mean for CU?</h1>
                </div>
                <div>
                    <p> Only <b>food scraps</b> and <b>yard trimmings</b> can be composted on campus. Paper products 
                        and those labeled as “compostable” are <b><i>NO LONGER</i></b> accepted. Make sure to remove all 
                        produce decals, rubber bands, twist-ties, and anything that is NOT food.
                    </p>
                </div>
                <div className='list-wrapper'>
                    <p><b>Food Scraps Include:</b></p>
                    <div className='list-container'>
                        <ul>
                            <li>Produce</li>
                            <li>Bread</li>
                            <li>Bones</li>
                            <li>Meat</li>
                            <li>Cheese</li>
                            <li>Eggshells</li>
                            <li>Coffee grounds </li>
                        </ul>
                    </div>
                </div>
                <div className='list-wrapper'>
                    <p><b>Trimmings Include:</b></p>
                    <div className='list-container'>
                        <ul>
                            <li>Twigs</li>
                            <li>Flowers</li>
                            <li>Bones</li>
                            <li>Small Branches</li>
                            <li>Grass</li>
                            <li>Yard Trimmings</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='blurb'>
                <div className='saver-header'>
                    <h1>What Can You Do!</h1>
                </div>
                <p>
                    Keep composting and follow these guidelines!
                </p>
                <img src={compost_png} alt='Failed to Load.'></img>
            </div>
        </div>
    )
}