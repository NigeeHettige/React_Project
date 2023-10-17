
const HeroSection = () =>{
    return(
        <main className='hero'>
            <div className='hero-content'>
                <h2> Are you</h2>
                <h1>HUNGRY?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos fugit perspiciatis, 
                    esse eos eius magnam, cumque vitae error quia, 
                    illum asperiores harum libero earum possimus tempora nesciunt fuga 
                    inventore eum porro! Commodi maiores recusandae magnam? Tempora dignissimos, 
                    reprehenderit quisquam pariatur delectus libero vero adipisci quam numquam 
                    sed nisi dolorum atque distinctio expedita.</p>

                <div className="hero-btn">
                    <button className="order">Order Now</button>
                    <button className="contact">Contact Us</button>
                </div>
            </div>
            <div className='hero-image'>
                <img className="food" src='./images/pizza.png'></img>
            </div>
        </main>
    );
}

export default HeroSection;