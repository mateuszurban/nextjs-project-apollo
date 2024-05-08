"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion() {
  const faqAccordionContent = [
    {
      section: "Why every coffee has a specific flavour listed?",
      response:
        "Velit rerum corrupti repellendus aut nesciunt, veniam enim alias id temporibus expedita esse fuga adipisci maiores. Odio eligendi optio necessitatibus nemo reprehenderit.",
    },
    {
      section: "Who rates all your products?",
      response:
        "Placeat consectetur adipisicing elit temporibus. Doloribus blanditiis, enim eum nesciunt qui ex incidunt architecto laboriosam dolore illo deleniti voluptates reiciendis et unde quas repudiandae.",
    },
    {
      section: "What are your sustainability efforts?",
      response:
        "Repudiandae saepe ab explicabo sint quam, laboriosam amet aspernatur corporis quasi maxime! Eaque accusamus harum asperiores.",
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <div className={styles.accordion}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqAccordionContent.map((content, index) => {
          return (
            <li
              key={content.index}
              onClick={() => {
                setActiveQuestion(index);
              }}
            >
              <div className={styles.content}>
                <h2>{content.section}</h2>
              </div>
              {activeQuestion === index && <p>{content.response}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
