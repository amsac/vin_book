import './header.css'
import { useState, Fragment } from 'react';
import ModalWindow from './modal-window';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (<Fragment>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">

          <div className="buttons">
            <a className="button is-primary icon-vinbook">
              <strong>Vin_Book</strong>
            </a>
          </div>

        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" onClick={() => setModalOpen(true)}>
                <strong>Give me a tour </strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {modalOpen ? <ModalWindow setModalOpen={setModalOpen} /> : ''}
  </Fragment>
  )
}
export default Header;