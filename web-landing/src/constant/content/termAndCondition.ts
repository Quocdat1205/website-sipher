export const introduction = [
    'Sipher ("Sipher") is a distributed application that runs on the Ethereum network, using uniquely coded smart contracts (each, a “Smart Contract”) that allow users to acquire, buy and sell own and transfer, the unique digital characters known as Sipher (hereafter “Sipher”) located at www.Sipher.xyz (the “Site”). The Smart Contracts and the Site are collectively referred to in these T&C as the “App”. Using the App, users can view their Sipher, and use the Smart Contracts to acquire, buy, sell, own, trade and transfer Sipher on the Ethereum network.',
    'Sipher ("Sipher”, "we", or "us") is the party making the App available for you to use. Before using the App, the Smart Contracts, or the Site, you must agree to these T&C and any other terms and conditions incorporated or referenced herein (the T&C and any other terms and conditions incorporated or referenced herein are collectively referred to as the “Terms”).',
    "PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART CONTRACTS, OR THE SITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE SMART CONTRACTS, AND THE SITE, UNLESS Sipher HAS AGREED TO DIFFERENT WRITTEN AGREEMENT WITH YOU TO THE CONTRARY, SIGNED BY BOTH PARTIES. Sipher IS ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART THEREOF, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THE TERMS CONTAINED HEREIN. . IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT COMPANY OR LEGAL ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE NOT WILLING TO MAKE THE APP, THE SMART CONTRACTS, OR THE SITE AVAILABLE TO YOU. IF YOU DO NOT FULLY AGREE TO THESE TERMS, YOU ARE NOT PERMITTED TO ACCESS OR USE THE APP, THE SMART CONTRACTS, OR THE SITE. ALL TRANSACTIONS INITIATED THROUGH THE APP ARE FACILITATED AND RUN BY THIRD-PARTY ELECTRONIC WALLETS ON THE ETHEREUM BLOCKCHAIN, AND BY USING THE APP YOU AGREE THAT YOU ARE GOVERNED BY THE TERMS OF SERVICE AND PRIVACY POLICY FOR THOSE APPLICABLE WALLETS. WE ARE NOT A BROKER, FINANCIAL INSTITUTION, OR CREDITOR. THE APP IS AN ADMINISTRATIVE PLATFORM ONLY. WE FACILITATE TRANSACTIONS BETWEEN THE BUYER AND SELLER BUT ARE NOT A PARTY TO ANY AGREEMENT BETWEEN THE BUYER AND SELLER (UNLESS WE ARE THE SELLER). YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF ANY ASSETS YOU PURCHASE.",
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

export const termAndCondition: TermAndConditionItem[] = [
    {
        title: "The App",
        chapters: [
            {
                level: 1,
                content:
                    "To use the App, you will need to have a web browser and an Ethereum wallet that is compatible with the Non-Fungible Token (NFT) standard on the Ethereum network.",
            },
            {
                level: 1,
                content:
                    "All transactions regarding Sipher are managed and confirmed via the Ethereum blockchain. You understand that your Ethereum public address may be made publicly visible whenever you engage in a transaction.",
            },
            {
                level: 1,
                content:
                    "We do not own nor control your web browser, your Ethereum wallet, the Ethereum network, or any other third-party site, product, or service that you might access, visit, or use for the purpose of enabling you to perform a transaction with your Sipher. We are not liable for the acts or omissions of any such third parties, nor will we be liable for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.",
            },
            {
                level: 1,
                content:
                    "You may be able to create an account on the Site. If so, you agree to provide true, accurate and complete information about yourself. If you become aware of any unauthorized use of your account, contact us immediately.",
            },
            {
                level: 1,
                content:
                    "The App may show certain pricing data that has been loaded and collected from the Ethereum blockchain. We are not liable for any incorrect information or typographical errors of any kind, including any incorrect information that is due to a coding error, blockchain code errors or due to a data outage. It is your duty and obligation to confirm any and all pricing data on your own and base any decisions you make on your own information and data.",
            },
            {
                level: 1,
                content:
                    "Any calculations that are displayed on the App are for information purposes only. These calculations are in no way predictions of value and you agree that you will not construe these calculations as predictions of future prices or values in any way or that we are giving you any advice on what to purchase or not to purchase. All such decisions are made in your sole discretion without reliance on any information provided on the App.",
            },
            {
                level: 1,
                content: "We are not responsible or liable for any transactions that are cancelled by a seller.",
            },
        ],
    },
    {
        title: "Ownership, License, Restrictions",
        chapters: [
            {
                level: 1,
                content: "Definitions",
            },
            {
                level: 2,
                content: '"Art" means any art, design, and drawings that may be associated with a Sipher that you Own',
                key: "definition",
            },
            {
                level: 2,
                content:
                    '"Own" means, with respect to a Sipher, a Sipher that you have purchased or otherwise rightfully acquired from a legitimate source, where proof of such purchase is recorded on the relevant Ethereum blockchain.',
                key: "definition",
            },
            {
                level: 2,
                content: '"Purchased Sipher" means a Sipher that you Own.',
                key: "definition",
            },
            {
                level: 2,
                content:
                    '"Third Party IP" means any third-party patent rights, copyrights, trade secrets, trademarks, know-how or any other intellectual property rights recognized in any country or jurisdiction in the world.',
                key: "definition",
            },
            {
                level: 1,
                content: "Ownership",
            },
            {
                level: 2,
                content:
                    "When you purchase a Sipher, you own only the NFT, not any associated Art. Each Sipher is associated with a non-fungible token (an “NFT”) on the Ethereum blockchain. When you acquire a Sipher, you own the NFT, not the associated Art, or any other Sipher Materials (as that term is defined below), or any Third Party IP. You can trade the NFT, sell it, or give it away for free. Ownership of the NFT is governed solely by the Smart Contract and the Ethereum Network.",
                key: "ownership",
            },
            {
                level: 2,
                content:
                    "We Own the App, and the App includes the Art. You acknowledge and agree that Sipher (or, as applicable, our licensors) owns all legal right, title and interest in and to all other elements of the App, and all intellectual property rights therein (including, without limitation, all Art, designs, names, copyrights, trademarks, patents, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the App (collectively, the “Sipher Materials”)). Other than expressly stated in these Terms, you do not have any other rights in the Sipher Materials. You acknowledge that the Sipher Materials are protected by, as applicable, copyright, trade dress, patent, and trademark laws, international conventions, other relevant intellectual property and proprietary rights, and applicable laws. All Sipher Materials are the copyrighted property of Sipher or its licensors, and all trademarks, service marks, and trade names associated with the App or otherwise contained in the Sipher Materials are proprietary to Sipher or its licensors. You may not use the Sipher name without our prior written consent. Except as expressly set forth herein, your use of the App does not grant you ownership of or any other rights with respect to any Art, content, code, data, or other Sipher Materials that you may access on or through the App. We reserve all rights in and to the Sipher Materials that are not expressly granted to you in these Terms. For the avoidance of doubt, you understand and agree:",
                key: "ownership",
            },
            {
                level: 3,
                content:
                    "That your acquisition or purchase of a Sipher , whether via the App or otherwise, does not give you any rights or licenses in or to the Sipher Materials (including, without limitation, our copyright in and to the associated Art or the Sipher name/trademark) other than those expressly contained in these Terms.",
                key: "weown",
            },
            {
                level: 3,
                content:
                    "That you do not have the right, except as otherwise set forth in these Terms, to reproduce, distribute, or otherwise commercialize any elements of the Sipher Materials (including, without limitation, any Art) without our prior written consent in each case, which consent we may withhold in our sole and absolute discretion",
                key: "weown",
            },
            {
                level: 3,
                content:
                    "That you will not apply for, register, or otherwise use or attempt to use any Sipher trademarks or service marks, or any confusingly similar marks, anywhere in the world without our prior written consent in each case, which consent we may withhold in our sole and absolute discretion.",
                key: "weown",
            },
            {
                level: 1,
                content: "License to Art",
            },
            {
                level: 2,
                content:
                    "General Use. Subject to your full and continued compliance with these Terms, Sipher grants you a limited worldwide, non-exclusive, non-transferable, royalty-free license to use, copy, and display the Art of your Purchased Sipher solely for the following purposes:",
                key: "license",
            },
            {
                level: 3,
                content: "For your own personal, non-commercial use.",
                key: "generaluse",
            },
            {
                level: 3,
                content:
                    "As part of a marketplace that permits the purchase and sale of your Purchased Sipher , provided that the marketplace cryptographically verifies each Sipher owner’s rights to display the Art for their Purchased Sipher to ensure that only the actual owner of the NFT can display the Art.",
                key: "generaluse",
            },
            {
                level: 3,
                content:
                    "Or as part of a third party website or application that permits the inclusion, involvement, or participation of your Purchased Sipher , provided that the website/application cryptographically verifies each Sipher owner’s rights to display the Art for their Purchased Sipher to ensure that only the actual owner of the NFT can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Sipher leaves or logs out of the applicable website/application.",
                key: "generaluse",
            },
            {
                level: 2,
                content:
                    "Non-digital Commercial Use. Subject to your continued compliance with these Terms, Sipher grants you a limited, worldwide, non-exclusive, non-transferable license to use, copy, and display the Art for your Purchased Sipher for the purpose of commercializing your own physical merchandise that includes, contains, or consists of the Art for your Purchased Sipher (“Commercial Use”), provided that such Commercial Use does not.",
                key: "license",
            },
            {
                level: 3,
                content: "Include any form of collaboration or involvement of any brand or other third party.",
                key: "nondigital",
            },
            {
                level: 3,
                content:
                    "Or result in you earning more than USD$100,000 in gross revenue each year. In the event your Commercial Use exceeds USD$100,000 in a given year, you will need to enter into a commercial license with us. If you exceed the USD$100,000 limitation, you will be in breach of these Terms, and must contact Sipher regarding entering into a broader license agreement (which will be in Sipher ’s sole and absolute discretion). Without entering into a commercial license with us, you acknowledge and agree that:",
                key: "nondigital",
            },
            {
                level: 4,
                content: "You are in breach of these Terms.",
                key: "orresult",
            },
            {
                level: 4,
                content:
                    "In addition to any remedies that may be available to Sipher at law or in equity, Sipher may immediately terminate the license granted above.",
                key: "orresult",
            },
            {
                level: 4,
                content:
                    "And you will be liable and responsible to reimburse Sipher for any costs and expenses incurred by Sipher during the course of enforcing these Terms against you (including attorney and legal fees).",
                key: "orresult",
            },
            {
                level: 1,
                content: "Restrictions",
                text: "You agree that you may not, nor permit any third party to do or attempt to do any of the foregoing without Shipher express prior written consent in each case:",
            },
            {
                level: 2,
                content:
                    "Modify the Art for your Purchased Sipher in any way, including, without limitation, the shapes, designs, drawings, attributes, or color schemes.",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Use the Art for your Purchased Sipher to advertise, market, or sell any third party product or service.",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Use the Art for your Purchased Sipher in connection with images, videos, or other forms of media that depict hatred, intolerance, violence, cruelty, or anything else that could reasonably be found to constitute hate speech or otherwise infringe upon the rights of others.",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Use the Art for your Purchased Sipher in movies, videos, or any other forms of media, except to the limited extent that such use is expressly permitted in these Terms or solely for your own personal, non-commercial use.",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Sell, distribute for commercial gain (including, without limitation, giving away in the hopes of eventual commercial gain), or otherwise commercialize merchandise that includes, contains, or consists of the Art for your Purchased Sipher , except as expressly permitted in these Terms.",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Attempt to trademark, copyright, or otherwise acquire additional intellectual property rights in or to the Art for your Purchased Sipher or",
                key: "restrictions",
            },
            {
                level: 2,
                content:
                    "Otherwise utilize the Art for your Purchased Sipher for your or any third party’s commercial benefit. To the extent that Art associated with your Purchased Sipher contains Third Party IP (e.g., licensed intellectual property from a celebrity, athlete, or other public figure), you understand and agree as follows:",
                key: "restrictions",
            },
            {
                level: 3,
                content:
                    "That you will not have the right to use such Third Party IP in any way except as incorporated in the Art, and subject to the license and restrictions contained herein.",
                key: "utilize",
            },
            {
                level: 3,
                content: "That the Commercial Use license in Section 3.C(ii) above will not apply.",
                key: "utilize",
            },
            {
                level: 3,
                content:
                    "That, depending on the nature of the license granted from the owner of the Third Party IP, Sipher may need to pass through additional restrictions on your ability to use the Art.",
                key: "utilize",
            },
            {
                level: 3,
                content:
                    "and to the extent that Sipher informs you of such additional restrictions in writing (email being acceptable), you will be responsible for complying with all such restrictions from the date that you receive the notice, and that failure to do so will be deemed a breach of this license. For the avoidance of doubt, it is strictly prohibited and a violation of these Terms to use any Art or Purchased Sipher in order to create a similar or derivative NFT based on the Art or Purchased Sipher . Such use constitutes a violation of these Terms as well as intellectual property infringement, which would cause monetary damages and irreparable harm to Sipher . The restrictions in this Section will survive the expiration or termination of these Terms.",
                key: "utilize",
            },
            {
                level: 1,
                content: "Restrictions",
                text: "The license granted in Section 3.C above applies only to the extent that you continue to Own the applicable Purchased Sipher . If at any time you sell, trade, donate, give away, transfer, or otherwise dispose of your Purchased Sipher for any reason, the license granted in Section 3.C will immediately expire with respect to you and that Sipher without requiring notice, and you will have no further rights in or to the Art for that Sipher.",
            },
            {
                level: 1,
                content: "Feedback",
                text: "You may submit comments, bug reports, ideas or other feedback about the App (collectively, “Feedback”). You hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license under all rights necessary for us to incorporate and use your Feedback for any purpose. By submitting Feedback, you agree that we are free to use such Feedback at our discretion and without additional compensation to you, and to disclose such Feedback to third parties.",
            },
            {
                level: 1,
                content:
                    "Use of the Sipher name. Not withstanding any contained in these Terms, You agree that you will not use the Sipher name for any purpose without obtaining our prior written consent. Approval shall be determined in our sole discretion. Furthermore, non-response to a request for such approval shall not be deemed an approval.",
            },
            {
                level: 1,
                content:
                    "Your Obligations. You agree that you are responsible for your own conduct while accessing or using the App, and for any consequences thereof. You agree to use the App only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to:",
            },
            {
                level: 2,
                content:
                    "Send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable content.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Impersonate another person (via the use of an email address or otherwise).",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Upload, post, transmit or otherwise make available through the App any content that infringes the intellectual proprietary rights of any party.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Use the App to violate the legal rights (such as rights of privacy and publicity) of others.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Engage in, promote, or encourage illegal activity (including, without limitation, money laundering).",
                key: "obligations",
            },
            {
                level: 2,
                content: "Interfere with other users' enjoyment of the App.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Exploit the App for any unauthorized commercial purpose.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Modify, adapt, translate, or reverse engineer any portion of the App.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Remove any copyright, trademark or other proprietary rights notices contained in or on the App or any part of it.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Reformat or frame any portion of the App.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Display any content on the App that contains any hate-related or violent content or contains any other material, products or services that violate or encourage conduct that would violate any criminal laws, any other applicable laws, or any third party rights.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the App or the content posted on the App, or to collect information about its users for any unauthorized purpose.",
                key: "obligations",
            },
            {
                level: 2,
                content: "Create user accounts by automated means or under false or fraudulent pretenses.",
                key: "obligations",
            },
            {
                level: 2,
                content:
                    "Or access or use the App for the purpose of creating a product or service that is competitive with any of our products or services. If you engage in any of the activities prohibited by this Section, we may, at our sole and absolute discretion, without notice to you, and without limiting any of our other rights or remedies at law or in equity, immediately suspend or terminate your account and/or prohibit your access to the App and the Site.",
                key: "obligations",
            },
        ],
    },
    {
        title: "Ethereum Fees And Payment",
        chapters: [
            {
                level: 1,
                content:
                    "Any final acquisition, purchase, trade, or sale of Sipher will be conducted solely through the Ethereum network, though the Site may serve as a platform that facilitates such transactions. We have no control over these transactions as or once they occur, nor do we have the ability to reverse any transactions. You agree that we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions pertaining to the Smart Contracts, or any other transactions that conducted via the Ethereum network.",
            },
            {
                level: 1,
                content:
                    "We may require you to provide additional information and documents at the request of any competent authority or in case of application of any applicable law or regulation, including laws related to anti-laundering (legalization) of incomes obtained by criminal means, or for counteracting financing of terrorism. Sipher may also require you to provide additional information and documents in cases where it has reasons to believe that:",
            },
            {
                level: 2,
                content:
                    "Your are using the App (or any portion thereof) for money laundering or for any other illegal activity.",
                key: "wemayrequire",
            },
            {
                level: 2,
                content: "You have concealed or reported false identification information and other details.",
                key: "wemayrequire",
            },
            {
                level: 2,
                content:
                    "And/or transactions effected by you were effected in breach of these Terms. In such cases, Sipher, in its sole discretion, may pause or cancel your transactions until such additional information and documents are reviewed by us and accepted as satisfying the requirements of applicable law. If you do not provide complete and accurate information and documents in response to such a request, Sipher may refuse to provide you with further access to the Site and/or the App.",
                key: "wemayrequire",
            },
            {
                level: 1,
                content:
                    "Ethereum requires the payment of a transaction fee (a “Gas Fee”) for every transaction that occurs on the Ethereum network. You will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority (collectively, “Taxes”) associated with your use of the App (including, without limitation, any Taxes that may become payable as the result of your ownership or transfer of any of your Sipher). Except for income taxes levied on Sipher , you.",
            },
            {
                level: 2,
                content:
                    "Will pay or reimburse us for all national, federal, state, local or other taxes and assessments of any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs or other import or export taxes, and amounts levied in lieu thereof based on charges set, services performed or payments made hereunder, as are now or hereafter may be imposed under the authority of any national, state, local or any other taxing jurisdiction.",
                key: "willpay",
            },
            {
                level: 2,
                content:
                    "And shall not be entitled to deduct the amount of any such taxes, duties or assessments from payments made to us pursuant to these Terms.",
                key: "willpay",
            },
        ],
    },
    {
        title: "Termination",
        text: "We may terminate your access to all or any part of the App at any time, with or without cause, with or without notice, effective immediately, which may result in the forfeiture and destruction of all information associated with your account, and that we will not be liable to you or to any third party for any such suspension or termination. All provisions of these Terms, which by their nature should survive termination, shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity and limitations of liability. If we terminate these Terms or suspend or terminate your access to or use of the App due to your breach of these Terms or any suspected fraudulent, abusive, or illegal activity, then termination of these Terms will be in addition to any other remedies we may have at law or in equity.",
        chapters: [],
    },
    {
        title: "Disclaimer",
        chapters: [
            {
                level: 1,
                content:
                    "You expressly understand and agree that your access to and use of the app is at your sole risk, and that the app is provided “as is” and “as available” without warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, Sipher , our subsidiaries, affiliates, and licensors make no express warranties and hereby disclaim all implied warranties regarding the app and any part of it (including, without limitation, the site, any smart contract, or any external websites), including the implied warranties of merchantability, fitness for a particular purpose, non-infringement, correctness, accuracy, or reliability. Without limiting the generality of the foregoing, Sipher , our subsidiaries, affiliates, and licensors do not represent or warrant to you that:",
            },
            {
                level: 2,
                content: "Your access to or use of the app will meet your requirements.",
                key: "expressly",
            },
            {
                level: 2,
                content:
                    "Your access to or use of the app will be uninterrupted, timely, secure or free from error (including any blockchain code errors).",
                key: "expressly",
            },
            {
                level: 2,
                content: "Usage data provided through the app will be accurate.",
                key: "expressly",
            },
            {
                level: 2,
                content:
                    "The app or any content, services, or features made available on or through the app are free of viruses or other harmful components, or",
                key: "expressly",
            },
            {
                level: 2,
                content:
                    "that any data that you disclose when you use the app will be secure. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusions may not apply to you.",
                key: "expressly",
            },
            {
                level: 1,
                content:
                    "You accept the inherent security risks of providing information and dealing online over the internet and agree that Sipher has no liability or responsibility for any breach of security unless it is due to our gross negligence.",
            },
            {
                level: 1,
                content:
                    "Sipher will not be responsible or liable to you for any losses you incur as the result of your use of the ethereum network or any ethereum wallet or other electronic wallet, including but not limited to any losses, damages or claims arising from: (i) user error, such as forgotten passwords or incorrectly construed smart contracts or other transactions; (ii) server failure or data loss; (iii) corrupted wallet files; or (iv) unauthorized access or activities by third parties, including but not limited to the use of viruses, phishing, bruteforcing or other means of attack against the app, ethereum network, or any ethereum wallet or other electronic wallet.",
            },
            {
                level: 1,
                content:
                    "Sipher are intangible digital assets that exist only by virtue of the ownership record maintained in the ethereum network. All smart contracts are conducted and occur on the decentralized ledger within the ethereum platform. We have no control over and make no guarantees or promises with respect to smart contracts.",
            },
            {
                level: 1,
                content:
                    "Sipher is not responsible for losses due to blockchains or any other features of the ethereum network or any ethereum wallet or other electronic wallet, including but not limited to late report by developers or representatives (or no report at all) of any issues with the blockchain supporting the ethereum network, including forks, technical node issues, or any other issues having fund losses as a result.",
            },
        ],
    },
    {
        title: "Limitation And Liability",
        chapters: [
            {
                level: 1,
                content:
                    "You understand and agree that Sipher , our subsidiaries, affiliates, and licensors will not be liable to you or to any third party for any indirect, incidental, special, consequential, or exemplary damages which you may incur, howsoever caused and under any theory of liability, including, without limitation, any loss of profits (whether incurred directly or indirectly), loss of goodwill or business reputation, loss of data, cost of procurement of substitute goods or services, or any other intangible loss, even if Sipher has been advised of the possibility of such damages.",
            },
            {
                level: 1,
                content:
                    "You agree that our total, aggregate liability to you for any and all claims arising out of or relating to these terms or your access to or use of (or your inability to access or use) any portion of the app, whether in contract, tort, strict liability, or any other legal theory, is limited to the greater of:",
            },
            {
                level: 2,
                content:
                    "The amounts you actually paid us under these terms in the 12 month period preceding the date the claim arose.",
                key: "youagree",
            },
            {
                level: 2,
                content: "Or $100.",
                key: "youagree",
            },
            {
                level: 1,
                content:
                    "You acknowledge and agree that Sipher has made the app available to you and entered into these terms in reliance upon the warranty disclaimers and limitations of liability set forth herein, which reflect a reasonable and fair allocation of risk between the parties and form an essential basis of the bargain between us. Sipher would not be able to provide the app to you without these limitations.",
            },
            {
                level: 1,
                content:
                    "Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, and some jurisdictions also limit disclaimers or limitations of liability for personal injury from consumer products, so the above limitations may not apply to personal injury claims.",
            },
        ],
    },
    {
        title: "Risks",
        text: "You accept and acknowledge the following risks:",
        chapters: [
            {
                level: 1,
                content:
                    "The prices of blockchain assets and cryptocurrencies are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your Sipher, which may also be subject to significant price volatility. We cannot guarantee that any purchasers of Sipher will not lose money.",
            },
            {
                level: 1,
                content:
                    "You are solely responsible for determining what, if any, taxes apply to your Sipher -related transactions. Sipher is not responsible for determining the taxes that apply to any of your transactions.",
            },
            {
                level: 1,
                content:
                    "The App does not store, send, or receive Sipher. Sipher exist only by virtue of the ownership record maintained on the blockchain in the Ethereum network. Any transfer of Sipher occurs within the supporting blockchain in the Ethereum network.",
            },
            {
                level: 1,
                content:
                    "There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that Sipher will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Ethereum network, however caused.",
            },
            {
                level: 1,
                content:
                    "A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the Sipher ecosystem, and therefore the potential utility or value of Sipher.",
            },
            {
                level: 1,
                content:
                    "The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the Sipher’ ecosystem, and therefore the potential utility or value of Sipher.",
            },
            {
                level: 1,
                content:
                    "Upgrades by Ethereum to the Ethereum platform, a hard fork in the Ethereum platform, or a change in how transactions are confirmed on the Ethereum platform may have unintended, adverse effects on all blockchains using the ERC-20 standard, including the Sipher ’ ecosystem.",
            },
        ],
    },
    {
        title: "Indemnity",
        text: "You shall defend, indemnify and hold harmless Sipher and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and attorneys’ fees arising out of or in any way related to",
        chapters: [
            {
                level: 1,
                content: "Your breach of these Terms.",
            },
            {
                level: 1,
                content: "Your use or misuse of, or access to the App.",
            },
            {
                level: 1,
                content:
                    "Misappropriation or infringement by you, of any intellectual property rights or other right of Sipher , or any person or entity.",
            },
            {
                level: 1,
                content:
                    "Or your violation of applicable laws, rules or regulations in connection with your access to or use of the App. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with us in asserting any available defenses.",
            },
        ],
    },
    {
        title: "Third Party Site",
        text: "The App may permit you to link to other websites, services or resources on the Internet, which are provided solely as a convenience to you. You access these third-party websites, services or resources at your own risk. These other websites, services or resources are not under our control and you acknowledge that we are not responsible or liable for the content, functions, accuracy, legality, appropriateness or any other aspect of those websites, services or resources. The inclusion of any link to third party websites, services or resources does not imply our endorsement of them or any association with their operators. You acknowledge and agree that we shall not be responsible or liable (directly or indirectly) for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services available on or through any third party websites, services or resources.",
        chapters: [],
    },
    {
        title: "Governing Law And Jurisdiction",
        text: "This Policy and your use of the Website shall be governed and construed in accordance with the laws of Singapore. You agree to submit to the exclusive jurisdiction of the Singapore courts. A printed version of these Terms and any notice given in electronic form shall be admissible in judicial or administrative proceedings based on or relating to the Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. You and Sipher agree that any cause of action arising out of or related to the App must commence within 06 months after the cause of action arose; otherwise, such cause of action is permanently barred.",
        chapters: [],
    },
    {
        title: "Change To The Term",
        text: "We reserve the right, at our sole discretion, to modify or replace any of the Terms or to change, suspend or discontinue the App or Site at any time, by posting a notice on the Site or by sending you an email. We may also impose limits on certain features and services or restrict your access to parts or all of the App or Site without notice or liability, including, without limitation, by prohibiting you from selling your Sipher through the App. It is your responsibility to check these Terms periodically for changes. You can determine if any changes were made to these Terms by noting the date that these Terms were last updated. Your continued use of the App or Site following the posting of any changes to the Terms constitutes acceptance of those changes.",
        chapters: [],
    },
    {
        title: "Change To The App",
        text: "You acknowledge and agree that the form and nature of the App, and any part of it, may change from time to time without prior notice to you, and that we may add new features and change any part of the App at any time without notice. We also reserve the right to shut down the App in our sole discretion. Shutting down the App will not prohibit you from transferring, buying or selling your Purchased Sipher on another website or application.",
        chapters: [],
    },
    {
        title: "Privacy Policy",
        text: "Our Privacy Policy describes the ways we collect, use, store and disclose your personal information, and is hereby incorporated by this reference into these Terms. You agree to the collection, use, storage, and disclosure of your data in accordance with our Privacy Policy.",
        chapters: [],
    },
    {
        title: "General",
        text: "These Terms and the term and Conditions on our website (including those terms incorporated herein by reference) are the entire Agreement between you and us with respect to the App, and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and us with respect to the App. If any provision of the Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary for the rest of the Terms to remain enforceable. Our failure to enforce any part of these Terms shall not constitute a waiver of our right to later enforce that or any other part of these Terms. For any waiver of compliance with these Terms to be binding on us, one of our authorized representatives must provide you with written notice of that waiver. There are no third-party beneficiaries to these Terms. Nothing in these Terms create any agency, partnership, or joint venture. The language in these Terms will be interpreted as to its fair meaning, and not strictly for or against any party. You may not assign any or your rights or obligations under these Terms, whether by operation of law or otherwise, without our prior written consent. We may assign our rights and obligations under these Terms in our sole discretion to an affiliate, or in connection with an acquisition, sale or merger.",
        chapters: [],
    },
]

export type INoticeAndDisclaimerItem = {
    level: number
    content: string
    key?: string
}

export const noticeAndDisclaimer: INoticeAndDisclaimerItem[] = [
    {
        level: 0,
        content:
            'PLEASE READ THE ENTIRETY OF THIS "NOTICE AND DISCLAIMER" SECTION CAREFULLY. NOTHING HEREIN CONSTITUTES LEGAL, FINANCIAL, BUSINESS OR TAX ADVICE AND YOU SHOULD CONSULT YOUR OWN LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S) BEFORE ENGAGING IN ANY ACTIVITY IN CONNECTION HEREWITH. NEITHER PROPHESY LIMITED (DBA SIPHER LIMITED) (THE COMPANY), ANY OF THE PROJECT TEAM MEMBERS (THE SIPHER TEAM) WHO HAVE WORKED ON SIPHER (AS DEFINED HEREIN) OR PROJECT TO DEVELOP SIPHER IN ANY WAY WHATSOEVER, ANY DISTRIBUTOR/VENDOR OF SIPHER TOKENS (THE DISTRIBUTOR), NOR ANY SERVICE PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR INDIRECT DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN CONNECTION WITH ACCESSING THIS WHITEPAPER, THE WEBSITE AT HTTPS://WWW.SIPHER.XYZ/ (THE WEBSITE) OR ANY OTHER WEBSITES OR MATERIALS PUBLISHED BY THE COMPANY.',
    },
    {
        level: 0,
        content:
            "Project purpose: You agree that you are acquiring $SIPHER to participate in Sipher and to obtain services on the ecosystem thereon. The Company, the Distributor and their respective affiliates would develop and contribute to the underlying source code for Sipher. The Company is acting solely as an arms’ length third party in relation to the $SIPHER distribution, and not in the capacity as a financial advisor or fiduciary of any person with regard to the distribution of $SIPHER. Nature of the Whitepaper: The Whitepaper and the Website are intended for general informational purposes only and do not constitute a prospectus, an offer document, an offer of securities, a solicitation for investment, or any offer to sell any product, item or asset (whether digital or otherwise). The information herein may not be exhaustive and does not imply any element of a contractual relationship. There is no assurance as to the accuracy or completeness of such information and no representation, warranty or undertaking is or purported to be provided as to the accuracy or completeness of such information. Where the Whitepaper or the Website includes information that has been obtained from third party sources, the Company, the Distributor, their respective affiliates and/or the Sipher team have not independently verified the accuracy or completeness of such information. Further, you acknowledge that circumstances may change and that the Whitepaper or the Website may become outdated as a result; and neither the Company nor the Distributor is under any obligation to update or correct this document in connection therewith.",
    },
    {
        level: 0,
        content:
            "Token Documentation: Nothing in the Whitepaper or the Website constitutes any offer by the Company, the Distributor or the Sipher team to sell any $SIPHER (as defined herein) nor shall it or any part of it nor the fact of its presentation form the basis of, or be relied upon in connection with, any contract or investment decision. Nothing contained in the Whitepaper or the Website is or may be relied upon as a promise, representation or undertaking as to the future performance of Sipher. The agreement between the Distributor (or any third party) and you, in relation to any distribution or transfer of $SIPHER, is to be governed only by the separate terms and conditions of such agreement. The information set out in the Whitepaper and the Website is for community discussion only and is not legally binding. No person is bound to enter into any contract or binding legal commitment in relation to the acquisition of $SIPHER, and no virtual currency or other form of payment is to be accepted on the basis of the Whitepaper or the Website. The agreement for distribution of $SIPHER and/or continued holding of $SIPHER shall be governed by a separate set of Terms and Conditions or Token Distribution Agreement (as the case may be) setting out the terms of such distribution and/or continued holding of $SIPHER (the Terms and Conditions), which shall be separately provided to you or made available on the Website. The Terms and Conditions must be read together with the Whitepaper. In the event of any inconsistencies between the Terms and Conditions and the Whitepaper or the Website, the Terms and Conditions shall prevail.",
    },
    {
        level: 0,
        content:
            "Deemed Representations and Warranties: By accessing the Whitepaper or the Website (or any part thereof), you shall be deemed to represent and warrant to the Company, the Distributor, their respective affiliates, and the Sipher team as follows:",
    },
    {
        level: 1,
        content:
            "In any decision to acquire any $SIPHER, you have shall not rely on any statement set out in the Whitepaper or the Website.",
        key: "decision",
    },
    {
        level: 1,
        content:
            "You will and shall at your own expense ensure compliance with all laws, regulatory requirements and restrictions applicable to you (as the case may be)",
        key: "decision",
    },
    {
        level: 1,
        content:
            "You acknowledge, understand and agree that $ SIPHER may have no value, there is no guarantee or representation of value or liquidity for $ SIPHER, and $ SIPHER is not an investment product nor is it intended for any speculative investment whatsoever.",
        key: "decision",
    },
    {
        level: 1,
        content:
            "None of the Company, the Distributor, their respective affiliates, and/or the SIPHER team members shall be responsible for or liable for the value of $ SIPHER, the transferability and/or liquidity of $ SIPHER and/or the availability of any market for $ SIPHER through third parties or otherwise.",
        key: "decision",
    },
    {
        level: 1,
        content:
            "You acknowledge, understand and agree that you are not eligible to participate in the distribution of $ SIPHER if you are a citizen, national, resident (tax or otherwise), domiciliary and/or green card holder of a geographic area or country:",
        key: "decision",
    },
    {
        level: 2,
        content:
            "Where it is likely that the distribution of $ SIPHER would be construed as the sale of a security (howsoever named), financial service or investment product and/or",
        key: "acknowledge",
    },
    {
        level: 2,
        content:
            "Where participation in token distributions is prohibited by applicable law, decree, regulation, treaty, or administrative act (including without limitation the United States of America and the People's Republic of China); and to this effect you agree to provide all such identity verification document when requested in order for the relevant checks to be carried out.",
        key: "acknowledge",
    },
    {
        level: 0,
        content:
            "The Company, the Distributor and the SIPHER team do not and do not purport to make, and hereby disclaims, all representations, warranties or undertaking to any entity or person (including without limitation warranties as to the accuracy, completeness, timeliness or reliability of the contents of the Whitepaper or the Website, or any other materials published by the Company or the Distributor). To the maximum extent permitted by law, the Company, the Distributor, their respective affiliates and service providers shall not be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including, without limitation, any liability arising from default or negligence on the part of any of them, or any loss of revenue, income or profits, and loss of use or data) arising from the use of the Whitepaper or the Website, or any other materials published, or its contents (including without limitation any errors or omissions) or otherwise arising in connection with the same. Prospective acquirors of $SIPHER should carefully consider and evaluate all risks and uncertainties (including financial and legal risks and uncertainties) associated with the distribution of $SIPHER, the Company, the Distributor and the SIPHER team.",
    },
    {
        level: 0,
        content:
            "Token functionalities: $SIPHER is a non-refundable functional utility token which will be used as the medium of exchange between participants on SIPHER. The goal of introducing $SIPHER is to provide a convenient and secure mode of payment and settlement between participants who interact within the ecosystem on SIPHER, and it is not, and not intended to be, a medium of exchange accepted by the public (or a section of the public) as payment for goods or services or for the discharge of a debt; nor is it designed or intended to be used by any person as payment for any goods or services whatsoever that are not exclusively provided by the issuer. $SIPHER does not in any way represent any shareholding, participation, right, title, or interest in the Company, the Distributor, their respective affiliates, or any other company, enterprise or undertaking, nor will $SIPHER entitle token holders to any promise of fees, dividends, revenue, profits or investment returns, and are not intended to constitute securities in Singapore or any relevant jurisdiction. $SIPHER may only be utilised on SIPHER, and ownership of $SIPHER carries no rights, express or implied, other than the right to use $SIPHER as a means to enable usage of and interaction within SIPHER.",
    },
    {
        level: 0,
        content:
            "$SIPHER also provides the economic incentives which will be distributed to encourage users to contribute and maintain the ecosystem on SIPHER, thereby creating a win-win system where every participant is fairly compensated for its efforts. $SIPHER is an integral and indispensable part of SIPHER, because without $SIPHER, there would be no incentive for users to expend resources to participate in activities or provide services for the benefit of the entire ecosystem on SIPHER. Given that additional $SIPHER will be awarded to a user based only on its actual usage, activity and contribution on SIPHER, users of SIPHER and/or holders of $SIPHER which did not actively participate will not receive any $SIPHER incentives.",
    },
    {
        level: 0,
        content:
            "$SIPHER are designed to be utilized, and that is the goal of the $SIPHER distribution. In fact, the project to develop SIPHER would fail if all $SIPHER holders simply held onto their $SIPHER and did nothing with it. In particular, it is highlighted that $SIPHER:",
    },
    {
        level: 1,
        content:
            "Does not have any tangible or physical manifestation, and does not have any intrinsic value (nor does any person make any representation or give any commitment as to its value).",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Is non-refundable and cannot be exchanged for cash (or its equivalent value in any other virtual currency) or any payment obligation by the Company, the Distributor or any of their respective affiliates.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Does not represent or confer on the token holder any right of any form with respect to the Company, the Distributor (or any of their respective affiliates), or its revenues or assets, including without limitation any right to receive future dividends, revenue, shares, ownership right or stake, share or security, any voting, distribution, redemption, liquidation, proprietary (including all forms of intellectual property or licence rights), right to receive accounts, financial statements or other financial data, the right to requisition or participate in shareholder meetings, the right to nominate a director, or other financial or legal rights or equivalent rights, or intellectual property rights or any other form of participation in or relating to SIPHER, the Company, the Distributor and/or their service providers.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Is not intended to represent any rights under a contract for differences or under any other contract the purpose or pretended purpose of which is to secure a profit or avoid a loss.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Is not intended to be a representation of money (including electronic money), security, commodity, bond, debt instrument, unit in a collective investment scheme or any other kind of financial instrument or investment.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Is not a loan to the Company, the Distributor or any of their respective affiliates, is not intended to represent a debt owed by the Company, the Distributor or any of their respective affiliates, and there is no expectation of profit.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "And does not provide the token holder with any ownership or other interest in the Company, the Distributor or any of their respective affiliates.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "Notwithstanding the $SIPHER distribution, users have no economic or legal right over or beneficial interest in the assets of the Company, the Distributor, or any of their affiliates after the token distribution.",
        key: "designed",
    },
    {
        level: 1,
        content:
            "To the extent a secondary market or exchange for trading $SIPHER does develop, it would be run and operated wholly independently of the Company, the Distributor, the distribution of $SIPHER and SIPHER. Neither the Company nor the Distributor will create such secondary markets nor will either entity act as an exchange for $SIPHER.",
        key: "designed",
    },
    {
        level: 0,
        content:
            "Informational purposes only: The information set out herein is only conceptual, and describes the future development goals for SIPHER to be developed. In particular, the project roadmap in the Whitepaper is being shared in order to outline some of the plans of the SIPHER team, and is provided solely for INFORMATIONAL PURPOSES and does not constitute any binding commitment. Please do not rely on this information in deciding whether to participate in the token distribution because ultimately, the development, release, and timing of any products, features or functionality remains at the sole discretion of the Company, the Distributor or their respective affiliates, and is subject to change. Further, the Whitepaper or the Website may be amended or replaced from time to time. There are no obligations to update the Whitepaper or the Website, or to provide recipients with access to any information beyond what is provided herein.",
    },
    {
        level: 0,
        content:
            "Regulatory approval: No regulatory authority has examined or approved, whether formally or informally, of any of the information set out in the Whitepaper or the Website. No such action or assurance has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of the Whitepaper or the Website does not imply that the applicable laws, regulatory requirements or rules have been complied with.",
    },
    {
        level: 0,
        content:
            "Cautionary Note on forward-looking statements: All statements contained herein, statements made in press releases or in any place accessible by the public and oral statements that may be made by the Company, the Distributor and/or the SIPHER team, may constitute forward-looking statements (including statements regarding intent, belief or current expectations with respect to market conditions, business strategy and plans, financial condition, specific provisions and risk management practices). You are cautioned not to place undue reliance on these forward-looking statements given that these statements involve known and unknown risks, uncertainties and other factors that may cause the actual future results to be materially different from that described by such forward-looking statements, and no independent third party has reviewed the reasonableness of any such statements or assumptions. These forward-looking statements are applicable only as of the date indicated in the Whitepaper, and the Company, the Distributor as well as the SIPHER team expressly disclaim any responsibility (whether express or implied) to release any revisions to these forward-looking statements to reflect events after such date.",
    },
    {
        level: 0,
        content:
            "References to companies and platforms: The use of any company and/or platform names or trademarks herein (save for those which relate to the Company, the Distributor or their respective affiliates) does not imply any affiliation with, or endorsement by, any third party. References in the Whitepaper or the Website to specific companies and platforms are for illustrative purposes only.",
    },
    {
        level: 0,
        content:
            "English language: The Whitepaper and the Website may be translated into a language other than English for reference purpose only and in the event of conflict or ambiguity between the English language version and translated versions of the Whitepaper or the Website, the English language versions shall prevail. You acknowledge that you have read and understood the English language version of the Whitepaper and the Website.",
    },
    {
        level: 0,
        content:
            "No Distribution: No part of the Whitepaper or the Website is to be copied, reproduced, distributed or disseminated in any way without the prior written consent of the Company or the Distributor. By attending any presentation on this Whitepaper or by accepting any hard or soft copy of the Whitepaper, you agree to be bound by the foregoing limitations.",
    },
    {
        level: 0,
        content:
            "Risks: You acknowledge and agree that there are numerous risks associated with acquiring $SIPHER, holding $SIPHER, and using $SIPHER for participation in SIPHER. In the worst scenario, this could lead to the loss of all or part of $SIPHER held. IF YOU DECIDE TO ACQUIRE $SIPHER, YOU EXPRESSLY ACKNOWLEDGE, ACCEPT AND ASSUME THE FOLLOWING RISKS:",
    },
    {
        level: 1,
        content:
            "Uncertain Regulations and Enforcement Actions: The regulatory status of $SIPHER and distributed ledger technology is unclear or unsettled in many jurisdictions. The regulation of virtual currencies has become a primary target of regulation in all major countries in the world. It is impossible to predict how, when or whether regulatory agencies may apply existing regulations or create new regulations with respect to such technology and its applications, including $SIPHER and/or SIPHER. Regulatory actions could negatively impact $SIPHER and/or SIPHER in various ways. The Company, the Distributor (or their respective affiliates) may cease operations in a jurisdiction in the event that regulatory actions, or changes to law or regulation, make it illegal to operate in such jurisdiction, or commercially undesirable to obtain the necessary regulatory approval(s) to operate in such jurisdiction. After consulting with a wide range of legal advisors and continuous analysis of the development and legal structure of virtual currencies, a cautious approach will be applied towards the distribution of $SIPHER. Therefore, for the token distribution, the distribution strategy may be constantly adjusted in order to avoid relevant legal risks as much as possible.",
        key: "risks",
    },
    {
        level: 1,
        content:
            "Inadequate disclosure of information: As at the date hereof, SIPHER is still under development and its design concepts, consensus mechanisms, algorithms, codes, and other technical details and parameters may be constantly and frequently updated and changed. Although this whitepaper contains the most current information relating to SIPHER, it is not absolutely complete and may still be adjusted and updated by the SIPHER team from time to time. The SIPHER team has no ability and obligation to keep holders of $SIPHER informed of every detail (including development progress and expected milestones) regarding the project to develop SIPHER, hence insufficient information disclosure is inevitable and reasonable.",
        key: "risks",
    },
    {
        level: 1,
        content:
            "Competitors: Various types of decentralised applications and networks are emerging at a rapid rate, and the industry is increasingly competitive. It is possible that alternative networks could be established that utilise the same or similar code and protocol underlying $SIPHER and/or SIPHER and attempt to re-create similar facilities. SIPHER may be required to compete with these alternative networks, which could negatively impact $SIPHER and/or SIPHER.",
        key: "risks",
    },
    {
        level: 1,
        content:
            "Failure to develop: There is the risk that the development of SIPHER will not be executed or implemented as planned, for a variety of reasons, including without limitation the event of a decline in the prices of any digital asset, virtual currency or $SIPHER, unforeseen technical difficulties, and shortage of development funds for activities.",
        key: "risks",
    },
    {
        level: 1,
        content:
            "Security weaknesses: Hackers or other malicious groups or organisations may attempt to interfere with $SIPHER and/or SIPHER in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing. Furthermore, there is a risk that a third party or a member of the Company, the Distributor or their respective affiliates may intentionally or unintentionally introduce weaknesses into the core infrastructure of $SIPHER and/or SIPHER, which could negatively affect $SIPHER and/or SIPHER. Further, the future of cryptography and security innovations are highly unpredictable and advances in cryptography, or technical advances (including without limitation development of quantum computing), could present unknown risks to $SIPHER and/or SIPHER by rendering ineffective the cryptographic consensus mechanism that underpins that blockchain protocol.",
        key: "risks",
    },
    {
        level: 1,
        content:
            "Other risks: In addition, the potential risks briefly mentioned above are not exhaustive and there are other risks (as more particularly set out in the Terms and Conditions) associated with your acquisition of, holding and use of $SIPHER, including those that the Company or the Distributor cannot anticipate. Such risks may further materialize as unanticipated variations or combinations of the aforementioned risks. You should conduct full due diligence on the Company, the Distributor, their respective affiliates, and the SIPHER team, as well as understand the overall framework, mission and vision for SIPHER prior to acquiring $SIPHER.",
        key: "risks",
    },
]

export type PrivacyPolicyItem = {
    level: number
    content: string
    text?: string[]
    key?: string
}

export const privacyPolicies: PrivacyPolicyItem[] = [
    {
        level: 0,
        content:
            "We recognize our responsibilities in relation to the collection, holding, processing, use and/or transfer of personal data. Your privacy is of utmost importance to us. This policy (the Policy) outlines how we collect, use, store and disclose your personal data. Please take a moment to read about how we collect, use and/or disclose your personal data so that you know and understand the purposes for which we may collect, use and/or disclose your personal data.",
    },
    {
        level: 0,
        content:
            "By accessing the website at www.sipher.xyz (the Website), you agree and consent to SIPHER SJC Limited (the Company), its related corporations, business units and affiliates, as well as their respective representatives and/or agents (collectively referred to herein as “SIPHER”, “us”, “we” or “our”), collecting, using, disclosing and sharing amongst themselves the personal data, and to disclosing such personal data to relevant third party providers.",
    },
    {
        level: 0,
        content:
            "This Policy supplements but does not supersede nor replace any other consent which you may have previously provided to us nor does it affect any rights that we may have at law in connection with the collection, use and/or disclosure of your personal data. We may from time to time update this Policy to ensure that this Policy is consistent with our future developments, industry trends and/or any changes in legal or regulatory requirements. Subject to your rights at law, the prevailing terms of this Policy shall apply.",
    },
    {
        level: 0,
        content:
            "For the avoidance of doubt, this Policy forms part of the terms and conditions governing your relationship with us and should be read in conjunction with such terms and conditions. The security of your personal data is important to us. At each stage of data collection, use and disclosure, SIPHER has in place physical, electronic, administrative and procedural safeguards to protect the personal data stored with us.",
    },
    {
        level: 0,
        content:
            "However, do note that no transmission of personal data over the internet can be guaranteed to be 100% secure – accordingly and despite our efforts, SIPHER cannot guarantee or warrant the security of any information you transmit to us, or to or from our online services. SIPHER shall not have any responsibility or liability for the security of information transmitted via the internet.",
    },
    {
        level: 0,
        content:
            "This Policy describes how SIPHER may collect, use, disclose, process and manage your personal data, and applies to any individual’s personal data which is in our possession or under our control.",
    },
    {
        level: 1,
        content: "What personal data is collected by SIPHER",
        text: [
            '"Personal data" means data, whether true or not, about an individual who can be identified (i) from that data, or (ii) from that data and other information to which the organization has or is likely to have access. Some examples of personal data that SIPHER may collect are:',
        ],
        key: "policy",
    },
    {
        level: 2,
        content:
            "Personal particulars (e.g. name, contact details, residential address, date of birth, identity card/passport details, social media handles and other social media profile information, and/or education details).",
        key: "personal",
    },
    {
        level: 2,
        content: "Financial details (e.g. income, expenses, credit history and/or credit card and bank information).",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Images and voice recordings of our conversations with you, whether from our events or office surveillances or otherwise.",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Work experience and employment details (e.g. occupation, directorships and other positions held, employment history, salary, and/or benefits).",
        key: "personal",
    },
    {
        level: 2,
        content: "Tax and insurance information.",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Information about your risk profile, investments, investment objectives, knowledge and experience and/or business interests and assets.",
        key: "personal",
    },
    {
        level: 2,
        content: "Information about your use of our services and Website.",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Usernames and password, third party account credentials (such as your Facebook login credentials, Google login credentials) and IP address.",
        key: "personal",
    },
    {
        level: 2,
        content: "Banking information (e.g. account numbers and banking transactions).",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Private or public cryptographic key relating to addresses on distributed ledger networks and/or similar information.",
        key: "personal",
    },
    {
        level: 2,
        content: "And/or personal opinions made known to us (e.g. feedback or responses to surveys).",
        key: "personal",
    },
    {
        level: 2,
        content:
            "Personal data may be collected when you interact with our services or use the Website, or may be received by SIPHER from third-party databases or service providers that provide business information.",
        key: "personal",
    },
    {
        level: 1,
        content: "Purposes for collection, use and disclosure of your personal data",
        text: [
            "SIPHER may collect, use and/or disclose your personal data for its business purposes, including operations for these purposes. These may include, without limitation, the following:",
        ],
        key: "policy",
    },
    {
        level: 2,
        content:
            "Developing and providing facilities, products or services (whether made available by us or through us), including but not limited to:",
        key: "purposes",
    },
    {
        level: 2,
        content: "Sale of digital tokens or virtual currencies.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Acting as intermediaries through any blockchain, network or platform developed or managed by us.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Recording and/or encryption on any blockchain, network or platform developed or managed by us.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Promoting advertisements or marketing material, whether from us or third parties.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Various products and/or services (whether digital or not, and whether provided through an external service provider or otherwise).",
        key: "purposes",
    },
    {
        level: 2,
        content: "Providing, managing or accessing digital wallets for holding digital assets.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Making payments for participation in any blockchain, network or platform developed or managed by us (as applicable).",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Services for purchasing, trading, managing, staking, locking, creating, minting and/or holding of digital assets.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Various products and/or services related to digital assets.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Any escrow, courier, anti-counterfeiting or dispute resolution services.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Transactions and clearing or reporting on these transactions.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Carrying out research, planning and statistical analysis.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "And/or analytics for the purposes of developing or improving our products, services, security, service quality, staff training, and advertising strategies.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Assessing and processing applications, instructions, transactions, or requests from you or our customers.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Communicating with you, including providing you with updates on changes to products, services and banking facilities (whether made available by us or through us) including any additions, expansions, suspensions and replacements of or to such products, services and banking facilities and their terms and conditions.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Managing our infrastructure and business operations and complying with internal policies and procedures.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Cesponding to queries or feedback.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Addressing or investigating any complaints, claims or disputes.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Verifying your identity for the purposes of providing facilities, products or services, which would require comparison of your personal information against third party databases and/or provision of such information to third party service providers.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Conducting credit checks, screenings or due diligence checks as may be required under applicable law, regulation or directive.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Complying with all applicable laws, regulations, rules, directives, orders, instructions and requests from any local or foreign authorities, including regulatory, governmental, tax and law enforcement authorities or other authorities.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Enforcing obligations owed to us.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Monitoring products and services provided by or made available through us.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Complying with obligations and requirements imposed by us from time to time by any credit bureau or credit information sharing services of which we are a member or subscriber.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Creating and maintaining credit and risk related models.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Financial reporting, regulatory reporting, management reporting, risk management (including monitoring credit exposures, preventing, detecting and investigating crime, including fraud and any form of financial crime), audit and record keeping purposes.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "Enabling any actual or proposed assignee or transferee, participant or sub-participant of SIPHER's rights or obligations to evaluate any proposed transaction.",
        key: "purposes",
    },
    {
        level: 2,
        content: "Enforcing obligations owed to us.",
        key: "purposes",
    },
    {
        level: 2,
        content: "And/or seeking professional advice, including legal or tax advice.",
        key: "purposes",
    },
    {
        level: 2,
        content:
            "We may also use personal data for purposes set out in the terms and conditions that govern our relationship with you or our customer.",
        key: "purposes",
    },
    {
        level: 1,
        content: "Purposes for collection, use and disclosure of your personal data",
        text: [
            "SIPHER may collect, use and/or disclose your personal data for its business purposes, including operations for these purposes. These may include, without limitation, the following:",
        ],
        key: "policy",
    },
    {
        level: 2,
        content:
            "Developing and providing facilities, products or services (whether made available by us or through us), including but not limited to:",
        key: "collection",
    },
    {
        level: 2,
        content: "Sale of digital tokens or virtual currencies.",
        key: "collection",
    },
    {
        level: 2,
        content: "Acting as intermediaries through any blockchain, network or platform developed or managed by us.",
        key: "collection",
    },
    {
        level: 2,
        content: "Recording and/or encryption on any blockchain, network or platform developed or managed by us.",
        key: "collection",
    },
    {
        level: 2,
        content: "Promoting advertisements or marketing material, whether from us or third parties.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Various products and/or services (whether digital or not, and whether provided through an external service provider or otherwise).",
        key: "collection",
    },
    {
        level: 2,
        content: "Providing, managing or accessing digital wallets for holding digital assets.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Making payments for participation in any blockchain, network or platform developed or managed by us (as applicable).",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Services for purchasing, trading, managing, staking, locking, creating, minting and/or holding of digital assets.",
        key: "collection",
    },
    {
        level: 2,
        content: "Various products and/or services related to digital assets.",
        key: "collection",
    },
    {
        level: 2,
        content: "Any escrow, courier, anti-counterfeiting or dispute resolution services.",
        key: "collection",
    },
    {
        level: 2,
        content: "Transactions and clearing or reporting on these transactions.",
        key: "collection",
    },
    {
        level: 2,
        content: "Carrying out research, planning and statistical analysis.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "And/or analytics for the purposes of developing or improving our products, services, security, service quality, staff training, and advertising strategies.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Assessing and processing applications, instructions, transactions, or requests from you or our customers.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Communicating with you, including providing you with updates on changes to products, services and banking facilities (whether made available by us or through us) including any additions, expansions, suspensions and replacements of or to such products, services and banking facilities and their terms and conditions.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Managing our infrastructure and business operations and complying with internal policies and procedures.",
        key: "collection",
    },
    {
        level: 2,
        content: "Cesponding to queries or feedback.",
        key: "collection",
    },
    {
        level: 2,
        content: "Addressing or investigating any complaints, claims or disputes.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Verifying your identity for the purposes of providing facilities, products or services, which would require comparison of your personal information against third party databases and/or provision of such information to third party service providers.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Conducting credit checks, screenings or due diligence checks as may be required under applicable law, regulation or directive.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Complying with all applicable laws, regulations, rules, directives, orders, instructions and requests from any local or foreign authorities, including regulatory, governmental, tax and law enforcement authorities or other authorities.",
        key: "collection",
    },
    {
        level: 2,
        content: "Enforcing obligations owed to us.",
        key: "collection",
    },
    {
        level: 2,
        content: "Monitoring products and services provided by or made available through us.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Complying with obligations and requirements imposed by us from time to time by any credit bureau or credit information sharing services of which we are a member or subscriber.",
        key: "collection",
    },
    {
        level: 2,
        content: "Creating and maintaining credit and risk related models.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Financial reporting, regulatory reporting, management reporting, risk management (including monitoring credit exposures, preventing, detecting and investigating crime, including fraud and any form of financial crime), audit and record keeping purposes.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "Enabling any actual or proposed assignee or transferee, participant or sub-participant of SIPHER's rights or obligations to evaluate any proposed transaction.",
        key: "collection",
    },
    {
        level: 2,
        content: "Enforcing obligations owed to us.",
        key: "collection",
    },
    {
        level: 2,
        content: "And/or seeking professional advice, including legal or tax advice.",
        key: "collection",
    },
    {
        level: 2,
        content:
            "We may also use personal data for purposes set out in the terms and conditions that govern our relationship with you or our customer.",
        key: "collection",
    },
    {
        level: 1,
        content: "Use of personal data for marketing purposes",
        text: [
            "We may use your personal data to offer you products or services, including special offers, promotions, contests or entitlements that may be of interest to you or for which you may be eligible. Such marketing messages may be sent to you in various modes including but not limited to electronic mail, direct mailers, short message service, telephone calls, facsimile and other mobile messaging services. In doing so, we will comply with all applicable data protection and privacy laws.",
            "You may at any time request that we stop contacting you for marketing purposes via selected or all modes. To find out more on how you can change the way we use your personal data for marketing purposes, please contact us. Nothing in this section shall vary or supersede the terms and conditions that govern our relationship with you.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Disclosure and sharing of personal data",
        text: [
            "We may from time to time and in compliance with all applicable laws on data privacy, disclose your personal data to any personnel of SIPHER or to third parties (including without limitation banks, financial institutions, credit card companies, credit bureaus and their respective service providers, companies providing services relating to insurance and/or reinsurance to us, and associations of insurance companies, agents, contractors or third party service providers who provide services to us such as telecommunications, information technology, payment, data processing, storage and archival, and our professional advisers such as our auditors and lawyers, and regulators and authorities), located in any jurisdiction, in order to carry out the purposes set out above. Please be assured that when we disclose your personal data to such parties, we require them to ensure that any personal data disclosed to them are kept confidential and secure.",
            "For more information about the third parties with whom we share your personal data, you may, where appropriate, wish to refer to the agreement(s) and/or terms and conditions that govern our relationship with you or our customer. You may also contact us for more information (please see section 1.9 below).",
            "We wish to emphasize that SIPHER does not sell personal data to any third parties and we shall remain fully compliant of any duty or obligation of confidentiality imposed on us under the applicable agreement(s) and/or terms and conditions that govern our relationship with you or our customer or any applicable law.",
            "You are responsible for ensuring that the personal data you provide to us is accurate, complete, and not misleading and that such personal data is kept up to date. You acknowledge that failure on your part to do so may result in our inability to provide you with the products and services you have requested. To update your personal data, please contact us (please see section XI below for contact details). Where you provide us with personal data concerning individuals other than yourself, you are responsible for obtaining all legally required consents from the concerned individuals and you shall retain proof of such consent(s), such proof to be provided to us upon our request.",
            "We may transfer, store, process and/or deal with your personal data in any jurisdiction. In doing so, we will comply with all applicable data protection and privacy laws.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Other web sites",
        text: [
            "Our websites may contain links to other websites which are not maintained by SIPHER. This Policy only applies to the websites of SIPHER. When visiting these third party websites, you should read their privacy policies which will apply to your use of such websites.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Retention of personal data",
        text: [
            "Your personal data is retained as long as the purpose for which it was collected remains and until it is no longer necessary for any legal or business purposes.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Queries, Access/ Correction Requests and Withdrawal of Consent",
        text: ["If you:"],
        key: "policy",
    },
    {
        level: 2,
        content: "Have queries about our data protection processes and practices.",
        key: "queries",
    },
    {
        level: 2,
        content:
            "Wish to request access to and/or make corrections to your personal data in our possession or under our control.",
        key: "queries",
    },
    {
        level: 2,
        content: "Or wish to withdraw your consent to our collection, use or disclosure of your personal data.",
        key: "queries",
    },
    {
        level: 2,
        content:
            "Please submit a written request (with supporting documents, (if any) to our Compliance Officer at: Woof@sipher.xyz. Our Compliance Officer shall endeavor to respond to you within 30 days of your submission. Please note that if you withdraw your consent to any or all use or disclosure of your personal data, depending on the nature of your request, we may not be in a position to continue to provide our services or products to you or administer any contractual relationship in place. Such withdrawal may also result in the termination of any agreement you may have with us. Our legal rights and remedies are expressly reserved in such event. We may charge you a fee for processing your request for access. Such a fee depends on the nature and complexity of your access request. Information on the processing fee will be made available to you.",
        key: "queries",
    },
    {
        level: 1,
        content: "Contact information",
        text: [
            "To contact us on any aspect of this Policy or your personal data or to provide any feedback that you may have, please contact our Compliance Officer at Woof@sipher.xyz.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Governing Law and Jurisdiction",
        key: "policy",
    },
    {
        level: 2,
        content:
            "This Policy and your use of the Website shall be governed and construed in accordance with the laws of Singapore. You agree to submit to the exclusive jurisdiction of the Singapore courts.",
        key: "governing",
    },
    {
        level: 2,
        content:
            "A printed version of these Terms and any notice given in electronic form shall be admissible in judicial or administrative proceedings based on or relating to the Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. You and Sipher agree that any cause of action arising out of or related to the App must commence within 06 months after the cause of action arose; otherwise, such cause of action is permanently barred.",
        key: "governing",
    },
    {
        level: 1,
        content: "Amendments and updates to SIPHER Privacy Policy",
        text: [
            "We reserve the right to amend this Policy from time to time to ensure that this Policy is consistent with any developments to the way SIPHER uses your personal data or any changes to the laws and regulations applicable to SIPHER. We will make available the updated Policy on the Website. You are encouraged to visit the Website from time to time to ensure that you are well informed of our latest policies in relation to personal data protection. All communications, transactions and dealings with us shall be subject to the latest version of this Policy in force at the time.",
        ],
        key: "policy",
    },
    {
        level: 1,
        content: "Your acceptance of these terms",
        text: [
            "This Policy applies in conjunction with any other notices, contractual clauses and consent clauses that apply in relation to the collection, use and disclosure of your personal data by us. We may revise this Policy from time to time without any prior notice. You may determine if any such revision has taken place by referring to the date on which this Policy was last updated.",
            "By using the Website and/or any services provided by SIPHER, you signify your acceptance of this Policy and terms of service. If you do not agree to this Policy or terms of service, please do not use the Website or any services provided by SIPHER. Your continued use of the Website following the posting of changes to this Policy will be deemed your acceptance of those changes.",
        ],
        key: "policy",
    },
]
