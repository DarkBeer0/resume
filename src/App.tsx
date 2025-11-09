import { useState } from "react";
import "./App.css";

/* 
  Компонент для «раскрывающихся» секций 
  + возможность передавать цвет (accentColor) для разных заголовков
*/
function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
  accentColor = "#12b886",
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="collapsible-section">
      <h2
        className="collapsible-header"
        onClick={toggle}
        style={{ borderColor: accentColor, color: "#444" }}
      >
        {title}
        <span className="arrow" style={{ color: accentColor }}>
          {isOpen ? "▲" : "▼"}
        </span>
      </h2>
      <div className={`collapsible-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="resume-container">
      {/* Шапка резюме */}
      <header className="header">
        <h1 className="name">ANATOLII MERONYTSKYI</h1>
        <div className="contact-info">
          <p>
            Phone: <a href="tel:+48731591509">+48 731-591-509</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:anatoliimeronytskyi@gmail.com">
              anatoliimeronytskyi@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/anatolii-meronytskyi-7a6912211/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/DarkBeer0" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </header>

      {/* SUMMARY */}
      <CollapsibleSection title="SUMMARY" accentColor="#f08c00">
        <p>
          Software Developer and Programming Enthusiast with over 3 years of experience
          in software development and technical support. Skilled in C#, Java, JavaScript,
          SQL, and Python, with experience using .NET, Entity Framework, Spring, and Hibernate frameworks.
          Currently pursuing a Master’s degree in Programming at WSB Merito University in Warsaw (starting October 2025).
          Passionate about continuous learning, improving technical skills, and preparing to return to the IT field
          to contribute effectively to real-world projects.
        </p>
      </CollapsibleSection>

      {/* SKILLS */}
      <CollapsibleSection title="SKILLS" accentColor="#0c8599">
        <ul className="skills-list">
          <li>
            <span className="badge">C#</span>
            <span className="badge">Java</span>
            <span className="badge">JavaScript / TypeScript</span>
            <span className="badge">SQL</span>
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> .NET, Entity Framework,
            ASP.NET, Spring, Hibernate
          </li>
          <li>
            <strong>Architecture & Design:</strong> Monolithic & Microservices
          </li>
          <li>
            <strong>DevOps Tools:</strong> Docker, Microsoft Azure
          </li>
          <li>
            <strong>Game Development:</strong> Unity, Unreal Engine, OpenIV
          </li>
          <li>
            <strong>Web:</strong> HTML, CSS, JavaScript/TypeScript
          </li>
          <li>
            <strong>Version Control:</strong> GIT
          </li>
          <li>
            <strong>Databases:</strong> SQL Server
          </li>
          <li>
            <strong>Testing:</strong> Manual Testing, JUnit, NUnit
          </li>
        </ul>
      </CollapsibleSection>

      {/* EDUCATION */}
      <CollapsibleSection title="EDUCATION" accentColor="#12b886" defaultOpen={false}>
        <div className="education-item">
          <strong>Engineering Degree (Software Engineering)</strong>
          <br />
          Social Academy of Sciences (SAN), Warsaw, Poland
          <br />
          <em>Oct 2018 – Jun 2022</em>
        </div>
        
        <div className="education-item">
          <strong>Java course</strong>
          <br />
          Andersen Company — Certificate of course completion
          <br />
          <em>March 2024 – August 2024</em>
        </div>

        <div className="education-item">
          <strong>Master’s Degree in Programming</strong>
          <br />
          <em>WSB Merito University in Warsaw (October 2025 – March 2027)</em>
          <p>
            Enrolled in a master's program in programming at WSB Merito University in Warsaw,
            starting in October 2025. The program lasts one and a half years and focuses on
            advanced software development and modern IT technologies.
          </p>
        </div>
        
        {/* Добавляем новый блок об постоянном обучении */}
        <div className="education-item">
          <strong>Continuous Learning</strong>
          <br />
          <em>Ongoing</em>
          <p>
            Regularly participating in online courses (e.g. Udemy, Coursera),
            attending webinars, and reading technical literature to stay
            up-to-date with the latest technologies and best practices.
          </p>
        </div>
      </CollapsibleSection>


      {/* FOREIGN LANGUAGES */}
      <CollapsibleSection title="FOREIGN LANGUAGES" accentColor="#ae3ec9" defaultOpen={false}>
        <ul>
          <li>Russian: Native</li>
          <li>Ukrainian: Native</li>
          <li>English: B2 Level (Upper Intermediate)</li>
          <li>Polish: B2 Level (Upper Intermediate)</li>
        </ul>
      </CollapsibleSection>

      {/* PROFESSIONAL EXPERIENCE: сделаем таймлайн */}
      <CollapsibleSection title="PROFESSIONAL EXPERIENCE" accentColor="#228be6">
        <div className="timeline">
          {/* FREELANCE */}
            <div className="timeline-date">Oct 2018 – 2021</div>
            <div className="timeline-content">
              <h3>FREELANCE</h3>
              <ul>
                <li>
                  Optimized a high-traffic website, reducing downtime and
                  increasing user engagement.
                </li>
                <li>
                  Developed complex game elements for Unity, enhancing gameplay
                  mechanics and user experience.
                </li>
                <li>
                  Implemented server-side functionalities for the RageMP server,
                  improving performance and stability.
                </li>
              </ul>
            </div>
          

          {/* RAGEMP–GTA5server */}
            <div className="timeline-date">Nov 2021 – 2024</div>
            <div className="timeline-content">
              <h3>RAGEMP–GTA 5 server (Backend Dev)</h3>
              <ul>
                <li>
                  Resolved numerous code logic issues and introduced new features,
                  reducing system bugs and boosting application performance.
                </li>
                <li>
                  Executed performance optimizations, increasing system efficiency
                  and minimizing downtime.
                </li>
              </ul>
            </div>

          {/* UX Troubleshooting */}
            <div className="timeline-date">

            </div>
            <div className="timeline-content">
              <h3>UX Troubleshooting</h3>
              <ul>
                <li>
                  Enhanced user interaction and interface usability, increasing
                  user satisfaction scores by 20% and reducing navigation time.
                </li>
                <li>
                  Improved UI/UX design, leading to a more intuitive and engaging
                  user experience.
                </li>
              </ul>
            </div>

          {/* Code Implementation */}
            <div className="timeline-date">
              
            </div>
            <div className="timeline-content">
              <h3>Code Implementation and Development</h3>
              <ul>
                <li>
                  Developed code across five server modules, enhancing system
                  performance and ensuring seamless integration.
                </li>
                <li>
                  Utilized expertise in C#, Java, JavaScript/TypeScript, SQL,
                  OpenIV, HTML, and CSS to complete projects ahead of deadlines,
                  improving system functionality and user experience.
                </li>
              </ul>
            </div>
          </div>
      </CollapsibleSection>

      {/* Footer */}
      <footer className="footer">
        <p>
          I consent to the processing of my personal data by the company for the
          purpose of recruiting for the position I am applying for.
        </p>
      </footer>
    </div>
  );
}

export default App;
