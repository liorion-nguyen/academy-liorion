import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import IntegrationNotistack from './extension/snackbar';
import TempleteMessage from './pages/message/templete';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'true' || false);
  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <IntegrationNotistack />

      <TempleteMessage messages={[
        {
          id: '1',
          content: `Xin chào,<br> Mình là Chung rất vui được làm quen!`,
          createAt: '2023-09-11T08:15:07.754+00:00',
          emoji: [],
          creator: true,
        },
        {
          id: '2',
          content: 'Chào cậu, rất vui được làm quen',
          createAt: '2023-09-12T17:03:21.675+00:00',
          emoji: [],
          creator: false,
        },
        {
          id: '3',
          content: 'Oke!',
          createAt: '2023-08-24T15:28:44.406+00:00',
          emoji: [],
          creator: true,
        },
        {
          id: '4',
          content: `Xin chào,<br> Mình là Chung rất vui được làm quen!<br>Hello`,
          createAt: '2023-08-24T07:29:16.054+00:00',
          emoji: [],
          creator: true,
        },
        {
          id: '5',
          content: 'Chào cậu, rất vui được làm quen',
          createAt: '2023-09-08T04:22:54.755+00:00',
          emoji: [],
          creator: false,
        },
        {
          id: '6',
          content: 'Oke!',
          createAt: '2023-09-08T04:23:54.755+00:00',
          emoji: [
            {
              creator: true,
              type: 'Love'
            },
            {
              creator: false,
              type: 'Haha'
            }
          ],
          creator: true,
        },
      ]}
        author={{
          id: '0',
          name: 'Quoc Chung',
          avt: 'URL_ảnh_đại_diện_tác_giả',
        }}
        audiences={{
          id: '1',
          name: 'Nguyen Van Duy',
          avt: 'https://s.net.vn/JpfO',
        }} />
    </Router>
  );
}

export default App;
