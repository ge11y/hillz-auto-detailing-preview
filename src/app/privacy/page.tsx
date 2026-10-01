import type { Metadata } from "next";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice | Hillz Auto Detailing",
  description: "Hillz Auto Detailing LLC Privacy Notice",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="bg-ink text-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-sm text-muted mb-2">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <span>Privacy</span>
            </p>
            <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wide leading-tight">
              Privacy Notice
            </h1>
          </div>
        </section>
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 space-y-5 text-chrome/90 text-[15px] leading-relaxed">
            <p>At Hillz Auto Detailing LLC (“we,” or “us”), we value the privacy of individuals who use our websites and related services (collectively, our “Services”). This Privacy Notice explains how we collect, use, and share the personal information of users of our Services (“users,” “you,” or “your”). By using our Services, you agree to the collection, use, disclosure, and processing of your information as described by this Privacy Notice.</p>
            <p>Personal information is information that identifies or could be used to identify a specific person. Personal information does not include deidentified information (anonymized or pseudonymized) or aggregated information derived from personal information.</p>
            <p>We may collect a variety of personal information and other information about you or your devices from various sources, as described below.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Information You Provide to Us</h2>
            <p><strong>Registration Information.</strong> If you sign up for an account, register to use our Services, or sign up for emails or other updates, we may ask you for basic contact information, such as your name, email address, phone number, and/or mailing address. We may also collect certain demographic information when you register for our Services, including your age, gender, personal interests, income, and/or marital status.</p>
            <p><strong>Communications.</strong> If you contact us directly, we may collect additional information from you. For example, when you reach out to our customer support team, we may ask for your name, email address, mailing address, phone number, or other contact information so that we can verify your identity and communicate with you. We may also store the contents of any message or attachments that you send to us, as well as any information you submit through any of our forms or questionnaires.</p>
            <p><strong>Events.</strong> If you register for an event that we host, whether in-person or online, we may collect relevant information such as your name, address, title, company, phone number, or email address, as well as specific information relevant to the event for which you are registering.</p>
            <p><strong>User Content.</strong> We may allow you and other Users of our Services to share their own content with others. This may include posts, comments, reviews, or other User-generated content. Unless otherwise noted when creating such content, this information may be shared publicly through our Services.</p>
            <p><strong>Payment Information.</strong> If you make a purchase through our Services, we (or a third-party payment processor acting on our behalf) may collect your payment-related information, such as credit card or other financial information.</p>
            <p><strong>Job Applications.</strong> If you apply for a job with us, we may collect relevant information such as your name, phone number, email address, position, job history, education history, references, a cover letter, and other similar information.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Information We Collect Automatically When You Use Our Services</h2>
            <p><strong>Device Information.</strong> We may collect information about the devices and software you use to access our Services, such as your IP address, web browser type, operating system version, device identifiers, and other similar information.</p>
            <p><strong>Usage Information.</strong> To help us understand how you use our Services and to help us improve them, we may collect data about your interactions with our Services. This includes, but is not limited to, information such as crash reports, session lengths and times, the specific pages and other content you view, and any searches you conduct on our site.</p>
            <p><strong>Cookies and Similar Technologies.</strong> We and our third-party partners may collect information using cookies, pixel tags, or similar technologies. Cookies are small text files containing a string of alphanumeric characters. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to our Services.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Information We Receive from Other Sources</h2>
            <p>We may receive information about you from other sources, including third parties that help us update, expand, and analyze our records, identify new customers, or detect or prevent fraud. What information we receive from third parties is governed by the privacy settings, policies, and/or procedures of the relevant organizations, and we encourage you to review them.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">How We Use the Information We Collect</h2>
            <p>We may use the information we collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, improve, and enhance our Services;</li>
              <li>To understand and analyze how you use our Services and develop new products, services, features, and functionality;</li>
              <li>To facilitate purchases of products or services that you order;</li>
              <li>To host events;</li>
              <li>To allow you to share content with other Users of our Services;</li>
              <li>To evaluate and process applications for jobs with us;</li>
              <li>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide User support;</li>
              <li>For marketing and advertising purposes, including developing and providing promotional and advertising materials that may be relevant, valuable or otherwise of interest to you;</li>
              <li>To detect and prevent fraud, and respond to trust and safety issues that may arise;</li>
              <li>In connection with generative AI applications;</li>
              <li>For compliance purposes, including enforcing our Terms of Use or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and</li>
              <li>For other purposes for which we provide specific notice at the time the information is collected.</li>
            </ul>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">How We Share the Information We Collect</h2>
            <p><strong>Service Providers.</strong> We may share any information we collect with service providers retained in connection with the provision of our Services. These companies are permitted to use this information to help us provide our Services to improve the services they provide us, and for other purposes disclosed in this Privacy Notice.</p>
            <p><strong>Our Affiliates and Representatives.</strong> We may share your information with our affiliates, subsidiaries, and representatives as needed to provide our Services.</p>
            <p><strong>Other Users.</strong> Content you post on our websites, including comments, may be displayed to other Users as appropriate.</p>
            <p><strong>Our Advertising and Analytics Partners.</strong> We work with our Service Providers and other analytics and/or advertising partners to collect and process certain analytics data regarding your use of our Services and to conduct advertising via cookies, as detailed below. Our Service Providers and other analytics and/or advertising partners may also collect information about your use of other websites, apps, and online resources. Parties that may process your information for advertising and analytics purposes include our Service Providers and may also include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google — We may use Google’s services to collect and process analytics data about how our Users interact with our Services and to place ads that we think may interest Users and potential users. For more information, see Google’s Privacy &amp; Terms (<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://policies.google.com/technologies/partner-sites</a>) page.</li>
              <li>Meta — We may use Meta’s services to place ads that we think may interest our users and potential users across Meta’s various websites, such as Facebook and Instagram. For more information, see Meta’s Data Policy (<a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.facebook.com/policy.php</a>) and Privacy Center (<a href="https://www.facebook.com/about/basics/advertising" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.facebook.com/about/basics/advertising</a>).</li>
              <li>LinkedIn — We may use LinkedIn’s services to place ads that we think may interest our users and potential users, as well as to advertise openings to potential employees. For more information, see LinkedIn’s Privacy Policy (<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.linkedin.com/legal/privacy-policy</a>) and Cookie Policy (<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.linkedin.com/legal/cookie-policy</a>).</li>
              <li>Microsoft — We may use Microsoft’s services to place ads that we think may interest our users and potential users. For more information, see Microsoft’s Advertising Policies (<a href="https://help.ads.microsoft.com/apex/index/3/en/52023" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://help.ads.microsoft.com/apex/index/3/en/52023</a>).</li>
            </ul>
            <p>Please note that our Service Providers and advertising and analytics partners may change from time to time. If you would like a current list of the specific parties we are working with to provide analytics and/or advertising services, contact us at <a href="mailto:hillzautodetailing@gmail.com" className="text-race hover:underline">hillzautodetailing@gmail.com</a>. For details about your choices regarding how these partners use your information, see the Your Choices section below.</p>
            <p><strong>As Required by Law and Similar Disclosures.</strong> We may access, preserve, and disclose your information if we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others’ rights, property, or safety. In particular, we may disclose relevant information to the appropriate third parties if you post any illegal, threatening, or objectionable content on or through the Services.</p>
            <p><strong>Events.</strong> We may share your information with event partners or co-sponsors to facilitate the events for which you register.</p>
            <p><strong>Merger, Sale, or Other Asset Transfers.</strong> We may transfer your information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or in which we sell, liquidate, or transfer all or a portion of our assets. The use of your information following any of these events will be governed by the same general provisions of this Privacy Notice.</p>
            <p><strong>Consent.</strong> We may also disclose your information with your permission.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Your Choices</h2>
            <p><strong>Our Communications.</strong> From time to time, you may receive marketing or other informational email messages from us. You can unsubscribe from our promotional and informational emails via the link provided in the emails. After opting out of receiving such messages from us, users may continue to receive administrative messages from us that are necessary to service User accounts.</p>
            <p><strong>Cookies.</strong> Most web browsers allow you to manage cookies through the browser settings. To find out more about cookies, you can visit www.aboutcookies.org or www.allaboutcookies.org.</p>
            <p><strong>Our Partners.</strong> You can learn more about Google’s privacy practices and your options for how they use your information on Google’s website (<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://policies.google.com/technologies/partner-sites</a>). You can also install the Google Analytics Opt-out Browser Add-on (<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://tools.google.com/dlpage/gaoptout</a>). Meta, the parent company of Facebook, provides information about how it uses the information it collects through our Services in its Data Policy (<a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.facebook.com/policy.php</a>). You can also learn specifically about Facebook’s advertising practices on its website (<a href="https://www.facebook.com/about/basics/advertising" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://www.facebook.com/about/basics/advertising</a>).</p>
            <p>Some of our advertising partners may be members of the Network Advertising Initiative (<a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://optout.networkadvertising.org/</a>) or the Digital Advertising Alliance (<a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-race hover:underline break-all">https://optout.aboutads.info/</a>). You can visit those organizations’ websites to learn about how you may opt out of receiving web-based personalized ads from their member companies. You can also access any settings offered by your mobile operating system to limit ad tracking. To inquire about your choices regarding our business partners generally, contact us at <a href="mailto:hillzautodetailing@gmail.com" className="text-race hover:underline">hillzautodetailing@gmail.com</a>.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Third-Party Content</h2>
            <p>Our Services may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the content provided by, or the privacy practices of, these third parties. Please be aware that this Privacy Notice does not apply to your activities on these third-party services or any information you disclose to these third parties. We encourage you to read their privacy policies before providing any information to them.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Security</h2>
            <p>We make reasonable efforts to protect your information by using administrative, technological, and physical safeguards designed to improve the security of the information we maintain and protect it from accidental loss, unauthorized access or use, or any other inappropriate or unlawful processing. Because no information system can be 100% secure, we cannot guarantee the absolute security of your information.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Children’s Privacy</h2>
            <p>We do not knowingly collect, maintain, or use information from children under 13 years of age, and no part of our Services are directed toward children. If you learn that a child has provided us with information in violation of this Privacy Notice, then you may alert us at <a href="mailto:hillzautodetailing@gmail.com" className="text-race hover:underline">hillzautodetailing@gmail.com</a>.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">International Visitors</h2>
            <p>Our Services are hosted in the United States and intended for use by individuals located within the United States. If you choose to use the Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, please note that you are transferring your information outside of those regions to the United States for storage and processing. Also, we may transfer your data from the U.S. to other countries or regions in connection with operating the Services and storing or processing data. By using our Services, you consent to the transfer, storage, and processing of your information as described in this Privacy Notice.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Changes to this Privacy Notice</h2>
            <p>We will post any adjustments to the Privacy Notice on this page, and the revised version will be effective when it is posted. If we make material changes, we may notify you via a notice posted on our website or another method. We encourage you to read this Privacy Notice periodically to stay up to date about our privacy practices.</p>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink pt-6">Contact Us</h2>
            <p>All feedback, comments, requests for technical support, and other communications relating to the Sites and our data collection and processing activities should be directed to: <a href="mailto:hillzautodetailing@gmail.com" className="text-race hover:underline">hillzautodetailing@gmail.com</a>.</p>
            <p>Last updated: May 14, 2025</p>
            <p>Copyright © 2026 Hillz Auto Detailing LLC - All Rights Reserved.</p>
          </div>
        </article>
        <footer className="bg-ink text-white py-8">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center gap-4">
            <Image
              src="/assets/logo.webp"
              alt="Hillz Auto Detailing"
              width={48}
              height={48}
              className="h-12 w-12 object-contain rounded-md bg-white/5"
            />
            <div className="text-xs text-muted">
              Preview only · Not indexed · © Hillz Auto Detailing LLC
              <div className="mt-1 flex flex-wrap gap-3">
                <a href="tel:6032350453" className="text-yellow hover:underline">603-235-0453</a>
                <Link href="/privacy" className="text-concrete hover:text-yellow hover:underline">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
