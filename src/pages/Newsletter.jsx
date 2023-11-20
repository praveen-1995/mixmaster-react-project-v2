import axios from 'axios';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  console.log(response);

  toast.success(response.data.msg);
  return redirect('/');
};

const Newsletter = () => {
  return (
    <Wrapper>
      <Form className="form" method="POST">
        <h4>our newsletter</h4>
        {/* Name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            defaultValue="praveen"
          />
        </div>
        {/* Last Name */}
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            className="form-input"
            id="lastName"
            name="lastName"
            defaultValue="kumar"
          />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            defaultValue="test@test.com"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 0.5rem;
  }
`;

export default Newsletter;
