import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { getBooks, getBorrowedBooks } from '@/services/book';

export default function AdminHomePage() {
  const [books, setBooks] = useState<any[]>([]);
  const [borrowed, setBorrowed] = useState<any[]>([]);

  useEffect(() => {
    setBooks(getBooks());
    setBorrowed(getBorrowedBooks());
  }, []);

  const totalRemainingBooks = books.reduce((sum, book) => sum + Number(book.quantity || 0), 0);
  const totalBorrowedBooks = borrowed.length; // ✅ dùng cùng dữ liệu BorrowedList
  const totalNotifications = 5;

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Tổng số người dùng">120</Card>
        </Col>
        <Col span={6}>
          <Card title="Sách đang được mượn">{totalBorrowedBooks}</Card>
        </Col>
        <Col span={6}>
          <Card title="Sách còn lại">{totalRemainingBooks}</Card>
        </Col>
        <Col span={6}>
          <Card title="Thông báo đang hoạt động">{totalNotifications}</Card>
        </Col>
      </Row>
    </div>
  );
}
