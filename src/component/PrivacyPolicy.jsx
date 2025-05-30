import { div } from 'framer-motion/client';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

const PrivacyPolicy = () => {
    const privacyData = useLoaderData();

    return (
        <div className="privacy-policy max-w-4xl mx-auto px-4 py-8">
            
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{privacyData.name}</h1>

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: privacyData.description }}
                />

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
                    <p className="text-gray-600">
                        For any questions about our privacy policy, please contact:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li>Email: support@skilledworkerscloud.co.uk</li>
                        <li>Phone: +44 074 6728 4718</li>
                        <li>Address: G21, Unit 3 Triangle Centre, 399 Uxbridge Road, UB1 3EJ, United Kingdom</li>
                    </ul>
                </div>

        </div>
    )
}

export default PrivacyPolicy;


export const privacyPolicyInfo = async () => {
    try {
        const privacyRes = await fetch('https://skilledworkerscloud.co.uk//website-api/api/controller/privecy_policy.php');
        const privacyJson = await privacyRes.json();

        if (privacyJson.flag === 1 && privacyJson.status === 200) {
            return privacyJson.data[0];
        } else {
            // Return a default object if API fails to maintain component structure
            return {
                name: "privacy policy",
                description: "<p>Unable to load privacy policy at this time. Please try again later.</p>"
            };
        }

    } catch (error) {
        console.error("privacy policy", error);
        // Return a default object to prevent component crash
        return {
            name: "privacy policy",
            description: "<p>Unable to load privacy policy due to a network error. Please check your connection and try again.</p>"
        };
    }
}