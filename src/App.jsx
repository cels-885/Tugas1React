import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>

      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-start">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
              “The Psychology of Money”
            </h1>
            <p className="lead text-secondary mt-3">
              19 kisah tentang bagaimana manusia berpikir tentang uang — dan
              cara pandang itu bisa membantu kamu membuat keputusan finansial
              yang lebih bijak.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4 mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Beli Sekarang
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Lihat Detail
              </button>
            </div>
            <p className="text-muted mt-2 small">
              Penulis: Morgan Housel | Genre: Financial Education
            </p>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-4">
            <img
              className="rounded-4"
              src="https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL.jpg"
              alt="The Psychology of Money book cover"
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="container my-5">
        <h2 className="pb-2 border-bottom fw-bold">Best Seller Minggu Ini</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-2">
          {/* Book 1 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL.jpg"
                alt="The Psychology of Money"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">The Psychology of Money</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Pelajari cara berpikir yang tepat tentang uang dan keputusan
                  finansial.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 125.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
                alt="Atomic Habits"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Atomic Habits</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Buku tentang membangun kebiasaan kecil yang berdampak besar
                  dalam hidup.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 110.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 3 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                alt="Deep Work"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Deep Work</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Panduan untuk fokus maksimal di dunia penuh distraksi.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 98.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 4 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg"
                alt="Ikigai"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Ikigai</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Rahasia panjang umur dan bahagia dari masyarakat Jepang.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 95.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 5 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
                alt="Rich Dad Poor Dad"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Rich Dad Poor Dad</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Mindset keuangan sehat untuk mencapai kebebasan finansial.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 120.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 6 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg"
                alt="Start With Why"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Start With Why</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Simon Sinek menjelaskan mengapa pemimpin hebat selalu memulai
                  dari “mengapa”.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 135.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 7 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg"
                alt="The Subtle Art of Not Giving a F*ck"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">
                  The Subtle Art of Not Giving a F*ck
                </h5>
                <p className="card-text text-secondary flex-grow-1">
                  Buku inspiratif untuk hidup lebih tenang dan fokus pada hal
                  penting.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 105.000</small>
                </div>
              </div>
            </div>
          </div>

          {/* Book 8 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg"
                alt="Becoming"
                className="card-img-top rounded-top-3"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body text-start d-flex flex-column">
                <h5 className="card-title fw-bold">Becoming</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Memoar Michelle Obama yang menginspirasi banyak pembaca di
                  seluruh dunia.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn btn-outline-primary btn-sm">
                    Lihat Detail
                  </button>
                  <small className="text-muted">Rp 130.000</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-12 col-lg-8 col-xxl-7 mx-auto">
              <span className="text-muted">Our Team</span>
              <h2 className="display-5 fw-bold">Meet the Team</h2>
              <p className="lead">
                Meet our dedicated team of professionals committed to delivering
                the best results with passion, creativity, and innovation.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Member 1 */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm bg-light h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-sm-5">
                    <img
                      alt="Team member"
                      className="img-fluid rounded-start"
                      src="https://randomuser.me/api/portraits/women/47.jpg"
                      style={{
                        height: "320px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body mx-md-3">
                      <h5 className="fw-bold mb-1">Samantha Brooks</h5>
                      <div className="text-muted mb-3">Project Manager</div>
                      <p className="mb-4">
                        Skilled in coordinating diverse teams and ensuring
                        project milestones are achieved on time with excellence.
                      </p>
                      <div className="d-flex">
                        <a className="btn btn-sm me-2" href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a className="btn btn-sm me-2" href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a className="btn btn-sm" href="#">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm bg-light h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-sm-5">
                    <img
                      alt="Team member"
                      className="img-fluid rounded-start"
                      src="https://randomuser.me/api/portraits/men/53.jpg"
                      style={{
                        height: "320px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body mx-md-3">
                      <h5 className="fw-bold mb-1">Daniel Carter</h5>
                      <div className="text-muted mb-3">Lead Developer</div>
                      <p className="mb-4">
                        Experienced developer with a passion for creating
                        efficient solutions and seamless digital experiences.
                      </p>
                      <div className="d-flex">
                        <a className="btn btn-sm me-2" href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a className="btn btn-sm me-2" href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a className="btn btn-sm" href="#">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container-fluid p-lg-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 p-5">
              <div className="col-lg-9 mx-auto">
                <span className="text-muted">Let's Talk</span>
                <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
                <p className="lead mb-4">
                  Have a question or a project idea? Get in touch with our team
                  and we’ll get back to you as soon as possible.
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control bg-white"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.275534543325!2d112.72839665!3d-7.3180307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7081be4f83%3A0xa9c00ebea3e64b3d!2sUniversitas%20Negeri%20Surabaya%20-%20Kampus%201!5e0!3m2!1sid!2sid!4v1759861702824!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Universitas Negeri Surabaya"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Book
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2025 NF Academy | Elok Faiqoh
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
