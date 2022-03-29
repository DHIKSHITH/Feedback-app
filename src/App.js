import { useState } from 'react';

import Header from './Components/Header';
import { FeedbackList } from './Components/FeedbackList';
import { FeedbackStats } from './Components/FeedbackStats';
import { FeedbackForm } from './Components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback((prev) => prev.filter((i) => id !== i.id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
