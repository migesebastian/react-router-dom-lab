import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  
    if (!selectedBox) {
      return <div>Mailbox Not Found!</div>;
    }
  
    return (
      <div>
        <h2>Mailbox Details {selectedBox._id}</h2>
        <h3>Details</h3>
        <p>Boxholder Name: {selectedBox.boxholder}</p>
        <p>Box Size: {selectedBox.boxSize}</p>
      </div>
    );
  };
  
  export default MailboxDetails;
