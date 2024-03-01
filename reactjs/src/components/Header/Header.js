import './Header.css'
import C from '../../../src/image/Cartao.png';
import S from '../../../src/image/Site.png';
import P from '../../../src/image/2Pessoas.png';
import D from '../../../src/image/Dinheiro.png';
import E from '../../../src/image/Envolepes-personalizado.png';
import V from '../../../src/image/Cartao de visita.png';
import B from '../../../src/image/Banner Personalizado.png';

function Header(){
    return(
     <>
        <div id="Header">
            <div className="body">
                 <img src= {C}/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {S}/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {P}/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {D}/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
        </div>
        <div class="caixa">
          <h2>os mais</h2>
          <img src={E}/>
          <img src={V}/>
          <img src={B}/>
          <p><u>mais</u></p>
        </div>
     </>          
    )
}
export default Header;