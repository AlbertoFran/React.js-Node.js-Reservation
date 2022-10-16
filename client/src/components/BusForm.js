import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Row, Form, Col, Input, message } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";

function BusForm({ showBusForm, setShowBusForm, type = "add" }) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;
      if (type === "add") {
        response = await axiosInstance.post("/api/buses/add-bus", values);
      } else {
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <Modal
      width={800}
      title="Add Bus"
      visible={showBusForm}
      onCancel={() => setShowBusForm(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item label="Bus Name" name="name">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Bus Number" name="busNumber">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Capacity" name="capacity">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="From" name="from">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="To" name="to">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Journey Date" name="journeyDate">
            <input
                type="date"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Departure" name="departure">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Arrival" name="arrival">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Price" name="price">
              <input
                type="text"
                className="block border border-black w-full p-3 rounded mb-4"
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary bg-blue-600 hover:bg-blue-800"
          >
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default BusForm;