import React from 'react'
import PropTypes from 'prop-types'
import DividerClearing from './../../../templates/semantic-ui/divider/DividerClearing'
import './style.css'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.";


function FooterPublic(props) {
    return (
        <div id="main-divider">
            <DividerClearing 
                subTitlePrimary="Titulo 1" 
                subTitle="Subtitulo" 
                primaryContact="Primeiro contato" 
                secundaryContact="Segundo contato" 
                thirdContact="Terceiro Contato" 

                subTitleSecundary="Titulo 2" 
                textFooter={text} 

                subTitleThird="Titulo 3" 

                bedroomContact="Contato 1" 
                iconPrimary="hand point up outline" 

                seventhContact="Contato 2" 
                iconSecundary="hand point left outline" 

                eighthContact="Contato 3" 
                iconThird="hand point down outline" 

                nineContact="Contato 4" 
                iconBedroom="hand point right outline" 

                iconCopyright="copyright outline"
                copyright="Copyright, todos os direitos reservados"
            />
        </div>
    )
}

FooterPublic.propTypes = {

}

export default FooterPublic

