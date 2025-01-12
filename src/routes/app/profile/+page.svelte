<script>
    import { fetchUser, fetchUserData } from "../../../hooks/auth.js";
    import { user } from "$lib/stores/state.svelte.js";
  

  
    $effect(async () => {
      fetchUser();
      fetchUserData(user.accessToken)
    });
    
  </script>
  
<!-- Profile Information -->
<section class="profile-info">
  <h2>Personal Information</h2>

  <!-- Full Name Box -->
  <div class="info-box">
      <label for="fullName">Full Name</label>

      <span>{user.name}</span>
  
  </div>

  <!-- Email Box -->
  <div class="info-box">
      <label for="email">Email Address</label>
      <span>{user.email}</span>
  </div>

  <!-- Phone Number Box -->
  <div class="info-box">
      <label for="phone_number">Phone Number</label>
      <span>{user.phone_number}</span>
  </div>

  <!-- Address Box -->
  <div class="info-box">
      <label for="address">Home Address</label>
      <span>{user.address}</span>
  </div>
  </section>
  




  <style>

    .profile-info {
      flex: 1;
      background-color: #FEFAF6; 
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 2rem auto 2rem;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #493628;   
      font-size: 1.5rem;
      font-weight: 600;
    }
  
    .info-box {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      transition: all 0.3s ease-in-out;
    }
  
    .info-box:hover {
      border-color: #6F4E37; /* Primary Color */
      box-shadow: 0 2px 8px rgba(111, 78, 55, 0.2);
    }
  
    label {
      font-weight: bold;
      color: #493628; /* Text Black */
      margin-bottom: 5px;
    }
  
    span {
      display: block;
      font-size: 1rem;
      color: #6F4E37; /* Primary Color */
      padding: 5px 0;
    }
  
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      font-size: 1rem;
    }
  
    input:focus {
      border-color: #6F4E37; /* Primary */
      box-shadow: 0 0 5px rgba(111, 78, 55, 0.3);
    }
  
    button {
      background-color: transparent;
      color: #6F4E37;
      border: none;
      cursor: pointer;
      text-decoration: underline;
      font-size: 0.9rem;
      margin-top: 5px;
    }
  
    button:hover {
      color: #493628; /* Slightly darker */
    }
  
    .action-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  
    .save-btn {
      background-color: #6F4E37;
      color: #FEFAF6;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
  
    .save-btn:hover {
      background-color: #493628;
    }
  
    .cancel-btn {
      background-color: #ddd;
      color: #493628;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
  
    .cancel-btn:hover {
      background-color: #ccc;
    }


        /* ========IPADPRO==========*/
        @media only screen and (min-width: 835px) and (max-width: 1030px) {
         

        }


        /*==========iPAD==========*/
        @media only screen and (min-width: 700px) and (max-width: 835px){
        
        }


        /* ======== MOBILE RESPONSIVE ======== */
        @media only screen and (max-width: 600px) {
          .profile-info {
            padding: 20px;
            max-width: 600px;
            display: flex;
            flex-direction: column;
          }
  
        }
  </style>
  