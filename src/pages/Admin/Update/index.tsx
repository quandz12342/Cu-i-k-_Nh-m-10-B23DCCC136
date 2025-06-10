import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Space, Table, message, Popconfirm, Select } from 'antd';
import { getBooks, addBook, updateBook, deleteBook } from '@/services/book';

export default function UpdatePage() {
  const [books, setBooks] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form] = Form.useForm();

  const fetch = async () => {
    const res = await getBooks();
    setBooks(res);
  };

  useEffect(() => {
    fetch();
  }, []);

  const onFinish = async (values: any) => {
    if (editing) {
      await updateBook(editing.id, values);
      message.success('Cập nhật sách thành công');
    } else {
      await addBook(values);
      message.success('Thêm sách thành công');
    }
    form.resetFields();
    setOpen(false);
    setEditing(null);
    fetch();
  };

  const onEdit = (record: any) => {
    setOpen(true);
    setEditing(record);
    form.setFieldsValue(record);
  };

  const onDelete = async (id: number) => {
    await deleteBook(id);
    message.success('Xóa sách thành công');
    fetch();
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} style={{ marginBottom: 16 }}>
        Thêm sách
      </Button>
      <Table dataSource={books} rowKey="id" pagination={false}>
        <Table.Column title="Tên sách" dataIndex="title" />
        <Table.Column title="Tác giả" dataIndex="author" />
        <Table.Column title="Thể loại" dataIndex="category" />
        <Table.Column title="Số lượng" dataIndex="quantity" />
        <Table.Column
          title="Hành động"
          render={(_, record: any) => (
            <Space>
              <Button onClick={() => onEdit(record)}>Sửa</Button>
              <Popconfirm title="Xác nhận xóa?" onConfirm={() => onDelete(record.id)}>
                <Button danger>Xóa</Button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>

      <Modal
        open={open}
        title={editing ? 'Cập nhật sách' : 'Thêm sách'}
        onCancel={() => {
          setOpen(false);
          setEditing(null);
          form.resetFields();
        }}
        onOk={() => form.submit()}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="title" label="Tên sách" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="Tác giả" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Thể loại" rules={[{ required: true }]}>
            <Select
              options={[
                { label: 'Tiểu thuyết', value: 'tieuthuyet' },
                { label: 'Truyện tranh', value: 'truyentranh' },
              ]}
            />
          </Form.Item>
          <Form.Item name="quantity" label="Số lượng" rules={[{ required: true }]}>
            <Input type="number" min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}