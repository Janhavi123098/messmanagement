<?php 
    require('connection.php'); 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Craftogram</title>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="signup.css"/>
  </head>
  <body>
    <header>
      <nav>
        <div class="logo">Craftogram</div>
        <div class="nav-links">
          <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="#about">About</a></li>
            <li class="dropdown">
              <a href="#" class="dropbtn">Categories</a>
              <div class="dropdown-content">
                <a href="gallery_blogs.html">Paintings & Wall Art</a>
                <a href="gallery_blogs.html">Accessories</a>
                <a href="gallery_blogs.html">Pottery</a>
                <a href="gallery_blogs.html">Textiles</a>
              </div>
            </li>
            <li><a href="workshop.html">Events</a></li>
          </ul>
        </div>

        <div class="auth-links">
          <?php
          if(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true)
          {
            echo"
                <div class='user'>
                  <a href='logout.php'>Logout</a>
                  <button type='button' class='profile-btn'><a href='portfolio.php'>Profile</a></button>
            ";
          }
          else 
          {
            echo"
                <div class='sign-in-up'>   
                    <button type='button' onclick=\"popup('login-popup')\">Login</button>
                    <button type='button' onclick=\"popup('signup-popup')\">SignUp</button>
                </div>";
          }
          ?>
       </div>
      </nav>
    </header>

    <!-- Login -->
    <div class="popup-container" id="login-popup">
        <div class="popup">
            <form action="login_signup.php" method="POST"> 
                <h2>
                    <span>USER LOGIN</span>
                    <button type="reset" onclick="popup('login-popup')">X</button>
                </h2>
                <input type="text" placeholder="E-mail or Username" name="email_username">
                <input type="password" name="password" placeholder="Password"> 
                <button type="submit" class="login-btn" name="login">LOGIN</button>
            </form>
        </div>
    </div>

    <!-- SignUp -->
    <div class="popup-container" id="signup-popup">
        <div class="signup popup">
            <form method="POST" action="login_signup.php">
                <h2>
                    <span>USER SIGNUP</span>
                    <button type="reset" onclick="popup('signup-popup')">X</button>
                </h2>
                <input type="text" name="fullname" placeholder="Full Name">
                <input type="text" name="username" placeholder="Username">
                <input type="email" name="email" placeholder="E-mail">
                <input type="password" name="password" placeholder="Password">
                <button type="submit" class="signup-btn" name="signup">SIGNUP</button>
            </form>
        </div>
    </div>
    
    <?php
    if(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true) 
    {
        // echo"<h1 style='text-align: center; margin-top: 200px;'>WELCOME TO THIS WEBSITE - $_SESSION[username]</h1>";
        echo"<script>window.location.href-'index.php'</script>";

    }
    
    ?>

    <section id="hero-section">
      <div class="hero-container">
        <h1>Welcome to Craftogram</h1>
        <p>Discover and celebrate the artistry of Indian handicrafts.</p>
        <a href="#explore" class="explore-btn">Explore</a>
    </section>

    <section id="explore" class="explore-container">
      <div class="explore-card" style="background-image: url('images/Paintings.jpg');">
        <div class="explore-card-content">
          <h3>Paintings & Wall Art</h3>
          <a href="gallery_blogs.html">more</a>
        </div>
      </div>
      <div class="explore-card" style="background-image: url('images/Pottery.jpg');">
        <div class="explore-card-content">
          <h3>Pottery</h3>
          <a href="gallery_blogs.html">more</a>
        </div>
      </div>
      <div class="explore-card" style="background-image: url('images/Accessories.jpg');">
        <div class="explore-card-content">
          <h3>Accessories</h3>
          <a href="gallery_blogs.html">more</a>
        </div>
      </div>
      <div class="explore-card" style="background-image: url('images/Textiles.jpg');">
        <div class="explore-card-content">
          <h3>Textiles</h3>
          <a href="gallery_blogs.html">more</a>
        </div>
      </div>
    </section>
    
    

    <section id="about" class="hidden">
      <div class="about-box">
        <div class="about-container">
          <div class="about-image">
            <img src="images/image1.png" alt="About Us Image" />
          </div>
          <div class="about-content">
            <h2>About Us</h2>
            <p>
              Welcome to Craftogram! We connect artisans with a community that
              appreciates and values their craftsmanship. Our platform provides
              a space for artisans to showcase their work, share stories, and
              connect with those who share their passion for crafts.
            </p>
            <p>
              Craftogram is dedicated to preserving and promoting traditional
              crafts while fostering innovation and creativity. Join us in
              celebrating the art and stories behind every handmade piece.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="footer-space"></div>

    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <h3>Contact Us</h3>
          <p>Feel free to reach out to us for any queries or support.</p>
          <p>Email: support@example.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Craftogram. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <script src="script.js"></script>
    <script src="signup.js"></script>
  </body>
</html>
