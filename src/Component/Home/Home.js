import './Home.css';
const Home = () => {
    return (
        <div id="Home" className="Home-container">
            <div class='homeContent'>
                <div class='homeContentL'></div>
                <div class='homeContentR'>
                <h1><span>Lawyers</span></h1>
                <h5>“Our Strengths. </h5>
                <h5>Your Advantage.”</h5>
                <div><a href="/register" class="button">Message Us!</a></div>
                </div>
            </div>       
        </div>
    );
  }
  export default Home;