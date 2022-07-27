
`renderFromFormData`

```javascript

function(formData) {

    for (const [key, value] of formData) {

        if (value.length == 0) {
        formData.delete(key);
        continue
        }

        formData.delete(key);

        let selected_input = null;
        let inputs = document.querySelectorAll(`${selectors.tagsForm} input[name="${key}"]`);
        const selects = {
        'default': "filter.v.",
        'option': "filter.v.option.",
        'metafield': "filter.p."
        }

        inputs.forEach(input => {
        if (input.value === value) {
            selected_input = input;
        }
        })

        let filterType = selected_input.dataset['filterType'];
        formData.set(`${selects[filterType]}${selected_input.name}`, value);
    }

    const searchParams = new URLSearchParams(formData);
    this.renderCollectionPage(searchParams);
}
```



At this website, we try our level best to create a space for our customers to explore and shop the favorite things safely. So, here’s our terms and conditions that have been framed keeping you in mind. If you have mentioned your mail id in your details then we will notify you as soon as possible for the receipt confirmation and for processing your order.

CREDIT CARD DETAILS
You agree, understand, and then confirm that the details regarding the credit card that are provided by you for availing the services on the site will be correct and exact. You agree and undertake to give the true and valid credit card details when making the payment online.

FRAUD OR DECLINED TRANSACTIONS
We reserve the right for initiating the legal proceedings against any kind of fraud regarding payment details or regarding any kind of wrong information in breach of our terms and conditions. We, as the merchant shall not be under any liability in case of any kind of loss or damage that arises directly or indirectly out of declination of any transactional authorization.

CONDITIONS FOR CUSTOMER CHAT SUPPORT

    We may suspend the live support service at any point of time without prior notice.
    We are not responsible for any kind of delay in replying to the queries via the chat.
    The communication through chat is always stored for reference. The customers can never get the right to access this later on.
    While chatting you are strictly prohibited from using any kind of abusive words, threatening, or obscene information.
    The chat room cannot be used for selling the products or advising on any type of business opportunities or any other solicitations.
    You may continue the chat with our customer care executive only if you agree to our terms and conditions.

REVIEWS, SUBMISSIONS AND FEEDBACK
All the reviews, feedback and the submissions related to the products are the properties of the site. We own exclusively all such rights, interests, comments, and titles. You must agree to the point that you will never submit any such comment that can violate our policy or any right of third party including trademark, privacy, and copyright. None of your comments should contain libelous, unlawful, or any commercial solicitations.

COPYRIGHTS & TRADEMARK
All rights reserved. All other trademarks, product names, images, logos appearing and company names on our site are protected. The custom graphics, and the button icons are the service marks or the trademarks of our website.

SITE SECURITY
You are strictly prohibited from violating or attempting to infringe the security of the website including

    Without any restriction accessing the data that is not intended for you or logging onto an unauthorized server or account.
    Attempting to scan, probe or test the vulnerability of the system or to contravene the security without proper authorization.
    Attempting to hinder with the services, host name, or network by submitting a virus to the website.

LIABILITY
Information on this site is provided ‘As Is’ without warranty of any kind either implied or express, including but not restricted to the implied warranties of merchant ability, the fitness for a specific purpose or non-encroachment.

Information on this site may contain a few technical inaccuracies or some topographical faults. The information may be altered or modified without any notice. We may make improvements and changes in the products or services at any point of time. The inclusion of any links does not entail endorsement of the website.

DISCLAIMER
The website does not warrant the exactness or completeness of the materials or the steadfastness of any kind of advice, statement, opinion, or the other information distributed via the website. You have to concede that any kind of reliance on such advises or opinions shall be at your sole risk. The site reserves the right, in its own discretion for correcting any mistakes in any portion of the website. Some jurisdictions do not allow the barring of the obscure warranties.
