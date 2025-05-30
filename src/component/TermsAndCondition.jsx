import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TermsAndCondition = () => {
    const termsData = useLoaderData();
    
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{termsData.name}</h1>
            
            <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: termsData.description }}
            />
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Support</h2>
                <p className="text-gray-600">
                    For any questions about these terms, please contact us at:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                    <li>Email: support@skilledworkerscloud.co.uk</li>
                    <li>Phone: +44 074 6728 4718</li>
                    <li>Website: <a href="https://www.skilledworkerscloud.co.uk" className="text-blue-600 hover:underline">www.skilledworkerscloud.co.uk</a></li>
                </ul>
            </div>
        </div>
    );
}

export default TermsAndCondition;

export const termsAndConditionInfo = async () => {
    try {
        const termsRes = await fetch('https://skilledworkerscloud.co.uk//website-api/api/controller/terms_condition.php');
        const termsJson = await termsRes.json();

        if (termsJson.flag === 1 && termsJson.status === 200) {
            return termsJson.data[0];
        } else {
            // Return a default object if API fails to maintain component structure
            return {
                name: "Terms and Conditions",
                description: "<p>Unable to load terms and conditions at this time. Please try again later.</p>"
            };
        }

    } catch (error) {
        console.error("Terms & Condition Error", error);
        // Return a default object to prevent component crash
        return {
            name: "Terms and Conditions",
            description: "<p>Unable to load terms and conditions due to a network error. Please check your connection and try again.</p>"
        };
    }
}