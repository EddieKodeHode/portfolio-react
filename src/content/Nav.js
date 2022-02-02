function Nav() {
    let homePage = true;
    let projectsPage = false;
    let aboutPage = false;
  return (
    <nav>
        <ul>
            <li id="home" onClick={()=> homePage = true}>Home</li>
            <li id="projects" onClick = {() => projectsPage = true}>Projects</li>
            <li id="about-me" onClick = {() => aboutPage = true}>About me</li>
        </ul>
    </nav>
  );
}

export default Nav;