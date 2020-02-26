import React from 'react'
import PropTypes from 'prop-types'
import DividerLoginForm from './../../../../templates/semantic-ui/divider/DividerLoginForm'
import ItemDivided from './../../../../templates/semantic-ui/divider/ItemDivided'
import './style.css'
import SearchStandard from './../../../../templates/semantic-ui/searchs/SearchStandard'

//============== Funções e atributos temporarios para testes
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

const fotosFeed = 'https://react.semantic-ui.com/images/wireframe/image.png';

const icons = ['reply', 'share', 'sync', 'volume up', 'video']

const tags = ['Replay', 'Compartilhar', 'Sincronizar', 'Audio', 'Video']

const msg = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.';
///////////////////==================================//


function list(event) {
    return (
        <>
            {tags.map(function(t, i) {
                return (
                    <ItemDivided 
                        activeItemExtra={true} 
                        activeLabel={true} 
                        activeButtom={true} 
                        fotoFeed={fotosFeed} 
                        titleFeed={makeid(tags.length)} 
                        subTitleFeed="Subtitulo de teste de feed" 
                        paragraphFeed={msg} 
                        tagItemExtra={tags} 
                        iconItemExtra={icons} 
                        floatButtom="right" 
                        nameButtom="Acessar" 
                        nameIconButtom="building"
                    />
                )
            })}
        </>
    )
}

function MainPublic(props) {
    return (
        <div id="main-content">
            <SearchStandard />
            {list(props)}
        </div>
    )
}

MainPublic.propTypes = {

}

export default MainPublic

