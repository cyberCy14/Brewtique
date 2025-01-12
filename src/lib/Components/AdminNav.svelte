<script>
  import { logout } from "../../hooks/auth.js";
  import inverted_logo from "$lib/assets/backgrounds/inverted_logo.png";

  import profile from "$lib/assets/icons/profile.svg";


  import { user } from "$lib/stores/state.svelte.js";

  let isMenuActive = $state(false); 
  let isDropdownOpen = $state(false); 



  function handleLogout() {
      logout(user);
  }

  const toggleMenu = () => {
      isMenuActive = !isMenuActive;
  };

  function toggleDropdown(event) {
      isDropdownOpen = !isDropdownOpen;
      event.stopPropagation(); 
  }

  function closeDropdown() {
      isDropdownOpen = false;
  }




</script>

<header>
  <nav class="container">
      <!-- Logo -->
      <div>
          <a class="logo" href="/">
              <img src={inverted_logo} alt="Brewtique Logo" class="brewtique_logo">
          </a>
      </div>


      <!-- LINKS -->
      <div class="major-links {isMenuActive ? 'active' : ''}">
          <a href="/admin/coffees" class="section-link">Coffees</a>
          <!-- <a href="/admin/analytics" class="section-link">Analytics</a> -->
      </div>
  



      <!-- Icon buttons -->
      <div class="icons">
          <!-- Cart icon -->
          {#if user.isAuthenticated == true}


              <!-- Profile Dropdown -->
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <a class="profile-container" onclick={toggleDropdown}>
                  <img src={profile} class="profile-icon" alt="Profile icon" />

                  {#if isDropdownOpen}
                      <div class="dropdown-menu">
                          <a href="/app/profile" class="dropdown-item">Profile</a>
                              <!-- svelte-ignore node_invalid_placement_ssr -->
                              <button class="logout" onclick={handleLogout}>Log Out</button>
                      </div>  
                  {/if}
                </a>

          {:else}
              <a  class="log-in" href="/auth/login">Login</a>
              <a  class="sign-up" href="/auth/register">Signup</a>
          {/if}



          <!-- Hamburger button -->
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button type="button" class="hamburger {isMenuActive ? 'active' : ''}" onclick={toggleMenu}>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </button>

      </div>

  </nav>
</header>



<style>

  header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 10vh;
      z-index: 50;
      background-color: var(--primary-color);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2), 10px 0px 10px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
      padding: 0;
      margin: 0;
  }

  .container {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 0;
  }

  .logo {
      width: 20vw;
      
  }

  .brewtique_logo {
      /* width: 12vw; */
      height: 20vh;
  }

  .major-links {
      display: flex;
      gap: 2rem;
  }



  .section-link {
      display: flex;
      gap: 0.5rem;
      color: var(--text-white);
      font-size: 1.2rem;
  }

  .section-link:hover {
      opacity: 80%;
  }

  a {
      text-decoration: none;
  }

  .icons {
      display: flex;
      gap: 1.5em;
      margin-right: 1em;
  }

  .profile-icon {
      width: 1.9rem;   
  }

  .hamburger {
      display: none;
      cursor: pointer;
      margin-right: 12px;
  }

  .bar {
      display: block;
      width: 25px;    
      height: 3px;
      margin: 6px auto;
      transition: all 0.3s ease-in-out;
      background-color: var(--text-white);
  }

  .profile-container {
      position: relative;
  }

  .dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 20px;
      z-index: 100;
  }

  .dropdown-item {
      display: block;
      padding: 20px;
      text-decoration: none;
      font-size: 1.3rem;
      color: #333;
      cursor: pointer;
  }
  .dropdown-item:hover {
      opacity: 80%;
  }



  .log-in, .sign-up{
      background-color: var(--primary-color); 
      color: var(--text-white);              
      font-size: 1.5em;            
      padding: 5px 5px;         
      border: none;               
      border-radius: 5px;         
      cursor: pointer;           
      transition: background-color 0.3s ease; 
  }

  .log-in:hover, .sign-up:hover {
      background-color:var(--primary-color);  
  }

  .log-in:focus, .sign-up:focus{
      outline: none;             
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);  
  }

  .logout {
      background-color: var(--primary-color); 
      color: var(--text-white);      
      padding: 1rem;     
      
      cursor: pointer;           
      transition: background-color 0.3s ease; 
  }





    /* ========IPAD PRO==========*/
  @media only screen and (min-width: 835px) and (max-width: 1030px){
      header{
          height: 13vh;
      }

      .brewtique_logo{
          width: 20vw;
          height: auto;
      }

  }


   /*==========iPAD==========*/
  @media only screen and (min-width: 700px) and (max-width: 835px){
      header{
          height: 13vh;
      }

      .brewtique_logo{
          width: 20vw;
          height: auto;
      }


  }


  /* ======== MOBILE RESPONSIVE ======== */
  @media only screen and (max-width: 600px) {

      header{
          height: 13vh;
      }

      .hamburger {
          display: block;
      }

      .brewtique_logo{
          width: 30vw;
      }

      .major-links {
          position: fixed;
          top: 0;
          right: -100%;
          flex-direction: column;
          background-color: rgba(0, 0, 0, 0.8);
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
          transition: right 0.3s ease;
      }

      .major-links.active {
          right: 0;
      }

      .icons{
          gap: .5em;
      }

      .bar{
          width: 1em;
      }

      .section-link {
          font-size: 1.5rem;
          font-weight: bold;
      }

      .hamburger.active .bar:nth-child(2) {
          opacity: 0;
      }

      .hamburger.active .bar:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
      }

      .hamburger.active .bar:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
      }

  }
</style>