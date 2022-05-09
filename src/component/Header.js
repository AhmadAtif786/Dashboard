import React from "react";

const Header = () => {
  return (
    <>
    <div class="top_header_parent">
      <div class="top_header_responsive_hamburger">
        <figure class="logo"><img src="images/logo.png" /></figure>
      <a class="hamburger_img"><img src="images/navigator.png" /></a></div>
     <section class="top_header">
        <figure class="logo"><img src="images/logo.png" /></figure>
        <a><i class="far fa-house-flood"></i></a>
        <a><img src="images/navigator.png" /></a>
        <a><i class="far fa-users"></i></a>
        <a><i class="far fa-search"></i></a>
        <a><i class="fal fa-shopping-cart"></i></a>
        <a><i class="fal fa-user-circle"></i></a>  
        <a class="top_header_setting_btn"><i class="fal fa-cog"></i> Settings</a>    
      </section>
      </div>
      <section class="top_responsive_header">
        <div class="top_responsive_header_main">
        <a><i class="far fa-house-flood"></i></a>
        <a><img src="images/navigator.png" /></a>
        <a><i class="far fa-users"></i></a>
        <a><i class="far fa-search"></i></a>
        <a><i class="fal fa-shopping-cart"></i></a>
        <a><i class="fal fa-user-circle"></i></a>  
        <a class="top_header_res_setting_btn"><i class="fal fa-cog"></i> Settings</a>    
        </div>
      </section>

    </>
  );
};

export default Header;
