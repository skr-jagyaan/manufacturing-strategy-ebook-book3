export default {
  screens: [

    // ── COVER ────────────────────────────────────────────────────────────────
    {
      type: 'cover',
      seriesLabel: 'The Manufacturing Strategy Series',
      bookNumber: 'Book Three',
      title: "Don't Bet the Business",
      subtitle: 'How Manufacturing Companies Validate Strategic Assumptions Before Committing Capital',
      author: 'Sudharsan K R',
    },

    // ── COPYRIGHT ────────────────────────────────────────────────────────────
    {
      type: 'copyright',
      seriesLine: 'The Manufacturing Strategy Series',
      bookList: [
        'Book One — Why Great Manufacturers Stay Invisible',
        'Book Two — Stop Planning, Start Winning',
        'Book Three — Don\'t Bet the Business',
        'Book Four — Decoding the Rs. 100 Cr Breakthrough',
      ],
      copyrightLine: 'Copyright © 2026 by Sudharsan K R',
      rights: 'All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means — including photocopying, recording, or other electronic or mechanical methods — without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.',
      disclaimer: 'The case studies and scenarios featured in these pages are composite accounts based on real-world consulting experiences. Specific names, locations, and identifying business metrics have been altered to protect client confidentiality. This publication is sold with the understanding that the author is not engaged in rendering legal, accounting, or other professional compliance services.',
      publishedLine: 'Published in India.',
    },

    // ── TABLE OF CONTENTS ────────────────────────────────────────────────────
    {
      type: 'toc',
      items: [
        { label: 'Preface', indent: 0 },
        { label: 'Who Should Read This Book', indent: 0 },
        { label: 'Introduction: The Costly Decision Trap', indent: 0 },
        { label: 'Part One: Why Big Strategic Bets Go Wrong', indent: 0, isPartHead: true },
        { label: 'Chapter 1: The Gut Feeling Decision', indent: 1 },
        { label: 'Chapter 2: The Capital Trap', indent: 1 },
        { label: 'Part Two: Turning Strategy Into Testable Logic', indent: 0, isPartHead: true },
        { label: 'Chapter 3: What Would Have to Be True?', indent: 1 },
        { label: 'Chapter 4: Identifying the Deal Killers', indent: 1 },
        { label: 'Part Three: Thin-Slicing Experiments', indent: 0, isPartHead: true },
        { label: 'Chapter 5: The Logic of Thin-Slicing', indent: 1 },
        { label: 'Chapter 6: Simple Market Experiments', indent: 1 },
        { label: 'Chapter 7: The Fake Door Test', indent: 1 },
        { label: 'Part Four: Making Decisions With Confidence', indent: 0, isPartHead: true },
        { label: 'Chapter 8: Learning From Experiments', indent: 1 },
        { label: 'Chapter 9: When to Commit Capital', indent: 1 },
        { label: 'Chapter 10: Building a Strategic Learning Habit', indent: 1 },
      ],
    },

    // ── PREFACE ──────────────────────────────────────────────────────────────
    {
      type: 'preface',
      heading: 'Preface',
      body: `<p>In my career, I have not just observed the engineering and manufacturing world from the sidelines — I have been in the middle of negotiating it.</p>

<p>During years of joint venture discussions and facility visits with institutions like ISRO and IISc, I sat across the table from some of the most rigorous analytical minds in the country. In those settings, I saw what genuine intellectual discipline looks like when applied to a hard problem — the insistence on testing assumptions before acting on them, the refusal to confuse activity with progress, and the discipline of distinguishing between what is known and what is merely hoped.</p>

<p>I took that same lens into the boardrooms of large industrial organisations — L&amp;T, GMR, and others. I saw how businesses at scale make high-stakes capital decisions. How they separate a validated opportunity from an exciting idea. How they build the conditions under which capital is committed, rather than committing capital and then hoping the conditions materialise.</p>

<p>And then I stepped into the boardrooms and factory floors of manufacturing businesses in the Rs. 10 to Rs. 50 Crore band across Pune, Coimbatore, Ahmedabad, Ludhiana, Rajkot, and the industrial estates surrounding them. The most visible symptom I consistently encountered was the idle machine — present in almost every factory I visited, draped in a tarp, representing a capital commitment made before the market had been tested.</p>

<p>The story behind every idle machine was structurally identical. A leadership team had identified an opportunity, the boardroom had buzzed with excitement, the spreadsheets had shown spectacular returns, and the purchase order had been signed before a single assumption had been validated. The demand never materialised. The European buyers stopped returning emails. The defence contracts were delayed by bureaucracy. The EV market shifted its design parameters. The machine sat.</p>

<p>This book is about preventing that machine from ever being purchased. It is about the discipline of testing your most dangerous strategic assumptions before committing capital — cheaply, rapidly, and with full protection of your balance sheet. It is the methodology that separates businesses that scale from businesses that survive, and it is the single most underutilised capability in the Indian manufacturing sector.</p>

<p>The frameworks here — the WWHTBT logic test, the Deal Killer isolation, the Thin-Slicing methodology, the Fake Door Test — are not academic constructs. They are the diagnostic tools I use in direct engagement with founders, boards, and leadership teams facing high-stakes capital decisions. They have been built from real decisions, real machines, and real balance sheets. They are tested in the field, not the classroom.</p>`,
      authorName: 'Sudharsan K R',
      authorTitle: 'Business Model & Strategy Advisor',
    },

    // ── WHO SHOULD READ THIS BOOK ────────────────────────────────────────────
    {
      type: 'who',
      heading: 'Who Should Read This Book',
      body: `<p>This book is the third in the Manufacturing Strategy Series. It is designed for a specific kind of leader at a specific kind of moment — the moment before a major capital decision is made.</p>

<p><strong>The Managing Director or Promoter Facing a Major Capital Decision</strong></p>
<p>You have identified an opportunity. The boardroom is excited. Your VP of Sales is confident, your Head of Production has quoted the machine cost, and the bank is ready to extend the credit. Before you sign the purchase order, this book will give you a rigorous methodology for distinguishing between a validated opportunity and an exciting idea. It will take approximately four hours to read. The capital it could save you will dwarf any other investment you make this year.</p>

<p><strong>The CFO or Finance Head of a Manufacturing Business</strong></p>
<p>You have been in the meetings. You have seen the optimistic spreadsheets, the spectacular projected ROIs, and the confident "this is a guaranteed market" presentations. You have also seen the machines draped in tarps three years later. This book will give you the analytical vocabulary and the specific boardroom tools to hold strategic decisions to a higher standard of evidence — without being the person who simply says no to every new idea.</p>

<p><strong>The CA, Lawyer, or Financial Advisor to Manufacturing Businesses</strong></p>
<p>You advise clients who make capital allocation decisions. You see their balance sheets before and after these decisions are made. You have watched businesses take on significant debt to finance machines, factory wings, and new capabilities — and you have watched those decisions compress margins and constrain cash flow for years. This book will give you a framework for the conversation with your client that happens before the loan is signed.</p>

<p><strong>The Independent Director or Board Member of a Manufacturing Company</strong></p>
<p>Capital allocation proposals come to you with polished presentations, detailed financial projections, and confident management teams. Your fiduciary responsibility is to ask the questions the management team may not have asked themselves. The WWHTBT framework, the Deal Killer isolation, and the Three Pillars of Capital Readiness in this book are the questions a board should ask before approving any major strategic capital expenditure.</p>

<p><strong>The Executive Director or Senior Leader Inside a Manufacturing Business</strong></p>
<p>You sit in the strategy meetings. You hear the ideas. You watch the decisions being made. You may have a sense that something is being skipped — that the step between "this sounds like a good idea" and "let us buy the machine" is missing a rigorous middle stage. This book names that middle stage and gives you the tools to introduce it into your company's decision-making process.</p>

<p><strong>Who This Book Is Not For</strong></p>
<p>This book is not for businesses that are still in the survival stage — where the urgent task is generating enough cash flow to meet payroll, not validating strategic assumptions before capital deployment. It is also not for those who are already committed. If you have signed the bank loan, bought the machine, and the equipment is arriving next week, this book will not help you with that decision. It will, however, help you design the next one correctly.</p>`,
    },

    // ── INTRODUCTION SCREEN 1: THE COSTLY DECISION TRAP ──────────────────────
    {
      type: 'intro',
      label: 'Introduction',
      heading: 'The Costly Decision Trap',
      body: `<p>Walk onto the shop floor of almost any mid-sized manufacturing company that has been operating for more than a decade, and if you look closely enough, you will find it. Usually it is sitting in the back corner of the facility, pushed up against a wall, draped in a dusty plastic tarp, or quietly being used as an incredibly expensive table to store empty cardboard boxes. It is the physical monument to a failed strategic bet.</p>

<p>Perhaps it is a specialised Rs. 3 Crore multi-axis tube laser. Perhaps it is an automated powder-coating line. Or maybe it is an entire climate-controlled cleanroom that has not seen a human being in eighteen months. Whenever I see one of these silent, idle monuments on a factory floor, I ask the founder the exact same question: what is the story behind that machine?</p>

<p>The founder will usually sigh, look at the floor, and tell a story that goes exactly like this. Two years ago, the leadership team identified a massive, highly promising market opportunity. Maybe it was a sudden boom in electric vehicle components. Maybe it was a government mandate pushing for localised defence manufacturing. Or maybe it was a lucrative export opportunity to European buyers who were looking for a China Plus One supplier. The boardroom buzzed with excitement. The spreadsheets were drawn up. The return on investment looked absolutely spectacular on paper.</p>

<p>Because the opportunity was so obvious, and because the leadership team was terrified that their competitors would beat them to the punch, they decided to move with aggressive speed. They called the bank. They took out a massive term loan. They signed a purchase order for the specialised machinery. They leased an extra 5,000 square feet of floor space. They hired a new production manager and spent a fortune flying the sales team to trade shows in Germany. They bet the business on the opportunity. And then nothing happened.</p>

<p>Two years later, the promised demand never materialised. The European buyers stopped returning emails. The defence contracts were delayed by bureaucracy. The EV market shifted its design parameters, rendering the newly purchased machines obsolete. Now the company is saddled with a crippling monthly EMI payment for a machine that produces zero revenue. The CFO is panicking about cash flow. The sales team is demoralised. And the business is suddenly vulnerable to bankruptcy, all because they confused a strategic idea with a strategic certainty.</p>`,
    },

    // ── INTRODUCTION SCREEN 2: THE ILLUSION OF THE BOLD LEAP ─────────────────
    {
      type: 'intro',
      label: 'Introduction',
      heading: 'The Illusion of the Bold Leap',
      body: `<p>There is a toxic myth in the business world, perpetuated by magazines, motivational speakers, and startup culture. It is the myth of the Bold Leap. We are taught that great entrepreneurs are gamblers. We are told that to achieve massive growth, a founder must trust their gut, burn the boats, and push all their chips into the centre of the table.</p>

<p>In the software industry, betting the business is relatively cheap. If a software company builds a bad app, they lose a few months of programmer salaries. They can rewrite the code over the weekend and try again. But in the heavy industrial manufacturing sector, betting the business requires concrete, steel, high-voltage electricity, and multi-million-rupee capital expenditure. When a manufacturer makes a bad bet, they cannot just pivot over the weekend. They are stuck with three tons of useless iron bolted to their factory floor.</p>

<p>The core insight of this book is simple, but it will fundamentally change how you deploy capital for the rest of your career: many companies make massive strategic bets based on hope, disguised as strategy. Smart companies do not operate on hope. Smart companies test their strategic ideas to generate prospective data before they commit serious capital.</p>`,
    },

    // ── INTRODUCTION SCREEN 3: FROM EVIDENCE TO PROSPECTIVE DATA ─────────────
    {
      type: 'intro',
      label: 'Introduction',
      heading: 'From Evidence to Prospective Data',
      body: `<p>When a leadership team debates a new strategic direction — like shifting from commercial components to aerospace — the accountants and engineers in the room will naturally demand evidence that the market exists. But demanding evidence is a linguistic trap. Evidence, by definition, is a record of the past. If you are launching a completely new strategic advantage that your company has never offered before, there is no past evidence to look at.</p>

<p>If you wait until an opportunity is so heavily documented and proven that it is generating historical evidence, the market is already saturated. You are too late. You cannot use past evidence to prove a future strategy.</p>

<p>Instead, you must build confidence through prospective data. Prospective data is the information you actively generate today to de-risk your decisions about tomorrow. It is the signal you extract from the market by running small, cheap, rapid experiments. If you think European buyers will pay a 20% premium for your new rapid-prototyping capability, you do not buy the machines and wait to see if you were right. You design a low-cost experiment to see if a buyer will sign a Letter of Intent before the machines even exist. You generate prospective data.</p>

<p>The goal of this book is to teach you how to stop gambling. You will learn how to take the brilliant strategic choices you made in the boardroom and slice them into tiny, testable assumptions — and how to generate the prospective data required to build absolute, unshakable confidence in your strategy before you call the bank.</p>`,
    },

    // ── READER FORM ──────────────────────────────────────────────────────────
    {
      type: 'form',
      title: 'Before we begin',
      subtitle: 'Your answers personalise the reading experience and shape the strategic reflection at the end.',
      fields: [
        {
          id: 'readerName',
          label: 'Your name',
          placeholder: 'How should we address you?',
          type: 'text',
        },
        {
          id: 'readerRev',
          label: 'Your current revenue band',
          type: 'select',
          options: [
            { value: 'under10', label: 'Under ₹10 Cr' },
            { value: '10to25', label: '₹10 Cr – ₹25 Cr' },
            { value: '25to50', label: '₹25 Cr – ₹50 Cr' },
            { value: '50plus', label: 'Above ₹50 Cr' },
          ],
        },
        {
          id: 'readerSector',
          label: 'Your manufacturing sector',
          placeholder: 'e.g. Sheet metal, Castings, PCB assembly…',
          type: 'text',
        },
      ],
    },

    // ── COMPANION INTRO ───────────────────────────────────────────────────────
    {
      type: 'companion',
      companionInitial: 'R',
      companionName: 'Rajan Pillai',
      companionTitle: 'Hydraulic components · Coimbatore',
      body: `<p>Throughout this book, you will hear from <strong>Rajan Pillai</strong> — a hydraulic components manufacturer from Coimbatore who spent five years paying for a mistake he made in one boardroom meeting.</p>

<p>In 2019, Rajan signed a ₹2.8 Crore loan for a high-pressure testing rig and a precision honing line — based on a trade show conversation and an enthusiastic VP of Sales. The defence contract never came. The machine sat under a tarp for three years. The EMI was ₹4.2 lakhs a month. He calls it his "₹2.8 Crore MBA."</p>

<p>Today, Rajan's business is at ₹38 Crore and growing. He runs an RFQ Stress Test before every major CAPEX. He keeps a monthly Cost of Learning budget. He has not bought a single machine without a signed LOI in four years.</p>

<p>At the end of each chapter, Rajan will share one note from the floor — not advice, not a framework, just what this idea looked like inside a real Coimbatore factory. His perspective is blunt, specific, and earned the hard way.</p>`,
    },

  ]
}
