import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { getBooks } from '@/services/book';

export default function StudentHomePage() {
  const [groupedBooks, setGroupedBooks] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    const books = getBooks();
    const grouped: { [key: string]: any[] } = {};

    books.forEach((book) => {
      const cat = book.category || 'Khác';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(book);
    });

    setGroupedBooks(grouped);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        {Object.entries(groupedBooks).map(([category, books]) => (
          <Col span={8} key={category}>
            <Card title={getCategoryLabel(category)}>
              {books.map((book) => (
                <div key={book.id} style={{ padding: '4px 0' }}>
                  {book.title}
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

// Optional: mapping key to label
function getCategoryLabel(key: string) {
  const map: { [key: string]: string } = {
    tieuthuyet: 'Tiểu thuyết',
    truyentranh: 'Truyện tranh',
  };
  return map[key] || key;
}
