// Index Layout
// basic styles 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #fff8f0;
  color: #333;
}

/* Navigation Bar */
.navbar {
  background-color: #2c2c2c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 60px;
  border-radius: 50%;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li a {
  text-decoration: none;
  color: #f4f4f4;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #ff9900;
}

/* Welcome Section */
.welcome-section {
  text-align: center;
  padding: 4rem 2rem 2rem;
  background: #fff0e6;
}

.welcome-section h1 {
  font-size: 3rem;
  color: #b35900;
  margin-bottom: 1rem;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #555;
}

/* Slideshow */
.slideshow {
  position: relative;
  max-width: 90%;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.slide {
  display: none;
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.slide.active {
  display: block;
}

.slideshow button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 2;
  border-radius: 8px;
}

.slideshow button:hover {
  background-color: rgba(0,0,0,0.8);
}

.slideshow button:nth-of-type(1) {
  left: 10px;
}

.slideshow button:nth-of-type(2) {
  right: 10px;
}

/* About Message */
.about-message {
  text-align: center;
  padding: 3rem 2rem;
  background-color: #fffaf5;
}

.about-message p {
  max-width: 700px;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
  color: #444;
}

.btn {
  display: inline-block;
  background-color: #b35900;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ff8000;
}

/* Menu Teaser */
.menu-teaser {
  text-align: center;
  padding: 3rem 2rem;
  background-color: #fef3e6;
}

.menu-teaser p {
  max-width: 700px;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
  color: #444;
}
