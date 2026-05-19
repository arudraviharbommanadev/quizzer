import { useMemo, useState } from 'react';
import QuizLayout from '../../layouts/QuizLayout.jsx';
import QuestionNavigator from '../../components/quiz/QuestionNavigator.jsx';
import QuestionCard from '../../components/quiz/QuestionCard.jsx';
import Timer from '../../components/quiz/Timer.jsx';
import SubmitQuizModal from '../../components/quiz/SubmitQuizModal.jsx';
import FullscreenWarning from '../../components/quiz/FullscreenWarning.jsx';
import ViolationPopup from '../../components/quiz/ViolationPopup.jsx';
import CopyPasteBlocker from '../../components/proctor/CopyPasteBlocker.jsx';
import RightClickBlocker from '../../components/proctor/RightClickBlocker.jsx';
import TabSwitchDetector from '../../components/proctor/TabSwitchDetector.jsx';
import FullscreenHandler from '../../components/proctor/FullscreenHandler.jsx';
import { useTimer } from '../../hooks/useTimer.js';

const quiz = {
  title: 'Sample assessment',
  duration: 20,
  fullscreenRequired: true,
  questions: [
    { id: 'q1', prompt: 'What is the capital of France?', type: 'MCQ', options: ['Paris', 'Berlin', 'Rome', 'Madrid'] },
    { id: 'q2', prompt: 'Select the prime numbers.', type: 'Multi Select', options: ['2', '4', '7', '9'] },
  ],
};

export default function AttemptQuiz() {
  const { remaining, active, setActive } = useTimer(quiz.duration * 60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [violation, setViolation] = useState('');
  const currentQuestion = quiz.questions[currentIndex];

  const optionRenderer = (option) => (
    <button
      type="button"
      key={option}
      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-800 hover:border-slate-400"
    >
      {option}
    </button>
  );

  const handleStart = () => setActive(true);
  const handleViolation = (message) => setViolation(message);

  return (
    <QuizLayout>
      <FullscreenHandler required={quiz.fullscreenRequired} />
      <CopyPasteBlocker />
      <RightClickBlocker />
      <TabSwitchDetector onViolation={handleViolation} />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Quiz attempt</p>
                <h1 className="text-2xl font-semibold text-slate-900">{quiz.title}</h1>
              </div>
              <Timer remaining={remaining} />
            </div>
            <div className="mt-6">
              <QuestionCard question={currentQuestion} onAnswer={optionRenderer} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} className="rounded-3xl bg-slate-100 px-5 py-3 text-sm text-slate-700 hover:bg-slate-200">
                Previous
              </button>
              <button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, quiz.questions.length - 1))} className="rounded-3xl bg-slate-900 px-5 py-3 text-sm text-white hover:bg-slate-700">
                Next
              </button>
              <button onClick={() => setModalOpen(true)} className="rounded-3xl bg-emerald-900 px-5 py-3 text-sm text-white hover:bg-emerald-700">
                Submit quiz
              </button>
            </div>
          </div>
          <QuestionNavigator questions={quiz.questions} currentIndex={currentIndex} onSelect={setCurrentIndex} />
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Exam guidance</h2>
            <p className="mt-3 text-sm text-slate-600">This attempt is protected by fullscreen mode and proctoring controls.</p>
            <FullscreenWarning required={quiz.fullscreenRequired} />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">Tap start when you are ready.</p>
            <button onClick={handleStart} className="mt-4 w-full rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">
              {active ? 'In progress' : 'Start timer'}
            </button>
          </div>
        </div>
      </div>
      <SubmitQuizModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={() => { setModalOpen(false); window.location.href = '/quiz/submitted'; }} />
      <ViolationPopup open={Boolean(violation)} message={violation} />
    </QuizLayout>
  );
}
