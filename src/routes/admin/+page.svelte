<!-- <script>
  import { logout } from "../../hooks/auth.js";
  import AddProduct from "$lib/Components/Admin/addProduct.svelte";
  import { goto } from "$app/navigation";
 


  let user = $props();
  let showMenu = $state();

  function toggleMenu() {
    showMenu = !showMenu;
  }

  async function handleLogout() {
      logout(user); 
  }

   
 </script>
 
 <nav class="nav-container">
   <div class="nav-left">
     <div class="logo">Admin Panel</div>

   </div>
 
   <div class="nav-right">
     <button class="user-button" onclick={toggleMenu}>
       {user.name}
       <span class="chevron">▼</span>
     </button>
     {#if showMenu}
       <div class="dropdown-menu" onclick={toggleMenu}>
         <a href="/app/profile" class="dropdown-item">Profile</a>
         <a href="" class="dropdown-item" onclick={handleLogout}>Logout</a>
       </div>
     {/if}
   </div>
 </nav>

 <AddProduct/>
 
 
 <style>

   /* --- Navigation container --- */
   .nav-container {
     background-color: #333;
     color: #fff;
     padding: 0.75rem 1rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
   }
 
   /* --- Left side (logo + links) --- */
   .nav-left {
     display: flex;
     align-items: center;
   }
 
   .logo {
     font-weight: bold;
     font-size: 1.25rem;
     margin-right: 2rem;
   }
 
   /* --- Nav links (horizontal) --- */
   .nav-links {
     list-style: none;
     display: flex;
     margin: 0;
     padding: 0;
   }
 
   .nav-links li {
     margin-right: 1rem;
   }
 
   .nav-links li a {
     color: #fff;
     text-decoration: none;
   }
 
   .nav-links li a:hover {
     text-decoration: underline;
   }
 
   /* --- Right side (User info) --- */
   .nav-right {
     position: relative; /* Needed for positioning the dropdown */
   }
 
   .user-button {
     background-color: #444;
     color: #fff;
     border: none;
     padding: 0.5rem 1rem;
     cursor: pointer;
     font-size: 1rem;
     display: flex;
     align-items: center;
   }
 
   .user-button:hover {
     background-color: #555;
   }
 
   .chevron {
     margin-left: 0.5rem;
     font-size: 0.75rem;
   }
 
   /* --- Dropdown menu --- */
   .dropdown-menu {
     position: absolute;
     right: 0;
     top: calc(100% + 0.5rem);
     background-color: #fff;
     color: #333;
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
     border-radius: 0.25rem;
     min-width: 8rem;
   }
 
   .dropdown-item {
     display: block;
     padding: 0.5rem 1rem;
     color: #333;
     text-decoration: none;
   }
 
   .dropdown-item:hover {
     background-color: #f0f0f0;
   }
 </style>
  -->