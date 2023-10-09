import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(./img/Footer.png)"}}>
    <div className="redes">
    <a href='https://www.facebook.com/carlos.ochoalupercio/' target="_blank"> 
        <img src="./img/facebook.png" alt="Facebook"/>
    </a>
    <a href="https://twitter.com/Carlos8a" target="_blank"> 
        <img src="./img/twitter.png" alt="twitter" />
    </a>
    <a href="https://www.instagram.com/charles8ax/" target="_blank"> 
        <img src="./img/instagram.png" alt="instagram" />
    </a>
    </div>
    <img src='./img/Logo.png' alt='org' /> 
    <strong>Desarrollado por Carlos 8a</strong>
</footer>
}

export default Footer