import React from "react";

import {
  Button,
  ButtonGroup,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
  Col,
} from "react-bootstrap";

const VehicleForm = () => {
  return (
    <div>
      <h1>Vehicle Details</h1>
      <Container>
        <div class="Container">
          <Form>
            <div>
              <div class="row">
                <div class="col">
                  {/* vehicle name */}
                  <Form.Group controlId="vehicleName">
                    <Form.Label>Vehicle Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Vehicle name"
                    ></Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/* vehicle Number*/}
                  <Form.Group className="mb-3" controlId="vehicleNumber">
                    <Form.Label>Vehicle Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Vehicle Number"
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/* Car Image*/}
                  <Form.Group controlId="photo">
                    <Form.Label>Upload Vehicle Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/* PUC Number*/}
                  <Form.Group className="mb-3" controlId="PUCNumber">
                    <Form.Label>PUC Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="PUC Number"
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/* PUC Image*/}
                  <Form.Group controlId="photo">
                    <Form.Label>Upload PUC Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/* RCbook Number*/}
                  <Form.Group className="mb-3" controlId="RCbookNumber">
                    <Form.Label>RC-Book Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="RC-Book Number"
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/* RCBook Image*/}
                  <Form.Group controlId="photo">
                    <Form.Label>Upload RC-Book Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default VehicleForm;
