import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const HistoryFilter = ({ onFilter }) => {
  const monthInputRef = useRef();
  const yearInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    onFilter(monthInputRef.current.value, yearInputRef.current.value);
  };
  const monthList = Array.from({ length: 12 }, (_, i) => i + 1);
  const yearList = [2022, 2021, 2020];
  return (
    <Form onSubmit={submitHandler} className='m-3'>
      <Row>
        <Col xs={2}>
          <Form.Group controlId='formMonth'>
            <Row>
              <Col xs={3}>
                <Form.Label className='align-self-center me-2 w-50 text-end'>
                  Month
                </Form.Label>
              </Col>
              <Col>
                <Form.Select
                  name='month'
                  ref={monthInputRef}
                  role='month-filter'
                >
                  <option value=''>Select a month</option>
                  {monthList.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group controlId='formYear'>
            <Row>
              <Col xs={3}>
                <Form.Label className='align-self-center me-2 w-50 text-end'>
                  Year
                </Form.Label>
              </Col>
              <Col>
                <Form.Select name='year' ref={yearInputRef} role='year-filter'>
                  <option value=''>Select a year</option>
                  {yearList.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Button type='submit' variant='primary-library'>
              Filter
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default HistoryFilter;
