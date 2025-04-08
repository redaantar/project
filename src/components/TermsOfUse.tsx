import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Shield, Scale, Mail } from 'lucide-react';

export function TermsOfUse() {
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
    <section id="terms-of-use" className="bg-white text-gray-900 py-16">
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
            Terms of Use
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600"
          >
            Last updated: March 2024
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Purpose</h2>
          <p className="text-sm text-gray-600 mb-6">
            These Terms of Use constitute a legal agreement between any visitor and/or user ("User") and Aidra Tech Inc. ("Aidra"), and govern access to and use of Aidra's website (the "Website").
          </p>
          <p className="text-sm text-gray-600 mb-6">
            By accessing or using the Website, the User agrees to be bound by these Terms of Use and all applicable laws and regulations. If the User does not agree to these terms, they must not use the Website.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Ownership</h2>
          <p className="text-sm text-gray-600 mb-6">
            The Website is owned and operated by Aidra Tech Inc. Unless otherwise stated, all content, trademarks, data, software, and materials on the Website are the intellectual property of Aidra or its licensors. No material may be copied, modified, or redistributed without Aidra's prior written permission.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Platform Purpose</h2>
          <p className="text-sm text-gray-600 mb-6">
            Aidra provides a unified SaaS platform to help businesses and institutions monitor environmental impact, trace waste flows, and generate certified carbon credits. While the Website may describe Aidra's services, access to the full platform requires a separate agreement or subscription.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Availability & Maintenance</h2>
          <p className="text-sm text-gray-600 mb-6">
            Aidra aims to ensure the Website is operational and accurate but makes no guarantee of uninterrupted service. Access may be restricted for maintenance, updates, or technical reasons without prior notice.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Use of the Website</h2>
          <p className="text-sm text-gray-600 mb-2">Users may access and use the Website solely for personal or internal business purposes. Users may not:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-6">
            <li>Modify or reverse-engineer any part of the Website;</li>
            <li>Use the Website for unlawful purposes;</li>
            <li>Violate intellectual property rights;</li>
            <li>Attempt to disrupt the Website's functionality.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="text-sm text-gray-600 mb-6">
            All content (text, graphics, videos, reports, illustrations, code) on the Website is protected by copyright and intellectual property law. Aidra retains all rights unless otherwise stated.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Licenses & Restrictions</h2>
          <p className="text-sm text-gray-600 mb-6">
            Content displayed on the Website may be used for viewing or educational purposes. Commercial use, reproduction, or redistribution without prior consent is prohibited.
          </p>

          <h2 className="text-xl font-semibold mb-4">8. Security & Conduct</h2>
          <p className="text-sm text-gray-600 mb-6">
            Users must not attempt to hack, overload, crawl, or bypass security measures on the Website. Aidra reserves the right to restrict or terminate access in case of misuse or illegal behavior.
          </p>

          <h2 className="text-xl font-semibold mb-4">9. Disclaimers</h2>
          <p className="text-sm text-gray-600 mb-6">
            The Website and its content are provided "as is." Aidra makes no warranties regarding accuracy, completeness, or performance. Users use the Website at their own risk.
          </p>

          <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
          <p className="text-sm text-gray-600 mb-6">
            Aidra is not liable for any direct, indirect, incidental, or consequential damages resulting from Website use, including data loss, service interruption, or platform reliance.
          </p>

          <h2 className="text-xl font-semibold mb-4">11. Indemnification</h2>
          <p className="text-sm text-gray-600 mb-6">
            Users agree to defend and hold harmless Aidra, its affiliates, and its partners from any claims arising out of their use of the Website or violation of these Terms of Use.
          </p>

          <h2 className="text-xl font-semibold mb-4">12. Privacy</h2>
          <p className="text-sm text-gray-600 mb-6">
            Use of the Website is subject to Aidra's Privacy Policy. Users are responsible for safeguarding their personal data and access credentials.
          </p>

          <h2 className="text-xl font-semibold mb-4">13. External Links</h2>
          <p className="text-sm text-gray-600 mb-6">
            The Website may contain links to third-party websites. Aidra is not responsible for content, accuracy, or policies on external sites and provides such links for convenience only.
          </p>

          <h2 className="text-xl font-semibold mb-4">14. Termination</h2>
          <p className="text-sm text-gray-600 mb-6">
            Aidra may suspend or terminate a User's access for breach of these Terms, misuse, or legal noncompliance, with or without prior notice.
          </p>

          <h2 className="text-xl font-semibold mb-4">15. Governing Law</h2>
          <p className="text-sm text-gray-600 mb-6">
            These Terms shall be governed by and interpreted in accordance with the laws of the Kingdom of Saudi Arabia or any other jurisdiction in which Aidra operates, depending on the applicable contract or user location.
          </p>

          <h2 className="text-xl font-semibold mb-4">16. Contact & Notifications</h2>
          <div className="text-sm text-gray-600 mb-6">
            <p className="mb-4">All legal inquiries should be directed to:</p>
            <div className="pl-5">
              <p className="mb-2">Aidra Tech Inc.</p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:legal@aidratech.com" className="text-emerald-600 hover:text-emerald-700">
                  legal@aidratech.com
                </a>
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">17. Modification of Terms</h2>
          <p className="text-sm text-gray-600 mb-6">
            Aidra reserves the right to revise these Terms at any time by updating this page. Continued use of the Website constitutes acceptance of the revised Terms.
          </p>

          <div className="text-sm text-gray-600 border-t pt-6 mt-6">
            <p className="italic">
              By using our Website, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}