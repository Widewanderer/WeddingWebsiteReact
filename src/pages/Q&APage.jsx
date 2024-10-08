import QA from '../components/Q&A';

export default function QAPage() {
    return (
      <div>
        <QA
          question="What is the best movie of all time?"
          answer="The Two Towers"
        />
        <QA
          question="What is your favorite book?"
          answer="If the book is a standalone book and not part of a series, then I would say that it is Johnathan Strange and Mr. Norrell."
        />
      </div>
    );
    }