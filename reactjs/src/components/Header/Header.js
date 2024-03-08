import './Header.css'
import C from '../../../src/image/Cartao.png';
import S from '../../../src/image/Site.png';
import P from '../../../src/image/2Pessoas.png';
import D from '../../../src/image/Dinheiro.png';
import E from '../../../src/image/Envolepes-personalizado.png';
import V from '../../../src/image/Cartao de visita.png';
import B from '../../../src/image/Banner Personalizado.png';
import EM from '../../../src/image/empresa.png';
import M from '../../../src/image/mercado.png';
import co from '../../../src/image/comunicacao.png';

function Header(){
    return(
     <>
      {/*P1*/}
        <div id="Header">
            <div className="body">
                 <img src= {C} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {S} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {P} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src= {D} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
        </div>
        
        {/*P2*/}
        <div class="caixa">
          <h2>OS MAIS VENDIDOS</h2>
          <img src={E} id="imge" class="imge"/>
          <img src={V} id="imge" class="imge"/>
          <img src={B} id="imge" class="imge"/>
          <h4><u>VER TODOS</u></h4> 
        </div>

        {/*P3*/}
        <div class="empre">
          <img src={EM} id="em"/>
          <h3 id="emp">A empresa se destaca não apenas pela capacidade técnica, mas também pela dedicação em entender as necessidades específicas de cada cliente. Seja na produção de materiais promocionais, embalagens personalizadas ou projetos gráficos complexos, a GF Gráfica se empenha em entregar resultados que superam as expectativas.</h3>
        </div>

        {/*P4*/}
        <div class="desta">
          <h3 id="dest">Destaque-se no mercado e fortaleça sua presença com os serviços gráficos excepcionais da nossa empresa, elevando o impacto e a memorabilidade da sua marca.</h3>
          <img src={M} id="des"/>
        </div>
        
        {/*P5*/}
        <div class="notu">

        <div class="noti">
          <img src={co} id="no"/>
        </div>

        <div class="noc">
        <h3 id="h3-1">Inscreva-se em nossa newsletter</h3>
        <h3 id="h3-2">para receber últimas noticias e descontos exclusivos</h3>  
        <p id="email">DIGITE O EMAIL</p> 
        <h5 id="ins">INCREVER</h5>
        </div>

        </div>

        
     </>          
    )
}
export default Header;