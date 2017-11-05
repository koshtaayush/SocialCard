import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import shortid from 'shortid';
import FlatButton from 'material-ui/FlatButton';
import './style.css';

 const id = shortid.generate();

const CardExampleAvatar = () => (  

  <Card className="card-example-avatar">
    <CardHeader
      title="Social Card"
      subtitle="Subtitle for Social Card"      
    />
    <CardMedia    
      overlay={
        <CardTitle title="Social Card" subtitle="Subtitle for Social Card" />
      }
    >           
           
      <img className="class-style" src={`https://api.adorable.io/avatars/285/${id}.png`}/>    
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      The avatar above has been taken from the Avatar adorables. I liked the way they generate the avatar through a random id and are capable f generating millions on a single day.
    </CardText>
    <CardActions>
      <FlatButton label="Flat Button 1" />
      <FlatButton label="Flat Button 2" />
    </CardActions>
  </Card>
);


export default CardExampleAvatar;
