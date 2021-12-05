export const introduction = [
    "These SIPHER Token Sale Terms and Conditions (these “Terms”) state the terms and conditions under which Sipher JSC Limited (Company Registration Number: 2070663) a company incorporated under the laws of British Virgin Islands with its registered address at Intershore Chambers, Road Town, Tortola, British Virgin Islands (“Sipher JSC”) will sell cryptographic tokens which will serve as a utility token that is used for governance and payment on the ecosystem to be developed and operated by Sipher JSC (the “SIPHER Tokens”) to eligible purchasers during the Token Sale Period (as defined in paragraph 3 of the Details of the Token Sale attached as Schedule 1). The SIPHER Tokens do not constitute and are not intended to be securities or any other type of financial or investment instrument in any jurisdiction.",
    "Please read these Terms carefully before making any decision to purchase any SIPHER Tokens. These Terms are not a prospectus or offer document and are not a solicitation for investment in Sipher JSC or in any product, project, or property of Sipher JSC in any jurisdiction. These Terms do not constitute an offer of securities in any jurisdiction. Nothing in these Terms should be considered as a recommendation for any person to participate in the sale of SIPHER Tokens or Sipher JSC’s proposed service.",
    "Please note that certain commercial, technical, regulatory, financial, and market risks associated with the commercial transactions governed by these Terms are described in these Terms, including the Risk Disclosures attached as Schedule 2. It is important that you read these Terms carefully. If you do not understand, or if you have any doubt about any information contained in, these Terms, you should consult your legal, tax, financial, or other professional advisers. If you do not agree to these Terms, you must not accept these Terms or purchase any SIPHER Tokens. Your acceptance of these Terms does not guarantee that you will be able to purchase any SIPHER Tokens during the Token Sale Period.",
    "Sipher JSC reserves the right in its discretion to supplement or amend any part of these Terms at any time. Please monitor the Sipher JSC website at https://sipher.xyz/ for any changes to these Terms and any announcements relating to the sale of SIPHER Tokens that may supplement or vary these Terms.",
    "In these Terms, Sipher JSC and the contracting party identified in Clause II.1 below (“you”) agree as follows:",
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

export const termService: TermAndConditionItem[] = [
    {
        title: "Introduction",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC is developing an online ecosystem, consisting of a series of games and related services, collectively referred to as Sipher (the "Service"). The Service is designed to largely operate on blockchain platforms that are primarily decentralised, global, and are made up of a peer-to-peer network of independently operated nodes that provides distributed ledger and virtual machine functionality that supports, among other things, smart contracts and cryptographic tokens.`,
            },
            {
                level: 1,
                content:
                    "The SIPHER Tokens are a central feature of the Service. The SIPHER Tokens will serve as a utility token that is used for governance and payment accepted by the Service, as well as for any other transactions or services which could in Sipher JSC's discretion, be available on the Service in the future. The SIPHER Tokens will be designed to comply with the Ethereum ERC-20 Token Standard and will be freely transferable among Ethereum account holders. For the purposes of these Terms, the ERC-20 Token Standard refers to the set of criteria (including criteria in relation to functions and events) developed by the Ethereum community which must be met in a smart contract on a blockchain to enable inter-operability across multiple interfaces and distributed applications.",
            },
            {
                level: 1,
                content:
                    "To broaden adoption and support of the Service, Sipher JSC is conducting a sale of the SIPHER Tokens (the “Token Sale”) during which eligible purchasers (see Clause II.2 below) may use the designated virtual currency to buy SIPHER Tokens (see paragraph 4 of Schedule 1 (Details of the Token Sale)). Concurrently with the Token Sale, Sipher JSC will provide SIPHER Tokens to its founders and certain technical, financial, and advisory supporters (see paragraph 7 of Schedule 1 (Details of the Token Sale)). Sipher JSC reserves the right to use the proceeds of the Token Sale for any purposes as Sipher JSC may determine in its sole and absolute discretion.",
            },
            {
                level: 1,
                content:
                    "The expected utility and value of the Service and the SIPHER Tokens are important considerations for prospective purchasers of SIPHER Tokens. As Sipher JSC makes clear throughout these Terms, Sipher JSC does not guarantee that the Service or the SIPHER Tokens will have a specific, or any, utility or value. By participating in the Token Sale or purchasing SIPHER Tokens, you are deemed to have accepted these Terms, you acknowledge that you have read and understood these Terms, including the attached Schedule 2 (Risk Disclosures) which describes some of the risks that could adversely affect or eliminate the utility and value of the Service and/or the SIPHER Tokens.",
            },
            {
                level: 1,
                content:
                    "Descriptions of the Service, the SIPHER Tokens, and other information about SIPHER JSC, the Token Sale and Sipher JSC's overall project related to the Service are available on the Service's website at https://sipher.xyz, as well as official documentation at https://atlas.sipher.xyz/ (the 'Project Documentation'). The Project Documentation states Sipher JSC's current view of the subjects it covers. Sipher JSC may from time to time revise the Project Documentation in any respect and without notice to or approval from you. The information presented in the Project Documentation is indicative only, and the Project Documentation does not form part of these Terms.",
            },
        ],
    },
    {
        title: "Contracting Party and Eligibility to Participate in the Token Sale",
        chapters: [
            {
                level: 1,
                content: `The party that is legally bound by these Terms (and that is identified in these Terms as ‘you’) is either:`,
            },
            {
                level: 2,
                content:
                    "The individual who accepted these Terms by the process designated at https://sipher.xyz/term-of-service (the “Signatory”); or",
            },
            {
                level: 2,
                content:
                    "The individual or entity, if any, that legally authorised the Signatory to accept these Terms on its behalf (the “Principal”).",
            },
            {
                level: 2,
                content:
                    "If the Signatory asserts that there is a Principal but the individual or entity identified as the Principal (i) does not fully satisfy the Eligibility Conditions under Clause II.2 below or (ii) is for any reason not legally bound to these Terms, then the Signatory will be bound to these Terms in his or her personal capacity.",
            },
            {
                level: 1,
                content:
                    "To be eligible to participate in the Token Sale, you must satisfy each of the following conditions (the “Eligibility Conditions”):",
            },
            {
                level: 2,
                content: "If you are an individual:",
            },
            {
                level: 2,
                content:
                    "You are above the minimum age in your jurisdiction to have the legal capacity to enter into contracts and to use, hold, trade, buy, and sell SIPHER Tokens; and",
            },
            {
                level: 2,
                content:
                    "You are not a citizen or permanent resident of, you do not have a primary residence in, and you are not physically located in the United States of America, Albania, Barbados, Burkina Faso, Balkans, Belarus Cambodia, Cayman Islands, Cote D'Ivoire (Ivory Coast), Cuba, Democratic Republic of Congo, Haiti, Jamaica, Malta, Morocco, Myanmar, Nicaragua, Pakistan, Panama, Senegal, South Sudan,  Syria, Uganda, Yemen, Zimbabwe, Iran, Iraq, Liberia, North Korea, Democratic People's Republic of Korea (DPRK), Jordan, Mali, People’s Republic of China, Hong Kong SAR, Macau SAR and Turkey or its territories or possessions or any country (A) where participation in token sales is prohibited, restricted or unauthorized by applicable law, decree, regulation, treaty, or administrative act, or (B) where it is likely that the sale of the Sipher Tokens would be construed as the sale of a security (howsoever named), financial service or investment product.",
            },
            {
                level: 2,
                content: "OR",
            },
            {
                level: 2,
                content: "If you are an entity:",
            },
            {
                level: 2,
                content:
                    "You are duly organised and validly existing under the applicable laws of the jurisdiction of your organisation;",
            },
            {
                level: 2,
                content: "You have authorised your Signatory to accept these Terms on your behalf; and",
            },
            {
                level: 2,
                content:
                    "You are not a resident for tax purposes of, you do not have a domicile in, and you are not physically located in or otherwise subject to the jurisdiction of, the United States of America, Albania, Barbados, Burkina Faso, Balkans, Belarus Cambodia, Cayman Islands, Cote D'Ivoire (Ivory Coast), Cuba, Democratic Republic of Congo, Haiti, Jamaica, Malta, Morocco, Myanmar, Nicaragua, Pakistan, Panama, Senegal, South Sudan, Syria, Uganda, Yemen, Zimbabwe, Iran, Iraq, Liberia, North Korea, Democratic People's Republic of Korea (DPRK), Jordan, Mali, People’s Republic of China, Hong Kong SAR, Macau SARand Turkey or its territories or possessions or any country (A) where participation in token sales is prohibited, restricted or unauthorized by applicable law, decree, regulation, treaty, or administrative act, or (B) where it is likely that the sale of the Sipher Tokens would be construed as the sale of a security (howsoever named), financial service or investment product.",
            },
            {
                level: 2,
                content:
                    "Your participation in the Token Sale and your using, holding, trading, buying, selling, or transferring SIPHER Tokens is not prohibited, restricted, or regulated by any law or regulation applicable to you. You are solely responsible (i) to determine if there are any such laws or regulations (including foreign exchange restrictions) applicable to you and to comply with them and (ii) to determine if there are any governmental or other consents or approvals which you need to obtain, and to obtain and maintain them.",
            },
            {
                level: 2,
                content:
                    "You are not a Specially Designated National as identified by the Office of Foreign Assets Control of the U.S. Treasury Department; or on the Consolidated List of Targets maintained by the U.K. Office of Financial Sanctions Implementation of HM Treasury; or on the consolidated list of persons, groups, and entities subject to financial sanctions maintained by the European Union; or on an equivalent or similar list maintained by the United Nations Security Council, Singapore, or any other jurisdiction.",
            },
            {
                level: 2,
                content:
                    "You are purchasing the SIPHER Tokens as principal and for your own account, and not as nominee or agent for, or for the account of, any other person.",
            },
            {
                level: 2,
                content:
                    "You are a sophisticated purchaser who understands the technology and risks of cryptographic tokens, particularly the risks associated with your private keys being lost, stolen, or compromised. You understand how cryptocurrency wallets and other token storage mechanisms work, the risks of using them, and the risks of using them incorrectly. You understand smart contract technology and blockchain technology and the limitations and risks of systems built using those technologies.",
            },
            {
                level: 1,
                content:
                    "If you do not fully satisfy each of the Eligibility Conditions at all times from the time that you accept these Terms, then you may not, and you agree not to, participate in the Token Sale or purchase SIPHER Tokens. If you participate in the Token Sale or purchase SIPHER Tokens notwithstanding that you do not meet each of the Eligibility Conditions, you acknowledge that (a) your participation in the Token Sale or purchase of SIPHER Tokens is a breach of these Terms (including Clause VII (Your Representations and Warranties)), and (b) you proceed with your order for SIPHER Tokens (“Order”) at your own risk. Without prejudice to Clauses X.1 and XI.1 below, you acknowledge and agree that Sipher JSC will not be liable to you or any other party arising from or in connection with your participation in the Token Sale if you do not meet each of the Eligibility Conditions.",
            },
            {
                level: 1,
                content:
                    "Sipher JSC may require you to provide certain information to confirm your satisfaction of the Eligibility Conditions and to complete the transactions related to the Token Sale. If you do not provide the required information then you may be unable to participate in the Token Sale or purchase SIPHER Tokens. Sipher JSC’s request for, and your provision of, any information from you, and any actions or decisions Sipher JSC may take based on that information, do not affect your obligations under Clauses II.2 and II.3.",
            },
            {
                level: 1,
                content:
                    "If you place more than one Order for SIPHER Tokens during the Token Sale, each Order creates an individual and separate agreement between Sipher JSC and you. The refusal, rejection, or cancellation of one of your Orders under these Terms shall not affect the continuation in force of any of your other Orders, which will continue to be governed by these Terms.",
            },
        ],
    },
    {
        title: "The Token Sale Smart Contract System",
        chapters: [
            {
                level: 1,
                content: `Key elements of the Token Sale are implemented in smart contracts deployed on Ethereum (the Token Sale smart contract system or the “SSC System”). The SSC System is open source and available for inspection at https://github.com/sipherxyz/token-and-initial-public-sale. The executable code of the SSC System is incorporated into these Terms by this reference. For the avoidance of doubt, the comments and other non-executable code in the source code of the SSC System are for convenience only and are not incorporated into these Terms.`,
            },
            {
                level: 1,
                content:
                    "You understand the nature of smart contracts and that, once deployed, their functionality cannot be overridden or bypassed. Accordingly, to the extent the execution of the SSC System produces results that conflict with any term or statement of these Terms, the Project Documentation, or any other document provided by or on behalf of Sipher JSC (all, collectively, the “Off-Chain Documents”), or to the extent the Off-Chain Documents contain a term or statement that could have been implemented in the SSC System but was not, the SSC System will prevail.",
            },
            {
                level: 1,
                content:
                    "Sipher JSC prioritizes the safety and security of our community in our deployed Smart Contracts. Our contracts undergo rigorous Internal Audits, however, we are unable to guarantee that our contracts are free of exploits when launched.",
            },
        ],
    },
    {
        title: "The SIPHER Token",
        chapters: [
            {
                level: 1,
                content: `If and when Sipher JSC makes the Service available, the SIPHER Tokens will serve as a utility token that is used for governance and payment accepted by the Service, as well as for any other transactions or services which could in Sipher JSC's discretion, be available on the Service in the future.`,
            },
            {
                level: 1,
                content:
                    "Your use of the Service and the SIPHER Tokens will be subject to the Service’s terms of use and the other terms and policies referenced therein that are in effect at the time you use the Service or the SIPHER Tokens (collectively, the “Service Agreement”). Sipher JSC may amend the Service Agreement from time to time according to the process set out in the Service Agreement. If there is a conflict between the Service Agreement and any Off-Chain Document, the Service Agreement will prevail with respect to any issues relating to the use of SIPHER Tokens in connection with the Service. If you do not accept the terms of the Service Agreement, you will not be able to use the Service or the SIPHER Tokens you hold.",
            },
            {
                level: 1,
                content:
                    "The SIPHER Tokens currently do not confer ownership, governance, equity, participation, conversion, redemption, liquidation, or similar rights over, or rights in the revenues, profits, or other financial aspects of, Sipher JSC, the Service, or any technology or intellectual property developed, acquired, or licensed by Sipher JSC, however, this is subject to change at Sipher JSC’s sole discretion. The SIPHER Tokens do not constitute and are not intended to be securities or any other type of financial or investment instrument in any jurisdiction.",
            },
        ],
    },
    {
        title: "The Token Sale",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC will conduct the Token Sale only through its website at https://sipher.xyz/token-sale (the “Token Sale Site”). Important information about the Token Sale is set out in Schedule 1 (Details of the Token Sale), including the dates of the Token Sale, pricing, payment instructions, the SIPHER Token distribution process, and Sipher JSC’s expected use of the Token Sale proceeds. If you fail to follow the instructions or observe the other information about the Token Sale in Schedule 1 (Details of the Token Sale) or on the Token Sale Site, you may be delayed or prevented from participating in the Token Sale and you may not be able to purchase SIPHER Tokens.`,
            },
            {
                level: 1,
                content:
                    "The Token Sale Site is the only site authorised by Sipher JSC to provide information about the Token Sale. Before submitting your payment, you must confirm that your web browser shows https://sipher.xyz/token-sale and that your https connection is secure. If you have submitted your payment to an address obtained from any other site you may lose the entire amount of your payment and/or may not receive the SIPHER Tokens you intend to purchase. Sipher JSC is not affiliated with and takes no responsibility for any such other sites.",
            },
            {
                level: 1,
                content:
                    "Your acceptance of these Terms does not guarantee that you will be able to purchase any SIPHER Tokens during the Token Sale.",
            },
            {
                level: 1,
                content:
                    "To receive the SIPHER Tokens you purchase, you must have an Ethereum account that supports the ERC-20 Token Standard for which you know the address and a wallet or other token storage mechanism that is compatible with that account. That account must be fully operational, secure, and valid at the time you place your Order and the time SIPHER Tokens are distributed to you in accordance with these Terms. You are in all respects solely responsible for creating that account, obtaining and operating that wallet or token storage mechanism, and safeguarding the private keys, passwords, and other credentials relating to that account and wallet or token storage mechanism. Sipher JSC reserves the right to prescribe additional account requirements.",
            },
            {
                level: 1,
                content:
                    "If you are a participant in the Token Sale, the process for placing and fulfilling your Order in the Token Sale is as follows (capitalised terms used but not defined in this Clause 5.5 are defined in Schedule 1 (Details of the Token Sale)):",
            },
            {
                level: 2,
                content: "You must visit the Token Sale Site, accept these Terms, and obtain the Payment Address.",
            },
            {
                level: 2,
                content:
                    "You must, during the Token Sale Period, interact with the Token Sale Smart Contract with your intended contribution and other information as required on the Token Sale Site. Your failure to include sufficient gas with your contribution, network congestion or fault, or other errors in the systems processing your payment could result in your contribution being delayed, rejected, or otherwise not processed. You release Sipher JSC from all responsibility and liability for any contribution you attempt or intend to make in respect of your Order until such time, if ever, as the contribution transaction is confirmed to have interacted correctly with the Token Sale Smart Contract by the Ethereum blockchain.",
            },
            {
                level: 2,
                content:
                    "Any contributions made to the Token Sale Smart Contract and confirmed by the Ethereum blockchain is irreversible. While provisions have been made for the withdrawal of contributed funds from the Token Sale Smart Contract, this is subject to withdrawal limitations as set out and described in Schedule 1 (Details of the Token Sale).",
            },
            {
                level: 2,
                content:
                    "If the Token Sale has not been cancelled under Clause V.6, you are one of the participants in the Token Sale whose Order Sipher JSC has accepted in its discretion (“Accepted”), and you have complied with these Terms (including the applicable provisions in Schedule 1 (Details of the Token Sale)), the SSC System will distribute the number of SIPHER Tokens specified in your Order in accordance with paragraph 12 of Schedule 1 (Details of the Token Sale).",
            },
            {
                level: 1,
                content: "This Clause is intentionally left blank.",
            },
            {
                level: 1,
                content:
                    "Sipher JSC may, in its discretion, for any reason and at any time before the Token Sale End Time (as defined in paragraph 3 of Schedule 1 (Details of the Token Sale)), suspend or cancel the Token Sale (in whole or in part). If at the Token Sale End Time the target strike price is not met as outlined in Schedule 1 (Details of the Token Sale)), Sipher JSC may opt to exchange all contributions made at the strike price and return unsold tokens to the Foundation and Reserve, or cancel the Token Sale. Sipher JSC will post a notice of the suspension (and resumption, if any) or cancellation on the Token Sale Site.",
            },
            {
                level: 1,
                content: "This Clause is intentionally left blank.",
            },
            {
                level: 1,
                content: "This Clause is intentionally left blank.",
            },

            {
                level: 1,
                content:
                    "Sipher JSC reserves the right, without notice or limitation, to deny, terminate, modify, throttle, disconnect, or suspend the Token Sale (in whole or in part) with respect to anyone who engages in unfair, excessive, or abusive usage or if Sipher JSC, at its discretion, determines that action is necessary to protect the integrity or security of Sipher JSC or any part of the Token Sale.",
            },
            {
                level: 1,
                content:
                    "Sipher JSC does not have access to or control over your payment until confirmed by the Ethereum blockchain and upon Conclusion of the Token Sale; you accept sole responsibility for all risks related to your contribution before it is confirmed by the Ethereum blockchain and upon Conclusion of the Token Sale. If your Order is Accepted, the transaction is final and no refund of payment or cancellation of the Order will be made except to the extent, if any, required by law.",
            },
            {
                level: 1,
                content: "This Clause is intentionally left blank",
            },
        ],
    },
    {
        title: "Use of Proceeds",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC intends to use the proceeds of the Token Sale as described in paragraph 14 of Schedule 1 (Details of the Token Sale). However, Sipher JSC may in its discretion use those proceeds for any purpose, whether or not consistent with the foregoing. Sipher JSC makes no undertaking, representation, or warranty in respect of its use of those proceeds.`,
            },
        ],
    },
    {
        title: "Your Representations and Warranties",
        chapters: [
            {
                level: 1,
                content: `By participating in the Token Sale or purchasing SIPHER Tokens, you represent and warrant to Sipher JSC as follows:`,
            },
            {
                level: 2,
                content: `You satisfy in full each of the Eligibility Conditions at all times from the time that you accept these Terms`,
            },
            {
                level: 2,
                content: `You are purchasing the SIPHER Tokens only for the purpose of using the SIPHER Tokens in the Service as described in Clause IV.1 and supporting the development of the Service, being aware of the risks set out in the Schedule 2 (Risk Disclosures). You are not purchasing SIPHER Tokens for investment, speculative, or other financial purposes, and you understand that the SIPHER Tokens are not, and do not represent, (i) shares, debentures, units in a collective investment scheme, options, futures, or derivatives in Sipher JSC or in any other existing or future legal entity, scheme, project, or property in any jurisdiction, or (ii) goods for the purposes of any sale of goods (or similar) legislation in any jurisdiction.`,
            },
            {
                level: 2,
                content: `You have carefully read in full, and fully understand, these Terms, including Schedule 1 (Details of the Token Sale) and Schedule 2 (Risk Disclosures).`,
            },
            {
                level: 2,
                content: `The source code of the SSC System is made publicly available at https://github.com/sipherxyz/token-and-initial-public-sale, and you acknowledge that you have had the full opportunity to review, and to the extent you deem appropriate, have reviewed or engaged a qualified technical adviser to review and advise you concerning the source code. To the extent the SSC System may operate in a manner that is inconsistent with these Terms, you accept those inconsistencies and understand that the operation of the SSC System will supersede these Terms to the extent of any such inconsistency and will not be a breach of these Terms.`,
            },
            {
                level: 2,
                content: `You have carefully read in full, and fully understand, the Off-Chain Documents and are satisfied with the quality and quantity of the information available to you concerning Sipher JSC, the Service, the SIPHER Tokens, the Token Sale, and Sipher JSC’s overall project related to the Service, and that you have made a fully informed decision to participate in the Token Sale.`,
            },
            {
                level: 2,
                content: `You have accepted and confirmed, personally or based on the advice of a qualified legal adviser engaged by you, that your participation in the Token Sale and your using, holding, trading, buying, selling, or transferring SIPHER Tokens are not prohibited, restricted, or regulated by any law or regulation applicable to you.`,
            },
            {
                level: 2,
                content: `You have accepted and confirmed, personally or based on the advice of a qualified tax adviser engaged by you, and you fully understand, accept, and will discharge in full, the tax implications of your participation in the Token Sale and your using, holding, trading, buying, selling, or transferring SIPHER Tokens.`,
            },
            {
                level: 2,
                content: `Your placement of an Order constitutes your acceptance of the risks related to the Service, the SIPHER Tokens, and the Token Sale as described in these Terms, including Schedule 2 (Risk Disclosures) and you fully understand that the Service (including its platform) will undergo substantial development work as a result of which it may be subject to significant change before its Launch.`,
            },
            {
                level: 2,
                content: `The ETH you submit as payment in the Token Sale are legitimately owned by you and have not been obtained in violation of any anti-money laundering, countering the financing of terrorism, or other applicable law or regulation.`,
            },
            {
                level: 2,
                content: `You will not use the SIPHER Tokens which you receive in the Token Sale, if any, in violation of any anti-money laundering, countering the financing of terrorism, or other applicable law or regulation.`,
            },
            {
                level: 2,
                content: `If you trade, sell, or transfer SIPHER Tokens to one or more third parties, you will not make any statement, representation, or warranty, or provide any document or other information, to any third party in any form that is contrary to or inconsistent with these Terms.`,
            },
            {
                level: 2,
                content: `If you are a Principal, you have authorised your Signatory to accept these terms on your behalf.`,
            },
            {
                level: 2,
                content: `These Terms constitute your legal, valid, and binding obligations, enforceable against you in accordance with their terms.`,
            },
            {
                level: 1,
                content: `You confirm that your representations and warranties in Clause VII.1 are and will remain correct at all times from the time of your acceptance of these Terms.`,
            },
        ],
    },
    {
        title: "Tax",
        chapters: [
            {
                level: 1,
                content: `You bear sole responsibility for determining if your participation in the Token Sale, your using, holding, trading, buying, selling, or transferring SIPHER Tokens, the potential appreciation or depreciation in the value of SIPHER Tokens over time (if any), the allocation and distribution of SIPHER Tokens, and/or any other action or transaction under or contemplated by these Terms have tax implications for you. Sipher JSC does not give any advice on tax-related matters and makes no representation or warranty as to the tax implications, if any, of any of the matters described in the first sentence of this Clause VIII.1. It is your responsibility to consult your tax advisers before purchasing SIPHER Tokens.`,
            },
            {
                level: 1,
                content: `The Purchase Price is exclusive of all taxes that are applicable to your using, holding, trading, buying, selling, or transferring SIPHER Tokens in any jurisdiction (“Tax”).`,
            },
            {
                level: 1,
                content: `You are solely responsible for determining any Tax payable by you and declaring, withholding, collecting, reporting, and remitting the correct amount of Tax to the appropriate tax authorities. You will be solely liable for all penalties, claims, fines, punishments, or other liabilities arising from the non-fulfilment or non-performance to any extent of any of your obligations in relation to any Tax.`,
            },
            {
                level: 1,
                content: `Sipher JSC is not responsible for determining any Tax nor for declaring, withholding, collecting, reporting, or remitting the correct amount of Tax to the appropriate tax authorities.`,
            },
            {
                level: 1,
                content: `To the extent permitted by applicable laws and regulations, you agree not to hold any third party (including developers, auditors, contractors, or founders) liable for any tax liability associated with or arising from your using, holding, trading, buying, selling, or transferring SIPHER Tokens or any action or transaction under or contemplated by these Terms.`,
            },
            {
                level: 1,
                content: `You will provide Sipher JSC with any information it may reasonably request to determine whether it is obligated to collect any goods and services tax or other tax from you.`,
            },
        ],
    },
    {
        title: "Intellectual Property",
        chapters: [
            {
                level: 1,
                content: `These Terms do not entitle you to any intellectual property rights, including rights in relation to the use, for any purpose, of any information, image, user interface, logos, trademarks, trade names, Internet domain names, or copyright, in connection with Sipher JSC, the SIPHER Tokens, or the Token Sale Site.`,
            },
            {
                level: 1,
                content: `Ownership of SIPHER Tokens carries no express or implied rights other than the right to use SIPHER Tokens as a means to pay fees for transactions executed on the Service, if successfully completed and deployed. In particular, you agree and acknowledge that you have no right, as holder of any SIPHER Tokens, to claim any intellectual property rights or equivalent rights or any other form of participation in or relating to the Service, the SSC System, the Token Sale Site, and/or Sipher JSC.`,
            },
            {
                level: 1,
                content: `Sipher JSC retains all right, title, and interest in all of its intellectual property, including inventions, discoveries, processes, marks, methods, compositions, formulae, techniques, information and data, whether or not patentable, copyrightable, or protectable in trademark, and any trademarks, copyrights, or patents based thereon. You may not use any of Sipher JSC’s intellectual property for any reason, except with its express prior written consent.`,
            },
        ],
    },
    {
        title: "Indemnification",
        chapters: [
            {
                level: 1,
                content: `To the maximum extent permitted by all applicable laws and regulations, you will indemnify, defend, and hold harmless Sipher JSC and its affiliates, and its and their respective past, present and future employees, officers, directors, contractors, consultants, members, suppliers, vendors, service providers, licensors, agents, representatives, predecessors, successors, and assigns from and against all claims, demands, actions, damages, losses, costs, and expenses (including legal fees) that arise from or relate to: (a) your participation in the Token Sale, (b) your using, holding, trading, buying, selling, or transferring SIPHER Tokens, (c) your responsibilities or obligations under these Terms, (d) your violation of these Terms (including a breach of Clause VII (Your Representations and Warranties), or (e) your violation of any rights of any other person or entity in connection with the Token Sale or your using, holding, trading, buying, selling, or transferring SIPHER Tokens. This indemnity is in addition to, and not in lieu of, any other remedies available to Sipher JSC under law, equity or a written agreement between you and Sipher JSC.`,
            },
            {
                level: 1,
                content: `If Sipher JSC is obligated to respond to a subpoena or other compulsory legal or court order or process relating to subject matter that is within the scope of your indemnity under Clause X.1, you agree to reimburse Sipher JSC its legal fees, as well as its employees’ and contractors’ time and materials spent responding to the subpoena or other compulsory legal or court order or process at reasonable hourly rates.`,
            },
            {
                level: 1,
                content: `Sipher JSC will promptly notify you of any third-party claim subject to Clause X.1, but Sipher JSC’s failure to promptly notify you will only affect your obligations under Clause X.1 to the extent that its failure prejudices your ability to defend the claim. You may: (a) use counsel of your own choosing (subject to Sipher JSC’s written consent) to defend any such claim and (b) settle the claim as you deem appropriate, provided that you obtain Sipher JSC’s prior written consent before entering into any settlement. Sipher JSC reserves the right, at your expense, to exercise sole control of the defence of the claim and to settle the claim at any time.`,
            },
        ],
    },
    {
        title: "Disclaimers and Release",
        chapters: [
            {
                level: 1,
                content: `To the maximum extent permitted by all applicable laws and regulations and except as otherwise provided in these Terms, Sipher JSC (and, with respect to the SSC System) hereby expressly disclaims its liability and shall in no case be liable to you or any person for:`,
            },
            {
                level: 2,
                content: `refusal, rejection, or cancellation of your Order under Clause V.5;`,
            },
            {
                level: 2,
                content: `Cancellation of the Token Sale (in whole or in part) under Clause V.7;`,
            },
            {
                level: 2,
                content: `delay in the distribution of SIPHER Tokens under Clause V.5;`,
            },
            {
                level: 2,
                content: `Termination, modification, throttling, disconnection, or suspension of the Token Sale (in whole or in part) under Clause V.10;`,
            },
            {
                level: 2,
                content: `Failure or malfunction of, or disruption to, the operation of the Service or the SSC System;`,
            },
            {
                level: 2,
                content: `Delay in the refund of the Refund Amount under Clause V.12;`,
            },
            {
                level: 2,
                content: `Any payment for Orders made to an address other than the Payment Address;`,
            },
            {
                level: 2,
                content: `A hard fork, failure, or malfunction of, or disruption to, the operation of Ethereum, Ethereum-based software systems, blockchain technology generally, or other decentralised technology or systems in respect of the Service or the SIPHER Tokens;`,
            },
            {
                level: 2,
                content: `Any virus, error, bug, flaw, defect, or other matter adversely affecting the operation, functionality, usage, storage, transmission mechanisms, transferability, tradability, or other material characteristics of the SIPHER Tokens;`,
            },
            {
                level: 2,
                content: `Decreases or volatility in traded prices or trading volume of SIPHER Tokens (after listing and quotation of SIPHER Tokens on secondary digital token exchanges, if applicable);`,
            },
            {
                level: 2,
                content: `Failure or unfitness of the SIPHER Tokens for any specific purpose;`,
            },
            {
                level: 2,
                content: `Any failure or delay in disclosing information relating to the status of the Token Sale;`,
            },
            {
                level: 2,
                content: `Loss, destruction, theft, or compromise of the private keys, passwords, or other credentials to the account or wallet or other token storage mechanism referred to in Clause V.4;`,
            },
            {
                level: 2,
                content: `Failure or delay in the listing or quotation of the SIPHER Tokens on a cryptocurrency exchange;`,
            },
            {
                level: 2,
                content: `Any delisting of the SIPHER Tokens from a cryptocurrency exchange;`,
            },
            {
                level: 2,
                content: `Any loss, cost, expense, or tax associated with any transfer or secondary market trading in the SIPHER Tokens;`,
            },
            {
                level: 2,
                content: `Any prohibition, restriction, or regulation by any government or regulatory authority in any jurisdiction of the operation, functionality, usage, storage, transmission mechanisms, transferability, tradability, or other material characteristics of the SIPHER Tokens;`,
            },
            {
                level: 2,
                content: `Failure or delay to achieve the outcomes described in the Project Documentation;`,
            },
            {
                level: 2,
                content: `Any forward-looking statements of any nature made in connection with the Token Sale, the SIPHER Tokens, the Service, or otherwise;`,
            },
            {
                level: 2,
                content: `Any risks associated with the SSC System, the Off-Chain Documents, the Token Sale Site, the Payment Address, Sipher JSC, the Token Sale, the SIPHER Tokens, your using, holding, trading, buying, selling, or transferring SIPHER Tokens, or your use of the Service, including the risks set out in the Schedule 2 (Risk Disclosures); and`,
            },
            {
                level: 2,
                content: `Any delay or failure to perform any obligation under these Terms where the delay or failure results from any cause beyond Sipher JSC’s control, including acts of God, labour disputes or other industrial disturbances, electrical, telecommunications, hardware, software or other utility failures, earthquake, storms or other elements of nature, blockages, embargoes, riots, acts or orders of government, acts of terrorism or war, changes in blockchain technology (broadly construed), and changes in the Ethereum protocols.`,
            },
            {
                level: 1,
                content: `To the maximum extent permitted by all applicable laws and regulations and except as otherwise specified in writing by Sipher JSC, (a) SIPHER Tokens are sold on an “as is” and “as available” basis without warranties of any kind, and Sipher JSC expressly disclaims all representations, warranties, and conditions (express or implied, whether by statute, common law, custom, usage, or otherwise) regarding itself, the Service, the SIPHER Tokens, the Token Sale, the SSC System, these Terms, and the transactions contemplated by these Terms, (b) Sipher JSC does not represent or warrant that the SIPHER Tokens, the SSC System, the Payment Address, or the Service are or will be reliable, current, or error-free, fit for a particular purpose, meet your requirements, or that any defects in the SIPHER Tokens, the SSC System, the Payment Address, or the Service will be corrected, and (c) Sipher JSC cannot and does not represent or warrant that the SIPHER Tokens, the SSC System, the Payment Address, or the Service or the delivery mechanism for SIPHER Tokens, the SSC System, or the Service are free of viruses or other harmful components or that they do not contain any weaknesses, vulnerabilities, or bugs which could cause, among other things, the complete loss of ETH and/or SIPHER Tokens.`,
            },
            {
                level: 1,
                content: `To the maximum extent permitted by all applicable laws and regulations, you, for and on behalf of all natural and legal persons who may claim through or under you, on your behalf, or otherwise in respect of you, release and forever discharge Sipher JSC and its affiliates, and its and their respective directors, officers, employees, agents, representatives, suppliers, attorneys, and advisers, and all of its and their respective predecessors, successors, and assigns, from all claims and causes of action of any kind whatsoever, whether under common law, statutory, contractual, tortious, equitable, or otherwise, and all losses, damages, taxes, liabilities, costs, and expenses, which you have, ever had, may have, or hereafter might have, whether known or unknown, now existing or which might arise or accrue hereafter, relating to or arising from the matters listed in Clause XI.1.`,
            },
        ],
    },
    {
        title: "Limitations of Liability",
        chapters: [
            {
                level: 1,
                content: `To the maximum extent permitted by all applicable laws and regulations and except as otherwise provided in these Terms:`,
            },
            {
                level: 2,
                content: `Sipher JSC shall not be liable for any direct or indirect loss of revenue, income, profit, business, business opportunity, anticipated saving, reputation, or goodwill; any direct or indirect loss or corruption of data or information; or any indirect, special, incidental, reliance, consequential, punitive, or other losses or damages of any kind, in tort, contract, strict liability, or otherwise (including loss of use or tokens) arising out of or in connection with these Terms or your using, holding, trading, buying, selling, or transferring SIPHER Tokens, even if Sipher JSC has been advised of the possibility of such losses or damages;`,
            },
            {
                level: 2,
                content: `The aggregate liability of Sipher JSC, in tort, contract, strict liability, or otherwise, arising out of or in connection with these Terms and your using, holding, trading, buying, selling, or transferring SIPHER Tokens shall be limited to the amount of your Acknowledged payment or the ETH equivalent of Five Thousand Singapore Dollars (SGD5,000), whichever is lower; and`,
            },
            {
                level: 2,
                content: `You agree to waive all rights to assert any claims under applicable laws and regulations and you agree that you may make claims based only on these Terms.`,
            },
            {
                level: 1,
                content: `The limitations of liability in this Clause XII protect Sipher JSC’s affiliates, and the directors, officers, employees, agents, advisers, and representatives of Sipher JSC and its affiliates, and all of their respective predecessors, successors, and assigns, to the same extent that Sipher JSC is protected.`,
            },
            {
                level: 1,
                content: `You acknowledge that Sipher JSC has entered into these Terms in reliance upon the disclaimers and limitations of liability in these Terms, and that the same form an essential basis of the bargain between you and Sipher JSC.`,
            },
        ],
    },
    {
        title: "Governing Law and Dispute Resolution",
        chapters: [
            {
                level: 1,
                content: `These Terms are governed by and will be construed in accordance with the laws of the Republic of Singapore, without regard to its conflict of law rules and to the exclusion of the United Nations Convention on Contracts for the International Sale of Goods.`,
            },
            {
                level: 1,
                content: `Any dispute, claim, suit, action, cause of action, demand, or proceeding arising out of or related to these Terms (including in respect of their validity, existence, or termination), any action or transaction under or contemplated by these Terms, or your using, holding, trading, buying, selling, or transferring SIPHER Tokens (collectively, “Disputes”) that is not settled by you and Sipher JSC within 30 days from the date that either party notifies the other party in writing of the Dispute, shall be referred to and finally settled by arbitration in Singapore under the rules of the Singapore International Arbitration Centre (“SIAC”) then in force, which rules are deemed to be incorporated by reference into this Clause. The number of arbitrators shall be three. Each party shall nominate one arbitrator and the third arbitrator shall be appointed in accordance with the SIAC rules. The arbitration shall be conducted in English.`,
            },
        ],
    },
    {
        title: "General",
        chapters: [
            {
                level: 1,
                content: `A reference in these Terms to “these Terms” shall include a reference to Schedule 1 (Details of the Token Sale) and Schedule 2 (Risk Disclosures) and other documents and terms which are expressly incorporated into these Terms by reference. Schedule 1 (Details of the Token Sale) and Schedule 2 (Risk Disclosures) form integral parts of these Terms.`,
            },
            {
                level: 1,
                content: `In these Terms, words of any gender include the corresponding words of each other gender. The terms “include”, “includes”, and “including” will be interpreted to be followed by “without limitation”. The term “discretion” means “sole and absolute discretion” unless otherwise qualified. Any headings in these Terms are for convenience only and shall not affect the construction or interpretation of these Terms.`,
            },
            {
                level: 1,
                content: `Nothing in these Terms is intended to or will constitute you or Sipher JSC as an agent, fiduciary, legal representative, partner, joint venturer, franchisee, employee, or servant of the other for any purpose.`,
            },
            {
                level: 1,
                content: `You may not assign any of your rights or obligations under these Terms to any other person without the prior written consent of Sipher JSC, which Sipher JSC may grant or withhold in its discretion. You may not assign any right or interest you have in an Acknowledged payment, Refund Amount, or Order. Sipher JSC may assign any of its rights or obligations under these Terms without requiring your prior written consent.`,
            },
            {
                level: 1,
                content: `All notices required or permitted under these Terms and all approvals, consents, and waivers must be in writing in the English language and must be delivered by a method providing for proof of delivery. Any such communication will be deemed to have been given on the date of receipt. Sipher JSC will accept notices from you by email at Woof@sipher.xyz.`,
            },
            {
                level: 1,
                content: `If you are an individual, Sipher JSC will use any personal information you provide to Sipher JSC only for the following purposes:`,
            },
            {
                level: 2,
                content: `To process and complete your Order, including conducting KYC Checks;`,
            },
            {
                level: 2,
                content: `To protect Sipher JSC’s rights and property, and the rights, property, and safety of others;`,
            },
            {
                level: 2,
                content: `To prevent and detect security threats, fraud, or other malicious activity; and`,
            },
            {
                level: 2,
                content: `To comply with our legal obligations, resolve disputes, and enforce Sipher JSC’s agreements.`,
            },
            {
                level: 2,
                content: `Sipher JSC may transfer your personal information to its affiliates and other unrelated third parties in and outside Singapore for processing (including storage) for the above-mentioned purposes.`,
            },
            {
                level: 1,
                content: `Notwithstanding the expiry of the Token Sale Period, any distribution of SIPHER Tokens to you, any rejection, refusal or cancellation of your Order under Clause V.5,  any cancellation of the Token Sale under Clause V.7,  any termination of the Token Sale under Clause V.10, or any refund of the Refund Amount under Clause V.12, Clause VII (Your Representations and Warranties), Clause IX (Intellectual Property), Clause X (Indemnification), Clause XI (Disclaimers and Release), Clause XII (Limitation of Liability), Clause XIII (Governing Law and Dispute Resolution), Clause XIV (General), and Schedule 2 (Risk Disclosures) shall remain valid and in full force and effect.`,
            },
            {
                level: 1,
                content: `Sipher JSC’s failure to enforce these Terms or to assert any right, claim, or cause of action against you under these Terms shall not be construed as a waiver of Sipher JSC’s right to assert any right, claim, or cause of action against you.`,
            },
            {
                level: 1,
                content: `Sipher JSC’s waiver of a breach by you of any of these Terms will not be construed as a waiver of any succeeding breach of that Term or as a waiver of that Term itself. Sipher JSC’s performance after any breach by you will not be construed as a waiver of that breach. No course of dealing, course of performance, or failure by Sipher JSC to strictly enforce any of these Terms will be construed as a waiver of any Term.`,
            },
            {
                level: 1,
                content: `No approval, consent, or waiver in respect of these Terms will be enforceable unless stated in writing signed by reference) or on behalf of the granting party.`,
            },
            {
                level: 1,
                content: `Sipher JSC reserves the right in its discretion to amend any part of these Terms at any time. The amendments shall take effect from the time they are posted on the Sipher JSC website at https://sipher.xyz/ or the Sipher JSC blog at https://atlas.sipher.xyz/.`,
            },
            {
                level: 1,
                content: `These Terms represent the entire agreement between you and Sipher JSC and supersede any earlier oral or written agreements, proposals, representations, statements, and understandings (including the Off-Chain Documents (other than these Terms)) between you and Sipher JSC with respect to their subject matter. No terms or representations not expressly included in these Terms will be deemed to apply.`,
            },
            {
                level: 1,
                content: `Any Dispute is personal to you and Sipher JSC and will not be brought as a representative action, class action, or any other type of representative proceeding in which an individual attempts to resolve a Dispute as a representative of another individual or group of individuals. You agree not to join with any other individual or entity or group of individuals or entities for the purpose of seeking to resolve the respective Disputes on a consolidated or representative basis.`,
            },
            {
                level: 1,
                content: `Except as otherwise expressly provided in these Terms, a person who is not a party to these Terms will not have any rights under or in connection with them by virtue of the Contracts (Rights of Third Parties) Act (Chapter 53B) of Singapore to enforce any term.`,
            },
            {
                level: 1,
                content: `Each of the terms in these Terms is severable. If a court or other tribunal having jurisdiction determines that any term is illegal, invalid, or unenforceable under applicable law, that determination will not affect the other terms.`,
            },
            {
                level: 1,
                content: `Any translation of these Terms is for reference purposes only. If there is any inconsistency between the English language version of these Terms and any translated version, the English language version shall prevail.`,
            },
            {
                level: 1,
                content: `You agree to do anything (such as obtaining consents, signing and producing documents, producing receipts, and getting documents completed and signed) which Sipher JSC may ask and considers necessary to: (a) bind you and any other person intended to be bound in connection with these Terms, the Token Sale, and the SIPHER Tokens, (b) demonstrate whether you are complying with applicable laws and regulations and these Terms, (c) enable Sipher JSC to obtain any necessary consent of any other person to these Terms, and (d) comply with Sipher JSC’s legal, regulatory, and governance requirements.`,
            },
        ],
    },
]

type schedule1Propps = {
    title: string
    text?: string
    chapters: {
        level: number
        content: string
        table?: {
            th: any
            td: any
        }[]
        text?: string
        key?: string
    }[]
}

export const schedule1: schedule1Propps[] = [
    {
        title: "Token Sale Site",
        chapters: [
            {
                level: 1,
                content: "The landing page of the Token Sale Site is https://sipher.xyz/token-sale.",
            },
        ],
    },
    {
        title: "Contributing to the Token Sale",
        chapters: [
            {
                level: 1,
                content:
                    "To acquire SIPHER Tokens in the Token Sale, you are required to broadly perform the following actions:",
            },
            {
                level: 2,
                content: "Navigate to https://sipher.xyz/token-sale",
            },
            {
                level: 2,
                content: "You will be asked to connect your Web 3 Wallet to our website.",
            },
            {
                level: 2,
                content:
                    "You will be asked to a) verify and confirm that you fulfill certain eligibility information (see Clause II.2), b) have read, understood and agreed with a copy of these Terms, c) have read, understood and agreed with the Privacy Policy and d) declare that you are a resident of your country.",
            },
            {
                level: 2,
                content: "You will be asked to sign the Signature Request from your Web 3 Wallet.",
            },
            {
                level: 2,
                content:
                    "You will be presented with the Token Sale Contribution Page, with links that describe the Token Sale Process.",
            },
            {
                level: 2,
                content:
                    "You are, at your sole discretion, asked to enter the Amount in ETH (the Accepted Cryptocurrency) that you wish to contribute to the Token Sale.",
            },
            {
                level: 2,
                content: "You are, at your sole discretion, to confirm that you wish to contribute to the Token Sale.",
            },
            {
                level: 2,
                content:
                    "Your Web 3 Wallet will display the transaction with your contribution amounts. Please verify all information is correct and as you intended before broadcasting it to the blockchain.",
            },
        ],
    },
    {
        title: "Token Sale Period",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC will only accept Orders from the participants of the Token Sale during the period that begins at 01:00 (UTC) on 6 December 2021 (the 'Token Sale Start Time") and ends at 01:00 (UTC) on 9 December 2021 (the "Token Sale End Time"). The period from the Token Sale Start Time until the Token Sale End Time shall be referred to as the "Token Sale Period".`,
            },
            {
                level: 1,
                content: `Sipher JSC may adjust the Token Sale End Time to an earlier time and date. Sipher JSC will post a notice of any change in the Token Sale End Time on the landing page of the Token Sale Site.`,
            },
        ],
    },
    {
        title: "Accepted Cryptocurrencies",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC will only accept ETH as payment for Orders. Sipher JSC will not accept other virtual currencies, digital assets, tokens, or fiat currencies, whether or not legal tender in any applicable jurisdiction, as payment for Orders.`,
            },
        ],
    },
    {
        title: "SIPHER Token Pricing Mechanic",
        chapters: [
            {
                level: 1,
                content: `During the Token Sale Period, the price of SIPHER Tokens will be in constant flux as part of the features of the chosen Token Sale Model - Initial Bonding Curve Offering (IBCO). The settlement price of each SIPHER Token will only established at the Token Sale End Time. As part of the bonding curve method used in the IBCO, each time funds are contributed, the settlement (final) price of the token will increase. Alternatively, withdrawing funds will lower the settlement (final) price of the token for all involved participants.`,
            },
        ],
    },
    {
        title: "Minimum and Maximum Contribution",
        chapters: [
            {
                level: 1,
                content: `During the Token Sale, there is no minimum or maximum amount that you can contribute. However, if you attempt to submit an Order with 0 ETH, your order will be rejected.`,
            },
        ],
    },
    {
        title: "Withdrawal of Contributions",
        chapters: [
            {
                level: 1,
                content: `During the Token Sale Period, assuming you have already contributed funds to the Token Sale Contract, you will be allowed to withdraw your committed funds at any point during the 72 Hours that the IBCO is live, with varying withdrawal limits applied to contributions made above 1 ETH. The reason for these restrictions are on the basis of deterring price manipulation during the Token Sale. These withdrawal limits will be programmatically enforced by the SSC System and will be displayed to you prior to your contribution. By accepting these Terms, you accept the displayed withdrawal limits for your contribution and agree that SIPHER JSC is not obligated to accept any request for further withdrawals beyond what has been programmatically set by the SSC System.`,
            },
        ],
    },
    {
        title: "Creation and Allocation of SIPHER Tokens",
        chapters: [
            {
                level: 1,
                content: `The total supply of tokens to be minted will be 1,000,000,000 $SIPHER. These tokens will be distributed based on the various vesting and cliff schedules on the Token Generation Event (TGE) to the following stakeholders within the ecosystem:`,
                table: [
                    {
                        th: ["Stakeholders", "% of Total Supply", "Token Amount", "Vesting/Cliffs Terms"],
                        td: [
                            [
                                "Game Incentives & Marketing",
                                "30.4%",
                                "304,000,000",
                                "1 Month Cliff, and Release by demand",
                            ],
                            [
                                "Team & Advisors",
                                "25.0%",
                                "250,000,000",
                                "16 Month Cliff, followed by 24 Months Vesting",
                            ],
                            [
                                "Foundation & Reserve",
                                "14.0%",
                                "140,000,000",
                                "30 Month Cliff, followed by 24 Months Vesting",
                            ],
                            ["Seed Sale", "11.3%", "113,000,000", "16 Month Cliff, followed by 18 Months Vesting"],
                            ["Strategic Sale", "5.0%", "50,000,000", "16 Month Cliff, followed by 18 Months Vesting"],
                            [
                                "Promotions and Partnerships",
                                "0.3%",
                                "3,000,000",
                                "3 Month Cliff, followed by 12 Months Vesting",
                            ],
                            [
                                "Listing & Liquidity Rewards",
                                "10.0%",
                                "100,000,000",
                                "15% on TGE, followed by 11 Months Vesting",
                            ],
                            ["Public Sale", "4.0%", "40,000,000", "100% on TGE"],
                            ["Totals", "100%", "1,000,000,000", "-"],
                        ],
                    },
                ],
            },
            {
                level: 1,
                content: `However, Sipher JSC may in its discretion allocate SIPHER Tokens in any manner, whether or not consistent with the foregoing. Sipher JSC makes no undertaking, representation, or warranty in respect of its allocation of SIPHER Tokens.`,
            },
        ],
    },
    {
        title: "This Clause is intentionally left blank",
        chapters: [],
    },
    {
        title: "Minimum Token Target Strike Price",
        chapters: [
            {
                level: 1,
                content: `If at the Token Sale End Time the target strike price of US$0.36 (in ETH) / SIPHER Token is not met, Sipher JSC may opt to exchange all contributions made at the target strike price and return unsold tokens to the Foundation and Reserve, or cancel the Token Sale under Clause V.7 of these Terms.`,
            },
        ],
    },
    {
        title: "Contribution Process",
        chapters: [
            {
                level: 1,
                content: `Important: Your Order will only specify your Contribution Amount, not the number of SIPHER Tokens which you will receive. It will be your sole responsibility to monitor the changing settlement price of the SIPHER Token on the Token Sale Site before the end of the Token Sale, and at your sole discretion if you wish to withdraw your contributions from the Token Sale Contract (subject  to limitations as set out in Schedule 1, Clause 7 - Withdrawal of Contributions).`,
            },
            {
                level: 1,
                content: `To pay for your Order, during the Token Sale Period, you will be required to interact with the Token Sale Smart Contract with your intended contribution and other information as required and identified on the Token Sale Site. Your failure to include sufficient gas with your payment, network congestion or fault, or other errors in the systems processing your contributions could result in your contributions being delayed, rejected, or otherwise not processed.`,
            },
            {
                level: 1,
                content: `You are solely responsible for ensuring that you direct your contributions to the correct Token Sale Smart Contract via the intended contribution function by using the official Token Sale Site. If you do not make your contributions to the Token Sale Smart Contract in the way it was intended via the Token Sale Site, you may permanently lose the entire amount of your contribution and you will not be eligible for SIPHER Tokens. You, for and on behalf of all natural and legal persons who may claim through or under you, on your behalf, or otherwise in respect of you, release and forever discharge Sipher JSC and its affiliates, and its and their respective directors, officers, employees, agents, representatives, suppliers, attorneys, and advisers, and all of its and their respective predecessors, successors, and assigns, from all claims and causes of action of any kind whatsoever, whether under common law, statutory, contractual, tortious, equitable, or otherwise, and all losses, damages, taxes, liabilities, costs, and expenses, which you have, ever had, may have, or hereafter might have, whether known or unknown, now existing or which might arise or accrue hereafter, relating to or arising from contributions made other than to the Token Sale Smart Contract through its intended way.`,
            },
            {
                level: 1,
                content: `Sipher JSC accepts no responsibility or liability for any payment you make, attempt or intend to make in respect of Orders until such time, if ever, as the contribution transaction is confirmed to have interacted correctly with the Token Sale Smart Contract by the Ethereum blockchain.`,
            },
        ],
    },
    {
        title: "Payment Intermediaries",
        chapters: [
            {
                level: 1,
                content: `Sipher JSC advises you not to use third party payment processors, exchange wallets, or other intermediaries as they may not be compatible with the SSC System and, even the contribution transaction is confirmed to have interacted correctly with the Token Sale Smart Contract by the Ethereum blockchain, you may not receive any SIPHER Tokens. Sipher JSC disclaims all responsibility and liability to you if you use a third party payment processor, exchange wallet, or other intermediary and do not receive SIPHER Tokens.`,
            },
        ],
    },
    {
        title: "Distribution of SIPHER Tokens. After the end of the Token Sale, the settlement price per token will be finalized and the SSC System will allocate your SIPHER Tokens based on the amount you have contributed. You will be required to use the same ETH Address you used to contribute in order to claim the SIPHER Tokens you were allocated on our website.",
        chapters: [
            {
                level: 1,
                content: `You are in all respects solely responsible for creating the Ethereum account corresponding to your Registered ETH Address, and for safeguarding the private keys, passwords, and other credentials relating to that account and any wallet or other token management mechanism you use to manage that account.`,
            },
        ],
    },
    {
        title: "This Clause is intentionally left blank",
        chapters: [],
    },
    {
        title: "SIPHER Token Transferability",
        chapters: [
            {
                level: 1,
                content: `SIPHER Tokens, upon being claimed, are freely transferrable.`,
            },
            {
                level: 1,
                content: `The SIPHER Tokens allocated to founders, advisors, employees, seed and private sale investors will vest according to the schedule as listed under Schedule 1, Clause 7 above.`,
            },
        ],
    },
]

type schedulePropps = {
    title: string
    text?: string
    chapters: {
        level: number
        content: string
        table?: {
            th: any
            td: any
        }[]
        text?: string
        key?: string
    }[]
}

export const schedule2Introduction = [
    "It is important that you make an informed decision about the Token Sale. You must carefully read and evaluate the risks that Sipher JSC describes in this Schedule 2 (Risk Disclosures).",
    "The realisation of any one or more of the risks described in this Schedule 2 (Risk Disclosures), or other risks whether unforeseen or unforeseeable, could significantly reduce or eliminate the utility or value to you of the Service and any SIPHER Tokens you hold and you could lose your entire payment amount.",
    "If you do not fully understand or are not comfortable with any of the risks described in this Schedule 2 (Risk Disclosures), you should not participate in the Token Sale. Sipher JSC does not represent that this Schedule 2 (Risk Disclosures) discloses all risks and other significant aspects of the Token Sale, including risks which may be personal to you and thus unknown to Sipher JSC.",
]

export const schedule2: schedulePropps[] = [
    {
        title: "Sipher JSC Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Sipher JSC Failure. As a consequence of the realisation of one or more of the other risks in this Schedule 2 (Risk Disclosures) or of risks not described in this Schedule 2 (Risk Disclosures), Sipher JSC’s business could fail and Sipher JSC could be wound up or dissolved. If Sipher JSC’s business fails and the Service is not transferred to and operated by another company, the Service would terminate and any SIPHER Tokens you hold would have no utility or value. Sipher JSC does not commit that it can or will transfer the Service to another company if its business fails. If Sipher JSC does transfer the Service to another company, Sipher JSC does not commit that the other company will operate the Service to your satisfaction or at all, or will continue to accept SIPHER Tokens for use in the Service.",
            },
            {
                level: 1,
                content:
                    "Management Failures. Sipher JSC’s management may fail to manage its personnel, finances, facilities, information, technology, and other resources to effectively develop, operate, maintain, support, improve, market, and sell the Service, or to manage the growth of the Service or its business, or to adapt the Service or its business to changes in technology or the markets in which it operates, or to identify and effectively respond to the risks described in this Schedule 2 (Risk Disclosures) or otherwise, the realisation of any or all of which could adversely affect the Service.",
            },
            {
                level: 1,
                content:
                    "No Governance Rights. SIPHER Tokens confer no governance or similar rights with respect to Sipher JSC or the Service. Sipher JSC will, at its discretion, make all decisions concerning its business and the Service, including decisions to fork or discontinue the Service; to change any pricing, parameter, or feature of the Service; to subcontract or outsource the operation of the Service; to sell the Service; and to sell, merge, or liquidate Sipher JSC or all or a material part of Sipher JSC’s assets, any of which decisions may not be consistent with your expectations or interests.",
            },
            {
                level: 1,
                content:
                    "Business Model Risks. Sipher JSC designed the Service and the SIPHER Tokens according to a specific business model. In particular, the adoption and success of the Service depends on building a blockchain gaming ecosystem that is sustainable and attractive to gamers. If the business model of the Service is flawed, or if the assumptions underlying that business model are incorrect, the Service may underperform or fail. Sipher JSC may at its discretion elect to change the business model of the Service in response to competition or market requirements, to address perceived flaws, to optimise the model, or otherwise. Any such changes to the business model of the Service may fail to achieve their purpose and could adversely affect the Service.",
            },
            {
                level: 1,
                content:
                    "Insufficient Funding. Sipher JSC will depend on the proceeds of the Token Sale to fund its operations until such time, if ever, that Sipher JSC earns sufficient revenue from the Service or other activities. The proceeds of the Token Sale are cryptocurrencies that may increase or decrease in value. Sipher JSC may, at its discretion, engage in hedging or similar activities to manage the risk of cryptocurrency fluctuations, but those activities may not be sufficient, may fail, or may worsen the consequences of those fluctuations. In addition, the cryptocurrencies held by Sipher JSC may not be convertible to fiat currencies or other cryptocurrencies at rates Sipher JSC considers favourable or at all. The cryptocurrencies held by Sipher JSC are also subject to loss or theft despite security precautions taken by Sipher JSC. If for any reason Sipher JSC’s funds are not sufficient to sustain its operations, Sipher JSC may have to reduce or suspend its operations, which would adversely affect Sipher JSC’s ability to develop and operate the Service at the intended level or at all.",
            },
            {
                level: 1,
                content:
                    "Unanticipated Risks. The Service will be launched and will evolve in technology, business, economic, and legal environments that are uncertain and subject to rapid, unpredictable, and potentially contradictory evolution. The future risks associated with those environments, their respective evolutions, and the interactions among them are unknown and unknowable but they could threaten the viability or existence of the Service. ",
            },
        ],
    },
    {
        title: "Product Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Delay. Sipher JSC may not develop and deploy the Service according to its intended schedule. Delays in deploying the Service may adversely affect the acceptance of the Service in the market and ultimately the viability of the Service.",
            },
            {
                level: 1,
                content:
                    "Inability to Use SIPHER Tokens. Holders of SIPHER Tokens will not be able to use them with the Service until Launch. Launch may be delayed, or may not occur at all. Even after Launch, the availability of certain features of the Service will be limited. The opportunity to use SIPHER Tokens will initially depend on the holder being qualified as a reserve operator for the Service and executing transactions for which it must pay fees to the Service.",
            },
            {
                level: 1,
                content:
                    "Failure to Develop and Support the Service. As a consequence of the realisation of one or more of the other risks in this Schedule 2 (Risk Disclosures) or of risks not described in this Schedule 2 (Risk Disclosures), or because of business decisions taken by Sipher JSC in good faith, Sipher JSC may fail to launch the Service with a full set of intended features and functions or at all, may discontinue certain features and functions of the Service, may not improve or add to the features and functions of the Service over time, may not adequately support the Service, and may not fix bugs in the Service in a timely way or at all. The Service may therefore not have the utility you expect.",
            },
            {
                level: 1,
                content:
                    "Service Issues. The Service may be degraded, interrupted, or fail because of hardware, software, or network defects, security breaches, hacking, viruses or other malicious code, natural disasters, congestion in underlying networks, and other causes. Sipher JSC may be unable to restore the Service to normal operation in a timely way or at all.",
            },
            {
                level: 1,
                content:
                    "Service Updates. Sipher JSC may not update the Service in a timely way or at all to fix bugs, address incompatibilities arising because of changes in underlying technologies and services, respond to user feedback, or react to competitive threats. Any such delays or failures could adversely affect the Service.",
            },
            {
                level: 1,
                content:
                    "Failure to Meet Expectations. The initial and future versions of the Service may not meet your expectations regarding features, functions, performance, availability, quality, security, scale, price, or other attributes that are important to you.",
            },
            {
                level: 1,
                content:
                    "Reliance on Third Parties. Sipher JSC relies on third parties it does not control to operate Ethereum and other systems and services on which the Service depends. Those third parties may be unable or unwilling to act as Sipher JSC needs and expects, may themselves act maliciously, or may be adversely affected by other parties acting intentionally, unintentionally, or maliciously or by other events outside their control. The failure of those third parties to perform according to Sipher JSC’s needs and expectations could adversely affect the Service.",
            },
            {
                level: 1,
                content:
                    "Privacy Risks. The SSC System and the Service are built on Ethereum and other public, decentralised platforms. Anyone with Internet access can inspect all transactions and other information stored in those platforms that is not encrypted. Your Orders for and transactions involving SIPHER Tokens, and other information about you or that belongs to you that may be processed by or stored in those platforms in connection with your use of the SSC System or the Service, may be inspected by the public. Certain information may, even if encrypted, be associated with you by combining it with other public or non-public information.",
            },
        ],
    },
    {
        title: "Technology Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Core Technology Risks. The Service is built with core technologies that are in some cases immature and unproven, including the Ethereum blockchain platform and various open source software applications and libraries. If those core technologies do not perform according to Sipher JSC’s needs or expectations, have bugs or security vulnerabilities that are not or cannot be fixed, become unstable, degraded, or unavailable, are changed or forked in a way that is incompatible with the Service, or are not further developed or supported, Sipher JSC may be required to change the specifications of the Service and to reduce or eliminate features and functions that are important to you, or to discontinue the Service.",
            },
            {
                level: 1,
                content:
                    "Smart Contract Risks. Certain key features of the Service will be implemented in smart contracts on the Ethereum blockchain platform. The nature of smart contracts makes them difficult to change to fix bugs, improve performance, or add features and functions. Sipher JSC may therefore not correct defects in the Service or improve the Service to meet market needs or respond to competition fast enough or at all, which could adversely affect the utility or viability of the Service.",
            },
            {
                level: 1,
                content:
                    "Hacking. All software systems, including the Service, have security vulnerabilities. Malicious actors may disrupt, corrupt, or interfere with the Service, may defraud Sipher JSC or other stakeholders in the Service, including you, and may steal SIPHER Tokens or other valuable data stored in the Service, some of which may belong to or involve you.",
            },
            {
                level: 1,
                content:
                    "Mining Attacks. Certain features of the Service depend on the Ethereum blockchain platform. Ethereum is a decentralised service comprising a global peer-to-peer network of many independent node operators. Coordination or collusion among node operators could subject the Service and its stakeholders, including you, to a variety of attacks that could compromise the integrity of the Service, cause loss, theft, or corruption of SIPHER Tokens and other valuable data stored in the Service, including yours, or increase the cost of using the platform to levels that make operation of the Service uneconomic and unsustainable.",
            },
            {
                level: 1,
                content:
                    "Security Risks. The security and integrity of essential components of the Service depend on cryptography. Known and currently unknown weaknesses in the cryptographic algorithms used in the Service and its underlying core technologies, and advances in techniques or computing power to circumvent those algorithms, may compromise the security and integrity of the Service, cause the loss, theft, or corruption of SIPHER Tokens and other valuable data stored in the Service, including yours, and require the suspension or discontinuation of the Service. The existence or future development of stronger cryptographic algorithms to replace compromised algorithms, and the feasibility of implementing those stronger algorithms in the Service and its underlying core technologies, is uncertain.",
            },
        ],
    },
    {
        title: "Regulatory Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Regulatory Status. The regulatory status of the Service, the SIPHER Tokens, and the Token Sale is unclear or unsettled in many jurisdictions. Regulators in many jurisdictions have announced their intention to consider the adoption of regulations to cover cryptographic tokens and the markets for them. It is not known if, when, or to what degree different jurisdictions will interpret existing laws and regulations or adopt new laws and regulations that could adversely affect the Service, the SIPHER Tokens, and the Token Sale, or whether those laws or regulations would be applied retroactively. Adverse laws or regulations and/or the financial and other costs of regulation could cause Sipher JSC to modify or discontinue certain features or functions of the Service, or cause Sipher JSC to discontinue the Service in certain jurisdictions or entirely, or make using, holding, trading, buying, selling, or transferring SIPHER Tokens regulated or illegal in certain jurisdictions.",
            },
            {
                level: 1,
                content:
                    "Compliance Risks. Complying with laws and regulations that apply to Sipher JSC and the Service may be costly and may divert a significant portion of Sipher JSC’s attention and resources. If Sipher JSC must have a licence or other government registration or approval to operate the Service in a jurisdiction, there is no guarantee that Sipher JSC will qualify for or be granted the necessary licence, registration, or approval. The lack of the necessary licence, registration or approval would restrict or prevent Sipher JSC from operating the Service in that jurisdiction. If Sipher JSC fails to comply with applicable laws or regulations, Sipher JSC could be subject to significant legal liability and financial and reputational losses which may adversely affect the Service.",
            },
            {
                level: 1,
                content:
                    "Tax. The tax status of the Service, the SIPHER Tokens, and the Token Sale is unclear or unsettled in many jurisdictions. Adverse interpretation of existing tax laws and regulations or adoption of new adverse tax laws and regulations could result in unanticipated and potentially retroactive tax liability for Sipher JSC and other stakeholders in the Service, including you. Those adverse tax consequences could cause Sipher JSC to modify or discontinue certain features or functions of the Service or increase prices for the Service, or cause Sipher JSC to make the Service unavailable in certain jurisdictions, or make using, holding, trading, buying, selling, or transferring SIPHER Tokens subject to tax in certain jurisdictions.",
            },
        ],
    },
    {
        title: "Market Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Lack of Market Penetration. The Service may not attract users and/or reserve operators at the intended level or at a level sufficient to become or remain useful or viable. Any such lack of use or interest could negatively impact the development of the Service and/or the utility or value of the Service and/or the SIPHER Tokens.",
            },
            {
                level: 1,
                content:
                    "Competition. Other organisations may develop services that compete with the Service, and may do so with some or all of the open source software underlying the Service. Those competing services may adversely affect the adoption and use of the Service, and ultimately the viability and continued existence of the Service. It is unknown whether or to what extent, if any, those competing services may be interoperable with the Service or may accept the SIPHER Tokens.",
            },
            {
                level: 1,
                content:
                    "Secondary Markets for SIPHER Tokens. As at the start of the Token Sale Period, there is no public market for SIPHER Tokens. Virtual currency exchanges and other secondary markets for the SIPHER Tokens may never exist. Even if the SIPHER Tokens are listed or traded on a secondary market, there is no assurance that an active or liquid trading market for SIPHER Tokens will develop or, if developed, will be sustained. Unless Sipher JSC publicly states otherwise, Sipher JSC has no financial or other relationship with, and does not endorse, any such exchange or secondary market that elects to transact in SIPHER Tokens. Exchanges and secondary markets may be new, undercapitalised, illiquid, volatile, operated by persons with minimal or no relevant experience, and subject to minimal or no regulatory oversight, making use of them susceptible to a variety of market, financial, fraud, and other risks that could result in your loss of SIPHER Tokens or other losses.",
            },
            {
                level: 1,
                content:
                    "Price Volatility. The price of SIPHER Tokens in the Token Sale may not be indicative of the price of SIPHER Tokens on public markets. The SIPHER Tokens have no intrinsic value at the time they are created. The price of SIPHER Tokens on public markets may be extremely volatile, may decline below the price you pay for SIPHER Tokens, or may diminish to zero in response to various factors, some of which are outside Sipher JSC’s control, including, among others, the following:",
            },
            {
                level: 2,
                content:
                    "The volatility of the prices of cryptographic tokens generally and in response to events that have little or nothing to do with Sipher JSC;",
            },
            {
                level: 2,
                content: "General economic conditions and macroeconomic changes;",
            },
            {
                level: 2,
                content:
                    "Changes and innovations in blockchain technology, the industry sectors in which Sipher JSC operates, and other technologies and markets;",
            },
            {
                level: 2,
                content:
                    "Sipher JSC’s announcements pertaining to strategic direction, key personnel, financial and operational results, partnerships, significant transactions, new products, and other events; ",
            },
            {
                level: 2,
                content: "activities and announcements of Sipher JSC’s competitors; and",
            },
            {
                level: 2,
                content:
                    "Third-party reports, recommendations, and statements regarding SIPHER Tokens, the Service, or Sipher JSC.",
            },
            {
                level: 1,
                content:
                    "Risk of Dilution. Sipher JSC will distribute SIPHER Tokens other than via the Token Sale, as described in paragraph 7 of Schedule 1 (Details of the Token Sale). In many cases those other SIPHER Tokens will be distributed for significantly less consideration per SIPHER Token than you paid for your SIPHER Tokens. The distribution of those other SIPHER Tokens will increase the overall supply of SIPHER Tokens in the market, and may affect as well as result in downward pressure on the market price of SIPHER Tokens.",
            },
            {
                level: 1,
                content:
                    "Market Perception. The market price of SIPHER Tokens could be adversely affected by negative publicity, social media commentary, rumours, and other information, whether or not true, about Sipher JSC, the Service, the SIPHER Tokens, the technology on which the Service is based (including Ethereum), and the legal or regulatory environment in which the Service operates.",
            },
            {
                level: 1,
                content:
                    "General Economic and Market Risks. Adverse changes in general global and regional economic and market conditions may adversely affect Sipher JSC, the suppliers and third parties on which Sipher JSC depends, and users and prospective users of the Service, all of which may adversely affect the availability, reliability, performance, adoption, and the success of the Service.",
            },
        ],
    },
    {
        title: "Participant Risks",
        chapters: [
            {
                level: 1,
                content:
                    "Private Key Risks. You, not Sipher JSC, are responsible for securing the private key that controls your SIPHER Tokens. If you do not know your private key, you will permanently lose your SIPHER Tokens. If your private key is lost or stolen, you could permanently lose your SIPHER Tokens. If you store your private key with a third party wallet or vault service, you will permanently lose your SIPHER Tokens if you forget and are unable to recover your credentials to access the third party service, or if the third party service malfunctions, is corrupted or compromised, makes your credentials or private key available to others, ceases operations, is hacked, or otherwise cannot make your private key available to you or loses control of your private key.",
            },
            {
                level: 1,
                content:
                    "Token Sale Process Risks. The process for submitting an Order and receiving SIPHER Tokens is described in these Terms, including Schedule 1 (Details of the Token Sale), and on the Token Sale Site. If you do not carefully follow that process, you may not be able to participate in the Token Sale or purchase SIPHER Tokens, you may permanently lose the funds which you intend to submit as payment for your Order, or you may permanently lose the SIPHER Tokens which you have purchased. The Payment Address, like all software systems, has security vulnerabilities. Malicious actors may attempt to steal funds from the Payment Address, including by hacking it. Funds in the Payment Address are also subject to loss or theft by other means. You accept all risk of loss or theft of your payments from the Payment Address.",
            },
            {
                level: 1,
                content:
                    "Incompatible Wallet. The technical requirements for receiving SIPHER Tokens are described in Clause V.4 of these Terms. If you use a wallet or other technology that does not conform to those technical requirements, or if you use a third party service whose wallet or other technology does not conform to those technical requirements, your SIPHER Tokens may be permanently lost.",
            },
            {
                level: 1,
                content:
                    "Uninsured Losses. SIPHER Tokens are not insured by Sipher JSC or by any public agency. If your SIPHER Tokens are lost or stolen, you will have no recourse unless you insure them at your expense. Sipher JSC cannot issue new or substitute SIPHER Tokens to replace lost or stolen SIPHER Tokens.",
            },
        ],
    },
]
