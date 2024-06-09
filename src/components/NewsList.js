// src/components/NewsList.js
import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const NewsList = () => {
  const newsItems = [
    { id: 1, title: 'Berita 1', content: 'Konten berita 1' },
    { id: 2, title: 'Berita 2', content: 'Konten berita 2' },
    { id: 3, title: 'Berita 3', content: 'Konten berita 3' },
    { id: 4, title: 'Berita 1', content: 'Konten berita 1' },
    { id: 5, title: 'Berita 2', content: 'Konten berita 2' },
    { id: 6, title: 'Berita 3', content: 'Konten berita 3' },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {newsItems.map(news => (
          <Col key={news.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.content}</Card.Text>
                <Button variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;
