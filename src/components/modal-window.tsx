import './modal-window.css'
import CarouselPane from './carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface ModalWindowProps{
    setModalOpen(value:boolean):void
}
const ModalWindow:React.FC<ModalWindowProps> = ({ setModalOpen }) => {
    console.log("aaa")

    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">How to Use Vin_Book</p>
                    <button onClick={() => setModalOpen(false)} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <CarouselPane />
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, non ducimus molestiae vel ea rem aut quasi dolores explicabo saepe at impedit consequuntur ullam minima, fuga facere ut hic nemo! */}
                </section>

            </div>
        </div>
    )
}
export default ModalWindow