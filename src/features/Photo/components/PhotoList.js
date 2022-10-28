import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import './styles.scss';

const PhotoList = ({ listPhoto = [], onRemoveClick = () => {}, onEditClick = () => {} }) => {
   return (
      <Row>
         {listPhoto.map((item, index) => {
            return (
               <Col key={index} sm='6' xs='6' md='4' xl='4' xxl='3'>
                  <Card>
                     <CardImg
                        style={{ objectFit: 'cover' }}
                        title={`title: ${item.title}|category: ${item.category}`}
                        top
                        width='100%'
                        height='300px'
                        src={
                           item.image ||
                           'https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                        }
                        alt={item.title}
                     />
                     <CardBody className='btn__container'>
                        <Button onClick={() => onEditClick(item.id)} className='card__btn'>
                           Edit
                        </Button>
                        <Button onClick={() => onRemoveClick(item.id)} className='card__btn'>
                           Remove
                        </Button>
                     </CardBody>
                  </Card>
               </Col>
            );
         })}
      </Row>
   );
};

PhotoList.propTypes = {
   listPhoto: PropTypes.array,
   onRemoveClick: PropTypes.func,
   onEditClick: PropTypes.func,
};

export default PhotoList;
