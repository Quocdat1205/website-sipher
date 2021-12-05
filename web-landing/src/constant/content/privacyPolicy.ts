export type IPrivacyPolicyItem = {
    level: number
    content: string
    key?: string
}

export const introduction: IPrivacyPolicyItem[] = [
    {
        level: 0,
        content:
            'This Privacy Policy describes how Sipher JSC Limited ("Sipher JSC”, "We", "Our", and "Us") collects, uses, processes, discloses, shares, transfers, and protects your personal information or data when you:',
    },
    {
        level: 1,
        content: `access or use our websites (including, our Sipher JSC website (" Sipher Website") at https://sipher.xyz/), applications (including mobile and web-based applications) (collectively, “Applications”) and services; and`,
    },
    {
        level: 1,
        content: "provide us with your personal data. ",
    },
    {
        level: 0,
        content:
            "This Privacy Policy (together with our terms of use and any other documents referred to herein) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed, used and/or disclosed by us. Please read the following carefully to understand our practices in processing your personal data, as well as your rights regarding your personal data and how we will treat it.",
    },
    {
        level: 0,
        content:
            "By visiting our Applications and/or submitting data to us, you are accepting and consenting to the collection, use, disclosure and processing of your personal data as described in this Privacy Policy. Please refrain from accessing the Applications and do not provide any personal data to us if you disagree with the terms of this Privacy Policy.",
    },
    {
        level: 0,
        content:
            "We may change or amend our Privacy Policy from time to time without notice to you, in compliance with applicable laws or as we update our data usage and handling processes. Any changes we may make to our Privacy Policy in the future will be made available on https://sipher.xyz/ and any such changes will become effective upon posting of the revised Privacy Policy. The updated Privacy Policy will supersede earlier versions and will apply to personal data provided to us previously. Please check back frequently to see any updates or changes to our Privacy Policy. If we make any material or substantial changes to this Privacy Policy that significantly affects your rights, we will notify you by way of a prominent notice on our website or, if we have your email address, by email.",
    },
    {
        level: 0,
        content:
            "For the avoidance of doubt, this Privacy Policy forms a part of the terms and conditions governing your relationship with us. This Privacy Policy supplements but does not supersede or replace any other consents you may have provided to us, or any other agreements or arrangements that you may have with us, in respect of your personal data.",
    },
    {
        level: 0,
        content:
            "For any questions or feedback in relation to this Privacy Policy or your personal data, or if you wish to make a complaint to us, please submit your requests, feedback or complaint to: Woof@sipher.xyz When you contact us, we may require that you submit certain forms or provide certain information, including verification of your identity, before we are able to respond.",
    },
]

type TermAndConditionItem = {
    title: string
    text?: string
    chapters: {
        level: number
        content: string
        text?: string
        key?: string
    }[]
}

export const privacyPolicies: TermAndConditionItem[] = [
    {
        title: "Your Personal Data",
        chapters: [
            {
                level: 2,
                content:
                    "“Personal data” is data that can be used to identify a natural person. Examples of personal data include name, address, contact details, identification numbers, financial information, transactional information based on your activities on our Applications, telephone numbers, email address, images, and any other information of a personal nature. ",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "We may collect and process personal data provided directly by you. We also process, insofar as necessary, personal data provided to us by third parties, including publicly accessible data, personal data legitimately provided by other group companies, personal data collected through your use of our (or our service provider’s) digital technologies and services, and personal data provided by other trusted third parties (including our service providers). ",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "You are responsible for ensuring that all personal data that you provide to us is true, accurate and complete.  You are responsible for informing us of any changes to your data in writing, so that we may take all reasonable measures to keep our records of your personal data correct and up to date.",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "When our collection is based on consent, you have the choice, at any time, not to provide your personal data to us or to withdraw your consent previously provided to us. However, do note that if you do so, we may be unable to fulfill the purposes for which we require the personal data, continue to provide our products or services to you (e.g. processing your transactions), and/or fulfill any contractual relationship which may be in place between us.",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "Our Applications and/or services are not intended to be accessed or used by children, minors or persons who are not of legal age. If you are a parent or guardian and you have reason to believe your child or ward has provided us with their personal data without your consent, please contact us.",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "In certain circumstances, you may also provide us with personal data of persons other than yourself (such as your officers, employees, agents, customers, family members and next-of-kin). If you do so, you represent and warrant that you have brought this Privacy Policy to his/her attention, informed him/her of the purposes for which we are collecting his/her personal data and that he/she has consented to your disclosure of his/her personal data to us for those purposes and accepts this Privacy Policy. You agree to indemnify and hold us harmless from and against any and all claims by such individuals relating to our collection, use and disclosure of such personal data in accordance with the terms of this Privacy Policy.",
            },
            {
                level: 1,
                content: "Personal Data you give us",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "You may voluntarily give us your personal data by filling in forms on the Applications or by corresponding with us by phone, e-mail or otherwise. This includes personal data you provide when you register on the Applications, use our services or the services provided by our service providers, or when you report a problem with the Applications. See Clause I.4 for more information on how we collect your personal data.",
            },
            {
                level: 2,
                key: "personal",
                content:
                    "Examples of personal data you may provide to us include (depending on the nature of your interaction with us) your name, passport or other identification number, telephone number, mailing address, email address, identification data (such as copies of your identification document, driver’s license  or personal photograph), financial and credit card information, and any other information relating to any individuals which you have provided to us in any forms submitted to us, or via other forms of interaction with you. See Clause I.2 for more information on the types of personal data we may collect from you.",
            },
            {
                level: 1,
                content: "Personal data and/or information we collect about you",
            },
            {
                level: 2,
                key: "information",
                content:
                    "With regard to each of your visits to or use of our Applications, we may collect the following information and/or personal data that are relevant to our relationship with you, as well as copies of documents verifying such information:",
            },
            {
                level: 3,
                key: "regard",
                content:
                    "your financial information, including but not limited to, your transaction history such as your initial deposit amount, your withdrawal requests, your digital wallet address(es), your investment details, and any other information or documents in order to comply with domestic and international industry standards, government rules and regulations, particularly Anti-Money Laundering (AML) regulations, Know Your Customer (KYC) rules, and Counter-Terrorist Financing (CTF) regulations;",
            },
            {
                level: 3,
                key: "regard",
                content:
                    "technical information, including but not limited to the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, and information relating to your operating system and platform;",
            },
            {
                level: 3,
                key: "regard",
                content:
                    "information about your visit and use of our Applications, including but not limited to the full Uniform Resource Locators (URL) clickstream to, through and from our Applications (including date and time), products you viewed or searched for on our Applications, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call our customer service number; and",
            },
            {
                level: 3,
                key: "regard",
                content: "if you contact us or we contact you using the telephone, voice recordings of the phone call.",
            },
            {
                level: 2,
                content:
                    "You hereby agree that we are entitled to collect and use the above-listed personal data and/or information you have provided on our Applications or generated through your use or access of our Applications for the purposes listed in Clause II of this Privacy Policy.",
            },
            {
                level: 2,
                key: "information",
                content:
                    "Apart from personal data, we may collect other types of information which are not related to an individual and which are anonymous. For example, the number of website visitors and the number of website users using a particular service.",
            },
            {
                level: 1,
                content: "How we collect your personal data",
            },
            {
                level: 2,
                content: "We may collect your personal data directly or indirectly through various channels, such as:",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you register an account with us through our Applications;",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you log in, visit, use, access or download our Applications and services;",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you authorize us to obtain your personal data from a third party;",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you enter into agreements with us;",
            },
            {
                level: 3,
                key: "howwe",
                content:
                    "when you transact with us, contact us or request that we contact you through various communication channels, for example, through social media platforms, messenger platforms, face-to-face meetings, telephone calls, emails and letters;",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you attend events or functions organized by us;",
            },
            {
                level: 3,
                key: "howwe",
                content:
                    "we seek information about you and receive your personal data in connection with your relationship with us;",
            },
            {
                level: 3,
                key: "howwe",
                content: "when you submit your personal data to us for any other reason;",
            },
            {
                level: 3,
                key: "howwe",
                content:
                    "when you voluntarily complete any user survey or provide feedback to us via emails or any other electronic channels;",
            },
            {
                level: 3,
                key: "howwe",
                content: "through automated data collection technologies upon visiting our Applications; and",
            },
            {
                level: 3,
                key: "howwe",
                content:
                    "in other situations where we may collect your information as may be described in this Privacy Policy or in our terms and conditions. ",
            },
            {
                level: 1,
                content: "Personal Data we receive from other sources and third parties",
            },
            {
                level: 2,
                key: "receive",
                content:
                    "Depending on your relationship with us, we may also collect and receive your personal data from third party sources, for example, from:",
            },
            {
                level: 3,
                key: "depending",
                content: "public databases, public agencies, other public sources, credit bureaus, blockchain data;",
            },
            {
                level: 3,
                key: "depending",
                content: "third parties whom you have authorised us to obtain your personal data from;",
            },
            {
                level: 3,
                key: "depending",
                content:
                    "our business partners such as third parties providing services to us (including but not limited to, our ID verification partners, marketing partners, advertising partners, our sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers and credit reference agencies); and/or",
            },
            {
                level: 3,
                key: "depending",
                content: "your family members or friends who provide your personal data to us on your behalf.",
            },
            {
                level: 2,
                key: "receive",
                content:
                    "We may also receive personal data about you if you use any of the other websites or platforms we operate (or operated by our affiliate or related companies), or other services we (or our affiliate or related companies) provide.",
            },
        ],
    },
    {
        title: "Processing your personal data",
        chapters: [
            {
                level: 1,
                content: "General Purposes.",
            },
            {
                level: 2,
                key: "general",
                content:
                    "We collect, use, disclose and process your personal data, including data provided by you, data we collect about you and data provided by third parties, in the following ways and upon the following grounds:",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "for the fulfilment of contractual obligations and/or transactions entered into between you and us, and to provide you with the information, products and/or services that you request from us;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "facilitating the use of our Applications, including verifying, authenticating and/or establishing your identify;",
            },
            {
                level: 3,
                key: "wemay",
                content: "facilitating business asset transactions;",
            },
            {
                level: 3,
                key: "wemay",
                content: "to notify you about changes to our services;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to comply with any legal or regulatory obligations, applicable laws, regulations, codes of practices, guidelines, industry standards (domestic or global), government requests, or rules (including but not limited to Anti-Money Laundering (AML) regulations, Know Your Customer (KYC) rules, and Counter-Terrorist Financing (CTF) regulations), or to assist in law enforcement and investigations conducted by any governmental and/or regulatory authority;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "where it is strictly necessary (i.e. to protect the vital interests of the users or other natural persons, to fulfil the purpose of public interest, or to pursue our reasonable interests);",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "security purposes, e.g. to monitor and detect suspicious activities, to protect users from fraudulent activities, to protect our Applications, users' accounts, and archives from unauthorised access or usage, to prevent damage to our Applications and systems, and to protect against automated abuse such as spam, phishing, and Distributed Denial of Service (DDoS) attacks;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "communicating with you (through messages, emails, telephone, live chats or otherwise) and assisting you with your queries, requests, applications, complaints and feedback;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "resolving any disputes or legal claims, investigating any complaint, claim or dispute or any actual or suspected illegal or unlawful conduct;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "administrative purposes, including finance, IT and HR purposes, quality assurance and staff training, and compliance with internal policies and procedures, including audit, accounting, risk management and record keeping;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "carrying out research and statistical analysis, including development of new products and services or evaluation, and improvement of our existing products and services (including but not limited to, gaining better understanding of users' needs and behaviors, diagnosing any problems with our server, and quality assurance);",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "performing data analytics and related technologies on data, to enable us to deliver relevant content and information to you, and to improve our websites and digital platforms (e.g. ensuring that content from our Applications are presented in the most effective manner for you and for your computer);",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "managing and engaging third parties, data processors or subcontractors that provide services to us, e.g. IT services, technological services, delivery services, and other professional services (e.g. accountants, lawyers and auditors);",
            },
            {
                level: 3,
                key: "wemay",
                content: "such purposes that may be informed to you when your personal data is collected; and/or",
            },
            {
                level: 3,
                key: "wemay",
                content: "any other reasonable purposes related to the aforesaid.",
            },
            {
                level: 2,
                key: "general",
                content:
                    "Subject to the terms of this Privacy Policy, we shall not use or process your personal data for purposes other than the purposes stipulated in this Privacy Policy without your prior consent. Where your personal data is used for a new purpose and where required under applicable law, we shall obtain your consent. We may collect, use, disclose and process your personal data for other purposes, without your knowledge or consent, only where this is required or permitted by law.",
            },
            {
                level: 2,
                key: "general",
                content:
                    "We may, if necessary or required by law, provide your personal data to law enforcement agencies, regulatory organisations, courts or other public authorities. Where appropriate, we will attempt to notify our customers about legal demands for their personal data. You agree that we may not be able to do so if such notification is prohibited by law or court order, when the request is an emergency, or when the burden or expense of notifying the customers would be unreasonable to us. We may dispute such demands when we believe that the requests are disproportionate, vague or lack proper authority, but we do not promise or undertake to challenge every demand.",
            },
            {
                level: 1,
                content: "Marketing purposes",
            },
            {
                level: 2,
                key: "marketing",
                content:
                    "In order for us, or for authorized third parties permitted by us, to market or advertise products, events, and/or services that are of specific interest and relevance to you, we may analyze, use, process and/or rely on your personal data provided to us, or data collected from your interactions with us. However, no marketing or advertising, using your personal data in non-aggregated and/or identifiable form would be carried out unless you have provided us with your consent to use your personal data for such marketing or advertising purposes. If you do not want us to use or process your personal data for the purposes of marketing or advertising, you can withdraw your consent at any time by contacting us. You can exercise your right to prevent such use or processing by checking certain boxes on the forms we use to collect your personal data. If you are an existing customer, we will only contact you by electronic means (e-mail or SMS or other means) with information about goods and services similar to those which were the subject of a previous sale or negotiations of a sale to you, subject to your consent. If you are a new customer, and where we permit selected third parties to use your data for marketing or advertising purposes, we (or they) will contact you by electronic means only, subject to your consent.",
            },
            {
                level: 1,
                content: "Legitimate business interests",
            },
            {
                level: 2,
                key: "legitimate",
                content:
                    "We may also collect, use, disclose and process your personal data for the following purposes to safeguard, support and/or carry out our company’s legitimate business interests such as:",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "processing of personal data for the purposes of our daily operations including billing and debt collecting;",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "managing our business and relationship with you (e.g. accurately carrying out and confirming your instructions, or for the purposes of providing you with rebates and other benefits), and providing services to our customers;",
            },
            {
                level: 3,
                key: "wemayalso",
                content: "assistance of carrying out corporate restructuring plans;",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "protecting our rights and interests, and those of our customers (e.g. processing of your data for the protection of the company’s legal position in the event of legal proceedings);",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "processing for the purpose of reporting possible criminal acts (e.g. fraud) or threats to public security to competent authorities;",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "enforcing our terms and conditions, and obligations owed to us, or protecting ourselves from legal liability;",
            },
            {
                level: 3,
                key: "wemayalso",
                content: "managing our investor and shareholder relations;",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "complying with internal policies, procedures, and operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes; and/or",
            },
            {
                level: 3,
                key: "wemayalso",
                content:
                    "process or share your personal data to facilitate acquisitions, mergers, or transfers of our business.",
            },
        ],
    },
    {
        title: "Storing of data",
        chapters: [
            {
                level: 1,
                content: "Where we store your personal data",
            },
            {
                level: 2,
                key: "where",
                content:
                    "The security of your personal data is our top priority. We shall take care in implementing and maintaining the security of our services and Applications, as well as that of your personal data. We employ procedures and policies that incorporate industry best practices to ensure the integrity of your personal data and to prevent instances of unauthorized use.",
            },
            {
                level: 2,
                key: "where",
                content:
                    "Please note that it is impossible to fully guarantee the security of your personal data. While we take reasonable steps to safeguard your personal data in our possession or under our control, you agree not to hold us liable or responsible for any loss or damage resulting from any unauthorized or unintended access that is beyond our control (e.g. hacking or cybercrimes),  or abuse of your information. We recommend that you take independent safety precautions to protect your personal data, particularly your credential information such as your username and password. You hereby agree that we shall not be liable for any information leakage and other losses not caused intentionally or otherwise by our gross negligence, including, but not limited to, hacker attacks, power interruptions, or unavoidable technical failures. For the avoidance of doubt, we do not make any warranty, guarantee, or representation that your use of our systems or applications is safe and protected from malware, and other vulnerabilities. We also do not guarantee the security of data that you choose to send us electronically. Sending such data is entirely at your own risk.",
            },
            {
                level: 1,
                content: "For how long will your data be stored?",
            },
            {
                level: 2,
                key: "forhow",
                content:
                    "We will process and store your personal data for as long as it is necessary in order to fulfill the purposes we collected it for, and to satisfy our business, contractual, legal, regulatory and/or statutory obligations (including audit, accounting or reporting purposes). We may thus be required to retain certain information, including personal data or information of users, users' profiles, identification verification materials, information relevant to AML/KYC/CTF procedures, account information, account agreements, and other agreements between us and third parties, account statements, and other records, for an extended period of time.",
            },
            {
                level: 2,
                key: "forhow",
                content:
                    "We will assess and respond to requests to delete personal data and we shall accordingly delete personal data provided that the personal data is no longer required in order to fulfill our business, contractual, legal, regulatory and/or statutory obligations, or the fulfillment of any obligations to preserve records according to applicable laws and regulations.",
            },
            {
                level: 2,
                key: "forhow",
                content:
                    "In general, how long we keep your personal data depends on the nature of the data, e.g. we keep personal data for at least the duration of the limitation period for bringing claims if the personal data may be required to commence or defend legal proceedings. Some information may also be retained for longer e.g. where we are required to do so by law.",
            },
            {
                level: 1,
                content: "Anonymized data",
            },
            {
                level: 2,
                key: "anonymized",
                content:
                    "In some circumstances we may anonymize and/or aggregate your personal data so that it can no longer be associated with you, in which case we are entitled to retain and use such data without restriction.",
            },
        ],
    },
    {
        title: "Disclosure of your personal data",
        chapters: [
            {
                level: 2,
                content:
                    "Your personal data may be made available, disclosed or shared to our related parties and/or within our group of companies in order to provide our services or Applications to you, for management and compliance purposes, and to utilize shared group IT functions.",
            },
            {
                level: 2,
                content:
                    "We may share, transfer, disclose, or allow access to your personal data to third parties in connection with the purposes described in Clause II, including without limitation the purposes described below: ",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to administer or process a transaction, or services you have authorized or requested, or in the context of facilitating the execution of a transaction;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to facilitate or otherwise enable the sale of tokens (or other products) or any other activity on the Applications which you choose to participate in, including the provision of your personal data to the third party entities to comply with applicable legal, regulatory, compliance or statutory requirements (e.g. AML/KYC/CTF procedures);",
            },
            {
                level: 3,
                key: "wemay",
                content: "this clause is intentionally left blank;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to carry out or aid in certain functions during the account opening, updating  and/or maintenance process, such as, but not limited to, account processing, surveillance, reconciliation, execution, document retention requirements, and document dissemination;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to process payments which you have authorized (e.g. disclosure to financial institutions that we have partnered with);",
            },
            {
                level: 3,
                key: "wemay",
                content: "to operate and/or improve our products and services;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "if we are discussing selling or transferring part or all of our business, to a purchaser of our business. The information may be transferred to prospective purchasers under suitable terms as to confidentiality;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "if we are reorganised or sold, information may be transferred to a buyer who can continue to provide the Applications and related services to you; ",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to facilitate account closing where you have a deficient balance, or upon excessive instances where you do not have sufficient funds in your account;",
            },
            {
                level: 3,
                key: "wemay",
                content: "to third parties that we conduct marketing and cross promotions with; ",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to third parties that provide services to us, such as, but not limited to, data providers, technology providers, consulting, sales, client support operations, payment processing, authentication services, professional services (including accountants, lawyers and auditors), and technical support or services;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to third parties in order to fulfil such third party products and/or services as may be requested or directed by you;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "if we are defending a legal claim your information may be transferred as required in connection with defending such claim;",
            },
            {
                level: 3,
                key: "wemay",
                content:
                    "to law enforcement agencies, authorities, public agencies and government officials, or other third parties when we are compelled to do so by a subpoena, court order, or similar legal procedure, or when we believe in good faith that the disclosure of personal data is necessary to prevent physical harm or financial loss, to report suspected illegal activity or to investigate violations of any of our terms and conditions, or any other applicable policies; and ",
            },
            {
                level: 3,
                key: "wemay",
                content: "other circumstances under which we may disclose your personal data such as:",
            },
            {
                level: 4,
                key: "circumstances",
                content: "to comply, as necessary, with applicable laws and regulatory requirements;",
            },
            {
                level: 4,
                key: "circumstances",
                content: "respond to mandatory legal or governmental requests or demands for information;",
            },
            {
                level: 4,
                key: "circumstances",
                content: "meet national security requirements;",
            },
            {
                level: 4,
                key: "circumstances",
                content: "enforce our agreements, policies, procedures and/or T&Cs;",
            },
            {
                level: 4,
                key: "circumstances",
                content:
                    "protect ourselves, our affiliates, our users, our counterparties or the general public from illegal activities; and",
            },
            {
                level: 4,
                key: "circumstances",
                content: "to respond to an emergency that requires disclosure of your personal data.",
            },
            {
                level: 2,
                content:
                    "You may freely opt-out of having your personal data shared with third parties (or for any of the above listed purposes), or from allowing us to use your personal data for any purpose that is incompatible with the purposes for which we originally collected or subsequently obtained your authorization as stipulated in this Privacy Policy. Please contact us if you wish to opt-out.",
            },
            {
                level: 2,
                content:
                    "We will ensure that all companies and/or third parties to whom we disclose your personal data will only process it in accordance with our instructions and on our behalf. We will, where appropriate and permissible, enter into contracts with these third parties to protect your personal data in a manner that is consistent with all applicable laws. All such companies and third parties will be required by us to meet the requirements of applicable data protection legislation and our strict privacy and retention policies to keep your personal data secure at all times.",
            },
        ],
    },
    {
        title: "Transfer of Personal Data to other countries",
        chapters: [
            {
                level: 2,
                content:
                    "You agree and acknowledge that we may transfer your personal data to different jurisdictions in connection with the purposes described in this Privacy Policy:",
            },
            {
                level: 3,
                content:
                    "from the jurisdiction where it is collected (or where you are located) to any other jurisdictions that we operate in; and",
            },
            {
                level: 3,
                content: "to third parties in other jurisdictions.",
            },
            {
                level: 2,
                content:
                    "When we transfer your personal data internationally and where required by applicable law, we will put in place appropriate safeguards, including but not limited to EU Model Clauses or rely on EU Commission adequacy decisions. You may obtain details of these safeguards by contacting us.",
            },
        ],
    },
    {
        title: "Third-Party Collection of Personal Information",
        chapters: [
            {
                level: 2,
                content:
                    "Our Applications may contain links to other websites or platforms that are not owned or maintained by us. These links are provided only for your convenience. You may also be accessing our Applications through third party websites and/or platforms. This Privacy Policy only applies to our Applications. When visiting third party websites or using their platforms, their privacy policies apply to their collection, use or disclosure of the personal data you disclose to them. For each token project listed on the Applications, the privacy policy of the respective third party behind each token project will apply. You must confirm that you are agreeable to the privacy policy of the relevant third party before proceeding further with any token project.",
            },
            {
                level: 2,
                content:
                    "You hereby acknowledge that we shall not be responsible for the products, services, or descriptions of products or services that you receive from these third-party websites or platforms, token projects listed on the Applications or to the content or privacy practices of those websites, platforms or token projects. This Privacy Policy shall not be applied to any such third-party products and services that you access through our Applications. You knowingly and voluntarily assume all risks of using such third-party websites or platforms to purchase products and services, and you agree that we shall have no liability whatsoever concerning such third-party websites or platforms and your usage of them.",
            },
        ],
    },
    {
        title: "Your rights",
        chapters: [
            {
                level: 2,
                content:
                    "Depending on the jurisdiction that you are in or where we operate, you may enjoy certain rights under applicable law in relation to our collection, use, disclosure and processing of your personal data. Such rights may include:",
            },
            {
                level: 3,
                content:
                    "Access: you may ask us if we hold your personal data and, if we are, you can request access to your personal data free of charge. This enables you to receive a copy of and information on the personal data we hold about you;",
            },
            {
                level: 3,
                content:
                    "Correction: you may request for the rectification or correction of your personal data that is incomplete or inaccurate;",
            },
            {
                level: 3,
                content:
                    "Restriction: you may withdraw consent for our use or process of your personal data, or ask us to suspend the process of your personal data (e.g. if you want us to establish its accuracy);",
            },
            {
                level: 3,
                content:
                    "Objection: where we are processing your personal data based on a legitimate interest (or those of a third party), you may object to processing on this ground;",
            },
            {
                level: 3,
                content:
                    "Portability: you may request for the transfer of your personal data to another party under certain circumstances; and",
            },
            {
                level: 3,
                content:
                    "Erasure: you may request the erasure, deletion or removal of your personal data that we hold about you in certain circumstances.",
            },
            {
                level: 2,
                content:
                    "If you wish to exercise any of your rights, you may contact us at Woof@sipher.xyz. We may require that you submit certain forms or provide certain information to process your request. Where permitted by law, we may also charge you a fee to process your request.",
            },
            {
                level: 2,
                content:
                    "We may be permitted under applicable laws to refuse a request, for example, we may refuse (a) a request for erasure where the personal data is required for in connection with claims; or (b) an objection request and continue processing your personal data based on compelling legitimate grounds for the processing.",
            },
        ],
    },
]
