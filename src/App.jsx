// src/App.jsx
import { useState } from 'react';
import MailboxList from './components/MailboxList.jsx';
import NavBar from './components/NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import MailboxDetails from './components/MailboxDetails.jsx';
import MailboxForm from './components/MailboxForm.jsx';

const initialState = [
  { _id: 1, boxholder: 'Alice', boxSize: 'Small' },
  { _id: 2, boxholder: 'Bob', boxSize: 'Medium' },
  { _id: 3, boxholder: 'Charlie', boxSize: 'Large' },
  { _id: 4, boxholder: 'David', boxSize: 'Small' },
  { _id: 5, boxholder: 'Eve', boxSize: 'Medium' },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <h1>Post Office!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      </Routes>
    </>
  );
};

export default App;
