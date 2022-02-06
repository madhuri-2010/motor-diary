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

const driverForm = () => {
  return (
    <div>
      <h1>Driver Form</h1>
      <Container>
        <div class="Container">
          <Form>
            <div>
              <div class="row">
                <div class="col">
                  {/* Fname */}
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First name"
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/* password*/}
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/*Last Name*/}
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/* confirm pass */}
                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    ></Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/* mno */}
                  <Form.Group controlId="mno">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                      type="digit"
                      placeholder="Mobile No."
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div class="col">
                  {/*Licence Number*/}
                  <Form.Group controlId="Licence">
                    <Form.Label>Licence Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Licence Number"
                    ></Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">
                  {/* Gender */}
                  <div key="radio" className="mb-3">
                    <Form.Label className="mr-3">Gender </Form.Label>
                    <Form.Check
                      inline
                      label="Male"
                      name="group1"
                      type="radio"
                      id="radio"
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="group1"
                      type="radio"
                      id="radio"
                    />
                  </div>
                </div>

                <div class="col">
                  {/*upload image*/}
                  <Form.Group controlId="photo">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col">{/* dob */}</div>

                <div class="col">
                  {/* designation */}
                  <Form.Group className="mb-4">
                    <Form.Label className="mr-2">Designation Select</Form.Label>
                    <Form.Select id="designationSelect">
                      <option>Select Designation</option>
                      <option>Driver</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default driverForm;
