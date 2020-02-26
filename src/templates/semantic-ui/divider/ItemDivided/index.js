import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'


const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const fotoVazia = 'https://react.semantic-ui.com/images/wireframe/image.png';

function listLabels(params){
    return (
      <>
        {params[0].map(function(p, i) {
              return (
                <>
                  <Label icon={params[1][i]} content={p} />
                </>
              )
            }
          )
        }
      </>
    )
};

function checkFoto(event) {
    if(event === null || event === '' || event === undefined){
        return fotoVazia;
    } else {
        return event;
    }
};

function checkTitle(event) {
    if(event === null || event === '' || event === undefined){
        return 'Teste';
    } else {
        return event;
    }
};

function checkSubTitle(event) {
    if(event === null || event === '' || event === undefined){
        return 'Hello World';
    } else {
        return event;
    }
};

function checkParagraph(event) {
    if(event === null || event === '' || event === undefined){
        return paragraph;
    } else {
        return event;
    }
};

function checkItemExtra(event, eventLabel, eventButtom, paramsLabels, paramsButtoms) {
    if (event === false || event === undefined){
        return (
            <Item.Extra>
                <Button color='instagram' floated='right'>
                  Buy tickets
                  <Icon name='right chevron' />
                </Button>
            </Item.Extra>
        )
    } else {
        return (
            <Item.Extra>
                {checkItemExtraLabel(eventLabel, paramsLabels)}
                {checkButtonItemExtra(eventButtom, paramsButtoms)}
            </Item.Extra>
        )
    }
};

function checkItemExtraLabel(event, params) {
  if (event === false || event === undefined){
      return (
        <>
          <Label>Limited</Label>
          <Label>Tag</Label>
          <Label icon='globe' content='Additional Languages' />
        </>
      )
  } else {
      return listLabels(params)
  }
};

function checkButtonItemExtra(event, params) {
    if (event === false || event === undefined){
        return (
          <Button color='instagram' floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        )
    } else {
        return (
          <Button color='instagram' floated={params[0]}>
            {params[1]}&nbsp;
            <Icon name={params[2]} />
          </Button>
        )
    }
};


const ItemDivided = (props) => (
  <Item.Group divided>
    <Item>
      <Item.Image src={checkFoto(props.fotoFeed)} />
      <Item.Content>
        <Item.Header as='a'>{checkTitle(props.titleFeed)}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{checkSubTitle(props.subTitleFeed)}</span>
        </Item.Meta>
        <Item.Description>{checkParagraph(props.paragraphFeed)}</Item.Description>
      {checkItemExtra(
                    props.activeItemExtra, 
                    props.activeLabel, 
                    props.activeButtom, 
                    [props.tagItemExtra, props.iconItemExtra], 
                    [props.floatButtom, props.nameButtom, props.nameIconButtom]
                  )
      }
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemDivided