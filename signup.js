function popup(popup_name) {
      get_popup = document.getElementById(popup_name);
  
    if (get_popup.style.display === "flex") 
    {
      get_popup.style.display = "none";
      document.body.classList.remove("popup-active");
    } 
  
    else 
    {
      get_popup.style.display = "flex";
      document.body.classList.add("popup-active");
    }
  
  }
  