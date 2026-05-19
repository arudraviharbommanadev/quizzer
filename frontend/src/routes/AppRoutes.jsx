import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import JoinQuiz from '../pages/participant/JoinQuiz.jsx';
import QuizInstructionsPage from '../pages/participant/QuizInstructionsPage.jsx';
import AttemptQuiz from '../pages/participant/AttemptQuiz.jsx';
import QuizSubmitted from '../pages/participant/QuizSubmitted.jsx';
import ParticipantProfile from '../pages/participant/ParticipantProfile.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import CreateQuiz from '../pages/admin/CreateQuiz.jsx';
import EditQuiz from '../pages/admin/EditQuiz.jsx';
import UploadQuestions from '../pages/admin/UploadQuestions.jsx';
import DeployQuizPage from '../pages/admin/DeployQuizPage.jsx';
import QuizParticipants from '../pages/admin/QuizParticipants.jsx';
import QuizResults from '../pages/admin/QuizResults.jsx';
import AdminSettings from '../pages/admin/AdminSettings.jsx';
import Unauthorized from '../pages/Unauthorized.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/join" element={<JoinQuiz />} />
      <Route path="/quiz/instructions" element={<QuizInstructionsPage />} />
      <Route path="/quiz/attempt" element={<AttemptQuiz />} />
      <Route path="/quiz/submitted" element={<QuizSubmitted />} />
      <Route path="/profile" element={<ProtectedRoute><ParticipantProfile /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/create" element={<ProtectedRoute><CreateQuiz /></ProtectedRoute>} />
      <Route path="/admin/edit/:id" element={<ProtectedRoute><EditQuiz /></ProtectedRoute>} />
      <Route path="/admin/upload" element={<ProtectedRoute><UploadQuestions /></ProtectedRoute>} />
      <Route path="/admin/deploy" element={<ProtectedRoute><DeployQuizPage /></ProtectedRoute>} />
      <Route path="/admin/participants" element={<ProtectedRoute><QuizParticipants /></ProtectedRoute>} />
      <Route path="/admin/results" element={<ProtectedRoute><QuizResults /></ProtectedRoute>} />
      <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
