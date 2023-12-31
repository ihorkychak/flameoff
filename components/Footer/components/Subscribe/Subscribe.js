import Button from '@/components/Button/Button';
import FormInput from '@/components/FormInput/FormInput';

import { subscribe } from '@/constants/inputData';

import './Subscribe.scss';

const Subscribe = () => {
  return (
    <form
      className="subscribe"
      action="https://flameoffcoatings.com/api/mail/subscribeNewsletter"
      method="POST"
    >
      <FormInput {...subscribe} />
      <Button btnType="submit" text="subscribe" />
    </form>
  );
};

export default Subscribe;
