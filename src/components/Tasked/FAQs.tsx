import React, { useState } from "react";

type Category = "General" | "Pricing" | "Dashboard";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: Record<Category, FAQItem[]> = {
    General: [
      {
    question: "What makes MOH different from typical hiring platforms?",
    answer: `<p>MOH combines curated, vetted talent with intelligent matching algorithms. Instead of posting jobs and chasing proposals, you share a brief once. We match specialists, manage daily execution, and deliver outcomes through <b>one point of contact</b> and <b>one invoice</b>.</p>`,
  },
  {
    question: "What kinds of work can you handle?",
    answer: `<p>End-to-end business tasks across design, content, digital marketing, recruitment, accounting, legal, and more. If the work can be scoped and delivered remotely, we can assemble the right experts and manage it to completion.</p>`,
  },
  {
    question: 'What does "managed end-to-end" include?',
    answer: `<p>Complete project ownership including:</p>
      <ul>
        <li>Legal documentation of assets</li>
        <li>Scoping and expert matching</li>
        <li>Planning and goal setting</li>
        <li>Day-to-day coordination and quality assurance</li>
        <li>On-time delivery with regular status updates</li>
        <li>Risk management throughout your MOH journey</li>
      </ul>`,
  },
  {
    question: "How do you vet talent?",
    answer: `<p>We pre-screen for skills, portfolio depth, communication, reliability, and domain fit. Only candidates who pass test tasks and reference checks join our curated bench.</p>`,
  },
  {
    question: "Who manages the work day-to-day?",
    answer: `<p>A dedicated MOH project manager serves as your <b>single point of contact</b>. They coordinate with experts, keep tasks on track, run quality assurance, and provide regular status updates.</p>`,
  },
  {
    question: "What happens after I assign a task?",
    answer: `<p>You share your goals, scope, timelines, and brand guidelines. We translate this into a clear plan with roles, milestones, and deliverables, then assemble the right team and start execution within <b>24–48 hours</b> (except Sundays).</p>`,
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: `<p>We want you to subscribe with confidence. If work doesn't meet standards after feedback, we'll reassign resources and make it right. Our focus is always on amicable resolution and your success.</p>`,
  },
  {
    question: "What does MOH need from me to be successful?",
    answer: `<p>Clear goals, timely feedback, and access to brand assets or systems. We handle planning and execution — you focus on decisions and approvals to maintain momentum.</p>`,
  },
  {
    question: "How do I get started?",
    answer: `<p>Just follow these steps:</p>
      <ol>
        <li><b>Sign up</b> and complete your company profile</li>
        <li><b>Share</b> your first project brief</li>
        <li>We'll match you with specialists within <b>24 hours</b></li>
        <li>Your dedicated project manager begins coordination</li>
        <li>Track progress through your dashboard</li>
      </ol>`,
  },
    ],
    Pricing: [
  {
    question: "What are your subscription plans?",
    answer: `<p>We have 3 packages. <b>Check our pricing plan here</b> to choose the right package.</p>`,
  },
  {
    question: "How do payments and invoices work?",
    answer: `<p>You choose a subscription or package and pay in advance to activate your team. We send <b>1 monthly invoice</b>. Once your hour balance is low, we seek approval before adding additional hours.</p>`,
  },
  {
    question: "How do you estimate and track hours?",
    answer: `<p>Our platform collects real-time data with benchmarks of actual time taken for each task type. You'll see a transparent tracker showing:</p>
      <ul>
        <li>Progress on current tasks</li>
        <li>Hours consumed vs. hours remaining</li>
        <li>Detailed breakdown of time allocation</li>
        <li>Predictive estimates for upcoming work</li>
      </ul>`,
  },
  {
    question: "Can I change my plan anytime?",
    answer: `<p>Yes, complete flexibility to:</p>
      <ul>
        <li>Upgrade or downgrade with 7 days notice</li>
        <li>Use different functions as per your requirement</li>
      </ul>`,
  },
  {
    question: "Are there any additional fees?",
    answer: `<p><b>No hidden costs ever.</b></p>
      <ul>
        <li>All expert fees included in subscription</li>
        <li>Project management included</li>
        <li>Platform access included</li>
      </ul>`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `<p>We accept:</p>
      <ul>
        <li>Bank transfer (NEFT/RTGS)</li>
        <li>UPI payments</li>
        <li>Credit/debit cards</li>
        <li>Net banking</li>
        <li><b>Enterprise:</b> Quarterly/annual billing options</li>
      </ul>`,
  },
  {
    question: "Do you offer refunds?",
    answer: `<p>We do not offer refunds at the moment at MOH. Please write to <b>sujay@manhoursonhire.com</b> for more information.</p>`,
  },
    ],
    Dashboard: [
      {
        question: "What can I track in my dashboard?",
        answer: `
      You can track both your <b>projects</b> and <b>resources</b>. <br /><br />
      <b>Project Overview:</b>
      <ul>
        <li>Active projects and their status</li>
        <li>Team members assigned to each project</li>
        <li>Upcoming deadlines and milestones</li>
        <li>Recent deliverables and approvals</li>
      </ul>
      <b>Resource Management:</b>
      <ul>
        <li>Hour consumption across all projects</li>
        <li>Remaining subscription balance</li>
        <li>Expert utilisation and productivity</li>
        <li>Cost breakdown by project/task type</li>
      </ul>
    `,
      },
      {
        question: "How do I communicate with my team?",
        answer: `
      You can choose among these: <br /><br />
      <ul>
        <li><b>Project chat:</b> Direct messaging with your project manager</li>
        <li><b>Team updates:</b> Automated status reports</li>
        <li><b>Video calls:</b> Schedule directly through dashboard</li>
        <li><b>File sharing:</b> Secure document exchange</li>
        <li><b>Feedback system:</b> Approve/request changes on deliverables</li>
      </ul>
    `,
      },
      {
        question: "Can I download reports?",
        answer: `
      Yes, you get <b>comprehensive reporting</b>: <br /><br />
      <ul>
        <li><b>Time reports:</b> Detailed hour breakdowns (PDF/Excel)</li>
        <li><b>Project summaries:</b> Status and deliverable reports</li>
        <li><b>Billing statements:</b> Invoice history and payment records</li>
        <li><b>Performance metrics:</b> Quality scores and timeline records</li>
        <li><b>Custom reports:</b> Enterprise users can request specific formats</li>
      </ul>
    `,
      },
      {
        question: "How do I add a new project?",
        answer: `
      Simple <b>3-step process</b>: <br /><br />
      <ol>
        <li><b>Brief:</b> Describe your project goals and requirements</li>
        <li><b>Scope:</b> We'll propose timeline, team, and hour estimate</li>
        <li><b>Approve:</b> Confirm details and we'll start within 24-48 hours</li>
      </ol>
    `,
      },
      {
        question: "Can I pause or modify ongoing projects?",
        answer: `
      You get <b>complete project control</b>: <br />
      <ul>
        <li><b>Pause:</b> Temporarily halt work without losing progress</li>
        <li><b>Modify scope:</b> Adjust requirements with new hour estimates</li>
        <li><b>Team changes:</b> Request different specialists only if it's not working out</li>
      </ul>
    `,
      },
      {
        question: "Is my dashboard data secure?",
        answer: `
      Yes, we ensure <b>enterprise-grade security</b>: <br /><br />
      <ul>
        <li>SSL encryption for all data transmission</li>
        <li>Regular security audits and compliance checks</li>
        <li>Two factor authentication available</li>
        <li>JWT authentication</li>
        <li>Role based access controls for team members</li>
      </ul>
    `,
      },
      {
        question: "Can I integrate MOH with other tools?",
        answer: `
      Yes, with the following <b>integrations</b>: <br /><br />
      <ul>
        <li>Slack/Teams for notifications</li>
        <li>Google Workspace/Office 365 for file sharing</li>
        <li>Project management tools (Asana, Trello)</li>
        <li>CRM systems (Salesforce, HubSpot)</li>
        <li><b>Enterprise:</b> Custom API access for deeper integrations</li>
      </ul>
    `,
      },
    ],
  };

  // FIXED Helper: render HTML inside answers
const renderAnswer = (answer: string) => {
  return (
    <div
      className="text-md text-[#333] space-y-2
                 [&>ul]:list-disc [&>ul]:pl-5
                 [&>ol]:list-decimal [&>ol]:pl-5
                 [&>li]:mb-1"
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
};


  const renderColumn = (col: FAQItem[], startIndex: number) =>
    col.map((item, i) => {
      const idx = startIndex + i;
      const isOpen = openIndex === idx;

      return (
        <div
          key={idx}
          className={`bg-[#EDEDED] rounded-xl mb-5 p-5 transition-all duration-300 ease-in-out ${
            isOpen ? "shadow-md" : "shadow-none"
          } outline-none focus:ring-0`}
          onMouseEnter={() => setOpenIndex(idx)}
        >
          <div className="flex justify-between items-center text-md font-semibold text-[#952502] cursor-pointer">
            {item.question}
            <span className="text-l md:text-2xl font-medium ml-2">
              {isOpen ? "−" : "+"}
            </span>
          </div>
          {isOpen && (
            <div className="mt-3 text-left transition-opacity duration-200">
              {renderAnswer(item.answer)}
            </div>
          )}
        </div>
      );
    });

  const renderFAQs = () => {
    const questions = faqs[activeCategory];
    const mid = Math.ceil(questions.length / 2);
    const col1 = questions.slice(0, mid);
    const col2 = questions.slice(mid);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto mt-10">
        <div>{renderColumn(col1, 0)}</div>
        <div>{renderColumn(col2, col1.length)}</div>
      </div>
    );
  };

  return (
    <section className="w-full px-4 md:px-12 py-16 bg-white font-poppins">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#952502] mb-5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-7 text-sm md:text-base">
        It can be hard to choose the right services for your business. We’re here to help.
      </p>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {(["General", "Pricing", "Dashboard"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(0);
            }}
            className={`px-4 py-2 rounded-md border text-sm transition-all duration-100 outline-none focus:ring-0
              ${
                activeCategory === cat
                  ? "bg-[#903033] text-[#ffffff] font-semibold border-[#903033]"
                  : "bg-white text-[black] border-[#903033] hover:text-[#903033] hover:border-[#903033]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {renderFAQs()}
    </section>
  );
};

export default FAQSection;
