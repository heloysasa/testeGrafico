import Containers from './styled.js';
import React from "react";


export default function Estatisticas (){
    return(
        <Containers>
            <div class="dados">
            <div class="titulo"> Estatísticas </div>
            <Carousel autoPlay infiniteLoop >
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                
             </Carousel>
            </div>
        </Containers>

    )
}