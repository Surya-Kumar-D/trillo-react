/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="logo.png" alt="trillo logo" className="logo" />
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use href="sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use href="sprite.svg#icon-bookmark"></use>
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use href="sprite.svg#icon-chat"></use>
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div class="user-nav_user">
            <img
              src="user.jpg"
              alt="user photo"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Surya</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use href="sprite.svg#icon-home"></use>
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use href="sprite.svg#icon-aircraft-take-off"></use>
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use href="sprite.svg#icon-key"></use>
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use href="sprite.svg#icon-map"></use>
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; 2024 by trillo, All rights reserved.
          </div>
        </nav>
        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img
                alt="photo of hotel 1"
                src="hotel-1.jpg"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                alt="photo of hotel 2"
                src="hotel-2.jpg"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                alt="photo of hotel 3"
                src="hotel-3.jpg"
                className="gallery__photo"
              />
            </figure>
          </div>
          <div className="overview">
            <h1 className="overview__heading">The Lala Palace</h1>
            <div className="overview__stars">
              <svg className="overview__icon-star">
                <use href="sprite.svg#icon-star"></use>
              </svg>
              <svg className="overview__icon-star">
                <use href="sprite.svg#icon-star"></use>
              </svg>
              <svg className="overview__icon-star">
                <use href="sprite.svg#icon-star"></use>
              </svg>
              <svg className="overview__icon-star">
                <use href="sprite.svg#icon-star"></use>
              </svg>
              <svg className="overview__icon-star">
                <use href="sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div className="overview__location">
              <svg className="overview__icon-location">
                <use href="sprite.svg#icon-location-pin"></use>
              </svg>
              <button className="btn-inline">Chennai, TamilNadu</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-count">429 votes</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
