export default {
  chapterNum: 8,
  chapterTitle: 'Learning From Experiments',
  partName: 'Part Four · Making Decisions With Confidence',
  barTitle: 'Chapter 8: Learning From Experiments',
  screens: [

    {
      type: 'opener',
      partName: 'Part Four · Making Decisions With Confidence',
      chapterNum: 'Chapter 8',
      chapterTitle: 'Learning From Experiments',
      intro: 'The market almost never speaks in binary code. When you run a strategic experiment, you rarely get perfect validation or absolute rejection. You get friction. You must know how to read it.',
    },

    {
      type: 'content',
      title: 'Learning From Experiments',
      body: `<p>You have done the terrifying work. You isolated your Deal Killer assumption. You designed a Thin-Slice experiment or a bold Fake Door test. You overrode the perfectionism of your engineering team, silenced the anxiety of your sales team, and placed your hypothesis in front of a real corporate buyer. Now, the experiment is over. The results are in. Your leadership team is sitting in the boardroom, staring at the whiteboard, waiting to find out if they are going to buy a Rs. 5 Crore machine or scrap the entire strategy. This is the most dangerous moment in the entire testing process.</p>

<p>Why? Because founders and executive teams desperately want the market to give them a binary, black-and-white answer. They want the market to yell "Yes! This is perfect! Take my money!" or "No! We hate this! Go away!" But the market almost never speaks in binary code. The market speaks in messy, gray, nuanced signals. When you run a strategic experiment, you rarely get perfect validation or absolute rejection. You get friction. You get a customer who loves the product but hates the price. You get a buyer who signs the Letter of Intent but crosses out three critical technical specifications with a red pen. You get a distributor who wants the new capability, but demands 90-day payment terms that would destroy your cash flow.</p>

<p>If you do not know how to read these messy signals objectively, your leadership team will immediately fall victim to Confirmation Bias — twisting the prospective data to fit the narrative they already wanted to believe.</p>`,
      pushbacks: [
        {
          q: `How long should an experiment run before we decide the results are conclusive? When do we stop waiting for more signals?`,
          a: `The answer is defined before the experiment begins — not after. When you set the Ex-Ante Control Limits with the Skeptic's Contract, you also set the time boundary: "We will run this test for 30 days. Whatever data we have at the end of 30 days is what we read." An experiment without a time boundary becomes an excuse to keep collecting data until the results support the conclusion you wanted. The discipline is in the deadline, not the data volume. Set the clock before you start. Read the results when it rings.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Common Cause vs Special Cause Variation',
      body: `<p>To build true strategic confidence, you must accept that the goal of an experiment is not to prove you were 100% right. The goal is to systematically eliminate uncertainty. To do this objectively, you must apply the logic of Conceptual Statistical Process Control. Before you look at the results of your experiment, you must understand that live market data will always produce variance. Your job is to classify that variance into one of two categories.</p>

<p><strong>Common Cause Variation — the Sleep Zone</strong> — is when the test results fluctuate but stay inside the Ex-Ante Control Limits you set before the experiment. It is just market noise. The rule here is: persevere and keep your hands off the dials. Adjusting a strategy that is operating within its normal variance is called tampering. Tampering destabilises the system, wastes time, and destroys value.</p>

<p><strong>Special Cause Variation — the Panic Zone</strong> — is when the data violently breaches your Ex-Ante Control Limits. It is no longer noise. It is a definitive signal. The logic of the strategy is broken, and a strategic adjustment is mandatory. You cannot rationalise it away.</p>`,
      pushbacks: [
        {
          q: `How do we set Ex-Ante Control Limits for a market we have never been in before? We have no baseline to compare against.`,
          a: `You do not need a historical baseline. You need a logical threshold — the minimum signal that would give a rational, risk-aware investor confidence to deploy the capital. Ask the question directly in the boardroom: "If we get X signed LOIs from Y target buyers within Z days, would a reasonable CFO approve this investment?" Work backwards from the capital amount. A Rs. 50 lakh investment might need 2 LOIs. A Rs. 5 Crore investment might need 5. The threshold is not statistical — it is a judgment call made before the data exists, and written down so it cannot be moved after the data comes in.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Reading the Three Signal Types',
      body: `<p>When your data generates a Special Cause signal, you must force your leadership team to categorise the feedback accurately.</p>

<p><strong>The first type is the False Positive — the Polite Deflection.</strong> Your sales team pitches the new Fake Door catalogue to a procurement manager. The manager smiles, nods, and says this looks incredibly innovative and they will definitely keep it on file for their Q4 vendor review. The Faction of Hope in your boardroom will hear this and scream that they loved it. The reality: this is a False Positive. The buyer did not commit any capital, sign any document, or introduce you to their engineering team. They gave you a polite deflection to get you out of their office. Prospective data must involve a transfer of risk. A smile is not data.</p>

<p><strong>The second type is the Conditional Yes — the Pivot Signal.</strong> You run an RFQ Stress Test, quoting a 30% premium for extreme 48-hour delivery. The buyer rejects the quote, but they immediately call your VP of Sales and say they cannot authorise a 30% premium, but if you can guarantee the same 48-hour delivery for a 15% premium, they will pull the contract from their current vendor today and give it to you. The Faction of Fear will say the test failed and the strategy is dead. The reality: the test did not fail; it calibrated your assumption. The buyer absolutely validated your How to Win. They simply identified the ceiling of your pricing power. This is the most valuable prospective data you can generate.</p>

<p><strong>The third type is the Hard No — the Bullet Dodged.</strong> You build an Ugly Duckling proxy prototype of a new lightweight sheet-metal assembly and hand it to the customer's engineering team. They try to bolt it onto their assembly line, and it structurally fails under the torque of their pneumatic drills. They hand it back and say this design fundamentally cannot withstand their assembly process. The reality: this is a massive victory. You just found out the Deal Killer assumption was definitively false. You spent Rs. 50,000 on an Ugly Duckling to save your company from spending Rs. 2 Crore on permanent progressive stamping dies that would have produced useless parts.</p>`,
      pushbacks: [
        {
          q: `What if we get all three signal types from different buyers in the same experiment — a False Positive from one, a Conditional Yes from another, and a Hard No from a third?`,
          a: `That mixed result is itself the signal. It tells you that the market is segmented — different buyers have different pain levels, different budgets, and different structural barriers. Your job is to identify which segment gave you the Conditional Yes and ask: is that segment large enough and accessible enough to justify the capital? The False Positive buyer is irrelevant — they will never buy regardless of price or quality. The Hard No buyer may have an engineering constraint specific to their application. The Conditional Yes buyer is your real market. Design the next experiment entirely around that segment.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Refereeing Confirmation Bias in the Boardroom',
      body: `<p>When the prospective data comes back mixed, your boardroom will descend into chaos. The executives who championed the idea will try to highlight only the positive signals. The executives who opposed the idea will weaponise the negative signals to kill the project. As the CEO, you are no longer a visionary. You are a scientist reading a lab report. Before you even ran this test, you used the Skeptic's Contract — you looked directly at the CFO, the biggest skeptic in the room, and asked: "What exact number of signed LOIs do you need to see from this test to authorise the capital?" The CFO set the Ex-Ante Control Limit. He said five LOIs. Nothing less.</p>

<p>Now the test is over. The VP of Sales returns with only one signed LOI, but is begging to proceed because the market is warming up. The CFO demands you kill the project. The strategist's response: "Everyone stop. We are not going to argue about emotions or strong considerations. Before we ran this test, we made a Skeptic's Contract. CFO, you set the baseline at 5 LOIs to justify the capital for the cold-heading machines. We got 1. The test mathematically breached our Ex-Ante Control Limit. We are not authorising the capital today. However, we are not killing the project just yet, because we need to understand what caused the Special Cause Variation. VP of Sales, did the other distributors reject the product quality, the price, or our lead times? Tomorrow, your job is to call them back and ask exactly what would have to change for them to sign the LOI today. If it is a minor tweak to the packaging, we pivot. If they say our base price is fundamentally uncompetitive against China, the Deal Killer is confirmed, and we kill the project permanently."</p>

<p>By enforcing the pre-established metric, you stop the VP from lying to himself. By demanding to know why the failure occurred, you stop the CFO from prematurely killing a strategy that might just need a minor pivot.</p>`,
      pushbacks: [
        {
          q: `What if the CFO set the Ex-Ante Control Limit unreasonably high — demanding ten LOIs when the realistic market might only have twenty qualified buyers in total?`,
          a: `That is exactly the conversation to have before the experiment begins — not after. If your total addressable market has twenty qualified buyers and the CFO demands ten LOIs as the threshold, push back immediately: "Ten LOIs from a twenty-buyer market is a 50% conversion rate before we have even built the capability. That is not a test — that is a guarantee. A reasonable threshold for a new market entry is two to three LOIs from twenty qualified buyers. If we cannot convert 10 to 15% of our target market with a compelling proposition, the strategy is probably wrong." Set the threshold by working backwards from what a rational capital allocation decision requires — not from what the most sceptical person in the room demands.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'The Four Strategic Reactions',
      body: `<p>Once you have objectively reviewed the prospective data against your Ex-Ante Control Limits, you must mandate one of four specific reactions. "We need to think about it more" is not a reaction.</p>

<p><strong>Persevere — Common Cause Variation:</strong> the prospective data fluctuated but landed safely inside your pre-established Control Limits. The customer signed the LOI, paid the premium, or successfully utilised the prototype at the rate you mathematically predicted. Keep your hands off the dials. The Deal Killer assumption has been neutralised. You immediately transition from testing to aggressive execution. You sign the bank loans and commit the capital.</p>

<p><strong>Tweak — Minor Special Cause Variation:</strong> the data breached your Control Limit, but the core logic of the strategy remains intact. The customer desires the value, but a minor mechanism caused friction — perhaps the specific packaging, a minor feature, or the phrasing of the sales script. You make a minor, tactical alteration to the delivery mechanism without changing the foundational How to Win. You adjust the specific friction point and re-run the test to see if the data returns to the Sleep Zone.</p>

<p><strong>Pivot — Major Special Cause Variation:</strong> the data violently breached the limit, and the fundamental WWHTBT logic is completely undermined. A Pivot is not random spaghetti-throwing out of panic. You do not kill the company, but you kill the current logic. You must execute a complete change in the strategy's logic, informed by a completely new theory — a new Where-to-Play and How-to-Win — with a brand-new WWHTBT list. You design a new, rapid Thin-Slice experiment for this new theory.</p>

<p><strong>Kill — Abandon:</strong> the prospective data was brutal. The foundational assumptions consistently proved false — zero foot traffic, complete structural failure, flat rejection of pricing — and there is no plausible, mathematically sound path to make them true. You abandon the strategy immediately to save the balance sheet. You celebrate the Kill. You stand in front of your company and announce: "We just generated data that proved this market is not viable. By running this test, we saved Rs. 3 Crore in wasted capital. This is a massive victory."</p>`,
      pushbacks: [
        {
          q: `How do we tell the difference between a Tweak and a Pivot? Both involve changing something after the data comes back.`,
          a: `The test is whether the core WWHTBT logic is still intact. In a Tweak, the customer has validated the fundamental value proposition — they want the capability, they accept the pricing tier, and they are willing to engage. The friction is in the mechanism of delivery: the packaging, the lead time, the specific configuration. You change the mechanism and retest. In a Pivot, the customer has rejected the fundamental value proposition — they do not want the capability at any price, or the core assumption about their behaviour has been proven false. No amount of tweaking the mechanism will fix a broken hypothesis. If you find yourself tweaking the same strategy three times with no improvement in the signal, you are in a Pivot situation and the data is telling you something you do not want to hear.`,
        },
      ],
    },

    {
      type: 'exchange',
      title: 'Your Reflection',
      subtitle: 'Before moving to Chapter 9, take a moment to record what landed.',
      prompts: [
        'Think of a past experiment or market test your business ran informally. Looking back, was the signal a False Positive, a Conditional Yes, or a Hard No? Did you read it correctly at the time?',
        'Have you ever witnessed Confirmation Bias in a boardroom — where executives on one side ignored signals that contradicted their position? What was the outcome?',
        'For your current Deal Killer assumption: what is your Ex-Ante Control Limit? Write down exactly what result, in what timeframe, would cause you to Persevere, Tweak, Pivot, or Kill.',
      ],
    },

    {
      type: 'end',
      chapterNum: 8,
      totalChapters: 10,
      chapterTitle: 'Learning From Experiments',
      nextChapterTitle: 'When to Commit Capital',
      closingLine: 'You can now read what the market sends back. The next chapter answers the question every founder is really asking: when exactly do I pull the trigger and commit the capital?',
    },

  ],

  vikramPerspectives: [
    `The most dangerous moment after an experiment is not when the data is bad. It is when the data is ambiguous. In 2022, after my first RFQ Stress Test, I got two responses from five buyers. One signed at the premium. Four rejected it. My VP of Sales said two out of five is a 40% hit rate — we should proceed. My instinct said the same thing. What stopped us was the Skeptic's Contract. My CFO had said before we ran the test: I need three signed POs to authorise the honing cell loan. We got one. We did not proceed. Instead, I called the four who rejected and ran a Trojan Horse interview on each of them. Three of the four said the premium was too high. One said his budget cycle was wrong — he would be ready in Q2. That Q2 buyer became our second customer. The Skeptic's Contract forced us to learn more before we spent more.`,
    `The Conditional Yes is the signal I have learned to love most. It means the market wants what you are building — they just want it slightly differently than you imagined. In 2023, a major construction equipment OEM rejected my hydraulic manifold quote on price. But their VP of Engineering called me back personally and said: if you can deliver with a two-week lead time instead of six, I will pay your price without negotiation. I had been optimising for price. The market was optimising for speed. That one phone call completely changed the design of our new cell. We built for speed, not just precision. Lead time dropped to nine days. Margin expanded by 18%. The Conditional Yes told me more about my strategy than ten successful tests would have.`,
    `I celebrated my first Kill in front of my entire team in 2024. We had been testing a pivot into high-pressure nitrogen accumulator assemblies for the oil and gas sector. Three months of experiments, four Trojan Horse interviews, two RFQ Stress Tests. Every signal was the same: the sector's vendor qualification process takes two years minimum and requires a track record we did not have. The Deal Killer was structural and unmovable. I stood in our production meeting and said: we just saved Rs. 1.8 Crore and two years of misdirected effort. This is a victory. My team looked at me like I had lost my mind. But three of them came to me privately afterwards and said it was the first time they had ever seen a bad result treated as information rather than failure. That shift in culture is worth more than any single capital decision.`,
  ],
}
