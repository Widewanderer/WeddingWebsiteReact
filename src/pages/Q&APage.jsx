import Hero from "../components/Hero";
import QA from "../components/Q&A";

export default function QAPage() {
  return (
    <div>
      <Hero image="/heroPics/Pic1.png" title='Q&A'/>
      <QA
        question="What is the best movie of all time?"
        answer="The Two Towers, though the Return of the King is also an acceptable answer. All other opinions are incorrect."
      />
      <QA
        question="What is your favorite book?"
        answer="If the book is a standalone book and not part of a series, then I would say that it is Johnathan Strange and Mr. Norrell."
      />
    </div>
  );
}
