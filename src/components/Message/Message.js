// Message.js
const Message = ({ message }) => {
  return (
    <div className="mt-4 p-4 text-white rounded-md">
      {message.includes("Error") ? (
        <div className="bg-red-500">{message}</div>
      ) : (
        <div className="bg-green-500">{message}</div>
      )}
    </div>
  );
};

export default Message;
