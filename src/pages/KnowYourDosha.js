import React, { useState } from "react";

const DOSHAS = ["Vata Dosha", "Pitta Dosha", "Kapha Dosha"];

const doshaDescriptions = [
  "Achieving Vata balance is all about embracing a harmonious lifestyle. Start by indulging in foods that warm your body and nourish your soul with their moist, cooked goodness. Sweet, sour, and salty flavors are your allies in this journey. Don't forget the daily self-pampering ritual with vata-balancing oils like soothing sesame or almond oil. The key to success lies in crafting your daily routines thoughtfully, incorporating regular meals, exercise, meditation, and a consistent sleep schedule. On the flip side, steer clear of the chaotic and the chilly, ditch those erratic schedules, avoid excessive travel, and give your sensory receptors a break from the constant buzz of smartphones, TV, and tablets. As for exercise, opt for activities that keep you in motion – cycling, running, walking, yoga, and the flowing grace of tai chi. Balancing Vata is not just a practice; it's a way of life that nourishes your body and mind.",
  "Discovering the art of Pitta balance is like uncovering the secrets of a well-tuned symphony. Start by embracing foods that not only nourish but refresh your senses, making sure to keep overheating at bay. Let your palate indulge in the divine flavors of sweet, bitter, and astringent tastes. The coolness of body and mind becomes your mantra – avoid overheating, say no to stimulants, and steer clear of acidic foods. Within this harmony, weave in regular, moderate exercise that isn't a competition but a celebration of your well-being. And don't forget the soothing balm of meditation, nature walks, and moments of self-care in your daily rhythm. For the spirited Pitta souls, remember to keep your exercise cool, avoiding those scorching heatwaves. Engaging in team sports not only keeps you fit but also feeds your competitive spirit, aligning perfectly with your dynamic nature. Balancing Pitta isn't just a journey; it's an exhilarating dance of self-care and vitality.",
  "Balancing Kapha, the key lies in cultivating a lifestyle that harmonizes your energies. Imagine savoring meals that are light, warm, and lovingly cooked, with flavors that dance on your taste buds, embracing pungent, bitter, and astringent tastes. Exercise becomes your daily companion, but don't shy away from spicing up your fitness routine with variety. Rise with the sun, as early mornings hold the promise of renewed vitality, and wave goodbye to those tempting daytime naps. Your meals follow a delightful rhythm, with a lighter start and a hearty crescendo at lunchtime. Now, for the Kapha folks, exercise is a social affair, where cardio and weight-resistance workouts create a dynamic blend, ensuring you stay enthused. The best part? Any form of movement keeps your vitality thriving, weaving a lively, well-rounded tapestry of life. Balancing Kapha isn't a chore; it's a thrilling journey to vitality.",
];

const KnowYourDosha = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is your body frame?",
      answers: ["Thin", "Medium build and musculature", "Broad, strong, curvy"],
    },
    {
      question: "What is your weight?",
      answers: [
        "Hard to gain, easy to lose",
        "Easy to gain, easy to lose",
        "Easy to gain, hard to lose",
      ],
    },
    {
      question: "What is your skin like?",
      answers: [
        "Cold, dry, thin",
        "Warm, oily, sunburns easily, freckles, acne",
        "Cool, fair, oily, thick, soft, smooth",
      ],
    },
    {
      question: "What is your hair like?",
      answers: [
        "Dry, frizzy, thin",
        "Straight, fine, premature graying",
        "Oily, wavy, thick",
      ],
    },
    {
      question: "What are your eyes like?",
      answers: [
        "Small, fine lashes, unusual color",
        "Brightly colored, almond-shaped, steady gaze",
        "Big, round, thick eyelashes",
      ],
    },
    {
      question: "What is your appetite like?",
      answers: ["Irregular", "Intense", "Steady"],
    },
    {
      question: "What is your evacuation like?",
      answers: [
        "Constipated; irregular; dry, small quantity",
        "Loose, regular, large quantity",
        "Slow, regular, moderate quantity",
      ],
    },
    {
      question: "What is your sweat like?",
      answers: ["Scanty", "Profuse", "Moderate"],
    },
    {
      question: "What is your temperament like?",
      answers: [
        "Energetic, creative, indecisive, nervous",
        "Bright, intelligent, arrogant, driven, direct, witty",
        "Calm, stable, grounded, stubborn, greedy, torporous",
      ],
    },
    {
      question: "What is your memory like?",
      answers: [
        "Learns quickly, forgets quickly",
        "Learns quickly, forgets slowly",
        "Learns slowly, forgets slowly",
      ],
    },
    {
      question: "What is your speech like?",
      answers: [
        "Talkative, fast, high-pitched, scattered",
        "Articulate, decisive, clear, sharp",
        "Slow, melodious, deep, low",
      ],
    },
    {
      question: "What climate do you dislike?",
      answers: ["Cold and dry", "Heat and humidity", "Damp/cool"],
    },
    {
      question: "What kind of activity do you enjoy?",
      answers: [
        "Restless and active; social",
        "Competitive, intense",
        "Calm; likes leisurely activity",
      ],
    },
    {
      question: "What is your attitude to routine?",
      answers: [
        "Dislikes routine, enjoys variety",
        "Likes planning and organizing",
        "Enjoys routine",
      ],
    },
  ]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(0));

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateDosha = () => {
    const doshaCounts = [0, 0, 0];

    for (const answerIndex of answers) {
      doshaCounts[answerIndex]++;
    }

    const maxDoshaIndex = doshaCounts.indexOf(Math.max(...doshaCounts));
    return DOSHAS[maxDoshaIndex];
  };

  const [dosha, setDosha] = useState("");
  const [doshaDescription, setDoshaDescription] = useState("");

  const handleSubmit = () => {
    if (answers.includes(0)) {
      alert(
        "For accurate results, we request you to answer all the questions before submitting."
      );
    } else {
      const dominantDosha = calculateDosha();
      setDosha(dominantDosha);
      setDoshaDescription(doshaDescriptions[DOSHAS.indexOf(dominantDosha)]);
    }
  };

  return (
    <div>
      <h1>Know Your Dosha</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question}
            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <input
                  type="radio"
                  id={`question${index}answer${answerIndex}`}
                  name={`question${index}`}
                  value={answerIndex}
                  onChange={() => handleAnswerChange(index, answerIndex)}
                />
                <label htmlFor={`question${index}answer${answerIndex}`}>
                  {answer}
                </label>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {dosha && (
        <div>
          <h2>Your Dominant Dosha:</h2>
          <p>{dosha}</p>
          <h2>How To Balance Your {dosha}:</h2>
          <p>{doshaDescription}</p>
        </div>
      )}
    </div>
  );
};

export default KnowYourDosha;
