// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=a6958eb648d24c2ebc8c0cfe995cad4c')
      .then(response => {
        setNewsItems(response.data.articles)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {newsItems.map((news, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.urlToImage} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <Button variant="primary" href={news.url} target="_blank">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;
