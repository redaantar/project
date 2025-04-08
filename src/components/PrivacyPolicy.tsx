import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Shield, Lock, AlertCircle } from 'lucide-react';

export function PrivacyPolicy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="privacy-policy" className="bg-white py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            Aidra – Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600"
          >
            Last updated: March 2025
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Welcome to Aidra Tech Inc. ("Aidra", "we", "us", or "our"). We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal data when you visit our website or interact with our services.
          </p>
          <p className="text-gray-600 mb-6">
            By accessing or using our website, you consent to the practices described in this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Scope</h2>
          <p className="text-gray-600 mb-6">
            This Privacy Policy applies to all digital properties owned or operated by Aidra Tech Inc., including websites, platforms, and digital services. It does not apply to third-party websites or services that may be linked from our website.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Definitions</h2>
          <ul className="list-none space-y-4 mb-6">
            <li className="text-gray-600">
              <strong className="text-gray-900">Personal Data:</strong> Any information that relates to an identified or identifiable individual.
            </li>
            <li className="text-gray-600">
              <strong className="text-gray-900">User:</strong> Any individual accessing the Aidra website or services.
            </li>
            <li className="text-gray-600">
              <strong className="text-gray-900">Service Provider:</strong> Vendors or contractors supporting Aidra's operations (e.g., hosting, analytics).
            </li>
            <li className="text-gray-600">
              <strong className="text-gray-900">Usage Data:</strong> Automatically collected technical data such as IP address, browser type, device ID, and session activity.
            </li>
            <li className="text-gray-600">
              <strong className="text-gray-900">Cookies:</strong> Small data files stored on your device to enhance browsing experience and track site preferences.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">4. What We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Name and surname</li>
            <li>Email address</li>
            <li>Professional role or company</li>
            <li>Usage Data via cookies, analytics, and web tools</li>
            <li>Information you submit (e.g., contact form or demo request)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">5. Why We Collect It</h2>
          <p className="text-gray-600 mb-4">We use your data to:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Operate and improve our services and website</li>
            <li>Respond to demo requests or inquiries</li>
            <li>Communicate relevant offers or updates (with your consent)</li>
            <li>Ensure security, detect fraud, and maintain legal compliance</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">6. Legal Basis (GDPR)</h2>
          <p className="text-gray-600 mb-4">We process data based on:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Your consent</li>
            <li>The performance of a contract</li>
            <li>Legal obligations</li>
            <li>Our legitimate interests (e.g., service improvement, analytics)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">7. Sharing of Personal Data</h2>
          <p className="text-gray-600 mb-6">
            We never sell your data. We may share it with:
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Service Providers for infrastructure, security, analytics, or email delivery</li>
            <li>Affiliates under strict confidentiality</li>
            <li>Legal authorities, if required by law</li>
            <li>Buyers, in case of merger or acquisition (with notice)</li>
          </ul>

          <div className="space-y-6">
            {[
              { title: "8. Data Transfers", content: "Your data may be processed in countries outside your residence. Aidra applies GDPR-compliant safeguards, including Standard Contractual Clauses (SCCs), to ensure secure international data transfers." },
              { title: "9. Data Security", content: "We implement physical, technical, and organizational measures to protect your data. However, no method is 100% secure, and we advise all users to practice safe data hygiene." },
              { title: "10. Data Retention", content: "We retain your data only as long as necessary to fulfill its intended purpose or comply with applicable legal requirements." }
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-6">{section.content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">11. Your Rights (GDPR)</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Access, update, or delete your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to processing based on legitimate interest</li>
            <li>Request data portability</li>
            <li>File a complaint with a data protection authority</li>
          </ul>

          <div className="bg-emerald-50 p-4 rounded-lg mb-6">
            <p className="text-emerald-800 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact: privacy@aidratech.com
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">12. Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our services are not intended for users under 18 years old. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-xl font-semibold mb-4">13. Cookie Policy</h2>
          <p className="text-gray-600 mb-4">Aidra uses cookies and similar tracking technologies to:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            <li>Enable core site functionality (e.g., login, preferences)</li>
            <li>Measure website performance and user behavior</li>
            <li>Personalize user experience and optimize content</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">Types of Cookies Used:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Essential Cookies</p>
                  <p className="text-gray-600">Required for site navigation and basic functionality</p>
                </div>
              </li>
              <li className="flex items-start">
                <Lock className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Analytics Cookies</p>
                  <p className="text-gray-600">Help us understand how visitors interact with the site</p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Marketing Cookies</p>
                  <p className="text-gray-600">(only with consent) used for personalized advertising or campaigns</p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 mb-6">
            You can manage or disable cookies through your browser settings. For more information on how to manage cookies, visit www.allaboutcookies.org.
          </p>

          <div className="space-y-6">
            {[
              { title: "14. Marketing Preferences", content: "You can opt in or out of receiving communications from Aidra at any time by contacting privacy@aidratech.com." },
              { title: "15. Breach Notification", content: "In case of a data breach that affects your personal information, we will notify you promptly and follow regulatory reporting requirements." },
              { title: "16. Changes to This Policy", content: "We may update this policy from time to time. The \"last updated\" date will be revised, and material changes will be clearly communicated." }
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-6">{section.content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">17. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or requests related to this policy or your data, contact:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-900">Aidra Tech Inc.</p>
            <p className="flex items-center text-emerald-600">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:privacy@aidratech.com" className="hover:text-emerald-700">
                privacy@aidratech.com
              </a>
            </p>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6">
            <p className="text-gray-600 italic">
              By using our service, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}