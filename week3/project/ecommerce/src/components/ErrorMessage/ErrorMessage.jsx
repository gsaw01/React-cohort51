import './ErrorMessage.css';

export const ErrorMessage = ({ message }) => {
  return (
    <div className='error-message'>
      <i class='ri-error-warning-fill'></i>
      <h4 className='error-message-info'>{message}</h4>
    </div>
  );
};
