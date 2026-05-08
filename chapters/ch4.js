export default {
  chapterNum: 4,
  chapterTitle: 'Identifying the Deal Killers',
  partName: 'Part Two · Turning Strategy Into Testable Logic',
  barTitle: 'Chapter 4: Identifying the Deal Killers',
  screens: [

    {
      type: 'opener',
      partName: 'Part Two · Turning Strategy Into Testable Logic',
      chapterNum: 'Chapter 4',
      chapterTitle: 'Identifying the Deal Killers',
      intro: 'Not all assumptions are created equal. Hiding inside your list of thirty variables are two or three Deal Killers — and finding them is the only job that matters.',
    },

    {
      type: 'content',
      title: 'Identifying the Deal Killers',
      body: `<p>If you successfully completed the exercise at the end of the last chapter, your boardroom whiteboard is currently a terrifying sight. You have a list of twenty to thirty hidden assumptions staring back at you. The natural reaction of a manufacturing leadership team at this exact moment is pure overwhelm. The Production Manager points to the board and says: "Boss, if we have to prove all thirty of these assumptions before we buy the machine, we will be stuck in the planning phase for the next two years. Our competitors will eat us alive while we are busy testing."</p>

<p>The Production Manager is partially right. If you try to test every single assumption on that whiteboard, you will suffer from catastrophic analysis paralysis. But you do not need to test every assumption. Not all assumptions are created equal. Most of the variables on your whiteboard are secondary. If they turn out to be false, they will cause a headache, but you can survive them being wrong.</p>

<p>However, hiding inside that list of thirty variables are two or three Deal Killers. A Deal Killer is a foundational, load-bearing assumption that is completely untested. If a Deal Killer turns out to be false, the entire strategy instantly collapses, your capital investment is completely wiped out, and revenue goes to absolute zero. Your goal is not to solve the whole whiteboard. Your goal is ruthless triage.</p>`,
      pushbacks: [
        {
          q: `How do we know we are not just calling something a "secondary assumption" because we are scared to test it?`,
          a: `That is exactly the right question to ask — and the 2x2 Matrix later in this chapter is the tool that prevents it. The discipline is to ask two questions about every assumption: how catastrophic is it if wrong, and how confident are we right now? An assumption only gets labelled secondary when it scores low on both axes simultaneously. If your team is calling something secondary because testing it feels uncomfortable, it will land in the Kill Zone the moment you plot it honestly. The matrix removes the emotional escape route.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'The Engineering Bias',
      body: `<p>Before you can isolate the Deal Killers, you must understand a dangerous psychological flaw that plagues almost every manufacturing company in the world: the Engineering Bias. When you ask a room full of engineers, machinists, and factory managers to identify the scariest assumption on the whiteboard, they will almost always point to a technical, operational problem. They will say the biggest risk is whether they can hold a 5-micron tolerance on the new titanium alloy without wearing out the cutting tools too fast. Because they are engineers, they view the universe through the lens of physics, metallurgy, and cycle times. So their natural instinct is to spend the next three months running endless test cuts on a CNC machine to prove they can hold the tolerance. This is a catastrophic waste of time and money.</p>

<p>Why? Because in modern B2B manufacturing, Feasibility is almost never the Deal Killer. With enough time, enough money, and the right cutting tools, your engineering team can eventually figure out how to machine the titanium. Feasibility is entirely within your control. The true Deal Killers almost always live in the Customer bucket. The scariest assumption is not whether you can physically cut the titanium to a 5-micron tolerance. The scariest assumption is whether the European medical buyer will actually fire their current, trusted supplier and pay you a 20% premium for your 5-micron titanium part.</p>

<p>If the answer to the customer question is no, then it does not matter if your engineering team spent three months perfecting the machining process. You have perfectly engineered a product that nobody wants to buy.</p>`,
      pushbacks: [
        {
          q: `What if our Feasibility assumption genuinely is the Deal Killer? What if we literally cannot build the product at the required cost or spec?`,
          a: `Then it belongs in the Kill Zone — and it should be tested first, exactly like any other Kill Zone assumption. The Engineering Bias is not the claim that Feasibility never matters. It is the observation that engineering teams default to Feasibility even when the real unknown is the customer. When your team places a Feasibility assumption in the Kill Zone, ask them directly: if we solve this technical problem completely, is there any remaining uncertainty about whether the customer will pay the required price? If yes, the Customer assumption is co-equal and must be tested in parallel — not after.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Isolating the True Deal Killer',
      body: `<p>An industrial drone machining shop pivoting from commercial aluminium brackets to machining ultra-lightweight, complex magnesium frames for autonomous agricultural drones faces a list of assumptions. Their operators can safely machine magnesium without causing a factory fire — not a Deal Killer, fire suppression protocols are a known science. The raw magnesium supply chain will remain stable — not a Deal Killer, they can sign long-term contracts to hedge this. Drone manufacturers are willing to pay a 40% premium for locally machined magnesium frames rather than buying cheap, pre-cast carbon fibre frames from China — this is the Deal Killer. If they are completely unwilling to pay the premium for local supply, revenue is zero. The team must test this buyer behaviour before buying the magnesium-safe machines.</p>

<p>A medical tubing extruder upgrading to manufacture multi-lumen, bio-compatible silicone catheters faces a similar triage. They can dial in the extrusion speed to prevent the multiple lumens from collapsing during curing — not a Deal Killer, their engineers can run trials. Their competitors will not instantly drop prices to match them — not a Deal Killer, medical markets move slowly. Hospital procurement boards will actually approve a new, unproven brand of catheter for critical cardiovascular surgeries — this is the Deal Killer. The regulatory and psychological barrier to entry in hospitals is massive. If the surgeons refuse to trust a new brand, the technical perfection of the tubing is irrelevant.</p>`,
      pushbacks: [
        {
          q: `Both examples end with a customer behaviour assumption as the Deal Killer. Is it always the customer assumption that is the Deal Killer?`,
          a: `Almost always in the early stage of a strategic pivot — because Desirability is the one bucket that is entirely outside your control. You can engineer your way to Feasibility. You can outmanoeuvre competitors on Viability given enough time. But you cannot force a customer to want what you are building or to pay what you need to charge. That uncontrollability is what makes customer assumptions the most dangerous. The exceptions exist — a regulatory change or a competitor with a structural cost advantage can be genuine Deal Killers — but test the customer assumption first, every time.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'The 2x2 Assumption Prioritisation Matrix',
      body: `<p>To systematically find the Deal Killers without relying on gut feelings, you must use the 2x2 Assumption Prioritisation Matrix. Draw a large cross on your whiteboard to create four quadrants. The vertical axis represents Impact if Wrong, from Low Impact at the bottom to Catastrophic Impact at the top. The horizontal axis represents the Level of Uncertainty, from High Confidence on the left to Completely Guessing on the right.</p>

<p>Force your leadership team to take every assumption from the WWHTBT list and place it into one of these quadrants. <strong>Bottom Left — Low Impact, High Confidence:</strong> minor operational details you already know how to handle. <strong>Top Left — High Impact, High Confidence:</strong> fundamental truths of your business you have already mastered. <strong>Bottom Right — Low Impact, Low Confidence:</strong> interesting, unproven theories that ultimately do not matter to the strategy's survival. <strong>Top Right — High Impact, Low Confidence:</strong> this is the Kill Zone.</p>

<p>The assumptions that land here are catastrophic if you are wrong, and you currently have absolutely zero prospective data to prove you are right. "We assume the customer will pay a 30% premium" — catastrophic impact, completely unproven. "We assume the OEM will sign a 24-month volume contract" — catastrophic impact, completely unproven. You must ignore every other assumption on the board and focus 100% of your testing energy on the two or three statements living in the Top Right quadrant.</p>`,
      pushbacks: [
        {
          q: `What if two people in the room disagree on where an assumption should be plotted on the matrix?`,
          a: `The disagreement is the data. If your CFO rates an assumption as High Confidence and your VP of Sales rates it as Completely Guessing, that gap reveals that someone in the room has information the other does not — or that someone is rationalising. Surface the disagreement explicitly: "Why do you believe we are High Confidence on this? What evidence do you have?" If the answer is "I just feel we can handle it," the assumption moves toward Completely Guessing. Confidence must be grounded in actual data or demonstrated capability, not optimism.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Protecting the Kill Zone',
      body: `<p>Your engineering and production teams will actively fight against this prioritisation. Because engineers hate ambiguity, they will try to drag technical, operational assumptions into the Kill Zone so they have an excuse to go play with the machines. When your Head of Engineering tries to place the assumption "We assume we can achieve a Class 4 surface finish on the internal hydraulic bores" in the Kill Zone for a hydraulic manifold pivot, the wrong response is to authorise four weeks of custom honing tool tests.</p>

<p>The right response is to ask directly: "If I give you an unlimited tooling budget and three months of machine time, can you eventually figure out how to hit that surface finish?" When the Engineering Head says yes, the point is made: "Exactly. Because it is a known science and entirely within our control, it is not a Deal Killer. Now look at this other assumption: 'We assume the excavator OEM will break their existing 5-year contract with their current German supplier to buy from us.' If we spend three months perfecting the surface finish, and the OEM refuses to break their contract, revenue is zero. That is the true Deal Killer. We are not turning on a single machine until we generate prospective data that proves the OEM is actually willing to switch suppliers."</p>`,
      pushbacks: [
        {
          q: `What if the OEM refuses to give us any signal before we can demonstrate the capability? Some buyers will not engage until you can show them a sample.`,
          a: `That refusal is itself prospective data. A buyer who will not discuss intent, sign a non-binding LOI, or give any signal of interest before seeing a sample has just told you two things: the switching cost in their mind is very high, and your current brand equity with them is insufficient to earn speculative engagement. That does not mean the strategy is dead — it means the Deal Killer is more severe than you estimated, and your first experiment needs to focus on reducing the perceived switching risk, not on demonstrating the technical capability.`,
        },
      ],
    },

    {
      type: 'exchange',
      title: 'Your Reflection',
      subtitle: 'Before moving to Chapter 5, take a moment to record what landed.',
      prompts: [
        'Take the WWHTBT list you built in Chapter 3. Plot your top five assumptions on the 2x2 Matrix right now. Which one lands in the Kill Zone?',
        'Has your team ever spent weeks solving a Feasibility problem while the real Deal Killer — a customer behaviour assumption — went completely untested? What happened?',
        'Name the one assumption your business is currently making about a customer or market that, if proven false, would immediately stop a major investment or direction. That is your Deal Killer. Write it down.',
      ],
    },

    {
      type: 'end',
      chapterNum: 4,
      totalChapters: 10,
      chapterTitle: 'Identifying the Deal Killers',
      nextChapterTitle: 'The Logic of Thin-Slicing',
      closingLine: 'You now know which assumption has the power to collapse the strategy. The next three chapters teach you how to test it — cheaply, rapidly, and without buying a single machine.',
    },

  ],

  vikramPerspectives: [
    `My Kill Zone assumption in 2019 was one I never wrote down: we assume the DRDO subcontractor has discretionary authority to award direct vendor contracts without going through a central tender process. I never asked it. I never plotted it on any matrix. It was sitting in the Top Right quadrant the entire time — catastrophic if wrong, and I had zero data. It was wrong. I found out eighteen months and ₹2.8 Crore later. The Kill Zone is not a concept. It is the specific question you are most afraid to ask because you are most afraid of the answer.`,
    `The Engineering Bias — I see it in my own team every time we discuss a new market. Last year we were evaluating a move into high-pressure pneumatic systems for cleanroom applications. My Head of Engineering immediately put three Feasibility assumptions in the Kill Zone: sealing tolerances, material compatibility, cycle time on the new manifold geometry. All legitimate questions. All entirely solvable with machine time. I asked him: can you eventually solve all three with enough budget and time? He said yes. I said: then none of them are Deal Killers. The Deal Killer is whether cleanroom OEMs will actually qualify a new pneumatics supplier, given that their current supplier has been audited and validated for seven years. That question took one week to test. The answer stopped the project before we spent a rupee on engineering trials.`,
    `The 2x2 Matrix is the one tool from this book I have laminated and stuck to the wall of my conference room. Every capital proposal that comes to me now goes through the matrix before I will discuss budgets. It takes twenty minutes. It has saved me from three bad decisions in two years. The most recent one was a Rs. 55 lakh investment in a precision grinding cell for a medical implant application. The Kill Zone assumption: the contract manufacturer assembling the final implant will actually change their approved supplier list to include us. We tested it. They would not. The grinding cell never came. The laminated matrix paid for itself in that one conversation.`,
  ],
}
