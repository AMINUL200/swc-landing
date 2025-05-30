import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TermsAndCondition = () => {
    const termsData = useLoaderData();
    
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 pb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{termsData.name}</h1>
            
            <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: termsData.description }}
            />
            
           
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