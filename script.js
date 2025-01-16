const scenarios = [
    { //1
        question: "A client asks you to omit income earned from a side business on their tax return to reduce their tax liability. They argue that the income is small and unlikely to be detected. What is the best course of action?",
        options: [
            { text: "Omit the income as requested since the client is ultimately responsible for the return.", feedback: "Incorrect. Omission of income is unethical and illegal, regardless of client responsibility." },
            { text: "Report the income but adjust other expenses to compensate for the added liability.", feedback: "Incorrect. Manipulating other figures to compensate perpetuates fraud." },
            { text: "Refuse to prepare the return unless all income is reported.", feedback: "Correct. Tax professionals are bound by ethical standards, such as the AICPA's Statements on Standards for Tax Services (SSTS), which require accurate and honest reporting." },
            { text: "File the return without the income and document the client’s request in your records.", feedback: "Incorrect. Filing a fraudulent return, even with documentation, makes you complicit." }
        ]
    },
    { //2
        question: "During an audit, you discover a small immaterial misstatement. The CFO requests that you ignore it to save time. What is the best course of action?",
        options: [
            { text: "Ignore the misstatement since it is immaterial.", feedback: "Incorrect. Ignoring it risks missing systemic issues." },
            { text: "Document the misstatement but do not include it in the audit findings.", feedback: "Incorrect. Omitting it from findings compromises audit integrity." },
            { text: "Inform the CFO that all misstatements must be documented and reported.", feedback: "Correct. Even immaterial misstatements can indicate underlying control weaknesses or potential fraud, which must be reported per auditing standards." },
            { text: "Consult your supervisor to decide whether to report it.", feedback: "Incorrect. While consulting is good practice, the ethical responsibility remains to report." }
        ]
    },
    { //3
        question: "Your manager instructs you to capitalize expenses that should be expensed to meet earnings targets. What is the most ethical response?",
        options: [
            { text: "Capitalize the expenses to comply with your manager’s request.", feedback: "Incorrect. Complying with unethical instructions makes you complicit." },
            { text: "Refuse to comply and report the request to higher management or the audit committee.", feedback: "Correct. Altering financial records violates GAAP and can lead to financial statement fraud. Reporting unethical behavior is required." },
            { text: "Adjust the entries to a less aggressive but still incorrect treatment.", feedback: "Incorrect. Any incorrect treatment is unethical and illegal." },
            { text: "Suggest an alternative way to meet targets without adjusting entries.", feedback: "Incorrect. Suggesting alternatives does not address the unethical request." }
        ]
    },
    { //4
        question: "A client offers you a significant bonus to backdate documents to claim a tax deduction for the prior year. What is the appropriate response?",
        options: [
            { text: "Accept the bonus and backdate the documents.", feedback: "Incorrect. Accepting the bonus and committing fraud is unethical." },
            { text: "Refuse to backdate the documents and explain why.", feedback: "Correct. Backdating documents is fraudulent. Refusing ensures compliance with ethical standards and tax laws." },
            { text: "Backdate the documents but decline the bonus.", feedback: "Incorrect. Backdating is unethical, regardless of monetary incentives." },
            { text: "Consult with a colleague for advice before deciding.", feedback: "Incorrect. Ethical violations are clear and do not require consultation." }
        ]
    },
    { //5
        question: "During an engagement, you notice significant discrepancies in inventory valuation. The client insists it is a one-time issue and asks you to overlook it. What should you do?",
        options: [
            { text: "Overlook it since it does not impact the overall financial statements.", feedback: "Incorrect. Overlooking discrepancies compromises audit quality." },
            { text: "Investigate further and include your findings in the audit report.", feedback: "Correct. Discrepancies in inventory valuation may indicate fraud or errors, requiring thorough investigation and disclosure." },
            { text: "Discuss with the client’s internal audit team without documenting.", feedback: "Incorrect. Failure to document breaches auditing standards." },
            { text: "Delay reporting until the next audit cycle.", feedback: "Incorrect. Delaying violates timely reporting obligations." }
        ]
    },
    
    { //6
        question: "You discover that the company is using non-GAAP measures in marketing materials without proper disclosures. What should you do?",
        options: [
            { text: "Ignore it since it is not your department’s responsibility.", feedback: "Incorrect. Ignoring perpetuates misleading practices." },
            { text: "Alert your supervisor and recommend full disclosures.", feedback: "Correct. Non-GAAP measures must be properly disclosed to ensure transparency. Reporting internally allows the company to address the issue." },
            { text: "Adjust the marketing materials yourself to include disclosures.", feedback: "Incorrect. Adjusting without authority might create new ethical issues." },
            { text: "Report the issue anonymously to regulatory authorities.", feedback: "Incorrect. Escalating externally before internal resolution is premature." }
        ]
    },
    
    { //7
        question: "You identify a legal tax strategy that could significantly reduce a client’s liability but has a high chance of audit scrutiny. What is the best way to proceed?",
        options: [
            { text: "Recommend the strategy with full disclosure of risks.", feedback: "Correct. Ethical tax practice involves transparency and ensuring the client understands risks before making decisions." },
            { text: "Avoid recommending the strategy to minimize client audit risk.", feedback: "Incorrect. Avoiding the strategy denies the client a legal option." },
            { text: "Implement the strategy without discussing risks.", feedback: "Incorrect. Failing to disclose risks violates ethical obligations." },
            { text: "Refuse to implement the strategy as it is aggressive.", feedback: "Incorrect. Legal strategies should not be dismissed without evaluation." }
        ]
    },

    { //8
    question: "During an audit, you discover an email chain suggesting management may be inflating revenue figures. The client insists it’s just a misunderstanding. What should you do?",
    options: [
        { text: "Ignore the email chain since it might be irrelevant.", feedback: "Incorrect. Ignoring potential fraud violates ethical standards." },
        { text: "Investigate further and report your findings to management and the audit committee.", feedback: "Correct. Auditors must investigate potential fraud indicators and report findings according to professional standards." },
        { text: "Disclose the email chain directly to external regulators.", feedback: "Incorrect. External disclosure is premature without proper internal reporting." },
        { text: "Discuss the email chain with the client’s legal counsel before proceeding.", feedback: "Incorrect. Involving legal counsel without further investigation can impede ethical obligations." }
    ]
},

{ //9
    question: "A vendor offers you free personal services in exchange for prioritizing their invoices for payment. What is the most ethical course of action?",
    options: [
        { text: "Accept the services since they do not directly impact your company.", feedback: "Incorrect. Personal benefits tied to professional actions create conflicts of interest." },
        { text: "Decline the offer and report it to your supervisor.", feedback: "Correct. Accepting personal services in exchange for professional actions is a conflict of interest and violates ethical standards. Reporting the offer ensures transparency." },
        { text: "Accept the offer and ensure timely payment of their invoices.", feedback: "Incorrect. Accepting services compromises impartiality." },
        { text: "Negotiate a better deal for the company before accepting the services.", feedback: "Incorrect. Negotiating personal benefits is unethical." }
    ]
},

{ //10
    question: "A client insists on claiming a large charitable deduction without proper documentation, arguing it’s a \"common practice.\" What should you do?",
    options: [
        { text: "Claim the deduction to maintain client satisfaction.", feedback: "Incorrect. Client satisfaction cannot justify illegal actions." },
        { text: "Refuse to claim the deduction without proper documentation.", feedback: "Correct. Tax professionals must ensure compliance with tax laws. Claiming deductions without documentation violates ethical and legal obligations." },
        { text: "Advise the client to obtain documentation and delay the return.", feedback: "Incorrect. Advising documentation is correct, but claiming the deduction without it is not." },
        { text: "Claim a smaller deduction that seems reasonable without evidence.", feedback: "Incorrect. Making assumptions about deductions without evidence is unethical." }
    ]
},

{ //11
    question: "Your client’s CEO suggests delaying recognition of expenses to inflate earnings for an upcoming investor presentation. How should you respond?",
    options: [
        { text: "Comply to maintain the client relationship.", feedback: "Incorrect. Compliance with unethical requests is a breach of integrity." },
        { text: "Discuss the proposal with the CFO before deciding.", feedback: "Incorrect. Discussing unethical proposals without action may delay resolution." },
        { text: "Refuse the request and document the incident.", feedback: "Correct. Delaying expense recognition violates GAAP and ethical standards. Refusing and documenting the request is the correct course of action." },
        { text: "Suggest alternative ways to improve earnings without adjusting expenses.", feedback: "Incorrect. Suggesting alternatives does not address the unethical behavior." }
    ]
},

{ //12
    question: "A fellow accountant asks you to share login credentials for an internal system to \"save time.\" What is the most ethical response?",
    options: [
        { text: "Share the credentials since you trust the colleague.", feedback: "Incorrect. Trust does not justify policy violations." },
        { text: "Refuse to share and report the request to IT.", feedback: "Correct. Sharing login credentials breaches company policy and may expose sensitive information. Reporting ensures adherence to security protocols." },
        { text: "Share the credentials but monitor their usage.", feedback: "Incorrect. Monitoring usage does not mitigate security risks." },
        { text: "Offer to perform the task yourself instead.", feedback: "Incorrect. Offering help does not address the underlying issue." }
    ]
},

{ //13
    question: "A client asks you to structure a transaction to avoid tax liability but warns it may \"push legal boundaries.\" What should you do?",
    options: [
        { text: "Proceed with the transaction if it seems plausible.", feedback: "Incorrect. Plausibility does not justify unethical actions." },
        { text: "Refuse to structure the transaction and explain why.", feedback: "Correct. Structuring transactions to avoid taxes in questionable ways is unethical. Refusing ensures compliance with legal standards." },
        { text: "Suggest an alternative approach without considering legality.", feedback: "Incorrect. Ignoring legality risks significant penalties." },
        { text: "Consult a legal expert before deciding.", feedback: "Incorrect. Consulting legal experts does not absolve ethical obligations." }
    ]
},

{ //14
    question: "During an audit, you notice a pattern of small cash withdrawals with no documentation. The client claims they are for 'minor expenses.' What should you do?",
    options: [
        { text: "Accept the explanation and move on.", feedback: "Incorrect. Accepting explanations without evidence compromises audit quality." },
        { text: "Document the issue and investigate further.", feedback: "Correct. Patterns of undocumented transactions can indicate fraud. Further investigation is required to determine their legitimacy." },
        { text: "Report it as fraud immediately.", feedback: "Incorrect. Immediate reporting without investigation may be premature." },
        { text: "Ignore it since the amounts are small.", feedback: "Incorrect. Ignoring small amounts risks overlooking systemic issues." }
    ]
},

{ //15
    question: "You find a rounding error that slightly inflates earnings but does not materially affect financial statements. What should you do?",
    options: [
        { text: "Correct the error and document the adjustment.", feedback: "Correct. Even immaterial errors must be corrected to ensure accurate financial reporting." },
        { text: "Leave it since it is immaterial.", feedback: "Incorrect. Leaving errors uncorrected undermines accuracy." },
        { text: "Notify management and wait for their decision.", feedback: "Incorrect. Ethical responsibility requires correction, not delegation." },
        { text: "Adjust other entries to offset the error.", feedback: "Incorrect. Offsetting errors perpetuates inaccuracies." }
    ]
},

{ //16
    question: "A client offers you tickets to a major sporting event as a thank-you for reducing their tax liability. What is the best response?",
    options: [
        { text: "Accept the tickets since it’s a personal gift.", feedback: "Incorrect. Accepting gifts risks compromising objectivity." },
        { text: "Decline the tickets and explain your policy on gifts.", feedback: "Correct. Accepting gifts from clients creates potential conflicts of interest. Declining ensures impartiality." },
        { text: "Accept the tickets but disclose them to your firm.", feedback: "Incorrect. Disclosure does not mitigate ethical concerns." },
        { text: "Donate the tickets to a charity on the client’s behalf.", feedback: "Incorrect. Donating the tickets does not address the underlying issue." }
    ]
},

{ //17
    question: "During an audit, you find that a key control has been overridden multiple times, but no material misstatements are identified. The client asks you not to document the control failures to avoid raising concerns with stakeholders. What should you do?",
    options: [
        { text: "Ignore the control failures since no material misstatements were found.", feedback: "Incorrect. Ignoring control failures undermines the reliability of the audit." },
        { text: "Document the control failures in your working papers and inform management.", feedback: "Correct. Auditors are required to document all significant findings, including control failures, as they may indicate underlying risks." },
        { text: "Omit the documentation to maintain the client relationship.", feedback: "Incorrect. Omission compromises professional standards." },
        { text: "Report the issue directly to external stakeholders.", feedback: "Incorrect. Direct reporting to stakeholders is not appropriate without escalation within the organization." }
    ]
},

{ //18
    question: "A client requests that you use an aggressive tax position that has a low likelihood of success if audited, arguing it’s worth the risk. What should you do?",
    options: [
        { text: "Agree to the client’s request and document their decision.", feedback: "Incorrect. Agreeing without disclosure violates ethical obligations." },
        { text: "Refuse to file the return and terminate the engagement.", feedback: "Incorrect. Termination is unnecessary if the issue can be resolved ethically." },
        { text: "File the return but include a disclosure statement about the position.", feedback: "Correct. Filing with a disclosure ensures compliance with ethical standards while giving the client an option to proceed with full awareness of the risks." },
        { text: "Recommend a less aggressive position that is more likely to be upheld.", feedback: "Incorrect. Recommending alternatives is prudent but does not address the client’s request transparently." }
    ]
},

{ //19
    question: "Your supervisor pressures you to adjust the timing of revenue recognition to meet quarterly targets. What is the most ethical course of action?",
    options: [
        { text: "Comply since the adjustment will be reversed in the next quarter.", feedback: "Incorrect. Temporary adjustments still mislead stakeholders." },
        { text: "Refuse to adjust the timing and report the pressure to higher management.", feedback: "Correct. Adjusting revenue recognition violates GAAP and ethical principles. Reporting the issue protects the integrity of financial reporting." },
        { text: "Make the adjustment but document your supervisor’s request.", feedback: "Incorrect. Documentation does not absolve responsibility for unethical actions." },
        { text: "Seek advice from colleagues before taking action.", feedback: "Incorrect. Seeking advice delays addressing the unethical behavior." }
    ]
},

{ //20
    question: "You are auditing a company where the CFO, who is a personal friend, asks you to overlook a minor issue in the financial statements. What should you do?",
    options: [
        { text: "Overlook the issue to maintain your friendship.", feedback: "Incorrect. Overlooking the issue compromises independence and objectivity." },
        { text: "Document the issue and address it per audit standards.", feedback: "Correct. Auditors must remain independent and objective, documenting and addressing all findings according to professional standards." },
        { text: "Discuss the issue informally with the CFO but avoid documenting it.", feedback: "Incorrect. Avoiding documentation violates audit standards." },
        { text: "Recuse yourself from the audit due to the personal relationship.", feedback: "Incorrect. Recusal is unnecessary if professional independence is maintained." }
    ]
}

];

const app = document.getElementById('app');
const userChoices = [];

function loadScenario(index) {
    const scenario = scenarios[index];
    let scenarioHTML = `
        <div class="question">
            <div style="position: absolute; top: 10px; left: 10px; background-color: #00cc00; color: #ffffff; padding: 10px 20px; border-radius: 8px; font-size: 18px; font-weight: bold;">
                Question ${index + 1} of ${scenarios.length}
            </div>
            <img src="images/scenario${index + 1}.jpg" alt="Scenario Image" style="width: 100%; height: auto; margin-bottom: 20px;">
            <p>${scenario.question}</p>
    `;
    scenario.options.forEach((option, i) => {
        scenarioHTML += `
            <button class="button" onclick="showFeedback(${index}, ${i})">${option.text}</button>
        `;
    });
    scenarioHTML += `<div id="feedback" class="feedback" style="display: none;"></div>`;
    app.innerHTML = scenarioHTML;
}

function showFeedback(scenarioIndex, optionIndex) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.style.display = 'block';

    const scenario = scenarios[scenarioIndex];
    const selectedOption = scenario.options[optionIndex];

    // Determine if the answer is correct or incorrect
    const isCorrect = selectedOption.feedback.startsWith('Correct.');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;

    // Display feedback without repeating "Correct." or "Incorrect."
    const feedbackMessage = selectedOption.feedback.replace(/^Correct\. |^Incorrect\. /, '').trim();
    feedbackDiv.innerHTML = `${isCorrect ? '<strong>Correct.</strong> ' : '<strong>Incorrect.</strong> '}${feedbackMessage}`;

    if (!isCorrect) {
        const correctOption = scenario.options.find(option => option.feedback.includes('Correct'));
        feedbackDiv.innerHTML += `<br><br><span style='font-weight: normal;'>Correct Answer:</span> ${correctOption.text} ${correctOption.feedback.replace(/^Correct\. /, '').trim()}`;
    }
    

    userChoices.push({
        scenarioId: scenarioIndex + 1,
        question: scenario.question,
        selectedOption: selectedOption.text,
        feedback: selectedOption.feedback
    });

    if (scenarioIndex < scenarios.length - 1) {
        feedbackDiv.innerHTML += `
            <br><br><button class="button" onclick="loadScenario(${scenarioIndex + 1})">Next Scenario</button>
        `;
    } else {
        feedbackDiv.innerHTML += `
            <br><br><button class="button" onclick="showSummary()">View Summary</button>
        `;
    }
}

function showSummary() {
    let correctAnswers = userChoices.filter(choice => choice.feedback.includes('Correct')).length;
    let totalQuestions = scenarios.length;
    let summaryHTML = '<h2>Training Summary</h2>';
    userChoices.forEach((choice, index) => {
        summaryHTML += `
            <div>
                <h3>Scenario ${index + 1}: ${choice.question}</h3>
                <p><strong>Your Choice:</strong> ${choice.selectedOption}</p>
                <p><strong>Feedback:</strong> ${choice.feedback}</p>
            </div>
            <hr>
        `;
    });
    summaryHTML += `<h3>Good job!</h3>
        <p>You got ${correctAnswers} out of ${totalQuestions} questions correct.</p>`;
    summaryHTML += '<p>Thank you for participating in the Accounting Ethics Simulator!</p>';
    summaryHTML += '<button class="button" onclick="restartTraining()">Restart Training</button>';
    app.innerHTML = summaryHTML;
}

function restartTraining() {
    userChoices.length = 0; // Clear previous choices
    loadScenario(0); // Restart the training from the first scenario
}

// Load the first scenario
loadScenario(0);
