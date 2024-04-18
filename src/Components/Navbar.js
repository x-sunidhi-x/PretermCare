
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  {/* <a class="navbar-brand m-2" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://127.0.0.1:7860/">ChatBot</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:8501/">Preterm birth</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/infection">Infections</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/hypertension">Hypertension</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Prediction
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <a class="dropdown-item" href="http://localhost:8501/">Preterm birth</a>
          <a class="dropdown-item" href="#">Infections</a>
     
          <a class="dropdown-item" href="#">Hypertension</a>
        </div>
      </li> */}
      </ul>
  
  </div>
</nav>
    )
}

export default Navbar;