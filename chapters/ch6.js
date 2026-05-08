export default {
  chapterNum: 6,
  chapterTitle: 'Simple Market Experiments',
  partName: 'Part Three · Thin-Slicing Experiments',
  barTitle: 'Chapter 6: Simple Market Experiments',
  screens: [

    {
      type: 'opener',
      partName: 'Part Three · Thin-Slicing Experiments',
      chapterNum: 'Chapter 6',
      chapterTitle: 'Simple Market Experiments',
      intro: 'Corporate procurement managers do not buy Rs. 50 Lakh custom-machined assemblies by clicking a button on a landing page. Your market experiments must map to the reality of industrial procurement.',
    },

    {
      type: 'content',
      title: 'Simple Market Experiments',
      body: `<p>You understand the logic of Thin-Slicing. You have isolated your Deal Killer assumption. You have committed to decoupling the act of learning from the act of spending capital. Now, you have to actually execute the test in the real world. Testing a strategic idea in the B2B manufacturing sector is fundamentally different from testing an idea in the consumer software market. You cannot just run a Rs. 5,000 Facebook ad and count how many people click a button. Corporate procurement managers do not buy Rs. 50 Lakh custom-machined assemblies by clicking a button on a landing page. They buy through complex, multi-layered approval processes, rigorous audits, and deep relationship building. Therefore, your market experiments must map to the reality of industrial procurement.</p>`,
      pushbacks: [
        {
          q: `We already gather customer feedback through our sales team's regular visits. Isn't that enough market intelligence?`,
          a: `Regular sales visits generate relationship data — how much the customer likes you, what their mood is, whether they are happy with your current service. That is valuable for retention. It is useless for strategic validation. A Trojan Horse interview, an RFQ Stress Test, or a distributor pre-sell generates commitment data — whether the customer will actually change their behaviour, sign a document, or part with money. The difference between relationship data and commitment data is the difference between a polite conversation and a prospective data point.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Experiment 1: The RFQ Stress Test',
      body: `<p>This is the ultimate test of pricing power and market demand, designed to answer the Deal Killer assumption: will the customer actually pay the premium required to justify our new strategic capability? You do not wait until you buy the new 5-axis machine or the automated welding cell to start quoting work for it. You start quoting the work today, using your current, inadequate infrastructure. You ask your target customer for an RFQ on a complex part that fits your proposed new strategy. You calculate exactly what your new, highly efficient machine would cost to run, you add the premium profit margin your strategy demands, and you submit the quote. You are quoting a capability you do not fully possess yet.</p>

<p>If the customer rejects the quote because your price is 30% too high, you have generated massive prospective data. You just learned that the premium market does not exist, or that this specific buyer is purely cost-driven. You saved yourself from buying the machine. But what if the customer says yes? What if they accept the premium quote and issue a Purchase Order? This is where the experiment requires courage. Because you do not have the highly efficient new machine, you must execute the PO using your current, inefficient factory. You brute-force it. You put your best operators on overtime. You use slower, older machines. Your profit margin on this specific PO will be terrible. You might even lose money. But you have successfully forced the customer to reveal their true buying behaviour. They signed the PO at the premium price. You now have the mathematical confidence to call the bank and order the new machine, knowing the demand is absolutely real.</p>`,
      pushbacks: [
        {
          q: `What if we win the RFQ Stress Test but then cannot deliver the part to spec using our current equipment? We will damage the customer relationship and our reputation.`,
          a: `This is why the CEO must pre-authorise the experiment before the quote is sent — including pre-authorising the financial loss and the operational chaos required to fulfil it. If your current equipment genuinely cannot produce the part to spec at any cost, the RFQ Stress Test is the wrong experiment for this assumption. Use the Ugly Duckling or the Distributor Pre-Sell instead. The RFQ Stress Test is appropriate when you can produce the part — inefficiently and expensively — but not yet at the margin your new capability would deliver. The test proves the price. The machine delivers the margin.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Experiment 2: The Trojan Horse Customer Interview',
      body: `<p>This experiment is designed to test assumptions about a customer's true pain points and their willingness to switch suppliers. When leadership teams want to test a new product idea, they usually call their best customer, take them to lunch, and ask a terrible question: "We are thinking about buying a new machine to make XYZ parts. Would you buy them from us?" The customer, who likes you and wants to be polite, will almost always say: "Oh, absolutely! That sounds great. Let us know when you have it running." This is a polite lie. It is not prospective data. The customer has risked nothing, committed nothing, and simply told you what you wanted to hear. If you buy a machine based on a polite lie, you will go bankrupt.</p>

<p>To get the truth, you must run a Trojan Horse interview. You must completely hide your new strategic idea and instead interrogate their past behaviour. People lie about the future; they cannot lie about the past. Instead of asking "Would you buy this?", you ask: "Walk me through the last time your current supplier for this component missed a delivery. What did it cost your assembly line?" "How much time does your procurement team spend every week chasing down quality documents from your current vendor?" "If you could wave a magic wand and permanently fix one bottleneck in your supply chain right now, what would it be?"</p>

<p>You are hunting for structural pain. If they tell you their current supplier is fine and they rarely have issues, your proposed strategy of offering a premium, highly reliable alternative is dead. There is no pain to solve. But if they spend twenty minutes venting about how their current supplier's lack of traceability is destroying their export compliance, you have struck gold.</p>`,
      pushbacks: [
        {
          q: `Is it not dishonest to hide our real intention during the interview? Are we manipulating the customer?`,
          a: `You are not hiding your intention to deceive them — you are hiding it to protect the integrity of the data. The moment a customer knows you are considering buying a machine to serve their need, their answers become contaminated with politeness, relationship management, and the fear of seeming difficult. You are not manipulating them into saying something false. You are removing the social pressure that would make them say something politely untrue. The questions you are asking are genuine questions about their real experience. Their honest answers are the most valuable thing they can give you.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Experiment 3: The Proxy Prototype — The Ugly Duckling',
      body: `<p>This experiment is used when your Deal Killer assumption is physical — you need to know if the customer's engineering team will actually approve your proposed design or material change. Engineers hate showing incomplete or unpolished work to a customer. They want to wait until the final production tooling is built so the part looks perfect. You must override this instinct.</p>

<p>If your strategy is to shift a customer from a heavy cast-iron bracket to a lightweight, complex sheet-metal assembly, you do not spend Rs. 10 Lakhs building the progressive stamping dies to prove it works. You build an Ugly Duckling. You laser-cut the flat blanks, you manually bend them on a slow press brake, and you hand-weld the seams. The part will look slightly rough. It will be incredibly expensive and inefficient to produce as a single unit. You take this Ugly Duckling to the customer's engineering team and say: "This is not a production-grade finish, but the mounting points and the load-bearing geometry are accurate to within 1mm. Bolt this onto your assembly line today and tell us if the weight reduction solves your problem."</p>

<p>If the Ugly Duckling fits, and the customer's engineering team approves the structural concept, you have isolated the risk. You now have the confidence to invest in the permanent production tooling.</p>`,
      pushbacks: [
        {
          q: `What if the customer's engineering team sees the rough finish and immediately loses confidence in our manufacturing capability?`,
          a: `Frame the conversation before you show the part. Tell them explicitly: "This is a concept validation prototype, not a production sample. We built it in two days using existing equipment to test whether the geometry and weight reduction work for your application before we invest in production tooling. The production part will be stamped, deburred, and powder-coated to your specification. Today I only need to know one thing: does this concept solve your problem?" By naming the prototype's purpose before they see it, you shift their evaluation from "how good is their manufacturing?" to "does this concept work?" Those are completely different questions, and only the second one matters at this stage.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Experiment 4: The Distributor Pre-Sell',
      body: `<p>If your manufacturing company sells through a channel — industrial distributors, electrical wholesalers, or heavy-equipment dealerships — your Deal Killer assumption is rarely the end-user. The Deal Killer is the distributor's willingness to give you shelf space. Never build a massive inventory of a new product line before securing channel commitment.</p>

<p>Instead, you create high-fidelity digital renderings, specification sheets, and a compelling pricing matrix for the proposed product line. You take this brochure to your top three distributors. You do not ask them if they like the product. You ask them for a commitment: "We are finalising the production schedule for this new line of industrial valves. Based on your current volume, we have allocated 5,000 units to your territory for Q3. If we can guarantee delivery by September 1st at this price point, will you sign a non-binding Letter of Intent today to take the allocation?"</p>

<p>If the distributor hesitates, makes excuses, or refuses to sign the LOI, your strategy has generated a clear signal. They do not believe in the product enough to risk their own warehouse space.</p>`,
      pushbacks: [
        {
          q: `What if the distributor signs the LOI and then we cannot produce the product in time? We will have made a commitment we cannot honour.`,
          a: `The LOI is non-binding — for both parties. If you cannot fulfil, you call the distributor before the delivery date, explain the production delay, and offer a meaningful compensation such as a price discount or priority allocation on the next run. Distributors deal with supplier delays constantly. A supplier who calls ahead, explains honestly, and compensates fairly loses very little goodwill. The alternative — building Rs. 40 lakhs of inventory before testing channel demand — creates a loss that no apology can fix. The LOI is not a legal trap. It is a signal of intent. Treat the relationship accordingly.`,
        },
      ],
    },

    {
      type: 'content',
      title: 'Overcoming the Brand Damage Objection',
      body: `<p>When you instruct your sales and engineering teams to run these experiments, they will push back violently. The most common objection is the fear of looking stupid in front of the customer. When you instruct your VP of Sales to run the RFQ Stress Test — quoting a premium, highly complex aerospace part that your factory is not entirely equipped to handle efficiently yet — and the VP says this will damage your brand reputation, the right response is firm:</p>

<p>"I understand your fear, but you are confusing our current brand with our future strategy. Right now, our brand is cheap, generic commodity supplier. If we damage that brand, I do not care, because we are actively trying to destroy it and replace it. Furthermore, we are not lying to the customer. We are quoting our future capability. If they accept the quote, we will not fail them. We will put our best engineers on it, we will work overnight, or we will outsource the tricky operations to a specialised partner at a massive financial loss to us. We will deliver the part to spec, on time, even if it hurts our internal efficiency. We are buying prospective data, and I am pre-authorising the financial loss to protect the relationship. Send the quote."</p>

<p>By pre-authorising the operational chaos and explicitly taking the financial risk off the VP's shoulders, you remove their fear of failure.</p>`,
      pushbacks: [
        {
          q: `What if our VP of Sales runs the RFQ Stress Test and the customer complains about the price — but then tells other customers in the market that we are overpriced?`,
          a: `A buyer who rejects your premium quote and then tells the market you are overpriced is delivering you exactly the prospective data you needed — faster and at no cost. You now know that the pricing assumption in your Kill Zone is false, at least for that segment of the market. The question is whether the signal is isolated to one cost-sensitive buyer or structural across the segment. That answer comes from running the same RFQ Stress Test with two or three other buyers. One rejection is noise. Three rejections at the same price point is a definitive signal that your premium assumption is wrong. Adjust the strategy before you buy the machine, not after.`,
        },
      ],
    },

    {
      type: 'exchange',
      title: 'Your Reflection',
      subtitle: 'Before moving to Chapter 7, take a moment to record what landed.',
      prompts: [
        'Which of the four experiments — RFQ Stress Test, Trojan Horse Interview, Ugly Duckling, or Distributor Pre-Sell — is most directly applicable to your current Deal Killer assumption? Why?',
        'Think of a customer your team has been "managing the relationship with" for over a year. Have you ever run a Trojan Horse interview with them? What structural pain have you never actually asked about?',
        'Name one situation where your VP of Sales or your engineering team blocked a market test on the grounds of brand damage or customer perception. What was the real cost of not running that test?',
      ],
    },

    {
      type: 'end',
      chapterNum: 6,
      totalChapters: 10,
      chapterTitle: 'Simple Market Experiments',
      nextChapterTitle: 'The Fake Door Test',
      closingLine: 'Four experiments. Each designed for a different type of Deal Killer. The next chapter introduces the most powerful — and most controversial — test of all: the Fake Door.',
    },

  ],

  vikramPerspectives: [
    `The RFQ Stress Test is the experiment that changed my company. In 2022, I quoted a premium hydraulic manifold to an agricultural OEM at 28% above what any competitor in Coimbatore would have charged. My VP of Sales told me I was going to embarrass us. I told him to send the quote. The OEM came back in four days with a Purchase Order. I brute-forced the job overnight — negative margin on that specific PO. But I had the data. I signed the honing cell loan the following week with a blanket order already confirmed. The overnight job cost me Rs. 38,000 in overtime. The blanket order was worth Rs. 1.4 Crore over eighteen months. That is the arithmetic of the RFQ Stress Test.`,
    `The Trojan Horse interview taught me something I had never understood in twenty years of selling. I had assumed my biggest automotive customer was happy with their current hydraulic cylinder supplier because they never complained to me. In 2023, I ran the interview — no pitch, no agenda, just questions about their supply chain pain. They spent forty minutes talking about documentation delays, non-conformance reports that took six weeks to close, and a supplier who could not provide material traceability for their export compliance. None of that pain was visible in our regular meetings. All of it was directly solvable by us. I did not need a new machine. I needed to solve a documentation problem. Three months later, we had taken 60% of that customer's cylinder business from the incumbent. No CAPEX. Just prospective data from one honest conversation.`,
    `The brand damage objection — I hear it every time I ask my sales team to run an experiment. My VP of Sales has said some version of it at least a dozen times. My response is always the same: our current brand is a commodity brand. A commodity brand is not worth protecting. The only brand worth protecting is the one we are trying to build. If we damage the commodity brand in the process of testing the premium brand, we have lost nothing that was worth keeping. The experiments are not a risk to our brand. Staying a commodity supplier is the risk to our brand.`,
  ],
}
