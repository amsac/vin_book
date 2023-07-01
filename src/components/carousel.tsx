import {Carousel} from 'react-responsive-carousel'
import logo from './vinbook.png'
import createReact from '../images/createreact.png'
import fetching from '../images/fetching.png'
import funky from '../images/funky.png'
import show from '../images/show.png'
import splBlock from '../images/splblock.png'
import textEditor from '../images/texteditor.png'
const CarouselPane = ()=>{
return(<div>
    <Carousel >
                <div>
                    <img src={createReact} />
                    <p className="legend">How to create React Components</p>
                </div>
                <div>
                    <img src={show} />
                    <p className="legend">How can I view my components</p>
                </div>
                <div>
                    <img src={fetching} />
                    <p className="legend">Use NPM library, as if everything is installed on your machine</p>
                </div>
                <div>
                    <img src={funky}/>
                    <p className="legend">Add awesome CSS Libraries to your editor</p>
                </div>
                <div>
                    <img src={textEditor} />
                    <p className="legend">How to use the text editor</p>
                </div>
                <div>
                    <img src={splBlock} />
                    <p className="legend">Create Special text blocks in your documentation</p>
                </div>
            </Carousel>
            </div>
)
}
export default CarouselPane