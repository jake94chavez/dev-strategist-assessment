# Web Developer & Strategist Candidate Assignment
This is an assessment to recreate a landing page based on mockups provided via Figma.  
Only desktop designs were given, so the mobile layout was created by myself in the spirit of the Desktop layout.

## Preview and Approach
The preview can be visited [here](https://dev-strategist-assessment.vercel.app/).  
Published using Vercel.  

### Process & Steps
1. I created a repo with a simple file structure.
2. After the repo was created, I created a [Trello Board](https://trello.com/b/c8DJBVae/rr-landing-page) for personal use to track my progress, tagging tasks based on whether they were required, and their priority level<sup>*</sup>.
3. Opening the Figma file, I realized I didn't have access to the Dev Mode, so I reached out to the file provider for team access, so I could take advantage of Dev Mode's features.
4. Simple HTML sections were added with classes for future use in order to get the basic structure onto the page, and some sanity checks were performed to make sure the `.css` and `.js` files were working accordingly.
5. Proper development began and I alloted my time according to my availability. Typically I would start with more difficult sections, but for this project I chose which sections to work on based on my time allowance.
6. Section layouts and styles were done independently from each other for organization. Each section got its own branch in this repo and also its own `.css` file. These were imported into the main `styles.css` file. This organization of the css files allowed me to quickly navigate the styles when I was working on a section without being distracted by the styles from other sections.
7. After all page sections were completed, I installed the Meta Pixel and Google Tag Manager snippets.
8. Once installed, I verified they were working using the chrome extensions provided by Meta and Google.
9. From there, my focus shifted to [A/B testing](#ab-testing), discussed below.
10. After A/B Testing, I refocused on the page for QA and device testing. I did some lite QA throughout the development of this page, which is my usual process, but because I worked on this solo, I decided to give it an additional thorough pass.

> [!NOTE]
> I took some liberties with functionality and animations. I have the hero Shop Now button scroll to the product section, rather than go to the Product Page. I believe this could increase users scrolling to the product section, and has potential to increase Add to Carts from this page rather than adding a friction point by going to the Product Page. I also implemented smooth scrolling for in-page links.  
> I added an animation to the FAQ accordions as well, for a better user experience.  
> These could easily changed or adjusted if we don't think it's working.

  <sup>*In this case, I labelled most required tasks with a high or medium priority. Normally I would avoid this because it doesn't provide clarity, but in the case of this page all sections are part of the MVP, so I used "priority" as a way to track which sections would take more or less time to complete so I could manage my time efficiently.</sup>

## Analytics Tracking
This project contains a meta pixel snippet and a google tag manager snippet for tracking.  
To verify that these tracking snippets are working, I've used the __Meta Pixel Helper__ and __Google Tag Assistant__ extensions for Google Chrome.  
Additionally, I've used the debug mode tool in Google Tag Manager to verify all events that happen.

### Meta Pixel
The Meta Pixel tracks Lead and PageView events on load.  
The Pixel snippet doesn't have a Pixel ID associated with the init function, so these events aren't sent anywhere.

### Google Analytics
Google Analytics is set up through Google Tag Manager.  
Page Views are tracked automatically, and a custom event has been set up to track clicks of the "Shop Now" buttons.

## A/B Testing
Given that the only metric I've been provided with is a high bounce rate, I've come up with a few hypotheses for different scenarios.  
In all cases, The initial layout would be the control, and variations would be created. If there is a clear winner, the winning layout would become the new control. These A/B tests could be created in different A/B testing tools, but VWO and Optimizely both integrate with Shopify and GA4, making them ideal choices. If we don't already have a preference for an A/B testing tool, I can weigh the pros, cons, and pricing of each to determine which would be best for our use case.   
My preffered method of deciding a winner, would be to use two-sample t-tests, to determine if the difference between the two samples is actually statistically significant.

$t_{\widehat{\beta}}=\frac{\widehat{\beta}-\beta_{0}}{\mathrm{SE}(\widehat{\beta})}$
### Hypotheses
> [!NOTE]
> The following hypotheses are in no particular order, I just came up with more than one.

#### Hypothesis 1
__H<sub>⍺</sub>__: Mobile users load the page and mostly see text. By showing product on top first, with the reviews and heading peaking, users will be more inclined to scroll.  

__Structure__: I would create a variation where the image shows first on mobile.  

__Analytics__: In Google Analytics, I would set up more granular scroll depth triggers (by default GA4's automatic scroll tracking only tracks when someone scrolls 90% of the page). Filtering out desktop users in reports, I would look to see if mobile users are scrolling further (and converting more) with this variation.

#### Hypothesis 2
__H<sub>⍺</sub>__: The "Featured In" section doesn't add as much value as the Marquee.  

__Structure__: I would create a variation where we swapped the positions of the Marquee and "Featured In" sections.  

__Analytics__: In Google Analytics I would create funnel explorations to compare if more users are moving through the checkout process.  
Because swapping these sections changes scroll depth more for mobile users than desktop users, I would want to track these separately again. If the variation is successful on mobile and unsuccessful on desktop (or vice versa), it is possible to swap the sections indepently, so mobile and desktop may differ in order.

#### Hypothesis 3a
__H<sub>⍺</sub>__: The "Shop Now" language on links to the product page is confusing because there's already add to cart buttons.  

__Structure__: I would create a variation where the language of "Shop Now" buttons is changed to "Learn More". While "Learn More" can be vague, this landing page is likely a user's introduction to the product, so encouraging them to "Learn More" feels less like a commitment than "Shop Now". Additionaly, "Learn More" typically performs better when paired with more direct CTAs (like the buy buttons above the current "Shop Now"). If a user isn't ready to commit to buying, "Shop Now" just seems like another path to purchase, whereas "Learn More" makes a user that is interested but unsure more inclined to click.  

__Analytics__: In Google Analytics I would simply watch the bounce rate of the control and the variation to determine if the new CTA is reducing the bounce rate.

#### Hypothesis 3b
__H<sub>⍺</sub>__: The "Shop Now" language on links to the product page is confusing because there's already add to cart buttons.  

__Structure__: As an alternative to the above hypothesis (if we don't like learn more) some other action-oriented CTAs, like "Discover", could be tested.  

__Analytics__: Again, in Google Analytics I would simply watch the bounce rate of the control and the variation to determine if the new CTA is reducing the bounce rate.

#### Hypothesis 4

__H<sub>⍺</sub>__: Users want to see more value before continuing to the product page, or converting.

__Structure__: I would create a variation with an added section for Testimonials, using real reviews to add value. This could be a carousel placed below the product section.

__Analytics__: I would watch the bounce rates of users that see the testimonials against users that don't. In order to determine if a user sees the destimonials, I could create scroll depth triggers, like in the first hypothesis, or I could create a custom event for interacting with the new Testimonial carousel, either by swiping though them, or by clicking arrows to cycle through the carousel.

### Additional Thoughts
I don't like the idea that the bounce rate can't be improved, I think the above hypotheses (or maybe others) could all improve bounce rate. That being said, if the bounce rate doesn't see significant improvement, I would want to add a popup for email signup on page load, or when mousing out of the window. By doing this, even with an unfavorable bounce rate, we could capitalize on the traffic by collecting emails for remarketing efforts. Potentially users could receive a small discount with email signup, encouraging revisiting the site, or even converting right after signing up.  

__Analytics__: In Google Analytics, I would track form submissions to see how many users are filling out forms before bouncing, or before continuing through the product flow, to determine if the signups improve the bounce rate.  

